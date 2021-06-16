const express = require("express");
const logger = require("./logger");

const people = require("./Routes/people.js");
const product = require("./Routes/product.js");
const auth = require("./Routes/auth.js");

const app = express();
const PORT = 5000;

app.use(logger); //Custom Middleware
app.use(express.urlencoded({ extended: false })); //To parse html form data
app.use(express.json()); // To parse JSON data
app.use(express.static("./method-public")); //For making a static asset, which finds all the assets, files, etc which will be required to the index file. So you can simply dump all the static fills in this public and express will use them automatically

app.use("/api/v1/people", people); //Route for People API
app.use("/api/v1/products", product); //Route for Products API
app.use("/login", auth);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}/`);
});
