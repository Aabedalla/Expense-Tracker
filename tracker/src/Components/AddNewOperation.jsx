import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";

const AddNewOperation = ({onAdd}) => {
    const [OperationType, setOperationType] = useState('')
    const [OperationValue, setOperationValue] = useState(0)

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(OperationType.trim() && OperationValue !== 0 ){
            onAdd({
                id: length + 1,
                type: OperationType,
                value: Number(OperationValue),
                date: new Date().toLocaleDateString('ar-EG', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                })
            })

        }
        setOperationType('');
        setOperationValue(0);
    }
    return(
        <>
            
        <form onSubmit={handleSubmit} className="border flex flex-col bg-[#1b1d23] p-3 rounded-lg text-white ">
            <div className="mb-3">
                <h3 className="flex items-center"><IoIosAddCircleOutline className="mx-1"/>إضافة عملية جديدة </h3>
            </div>
                <label className="form-label">نوع العملية</label>
                <input type="text" className="form-control mb-2" value={OperationType} onChange={(e)=> setOperationType(e.target.value)} placeholder="مثال: تسوق, راتب, إيجار..." required/>
                <label className="form-label">المبلغ</label>
                <input type="text" className="form-control mb-2" value={OperationValue} onChange={(e)=> setOperationValue(e.target.value)} placeholder="المبلغ (موجب للدخل, سالب للصرف)" required/>
                <span className="text-xs text-gray-400">استخدم الأرقام الموجبة للدخل والسالبة للمصروفات</span>
                <button type="submit" className="btn btn-primary mt-2">إضافة العملية</button>
        </form>
        </>
    )
}
export default AddNewOperation;