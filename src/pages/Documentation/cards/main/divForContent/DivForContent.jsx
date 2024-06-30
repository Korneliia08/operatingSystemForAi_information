import style from "./DivForContent.module.scss";

function DivForContent() {
    return (
        <div className={`${style.container}`}>

            <ul>
                <li>AI Introduction</li>
                <li>AI Algorithms</li>
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

        </div>
    );
}

export default DivForContent;
