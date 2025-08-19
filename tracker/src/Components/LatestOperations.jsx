import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const LatestOperations = () => {
    return(
        <div className="border bg-[#1b1d23] p-3 rounded shadow sm:mt-2">
            <div className="flex items-center">
                <FaFileInvoiceDollar className="text-white" size={30} />
                <h5 className="text-center text-white mt-3">العمليات الأخيرة  <span> ( 7 عمليات ) </span></h5>
            </div>

            <div className="overflow-y-auto h-96">
                <div className="border-r-5 border-green-600  bg-green-800 p-3 flex justify-between rounded mt-3">
                    <div>
                        <h5 className="text-white">Opertion name</h5>
                        <span className="flex items-center text-gray-400 text-sm"><FaCalendarAlt className="mx-1"/> 19 oct 2025 </span>
                    </div>
                    <div>
                        <h5 className="text-white"> $1000.00</h5>
                        <span className="text-xs text-gray-400">المبلغ (موجب للمصروفات)</span>
                    </div>
                </div>
                <div className="border-r-5 border-red-600  bg-red-800 p-3 flex justify-between rounded mt-3">
                    <div>
                        <h5 className="text-white">Opertion name</h5>
                        <span className="flex items-center text-gray-400 text-sm"><FaCalendarAlt className="mx-1"/> 19 oct 2025 </span>
                    </div>
                    <div>
                        <h5 className="text-white">- $1000.00</h5>
                        <span className="text-xs text-gray-400">المبلغ (سالب للمصروفات)</span>
                </div>
                </div>
                
            </div>
        </div>
    )
}
export default LatestOperations;