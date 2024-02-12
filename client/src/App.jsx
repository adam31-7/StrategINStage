import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Users from "./Components/Users"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/register" element={<Signup />}></Route>
      <Route path= "/login" element={<Login />}></Route>
      <Route path="/users" element={<Users />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
