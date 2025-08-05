import React, { useState } from "react";
import "../styles/table.css";

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
    <div className="table-card">
      <table className="data-table">
        <thead>
          <tr className="header-row">
            <th className="header-cell">Title</th>
            <th className="header-cell">Amount</th>
            <th className="header-cell">Type</th>
            <th className="header-cell">Category</th>
            <th className="header-cell">Payment</th>
            <th className="header-cell">Notes</th>
            <th className="header-cell">Date</th>
            <th className="header-cell">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item) => (
              <tr key={item._id} className="data-row">
                <td className="data-cell">
                  {editId === item._id ? (
                    <input
                      className="edit-input"
                      name="title"
                      value={editData.title}
                      onChange={handleChange}
                    />
                  ) : (
                    item.title
                  )}
                </td>
                <td className="data-cell">
                  {editId === item._id ? (
                    <input
                      className="edit-input"
                      name="amount"
                      type="number"
                      value={editData.amount}
                      onChange={handleChange}
                    />
                  ) : (
                    item.amount
                  )}
                </td>
                <td className="data-cell">
                  {editId === item._id ? (
                    <select
                      className="edit-select"
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
                <td className="data-cell">
                  {editId === item._id ? (
                    <select
                      className="edit-select"
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
                <td className="data-cell">
                  {editId === item._id ? (
                    <select
                      className="edit-select"
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
                <td className="data-cell">
                  {editId === item._id ? (
                    <input
                      className="edit-input"
                      name="notes"
                      value={editData.notes}
                      onChange={handleChange}
                    />
                  ) : (
                    item.notes
                  )}
                </td>
                <td className="data-cell">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="data-cell actions-cell">
                  {editId === item._id ? (
                    <>
                      <button
                        className="button save-button"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                      <button
                        className="button cancel-button"
                        onClick={() => setEditId(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="button edit-button"
                        onClick={() => handleEditClick(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="button delete-button"
                        onClick={() => onDelete(item._id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr className="no-data-row">
              <td colSpan="8">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FinanceTable;
