const express = require("express");
const logger = require("./logger");
const { products } = require("./data");

const app = express();
const PORT = 5000;

// app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
	res.send("<h1> Home page </h1><a href='/api/products'>Products</a>");
});

app.get("/home", (req, res) => {
	res.send("Home page");
});

app.get("/about", (req, res) => {
	res.send("About page");
});

app.get("/api/products", (req, res) => {
	const newProducts = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});
	res.json(newProducts);
});

app.get("/api/v1/products/:id", (req, res) => {
	const { id } = req.params;
	const singleProduct = products.find((product) => product.id === Number(id));

	if (!singleProduct)
		return res.status(404).send("<h1>Product does not exist</h1>	");
	res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
	const { search, limit } = req.query;
	let sortedProducts = [...products];

	if (search) {
		sortedProducts = sortedProducts.filter((product) => {
			return product.name.startsWith(search);
		});
	}

	if (limit) {
		sortedProducts = sortedProducts.slice(0, Number(limit));
	}

	if (sortedProducts.length < 1) {
		return res.status(200).json({ success: true, data: [] });
	}
	res.status(200).json(sortedProducts);
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}/`);
});
