import { ThemeProvider } from './theme/ThemeContext.jsx'
import Local from './LocalStorage/locaStorage.jsx'
import './App.css'

function App() {
  return (
    <>
    <Local>
      <ThemeProvider />
    </Local>
      
    </>
  )
}

export default App
