import { useContext } from "react";
import { Theme } from "../theme/ThemeContext";
import logo from '../assets/logo.png'
import { CiLight, CiDark } from "react-icons/ci";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(Theme);

  return (
    <nav className='dark:bg-[#181b1f] flex justify-between items-center p-2 shadow-md'>
      <div className='container'>
        <div className='row'>
          <div className='flex justify-between items-center w-full'>
            {/* العنوان و الشعار */}
            <div className="flex dark:text-white items-center gap-2">
              <img src={logo} width={80}/>
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
              <button 
                onClick={toggleTheme} 
                className='text-white text-2xl'
              >
                {theme === 'light' ? <CiDark /> : <CiLight />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
