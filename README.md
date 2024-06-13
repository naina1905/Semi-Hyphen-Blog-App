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

# Login
![image](https://github.com/naina1905/Semi-Hyphen-Blog-App/assets/149436885/2db3ea1e-e685-4c22-8c2c-1db012928d0f)
token is generated with expiration time

# create Blog
![image](https://github.com/naina1905/Semi-Hyphen-Blog-App/assets/149436885/b335824c-1778-4ed4-a36a-c527efcecca6)
![image](https://github.com/naina1905/Semi-Hyphen-Blog-App/assets/149436885/03ba1a71-9b19-480d-bedd-59b1c488e07c)
login token is entered in bearer authorization 

# Update Blog
![image](https://github.com/naina1905/Semi-Hyphen-Blog-App/assets/149436885/336980e3-01a1-4eb0-b2c7-3e766b2ca2f9)
![image](https://github.com/naina1905/Semi-Hyphen-Blog-App/assets/149436885/f29159ce-dedc-4e95-b33d-acca31629f46)
login token is entered in bearer authorization

# Retrive by blog id
![image](https://github.com/naina1905/Semi-Hyphen-Blog-App/assets/149436885/f5ed223c-6ffb-4146-983b-bb00a38d12d4)
login token is entered in bearer authorization

# Retrive all blog posts
![image](https://github.com/naina1905/Semi-Hyphen-Blog-App/assets/149436885/ff950e5f-f116-4080-b009-cf7e08d14dc3)
login token is entered in bearer authorization

# Mysql Workbench
blog_posts table
![image](https://github.com/naina1905/Semi-Hyphen-Blog-App/assets/149436885/8934dfa5-0c71-4f4f-a241-9809a1cdc575)

users table
![image](https://github.com/naina1905/Semi-Hyphen-Blog-App/assets/149436885/6f5947c6-ef5e-4f4f-a4eb-3acd08f7690e)


# Delete blog post
![image](https://github.com/naina1905/Semi-Hyphen-Blog-App/assets/149436885/7f49f6a3-686c-44d9-8542-edc20e3efe8a)
login token is entered in bearer authorization



