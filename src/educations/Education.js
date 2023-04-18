import style from "./Education.module.css";
import allStyle from "../common/styles/AllStyle.module.css";

export const Education = (props) => {
    return (
        <div className={`${style.education} ${allStyle}`}>
            <h5>{props.who} </h5>
            <p className={style.place}>{props.where}</p>
            <p className={style.date}>{props.when}</p>
            <span>{props.property}</span>
        </div>
    )
}