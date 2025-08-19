import { IoIosAddCircleOutline } from "react-icons/io";
const AddNewOperation = () => {
    return(
        <>
            
        <form className="border flex flex-col bg-[#1b1d23] p-3 rounded-lg text-white ">
            <div className="mb-3">
                <h3 className="flex items-center"><IoIosAddCircleOutline className="mx-1"/>إضافة عملية جديدة </h3>
            </div>
                <label className="form-label">نوع العملية</label>
                <input type="text" className="form-control mb-2" placeholder="مثال: تسوق, راتب, إيجار..." required/>
                <label className="form-label">المبلغ</label>
                <input type="number" className="form-control mb-2" placeholder="المبلغ (موجب للدخل, سالب للصرف)" required/>
                <span className="text-xs text-gray-400">استخدم الأرقام الموجبة للدخل والسالبة للمصروفات</span>
                <button type="submit" className="btn btn-primary mt-2">إضافة العملية</button>
        </form>
        </>
    )
}
export default AddNewOperation;