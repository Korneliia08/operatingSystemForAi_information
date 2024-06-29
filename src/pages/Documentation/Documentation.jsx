import Nav from "../../components/documentation/nav/Nav";
import Main from "../../components/documentation/main/Main";
import Aside from "../../components/documentation/aside/Aside";
import style from "./Documentation.module.css";

function Documentation() {
  return (
    <>
      <Nav />
      <div className={style.container}>
        <Aside />
        <Main />
      </div>
    </>
  );
}

export default Documentation;
