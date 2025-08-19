import { FaSackDollar } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
// import { totalExpense,totalIncome, balance } from './calcutaion.js';
import { getTotals } from "./calcutaion.js";
 const { totalIncome, totalExpense, balance } = getTotals(data);

const CardData = [
    { id: 1, title: "إجمالي الدخل", value: totalIncome, icon: FaSackDollar, color: "text-green-500", bg: "bg-green-800/40" },
    { id: 2, title: "إجمالي الصرف", value: Math.abs(totalExpense), icon: FaArrowTrendDown, color: "text-red-500", bg: "bg-red-800/40" },
    { id: 3, title: "الرصيد الاجمالي", value: balance, icon: FaArrowTrendUp, color: "text-lime-500", bg: "bg-lime-800/40" },
  ];

export default CardData;