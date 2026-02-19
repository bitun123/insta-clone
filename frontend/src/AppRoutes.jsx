import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Registration from "./features/auth/pages/Registration";
function AppRoutes() {
  return (
<BrowserRouter>
<Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/registration" element={<Registration/>}/>
</Routes>

</BrowserRouter>
  )
}

export default AppRoutes