import React, { useEffect, useState } from "react";
import FinanceForm from "../components/FinanceForm";
import FinanceTable from "../components/FinanceTable";
import "../styles/Dashboard.css";
import "../styles/buttons.css";


const Dashboard = () => {
  const [financeData, setFinanceData] = useState([]);
  // const server = import.meta.env.VITE_SERVER;
  const [summary, setSummary] = useState("Loading...");

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

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:5000/api/summary", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setSummary(data.summary);
      } catch (err) {
        setSummary("Unable to generate summary");
        console.error(err);
      }
    };

    fetchSummary();
  }, []);

  const handleAdd = async (newData) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/finance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newData),
      });
      const savedData = await res.json();
      setFinanceData((prev) => [savedData, ...prev]);
    } catch (err) {
      console.error("Failed to add finance entry", err);
    }
  };

  const handleUpdate = async (updatedItem) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `http://localhost:5000/api/finance/${updatedItem._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedItem),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update item");
      }

      const updated = await res.json();
      setFinanceData((prev) =>
        prev.map((item) => (item._id === updated._id ? updated : item))
      );
    } catch (err) {
      console.error("Failed to update finance entry", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`http://localhost:5000/api/finance/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to delete item");
      }

      setFinanceData((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Failed to delete finance entry", err);
    }
  };

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="dashboard-section card">
        <h3>Monthly Summary</h3>
        <p>{summary}</p>
      </div>

      <div className="dashboard-section card2">
        <h3>Add Income/Expense</h3>
        <FinanceForm onAdd={handleAdd} />
      </div>

      <div className="dashboard-section card3">
        <h3>Transactions</h3>
        <FinanceTable
          data={financeData}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Dashboard;
