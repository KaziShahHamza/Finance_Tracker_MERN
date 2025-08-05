import React from "react";

const FinanceTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Category</th>
          <th>Payment</th>
          <th>Notes</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(data) ? (
          data.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.amount}</td>
              <td>{item.type}</td>
              <td>{item.category}</td>
              <td>{item.payment_type}</td>
              <td>{item.notes}</td>
              <td>{new Date(item.createdAt).toLocaleDateString()}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7">No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default FinanceTable;
