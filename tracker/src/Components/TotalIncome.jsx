import { FaSackDollar, FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { getTotals } from "../db/calcutaion.js";

const Income = ({data}) => {
    const { totalIncome, totalExpense, balance } = getTotals(data);

    const CardData = [
        { id: 1, title: "إجمالي الدخل", value: totalIncome, icon: FaSackDollar, color: "text-green-500", bg: "bg-green-800/40" },
        { id: 2, title: "إجمالي الصرف", value: Math.abs(totalExpense), icon: FaArrowTrendDown, color: "text-red-500", bg: "bg-red-800/40" },
        { id: 3, title: "الرصيد الاجمالي", value: balance, icon: FaArrowTrendUp, color: "text-lime-500", bg: "bg-lime-800/40" },
    ];
    return (
        <div className="row">
            {CardData.map((item) => {
                const Icon = item.icon; 
                return (
                    <div key={item.id} className="col-md-4 my-2">
                        <div className="bg-[#181b1f] px-10 py-3 flex justify-between items-center rounded-md shadow-lime-800 shadow-xl">
                            {/* العنوان و اجمالي الدخل */}
                            <div>
                                <h5 className="text-white">{item.title}</h5>
                                <h3 className="text-white">${item.value}</h3>
                            </div>
                            {/* ايقونة */}
                            <div className={`${item.color} p-2 rounded-full ${item.bg} text-2xl`}>
                                <Icon />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Income
