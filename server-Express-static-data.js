const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.static("./public")); //For making a static asset, which finds all the assets, files, etc which will be required to the index file. So you can simply dump all the static fills in this public and express will use them automatically

// app.get("/", (req, res) => {
// 	res.sendFile(path.resolve(__dirname, "./Navbar/index.html"));
// }); //Not needed as we have added the index.html in the static assets, so express by default opens the index file only

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}/`);
});
