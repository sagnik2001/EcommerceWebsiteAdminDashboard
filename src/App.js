import { useEffect } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import ProtectedRoute from "./PrivateRoutes/Protected";
import ApiContextProvider from "./UseContext/ApiContext";
import { useApi } from "./UseContext/ApiContext";
import { useNavigate } from "react-router-dom";
import Products from "./Components/Products";
import Orders from "./Components/Orders";
import Category from "./Components/Category";
function App() {
  const {authenticated} = useApi()
  const navigate= useNavigate()
  const token = window.localStorage.getItem('token')
//   useEffect(() => {
  
 
 
//    if(authenticated == true || token){
//      navigate("/")
//    }
//    else {
//      navigate("/signin")
//    }
//  }, [authenticated,token]);
  return (
    <div >
      <ApiContextProvider>
     
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path="/products" element={<ProtectedRoute><Products/></ProtectedRoute>} />
        <Route path="/orders" element={<ProtectedRoute><Orders/></ProtectedRoute>} />
        <Route path="/categories" element={<ProtectedRoute><Category/></ProtectedRoute>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
     
      </ApiContextProvider>
    </div>
  );
}

export default App;
