import style from "./Main.module.scss";
import HelloBlock from "./helloBlock/HelloBlock";
import DivForContent from "./divForContent/DivForContent";

function Main() {
  return (
    <div className={`${style.container}`}>
      <HelloBlock />
      <DivForContent />
    </div>
  );
}

export default Main;
