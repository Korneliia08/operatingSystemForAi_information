import style from "./Aside.module.scss";
import MenuElements from "./MenuElements";

function Aside() {
    return (
        <div className={`${style.container}`}>
            <MenuElements/>
            <div className={style.bottom}>
                Copy &copy; {new Date().getFullYear()}
            </div>
        </div>
    );
}

export default Aside;
