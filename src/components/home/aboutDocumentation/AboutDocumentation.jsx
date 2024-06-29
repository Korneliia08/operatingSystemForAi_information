import style from "./AboutDocumentation.module.css";
import logo from "../../../assets/icons/logo.svg";
import { useNavigate } from "react-router-dom";

function AboutDocumentation() {
  const navigate = useNavigate();
  return (
    <div className={`wrapper ${style.container}`}>
      <div className={style.containerForContent}>
        <h2>About documentation</h2>
        <p>
          <span>Documentation</span> for artificial intelligence (AI) plays a
          crucial role in ensuring transparency, usability, and efficiency of
          these technologies. It contains detailed descriptions of algorithms,
          models, and methods used in AI systems, as well as instructions for
          their configuration, implementation, and maintenance. <br />
          <br />
          <span>Quality</span> documentation helps developers quickly understand
          how to use AI in their projects and provides feedback for system
          improvement. Additionally, it is an essential tool for educating users
          and ensuring compliance with ethical and legal standards.
        </p>
        <button
          onClick={() => {
            navigate("/documentation");
          }}
        >
          To documentation
        </button>
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default AboutDocumentation;
