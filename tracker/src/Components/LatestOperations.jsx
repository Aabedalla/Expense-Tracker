import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import Data from "../db/Data";


const LatestOperations = ({getData}) => {
    return(
        <div className="border bg-[#1b1d23] p-3 rounded shadow sm:mt-2">
            <div className="flex items-center">
                <FaFileInvoiceDollar className="text-white" size={30} />
                <h5 className="text-center text-white mt-3">العمليات الأخيرة  <span> ({getData.length} {getData.length >= 3 ? 'عمليات' : 'عملية' }) </span></h5>
            </div>

            <div className="overflow-y-auto h-96">
               
               {getData.map((item)=>{
                return(
                     <div key={item.id} className={`border-r-5 ${item.value > 0 ? "border-green-600  bg-green-800" : "border-red-600  bg-red-800"} p-3 flex justify-between rounded mt-3`}>
                    <div>
                        <h5 className="text-white">{item.type}</h5>
                        <span className="flex items-center text-gray-400 text-sm"><FaCalendarAlt className="mx-1"/>{item.date}</span>
                    </div>
                    <div>
                        <h5 className="text-white">${item.value}</h5>
                        <span className="text-xs text-gray-400">المبلغ ({item.value > 0 ? 'موجب' : 'سالب'} للمصروفات)</span>
                    </div>
                </div>
                )
               })}
            </div>
        </div>
    )
}
export default LatestOperations;