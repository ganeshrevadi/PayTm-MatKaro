import { Signup } from './Pages/Signup'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Signin } from "./Pages/Signin"
import Dashboard from './Pages/Dashboard';
import { SendMoney } from './Components/SendMoney';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Send' element={<SendMoney />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
