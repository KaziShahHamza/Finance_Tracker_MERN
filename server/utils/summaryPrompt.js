// utils/summaryPrompt.js

export function summaryPrompt(financeData) {
  const totalIncome = financeData
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalExpense = financeData
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  const breakdown = financeData
    .map(
      (item) =>
        `• ${item.title} - ${item.type} of $${item.amount} under ${item.category} via ${item.payment_type}`
    )
    .join("\n");

  return [
    {
      role: "user",
      parts: [
        {
          text: `Here is my financial data:\n\n${breakdown}\n\nTotal Income: $${totalIncome}\nTotal Expense: $${totalExpense}\n\nIn 100 words or less, give a summary and suggestion of my spending habits. use bullet points and be specific.\n\nExample: "I spend a lot on groceries, I should try to reduce that." or "I should try to reduce my spending on groceries." give how much i earned and how much i spent`,
        },
      ],
    },
  ];
}
