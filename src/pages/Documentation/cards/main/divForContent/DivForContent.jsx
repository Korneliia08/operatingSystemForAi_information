import style from "./DivForContent.module.scss";
import ai from '../../../../../assets/icons/ai.png';

function DivForContent() {
    return (
        <div className={`${style.container}`}>
            <img src={ai} alt={''}/>
            <ul>
                <li>AI Introduction</li>
                <li>AI Algorithms</li>
                <li>Machine Learning Overview</li>
                <li>Deep Learning Basics</li>
                <li>NLP Guide</li>
                <li>Computer Vision API</li>
                <li>Reinforcement Learning</li>
                <li>Neural Networks</li>
                <li>AI Ethics</li>
                <li>Data Science Techniques</li>
                <li>AI in Healthcare</li>
                <li>Autonomous Systems SDK</li>
                <li>AI and Robotics</li>
                <li>Quantum Computing & AI</li>
                <li>AI Business Solutions</li>

            </ul>
        </div>
    );
}

export default DivForContent;