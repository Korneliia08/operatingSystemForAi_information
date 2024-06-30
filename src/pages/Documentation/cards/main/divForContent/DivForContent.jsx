import style from "./DivForContent.module.scss";
import img from '../../../../../assets/images/effect_right2.svg'
import {NavLink} from "react-router-dom";

function DivForContent() {
    return (
        <div className={`${style.container}`}>

            <ul>
                <NavLink to={'AI-Introduction'}>AI Introduction</NavLink>
                <li>AI Algorithms
                    <ul>
                        <li>
                            <NavLink to={'AI-Algorithms1'}>Machine Learning Algorithms</NavLink></li>
                        <li>
                            <NavLink to={'AI-Algorithms2'}>Computer Vision Algorithms</NavLink></li>
                        <li>
                            <NavLink to={'AI-Algorithms3'}>Deep Learning Algorithms</NavLink></li>


                    </ul>
                </li>
                <li className={style.disabled}>Machine Learning Overview</li>
                <li className={style.disabled}>Deep Learning Basics</li>
                <li className={style.disabled}>NLP Guide</li>
                <li className={style.disabled}>Computer Vision API</li>
                <li className={style.disabled}>Reinforcement Learning</li>
                <li className={style.disabled}>Neural Networks</li>
                <li className={style.disabled}>AI Ethics</li>
                <li className={style.disabled}>Data Science Techniques</li>
                <li className={style.disabled}>AI in Healthcare</li>
                <li className={style.disabled}>Autonomous Systems SDK</li>
                <li className={style.disabled}>AI and Robotics</li>
                <li className={style.disabled}>Quantum Computing & AI</li>
                <li className={style.disabled}>AI Business Solutions</li>

            </ul>
            <img src={img}/>
        </div>
    );
}

export default DivForContent;
