import CardData from './CardData.js'

const Income = () => {
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
