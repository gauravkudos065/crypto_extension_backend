const Crypto = require("../models/crypto");

const getCrypto = async (req, res) => {
  const data = await Crypto.find();
  res.send({ data: data });
};

const postCrpto = async (req, res) => {
  const { name, ticker, price } = req.body;
  const result = await Crypto.create({
    name,
    ticker,
    price,
  });
  res.send({ result: result, msg: "created" });
};

module.exports = { getCrypto, postCrpto };
