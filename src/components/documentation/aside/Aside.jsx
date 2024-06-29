import style from "./Aside.module.scss";

function Aside() {
  return (
    <div className={`${style.container}`}>
      <a href="#">AI Introduction</a>
      <a href="#">AI Algorithms</a>
      <a href="#">Machine Learning Overview</a>
      <a href="#">Deep Learning Basics</a>
      <a href="#">NLP Guide</a>
      <a href="#">Computer Vision API</a>
      <a href="#">Reinforcement Learning</a>
      <a href="#">Neural Networks</a>
      <a href="#">AI Ethics</a>
      <a href="#">Data Science Techniques</a>
      <a href="#">AI in Healthcare</a>
      <a href="#">Autonomous Systems SDK</a>
      <a href="#">AI and Robotics</a>
      <a href="#">Quantum Computing & AI</a>
      <a href="#">AI Business Solutions</a>
    </div>
  );
}

export default Aside;
