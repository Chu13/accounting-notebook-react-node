import React from "react";
import { Table } from "react-bootstrap";

const AllTransactions = ({transactions}) => {

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Type</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.id}</td>
            <td>{transaction.type}</td>
            {transaction.type ==='credit' ? <td className='green'> + {transaction.amount}</td> : <td className='red'> - {transaction.amount}</td>}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AllTransactions;
