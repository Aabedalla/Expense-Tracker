import { createContext, useState } from "react";
import NavBar from '../Components/Nav.jsx'
import AddNewOperation from '../Components/AddNewOperation.jsx'
import LatestOperations from '../Components/LatestOperations.jsx'
import Income from '../Components/TotalIncome.jsx'
import Data from '../db/Data.js'

export const Theme = createContext(null);

export const ThemeProvider = () => {
  const [data, setData] = useState(Data)
  const [theme, setTheme] = useState('light')
  
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? "dark" : "light"))
  }

  const hadleAdd = (operation) => {
    setData([...data, operation])
  }

  return (
    <Theme.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "dark" ? " dark:bg-[#181b1f] text-white" : ""}>
        <NavBar />
        <div>
          <h1 className='text-center mt-3'>لوحة التحكم المالية</h1>
          <p className='text-center'>تتبع دخلك ومصروفاتك بسهولة وراقب رصيدك المالي في الوقت الفعلي</p>
        </div>
        <div className='container'>
          <div className='row'>
            <Income data={data} Theme={theme}/>
          </div>
        </div>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-6'>
              <AddNewOperation onAdd={hadleAdd}/>
            </div>
            <div className='col-md-6'>
              <LatestOperations getData={data}/>
            </div>
          </div>
        </div>
      </div>
    </Theme.Provider>
  )
}
export default ThemeProvider