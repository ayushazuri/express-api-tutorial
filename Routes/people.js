const express = require("express");
const router = express.Router();
const {
	getPeople,
	postPeople,
	updatePeople,
	deletePeople,
} = require("../controller/people"); //Controller which contains all the functions for the http methods

// router.get("/", getPeople);

// router.post("/", postPeople);

// router.put("/:id", updatePeople);

// router.delete("/:id", deletePeople);

// or

router.route("/").get(getPeople).post(postPeople);
router.route("/:id").put(updatePeople).delete(deletePeople);

module.exports = router;
