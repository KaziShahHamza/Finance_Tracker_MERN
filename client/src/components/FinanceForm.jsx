import React, { useState } from "react";

const FinanceForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "income",
    category: "",
    payment_type: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onAdd(formData);
      setFormData({
        title: "",
        amount: "",
        type: "income",
        category: "",
        payment_type: "",
        notes: "",
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />
      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="">Select Type</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="">Select Category</option>
        <option value="transport">Transport</option>
        <option value="entertainment">Entertainment</option>
        <option value="food">Food</option>
        <option value="health">Health</option>
        <option value="education">Education</option>
        <option value="utilities">Utilities</option>
        <option value="others">Others</option>
      </select>

      <select
        name="payment_type"
        value={formData.payment_type}
        onChange={handleChange}
      >
        <option value="">Select Payment Type</option>
        <option value="cash">Cash</option>
        <option value="card">Card</option>
        <option value="bank_transfer">Bank Transfer</option>
        <option value="mobile_payment">Mobile Payment</option>
      </select>

      <input
        type="text"
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default FinanceForm;
