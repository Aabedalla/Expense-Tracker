import NavBar from './Components/Nav.jsx'
import AddNewOperation from './Components/AddNewOperation.jsx'
import LatestOperations from './Components/LatestOperations.jsx'
import Income from './Components/TotalIncome.jsx'
import './App.css'

function App() {
  return (
    <>
       <NavBar />
       <div>
          <h1 className='text-center mt-3'>لوحة التحكم المالية</h1>
          <p className='text-center '>تتبع دخلك ومصروفاتك بسهولة وراقب رصيدك المالي في الوقت الفعلي</p>
       </div>
       <div className='container '>
        <div className='row'>
              <Income 
              />
        </div>
       </div>


      <div className='container mt-5'>
        <div className='row'>
          {/* إضافة عملية جديدة */}
          <div className='col-md-6'>
            <AddNewOperation />
          </div>
          {/* العمليات الأخيرة */}
           <div className='col-md-6'>
            <LatestOperations />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
