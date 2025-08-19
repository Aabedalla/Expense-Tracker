import logo from '../assets/logo.png'
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
const NavBar = ()=>{
    return(
        <nav className='bg-[#181b1f] flex justify-between items-center p-2 shadow-md'>
            <div className='container'>
                <div className='row'>
                    <div className='flex justify-between items-center w-full'>
                    {/* العنوان و الشعار */}
                    <div className="flex text-white items-center gap-2">
                        {/* الشعار */}
                        <img src={logo} className='' width={80}/>
                       {/* العناوين */}
                        <div className='flex flex-col'>
                            <span className='text-2xl font-bold'>
                                متتبع المصاريف
                            </span>
                            <span className='text-sm text-gray-400'>
                                إدارة مالية ذكية
                            </span>
                        </div>
                    </div>

                    {/* الثيم و المستخدمين */}
                    <div className='flex items-center'>
                        <div><CiLight className='text-white text-2xl'/></div>
                        <div><CiDark className='text-white text-2xl'/></div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default NavBar