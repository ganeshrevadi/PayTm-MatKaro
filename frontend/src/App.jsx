import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './Components/Header'

function App() {

  return (
    <Header label={"Hey Boi"} />

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
