import React, { useEffect, useState } from "react";
import { Button, Form, Badge } from "react-bootstrap";
import AllTransactions from "../components/AllTransactions";
import "../App.css";
import {
  getAllTransactions,
  getTransactionById,
  postTransaction,
} from "../config/axios";
import TransactionModal from "../components/TransactionModal";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [show, setShow] = useState(false);
  const [type, setType] = useState("debit");
  const [searchId, setSearchId] = useState("");
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    getAllTransactions().then((res) => {
      let newTotal = getNewTotal(res.transactions);

      setTransactions(res.transactions);
    });
  }, []);

  const getNewTotal = (transactions) => {
    let newTotal = 0
    transactions.forEach((t) => {
      if(t.type === 'credit') {
        newTotal += Number(t.amount)
      } else {
        newTotal -= Number(t.amount)
      }
    })
    setTotal(newTotal)
  }

  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handleChangeSelect = (e) => {
    setType(e.target.value);
  };
  const handleChangeId = (e) => {
    setSearchId(e.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    const data = {
      type,
      amount,
    };
    console.log(data);
    postTransaction(data).then((res) => window.location.reload(false));
  };

  const handleSearch = () => {
    getTransactionById(searchId).then(res => {
      if (res.data) {
        setTransactions(res.data)
        setSearched(true)
      }
    })
  }

  return (
    <div className="home-container">
      <TransactionModal
        show={show}
        type={type}
        amount={amount}
        handleClose={handleClose}
        handleSave={handleSave}
        handleChange={handleChange}
        handleChangeSelect={handleChangeSelect}
      />
      <div className="list-buttons">
        <Button color="primary" onClick={handleShow}>
          New Transaction
        </Button>
        <div className="search-container">
          <label>Total</label>
          <h2><Badge variant="light">{total} $</Badge></h2>
        </div>
        <div className="search-container">
          <Form.Control type="number" placeholder="Enter Transaction ID" onChange={handleChangeId} value={searchId} />
          <Button variant="secondary" onClick={handleSearch}>Search</Button>
          {searched && <Button variant="danger" onClick={() => window.location.reload(false)}> X</Button>}
        </div>
      </div>
      <div>
        <AllTransactions transactions={transactions} />
      </div>
    </div>
  );
};

export default Home;
