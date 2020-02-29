# Building a Restful CRUD API with Node.js, Express and MongoDB

https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/

Creating the Application

**1. Fire up your terminal and create a new folder for the application.&**
```
$ mkdir node-easy-notes-app
```
**2. Initialize the application with a package.json file**

Go to the root folder of your application and type npm init to initialize your app with a package.json file.
```
$ cd node-easy-notes-app
$ npm init
name: (node-easy-notes-app) 
version: (1.0.0) 
description: Never miss a thing in Life. Take notes quickly. Organize and keep track of all your notes.
entry point: (index.js) server.js
test command: 
git repository: 
keywords: Express RestAPI MongoDB Mongoose Notes
author: callicoder
license: (ISC) MIT
About to write to /Users/rajeevkumarsingh/node-easy-notes-app/package.json:

{
  "name": "node-easy-notes-app",
  "version": "1.0.0",
  "description": "Never miss a thing in Life. Take notes quickly. Organize and keep track of all your notes.",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "Express",
    "RestAPI",
    "MongoDB",
    "Mongoose",
    "Notes"
  ],
  "author": "callicoder",
  "license": "MIT"
}
Is this ok? (yes) yes
```
Note that I’ve specified a file named server.js as the entry point of our application. We’ll create server.js file in the next section.

**3. Install dependencies**

We will need express, mongoose and body-parser modules in our application. Let’s install them by typing the following command -
```
$ npm install express body-parser mongoose --save
```

I’ve used --save option to save all the dependencies in the package.json file. The final package.json file looks like this -
```
{
  "name": "node-easy-notes-app",
  "version": "1.0.0",
  "description": "Never miss a thing in Life. Take notes quickly. Organize and keep track of all your notes.",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "Express",
    "RestAPI",
    "MongoDB",
    "Mongoose",
    "Notes"
  ],
  "author": "callicoder",
  "license": "MIT",
  "dependencies": {
    "body-parser": "^1.18.3",
    "express": "^4.16.3",
    "mongoose": "^5.2.8"
  }
}
```
Our application folder now has a package.json file and a node_modules folder -
```
node-easy-notes-app
    └── node_modules/
    └── package.json
```
