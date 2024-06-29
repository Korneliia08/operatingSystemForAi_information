import style from "./Nav.module.css";
import logo from "./../../../assets/icons/logo.svg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const navigate = useNavigate();
  return (
    <div className={`wrapper ${style.container}`}>
      <img src={logo} alt="logo" onClick={() => navigate("/")} />
      <FontAwesomeIcon icon={faMagnifyingGlass} className={style.iconSearch} />
      <input type="text" placeholder={"Enter your search"} />
      <button className={style.btnSearch}>Search</button>
    </div>
  );
}

export default Nav;
