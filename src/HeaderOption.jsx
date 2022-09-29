import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./HeaderOption.css";
const HeaderOption = ({ Icon, title, avatar, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div className="header-option" onClick={onClick}>
      {Icon && <Icon className="header-option__icon" />}
      {avatar && (
        <Avatar className="header-option__icon" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="header-option__title">{title}</h3>
    </div>
  );
};
export default HeaderOption;
