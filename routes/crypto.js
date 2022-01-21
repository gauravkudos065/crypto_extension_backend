const express = require("express");
const { getCrypto, postCrpto } = require("../controllers/crypto");

// Router
const router = express.Router();
// Routes
router.get("/getdata", getCrypto);
router.post("/postdata", postCrpto);

module.exports = router;
