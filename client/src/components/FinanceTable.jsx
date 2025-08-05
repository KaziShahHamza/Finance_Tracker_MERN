import React, { useState } from "react";

const FinanceTable = ({ data, onUpdate, onDelete }) => {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEditClick = (item) => {
    setEditId(item._id);
    setEditData(item);
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate(editData);
    setEditId(null);
  };

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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <tr key={item._id}>
              <td>
                {editId === item._id ? (
                  <input
                    name="title"
                    value={editData.title}
                    onChange={handleChange}
                  />
                ) : (
                  item.title
                )}
              </td>
              <td>
                {editId === item._id ? (
                  <input
                    name="amount"
                    type="number"
                    value={editData.amount}
                    onChange={handleChange}
                  />
                ) : (
                  item.amount
                )}
              </td>
              <td>
                {editId === item._id ? (
                  <select
                    name="type"
                    value={editData.type}
                    onChange={handleChange}
                  >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                  </select>
                ) : (
                  item.type
                )}
              </td>
              <td>
                {editId === item._id ? (
                  <select
                    name="category"
                    value={editData.category}
                    onChange={handleChange}
                  >
                    <option value="transport">Transport</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="food">Food</option>
                    <option value="health">Health</option>
                    <option value="education">Education</option>
                    <option value="utilities">Utilities</option>
                    <option value="others">Others</option>
                  </select>
                ) : (
                  item.category
                )}
              </td>
              <td>
                {editId === item._id ? (
                  <select
                    name="payment_type"
                    value={editData.payment_type}
                    onChange={handleChange}
                  >
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                    <option value="bank_transfer">Bank Transfer</option>
                    <option value="mobile_payment">Mobile Payment</option>
                  </select>
                ) : (
                  item.payment_type
                )}
              </td>
              <td>
                {editId === item._id ? (
                  <input
                    name="notes"
                    value={editData.notes}
                    onChange={handleChange}
                  />
                ) : (
                  item.notes
                )}
              </td>
              <td>{new Date(item.createdAt).toLocaleDateString()}</td>
              <td>
                {editId === item._id ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setEditId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditClick(item)}>Edit</button>
                    <button onClick={() => onDelete(item._id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="8">No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default FinanceTable;
