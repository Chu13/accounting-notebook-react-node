let allTransactions = [];

module.exports.getAllTransactions = (req, res) => {
  res.status(200).json({ transactions: allTransactions });
};

module.exports.postTransaction = (req, res) => {
  const { amount, type } = req.body;

  if (!type || amount === (undefined || null)) return res.status(403).json({ message: "type/amount required" });

  const id = allTransactions.length + 1;
  const newTransaction = {
    id,
    amount,
    type,
  };
  allTransactions = [newTransaction, ...allTransactions];
  res.status(200).json(newTransaction);
};

module.exports.getTransactionById = (req, res) => {
  const { transactionId } = req.params;
  let transaction = allTransactions.find((t) => t.id == transactionId);
  if (!transaction) return res.status(404).json({message: "Transaction Not Found"})
  res.status(200).json({data: [transaction]});
};
