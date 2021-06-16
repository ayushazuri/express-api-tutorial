const { products } = require("../data");

const getProducts = (req, res) => {
	const newProducts = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});
	res.json(newProducts);
};

const getProduct = (req, res) => {
	const { id } = req.params;
	console.log(id);
	const singleProduct = products.find((product) => product.id === Number(id));

	if (!singleProduct)
		return res.status(404).send("<h1>Product does not exist</h1>	");
	res.json(singleProduct);
};

const addQuery = (req, res) => {
	const { search, limit } = req.query;
	console.log(search, limit);
	console.log("object");
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
};

module.exports = {
	getProduct,
	getProducts,
	addQuery,
};
