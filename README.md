# SocialMedia

SocialMedia is a social networking web application built with React, Material UI, Node.js, Express, and MongoDB. It allows users to create profiles, make posts, follow other users and like posts.

## Features

-   User authentication and authorization with JSON Web Tokens (JWT)
-   User profile creation
-   Posts creation
-   Posts and likes 
-   Follow and unfollow other users

## Getting Started

### Prerequisites

Before you can run the application, you need to have the following software installed:

-   Node.js (v14 or later)
-   MongoDB (v4 or later)

### Installation

To install the application, follow these steps:

1.  Clone the repository:
    
```bash
    git clone https://github.com/skynette/socialmedia.git
```
    
2.  Install the dependencies:
    
```bash
    cd socialmedia
    npm install
    cd client
    npm install
```
    
3.  Create a `.env` file in the root directory and add the following environment variables:
    
```makefile
	NODE_ENV=development
    PORT=5000
    MONGODB_URI=mongodb://localhost/socialmedia
    JWT_SECRET=mysecretkey
```
  Change the values of the variables as needed.
    
4.  Start the development server for frontend and server:
    
```bash  
	cd frontend/
    npm run start
```  
```bash
	cd server/
	npm run start
```
5.  Open [http://localhost:3000](http://localhost:3000/) in your web browser to access the application.
    

## Contributing

Contributions are welcome! To contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix:
   
```bash 
   git checkout -b my-feature-branch
```
    
3.  Make your changes and commit them:
```bash
	git commit -m "Add new feature" -a
```
    
4.  Push your changes to your fork:
```bash
    git push origin my-feature-branch
``` 
5.  Create a pull request against the `main` branch of the original repository.
