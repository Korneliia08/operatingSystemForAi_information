import style from "./Nav.module.scss";
import logo from "./../../../assets/icons/logo.svg";
import {NavLink, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import MenuElements from "../../documentation/aside/MenuElements";
import Hamburger from "hamburger-react";
import {useState} from "react";

function Nav() {
    const [isOpen, setOpen] = useState(false)
    const navigate = useNavigate();
    return (
        <div className={`${style.container}`}>
            <div className={style.firstPart}>

                <img src={logo} alt="logo" onClick={() => navigate("/")}/>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={style.iconSearch}/>
                <input type="text" placeholder={"Enter your search"}/>
                <button className={style.btnSearch}>Search</button>
            </div>
            <div className={style.hamburger}>
                <Hamburger toggled={isOpen} toggle={setOpen}/>
            </div>
            <div className={`${style.mobileMenu} ${isOpen ? style.open : ''}`}>
                <NavLink onClick={() => setOpen(false)} to={'/documentation'}>Welcome page</NavLink>
                <NavLink onClick={() => setOpen(false)} to={'/'}>Main page</NavLink>
                <div className={style.spacer}></div>
                {/*<NavLink to={'#'}>Lorem</NavLink>*/}
                {/*<NavLink to={'#'}>Lorem</NavLink>*/}

                <MenuElements setOpen={setOpen}/>
            </div>
            <nav className={style.secondPart}>
                <NavLink to={'/documentation'}>Welcome page</NavLink>
                <NavLink to={'/'}>Main page</NavLink>


            </nav>
        </div>
    );
}

export default Nav;
