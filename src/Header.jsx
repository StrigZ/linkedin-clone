import "./Header.css";
// import SearchIcon from "@mui/icons-material/Search";
// import HomeIcon from "@mui/icons-material/Home";
// import NetworkIcon from "@mui/icons-material/SupervisorAccount";
// import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import ChatIcon from "@mui/icons-material/Chat";
import {
  Search,
  Home,
  SupervisorAccount,
  BusinessCenter,
  Notifications,
  Chat,
} from "@mui/icons-material";
import HeaderOption from "./HeaderOption";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    const auth = getAuth();
    signOut(auth);
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src="https://www.svgrepo.com/show/157006/linkedin.svg" alt="" />
        <div className="header__search">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption onClick={logoutOfApp} title="me" avatar={true} />
      </div>
    </div>
  );
};
export default Header;
