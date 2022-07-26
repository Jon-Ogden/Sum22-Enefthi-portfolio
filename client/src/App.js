import "./App.css";
import Landing from "./components/shared/Landing";
import NoMatch from "./components/shared/NoMatch";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UserAccount from "./components/shared/UserAccount";
import FetchUser from "./components/auth/FetchUser";
import Navbar from "./Sidebar/Navbar";
import DashBoard from "./components/auth/MainPage";
import Settings from "./components/auth/Settings";
import Market from "./components/shared/Market";
import MarketDetail from "./components/shared/MarketDetail";
import Payment from "./components/auth/Payment";
import Saved from "./components/auth/Saved";
import CreateNft from "./components/auth/CreateNft";
import MyUser from "./components/auth/UserProfile";
import Profile from "./components/shared/Profile";

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" && <Navbar />}

      <div>
        <FetchUser>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/marketdetail" element={<MarketDetail />} />
            <Route path="/myuser" element={<MyUser />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/createnft" element={<CreateNft />} />
            <Route path="/market" element={<Market />} />
            <Route path="/MarketDetail/:id" element={<MarketDetail />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/account" element={<UserAccount />} />
            </Route>
            <Route path="/*" element={<NoMatch />} />
          </Routes>
        </FetchUser>
      </div>
    </div>
  );
};
//hi
export default App;
