import style from "./Nav.module.scss";
import logo from "../../../assets/icons/logo.svg";
import {NavLink, useNavigate} from "react-router-dom";

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
                <NavLink to={'#'}>Solutions</NavLink>
                <NavLink to={'#'}>Partner</NavLink>
                <NavLink to={'#'}>Company</NavLink>
                <NavLink
                    to={"/documentation"}
                >
                    Documentation
                </NavLink>
            </nav>
        </div>
    );
}

export default Nav;
