const express = require("express");
const transactions = require("../controllers/index");
const router = express.Router();

router.route("/")
  .get(transactions.getAllTransactions)
  .post(transactions.postTransaction)

router.route("/:transactionId")
  .get(transactions.getTransactionById)

module.exports = router;

