import { BrowserRouter , Routes ,Route } from "react-router-dom";
import { SignUp } from "./pages/Auth/Signup";
import { SignIn } from "./pages/Auth/Login";
import { TransferMoney } from "./pages/Transfer/SendMoney";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import {LandingPage} from "./pages/Landing/LandingPages";

function App() {


  return (
          <>
          
          <BrowserRouter>
          <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/signin" element={<SignIn/>} />
              <Route path="/money-transfer" element={<TransferMoney/>}/>
          </Routes>
          </BrowserRouter>
          </>
  )
}

export default App
