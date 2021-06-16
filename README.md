This repo is a basic express app, which I made in order to learn about ExpressJs, NodeJs, How to make APIs, Middlewares, HTTP methods, etc. This Express app has the following features:

1. MVC Architecture.
2. Routes from `express.Router()` which contain routers for people, products and auth along with their http methods.
3. Controllers which contain all the functions for the http methods
4. A basic Frontend to show the changes, to show the get and post feature of the API.
5. Various Middleware.
6. `/api/v1/people/` is the API to `get` and to `post` the people data.
7. `/api/v1/people/:id` is the API to `put` and to `delete` the people data.
8. `/api/v1/products/` is to `get` the products data.
9. `/api/v1/products/:id` is to `get` a particular products data wrt the id.
10. `/api/v1/products/query` is the api which contains a query params, which are `search` and `limit`. Full api looks like this `/api/v1/products/query?search=a&limit=2`. This will search all the products starting with 'a' and limit the number of outputs to 2.
11. The Server has been hosted on `port = 5000`.
