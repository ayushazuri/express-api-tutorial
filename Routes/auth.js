const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
	const { name } = req.body;
	if (name) {
		return res.status(201).send(`Welcome ${name}`);
	}
	res.send("Please provide credentials");
});

module.exports = router;
