import { Signup } from './Pages/Signup'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Signin } from "./Pages/Signin"
import Dashboard from './Pages/Dashboard';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
