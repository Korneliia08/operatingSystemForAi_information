import style from "./HelloBlock.module.scss";

function HelloBlock() {
  return (
    <div className={`wrapper ${style.container}`}>
      <h4>Welcome to AI Documentation! &#128522;</h4>
    </div>
  );
}

export default HelloBlock;
