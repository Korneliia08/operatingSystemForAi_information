import style from "./Nav.module.scss";
import logo from "../../../assets/icons/logo.svg";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <div className={`wrapper ${style.container}`}>
      <img
        src={logo}
        alt="logo icon"
        onClick={() => {
          navigate("/");
        }}
      />
      <nav>
        <a href="#">Solutions</a>
        <a href="#">Partner</a>
        <a href="#">Company</a>
        <a
          href="#"
          onClick={() => {
            navigate("/documentation");
          }}
        >
          Documentation
        </a>
      </nav>
    </div>
  );
}

export default Nav;
