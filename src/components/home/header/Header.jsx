import style from "./Header.module.css";
import backGround from "../../../assets/images/backgroundHeader.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className={`wrapper ${style.container}`}>
      <img src={backGround} alt="backGround" />
      <h1>
        AI drives <span>cybersecurity</span> and{" "}
        <span>operational efficiency</span>, empowering you to achieve
        <span> strategic organizational </span>
        objectives.
      </h1>
      <FontAwesomeIcon icon={faAnglesDown} className={style.arrowIcon} />
    </div>
  );
}

export default Header;
