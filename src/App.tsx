import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OrganizerRegister from "./pages/OrganizerRegister";
import OrganizerLogin from "./pages/OrganizerLogin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useStore } from "./hooks/useStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import ContactUs from "./pages/ContactUs";
import Help from "./pages/help";
import "@fontsource/inter";
import HelpDetail from "./pages/help/helpDetail";
import Affiliate from "./pages/Affiliate";
const App = observer(() => {

  const {root:{auth}} = useStore();
   useEffect(() => {
     const accessToken = localStorage.getItem("accessToken");
     const refreshToken = localStorage.getItem("refreshToken");
     if (accessToken && refreshToken) {
       auth.accessToken = accessToken;
       auth.refreshToken = refreshToken; 
       auth.setAuthenticated();
     }
   }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organizer/register" element={<OrganizerRegister />} />
        <Route path="/organizer/login" element={<OrganizerLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/help" element={<Help />} />
        <Route path="/helpdetails" element={<HelpDetail />} />
        <Route path="/affiliate" element={<Affiliate/>} />
      </Routes>
    </BrowserRouter>
  );
});
export default App;