import Nav from "../../components/documentation/nav/Nav";
import Aside from "../../components/documentation/aside/Aside";
import style from "./Documentation.module.scss";
import {Outlet} from "react-router-dom";

function Documentation() {
    return (
        <>
            <div className={style.line}></div>
            <Nav/>
            <div className={style.container}>
                <div className={style.scrollAside}>
                    <Aside/>
                </div>
                <div className={style.scrollOutlet}>

                    <Outlet/>
                </div>
            </div>
        </>
    );
}

export default Documentation;
