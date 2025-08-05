import React, { useEffect, useState } from "react";
import FinanceForm from "../components/FinanceForm";
import FinanceTable from "../components/FinanceTable";

const Dashboard = () => {
  const [financeData, setFinanceData] = useState([]);
  // const server = import.meta.env.VITE_SERVER;

  useEffect(() => {
    const fetchFinanceData = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:5000/api/finance", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch finance data");
        }

        const data = await res.json();
        setFinanceData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFinanceData();
  }, []);

  const handleAdd = async (newData) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/finance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ now it's inside headers
        },
        body: JSON.stringify(newData),
      });
      const savedData = await res.json();
      setFinanceData((prev) => [savedData, ...prev]);
    } catch (err) {
      console.error("Failed to add finance entry", err);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>

      {/* Gemini Summary */}
      <div>
        <h3>Monthly Summary</h3>
        <p>[AI-generated summary will appear here]</p>
      </div>

      {/* Finance Form */}
      <div>
        <h3>Add Income/Expense</h3>
        <FinanceForm onAdd={handleAdd} />
      </div>

      {/* Finance Table */}
      <div>
        <h3>Transactions</h3>
        <FinanceTable data={financeData} />
      </div>
    </div>
  );
};

export default Dashboard;
