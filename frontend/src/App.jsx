import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './Components/Header'
import Signup from './Pages/Signup'

function App() {

  return (
    <Signup />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/signup' element={<Signup />} />
    //     <Route path='/signin' element={<SignIn />} />
    //     <Route path='/dashboard' element={<Dashboard />} />
    //     <Route path='/send' element={<Send />} />
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App
