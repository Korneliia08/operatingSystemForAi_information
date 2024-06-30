import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import style from "./Aside.module.scss";
import {NavLink} from "react-router-dom";

function MenuElement(props) {
    const [open, setOpen] = useState(false)

    function click() {
        if (props.close) {
            props.close()
        }
    }

    return (
        <>
            <span onClick={() => setOpen(!open)}>{props.title} <FontAwesomeIcon className={open ? style.open : ''} icon={faChevronDown}/></span>
            {open && <div className={style.submenu}>
                {
                    props.links.map(link => {
                        return <NavLink onClick={click} className={style.innerLink} to={link.to}>{link.title} </NavLink>
                    })
                }
            </div>}
        </>
    );
}

export default MenuElement;
