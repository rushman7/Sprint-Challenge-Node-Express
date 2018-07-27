# Review Questions

## What is Node.js?
A server sided js environment that executes code outside of the browser.
## What is Express?
A framework of Node.js that can build single-page, multi-page and hybrid web apps.
## Mention two parts of Express that you learned about this week.
Middleware and Routing
## What is Middleware?
Middleware are functions we write to perform certain tasks. (ie; ErrorHandler)
## What is a Resource?
An object with a type, relationships to other resources, associated data, and a set of methods.
## What can the API return to help clients know if a request was successful?
Status code 200
## How can we partition our application into sub-applications?
Express.Router is used to separate into sub-apps.
## What is express.json() and why do we need it?
It takes all the information that the client added to the body and makes it available as a js object. We need it to be able to read data from the request body.