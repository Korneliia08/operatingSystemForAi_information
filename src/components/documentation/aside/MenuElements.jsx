import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import style from "./Aside.module.scss";
import {NavLink} from "react-router-dom";
import MenuElement from "./MenuElement";

function MenuElements(props) {
    function click() {
        if (props.setOpen) {
            props.setOpen(false)
        }
    }

    return (
        <>
            <NavLink onClick={click} to={'AI-Introduction'}>AI Introduction</NavLink>
            <MenuElement close={click} links={[
                {to: 'AI-Algorithms1', title: 'Machine Learning Algorithms'},
                {to: 'AI-Algorithms2', title: 'Computer Vision Algorithms'},
                {to: 'AI-Algorithms3', title: 'Deep Learning Algorithms'}


            ]} title={'AI Algorithms '}></MenuElement>
            <NavLink onClick={click} data-disabled='true' className={style.disabled} to={'#'}>Machine Learning Overview <FontAwesomeIcon
                icon={faChevronDown}/></NavLink>
            <NavLink onClick={click} data-disabled='true' className={style.disabled} to={'#'}>Deep Learning Basics <FontAwesomeIcon icon={faChevronDown}/></NavLink>
            <NavLink onClick={click} data-disabled='true' className={style.disabled} to={'#'}>NLP Guide <FontAwesomeIcon icon={faChevronDown}/></NavLink>
            <NavLink onClick={click} data-disabled='true' className={style.disabled} to={'#'}>Computer Vision API <FontAwesomeIcon
                icon={faChevronDown}/></NavLink>
            <NavLink onClick={click} data-disabled='true' className={style.disabled} to={'#'}>Reinforcement Learning <FontAwesomeIcon
                icon={faChevronDown}/></NavLink>
            <NavLink onClick={click} data-disabled='true' className={style.disabled} to={'#'}>Neural Networks <FontAwesomeIcon
                icon={faChevronDown}/></NavLink>
            <NavLink onClick={click} data-disabled='true' className={style.disabled} to={'#'}>AI Ethics <FontAwesomeIcon icon={faChevronDown}/></NavLink>
            <NavLink onClick={click} data-disabled='true' className={style.disabled} to={'#'}>Data Science Techniques <FontAwesomeIcon
                icon={faChevronDown}/></NavLink>
            <NavLink onClick={click} data-disabled='true' className={style.disabled} to={'#'}>AI in Healthcare <FontAwesomeIcon
                icon={faChevronDown}/></NavLink>
            <NavLink onClick={click} data-disabled='true' className={style.disabled} to={'#'}>Autonomous Systems SDK <FontAwesomeIcon
                icon={faChevronDown}/></NavLink>
            <NavLink onClick={click} data-disabled='true' className={style.disabled} to={'#'}>AI and Robotics <FontAwesomeIcon
                icon={faChevronDown}/></NavLink>
            <NavLink onClick={click} data-disabled='true' className={style.disabled} to={'#'}>Quantum Computing & AI <FontAwesomeIcon
                icon={faChevronDown}/></NavLink>
            <NavLink onClick={click} data-disabled='true' className={style.disabled} to={'#'}>AI Business Solutions <FontAwesomeIcon icon={faChevronDown}/></NavLink>

        </>
    );
}

export default MenuElements;
