import style from './Search.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

function Search() {
    return (
        <div className={`wrapper ${style.container}`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={style.iconSearch}/>
            <input type="text" placeholder={"Enter your search"}/>
            <button className={style.btnSearch}>Search</button>
        </div>
    );
}

export default Search;
