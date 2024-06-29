import style from "./Main.module.css";
import HelloBlock from "./helloBlock/HelloBlock";
import DivForContent from "./divForContent/DivForContent";

function Main() {
  return (
    <div className={`wrapper ${style.container}`}>
      <HelloBlock />
      <DivForContent />
    </div>
  );
}

export default Main;
