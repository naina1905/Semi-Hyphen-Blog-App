const connection = require('./connection');
const mysqlConnection = connection.mysqlConnection;
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
var app = express();
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

app.use(bodyParser.json());

//register
app.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  if (!password) {
      return res.status(400).json({ error: 'Password is required' });
  }

  const salt = await bcrypt.genSalt(10);

  if (!salt) {
      return res.status(500).json({ error: 'Failed to generate salt' });
  }

  const hashedPassword = await bcrypt.hash(password, salt);

  const sql = `INSERT INTO users (username, password, email) VALUES (?,?,?)`;
  mysqlConnection.execute(sql, [username, hashedPassword, email], (err, result) => {
    if (err) {
      console.error('Error registering user:', err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(201).json({ message: 'User registered successfully' });
    }
  });
});

// Middleware to authenticate and authorize requests
const authenticate = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  console.log('Received token:', token);
  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.SECRET_KEY);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// User login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const sql = `SELECT * FROM users WHERE username =?`;
  mysqlConnection.execute(sql, [username], async (err, result) => {
    if (err || !result.length) {
      console.error('Error logging in:', err);
      res.status(401).json({ error: 'Invalid username or password' });
    } else {
      const user = result[0];
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        res.status(401).json({ error: 'Invalid username or password' });
      } else {
        const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        console.log('Generated token:', token);
        res.json({ token: `Bearer ${token}`, expiresAt: Date.now() + 3600000 }); // Return the token
      }
    }
  });
});



// Create blog post
app.post('/blog-posts', authenticate, async (req, res) => {
  const { title, content } = req.body;
  const userId = req.userId;
  const sql = `INSERT INTO blog_posts (title, content, user_id) VALUES (?,?,?)`;
  mysqlConnection.execute(sql, [title, content, userId], (err, result) => {
    if (err) {
      console.error('Error creating blog post:', err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(201).json({ message: 'Blog post created successfully' });
    }
  });
});

// Update blog post
app.put('/blog-posts/:id', authenticate, async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;
  const userId = req.userId;

  const sql = `UPDATE blog_posts SET title = ?, content = ?, user_id = ? WHERE id = ?`;
  mysqlConnection.execute(sql, [title, content, userId, id], (err, result) => {
    if (err) {
      console.error('Error updating blog post:', err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json({ message: 'Blog post updated successfully' });
    }
  });
});

// Retrieve blog by ID
app.get('/blog-posts/:id', authenticate, async (req, res) => {
  const id = req.params.id;
  const userId = req.userId;

  const sql = `SELECT * FROM blog_posts WHERE id = ? AND user_id = ?`;
  mysqlConnection.execute(sql, [id, userId], (err, result) => {
    if (err) {
      console.error('Error retrieving blog post:', err);
      res.status(404).json({ error: 'Blog post not found' });
    } else {
      res.json(result[0]);
    }
  });
});

// Retrieve all blogs
app.get('/blog-posts', authenticate, async (req, res) => {
  const userId = req.userId;

  const sql = `SELECT * FROM blog_posts WHERE user_id = ?`;
  mysqlConnection.execute(sql, [userId], (err, result) => {
    if (err) {
      console.error('Error retrieving blog posts:', err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.json(result);
    }
  });
});

// Delete blog post
app.delete('/blog-posts/:id', authenticate, async (req, res) => {
  const id = req.params.id;
  const userId = req.userId;

  const sql = `DELETE FROM blog_posts WHERE id = ? AND user_id = ?`;
  mysqlConnection.execute(sql, [id, userId], (err, result) => {
    if (err) {
      console.error('Error deleting blog post:', err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json({ message: 'Blog post deleted successfully' });
    }
  });
});

app.listen(3000,()=>console.log('listening on port 3000'));