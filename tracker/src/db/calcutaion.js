
export const getTotals = (data) => {
  const totalIncome = data.filter(op => op.value > 0).reduce((acc, op) => acc + op.value, 0);
  const totalExpense = data.filter(op => op.value < 0).reduce((acc, op) => acc + op.value, 0);
  const balance = totalIncome + totalExpense;

  return { totalIncome, totalExpense, balance };
};
