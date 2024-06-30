import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import style from "./Aside.module.scss";
import {NavLink} from "react-router-dom";
import MenuElement from "./MenuElement";

function MenuElements(props) {
    return (
        <>
            <MenuElement links={[{to: 'AI-Introduction', title: 'AI Introduction '}]} title={'AI Introduction '}></MenuElement>
            <NavLink to={'#'}>AI Algorithms</NavLink>
            <NavLink data-disabled='true' className={style.disabled} to={'#'}>Machine Learning Overview <FontAwesomeIcon icon={faChevronDown}/></NavLink>
            <NavLink data-disabled='true' className={style.disabled} to={'#'}>Deep Learning Basics <FontAwesomeIcon icon={faChevronDown}/></NavLink>
            <NavLink data-disabled='true' className={style.disabled} to={'#'}>NLP Guide <FontAwesomeIcon icon={faChevronDown}/></NavLink>
            <NavLink data-disabled='true' className={style.disabled} to={'#'}>Computer Vision API <FontAwesomeIcon icon={faChevronDown}/></NavLink>
            <NavLink data-disabled='true' className={style.disabled} to={'#'}>Reinforcement Learning <FontAwesomeIcon icon={faChevronDown}/></NavLink>
            <NavLink data-disabled='true' className={style.disabled} to={'#'}>Neural Networks <FontAwesomeIcon icon={faChevronDown}/></NavLink>
            <NavLink data-disabled='true' className={style.disabled} to={'#'}>AI Ethics <FontAwesomeIcon icon={faChevronDown}/></NavLink>
            <NavLink data-disabled='true' className={style.disabled} to={'#'}>Data Science Techniques <FontAwesomeIcon icon={faChevronDown}/></NavLink>
            <NavLink data-disabled='true' className={style.disabled} to={'#'}>AI in Healthcare <FontAwesomeIcon icon={faChevronDown}/></NavLink>
            <NavLink data-disabled='true' className={style.disabled} to={'#'}>Autonomous Systems SDK <FontAwesomeIcon icon={faChevronDown}/></NavLink>
            <NavLink data-disabled='true' className={style.disabled} to={'#'}>AI and Robotics <FontAwesomeIcon icon={faChevronDown}/></NavLink>
            <NavLink data-disabled='true' className={style.disabled} to={'#'}>Quantum Computing & AI <FontAwesomeIcon icon={faChevronDown}/></NavLink>
            <NavLink data-disabled='true' className={style.disabled} to={'#'}>AI Business Solutions <FontAwesomeIcon icon={faChevronDown}/></NavLink>

        </>
    );
}

export default MenuElements;
