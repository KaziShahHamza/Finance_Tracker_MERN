import Finance from "../models/Finance.js";

// Add new finance entry
export const addFinance = async (req, res) => {
  try {
    const { title, amount, type, category, payment_type, notes } = req.body;

    const newFinance = new Finance({
      user: req.user._id,
      title,
      amount,
      type,
      category,
      payment_type,
      notes,
    });

    const savedFinance = await newFinance.save();
    res.status(201).json(savedFinance);
  } catch (err) {
    res.status(500).json({ error: "Failed to add finance entry" });
  }
};

// Get all entries for the logged-in user
export const getFinances = async (req, res) => {
  try {
    const userId = req.user._id;
    const finances = await Finance.find({ user: userId }).sort({ date: -1 });

    res.json(finances);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update existing finance entry
export const updateFinance = async (req, res) => {
  try {
    const financeId = req.params.id;

    const updated = await Finance.findOneAndUpdate(
      { _id: financeId, user: req.user._id },
      { ...req.body },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Finance entry not found" });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update finance entry" });
  }
};

// Delete an entry
export const deleteFinance = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const deleted = await Finance.findOneAndDelete({ _id: id, user: userId });

    if (!deleted) {
      return res.status(404).json({ error: "Finance entry not found." });
    }

    res.json({ message: "Deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
