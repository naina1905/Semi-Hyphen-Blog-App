# Semi-Hyphen-Blog-App
used Nodejs, Mysql Workbench,jwt,bcryption. The application perform crud operations on blog posts

# Important Files 
1.connection.js:This file seems to be responsible for setting up the MySQL connection. You don't need to add the secret key code here

2.index.js:contains logic for api end points 
POST /blog-posts: Create a new blog post.
GET /blog-posts: Retrieve all blog posts for the authenticated user.
GET /blog-posts/:id: Retrieve a single blog post by ID for the authenticated user.
PUT /blog-posts/:id: Update a blog post by ID for the authenticated user.
DELETE /blog-posts/:id: Delete a blog post by ID for the authenticated user.

3.generatekey.mjsuse:a library like crypto-random-string in Node.js to generate a cryptographically secure pseudo-random string

4 .env:Set the SECRET_KEY environment variable in operating system or in your application's configuration file.

To check CRUD operations on Postman with authorization, you need to follow these steps:

# Step 1: Obtain an access token

Send a POST request to the /login endpoint with a valid username and password in the request body.
In the response, you'll receive an access token in the form of a JSON Web Token (JWT).
Copy the access token, as you'll need it for subsequent requests.
# Step 2: Set up Postman

Open Postman and create a new request.
Set the request method to the desired CRUD operation (e.g., POST, GET, PUT, or DELETE).
Set the request URL to the corresponding endpoint (e.g., /blog-posts for creating a new blog post).
In the Authorization tab, select Bearer Token as the authorization type.
Paste the access token obtained in Step 1 into the Token field.
# Step 3: Test CRUD operations

Create (POST)
Send a POST request to /blog-posts with the access token in the Authorization header.
In the request body, provide the required fields for creating a new blog post (e.g., title, content).
Verify that the response returns a 201 Created status code and a JSON response with the newly created blog post.

Read (GET)
Send a GET request to /blog-posts with the access token in the Authorization header.
Verify that the response returns a 200 OK status code and a JSON response with the list of blog posts.

Read (GET) by ID
Send a GET request to /blog-posts/:id with the access token in the Authorization header.
Replace :id with the ID of an existing blog post.
Verify that the response returns a 200 OK status code and a JSON response with the blog post details.

Update (PUT)
Send a PUT request to /blog-posts/:id with the access token in the Authorization header.
Replace :id with the ID of an existing blog post.
In the request body, provide the updated fields for the blog post (e.g., title, content).
Verify that the response returns a 200 OK status code and a JSON response with the updated blog post.

Delete (DELETE)
Send a DELETE request to /blog-posts/:id with the access token in the Authorization header.
Replace :id with the ID of an existing blog post.
Verify that the response returns a 200 OK status code and a JSON response with a success message.

# Registration
![image](https://github.com/naina1905/Semi-Hyphen-Blog-App/assets/149436885/8248bb71-268a-4011-884a-259ebb051036)


