import style from "./Work.module.css";
import allStyle from "../common/styles/AllStyle.module.css";

export const Work = (props) => {
    return (
        <div className={`${style.work} ${allStyle}`}>
            <h5>{props.who}</h5>
            <p className={style.place}>{props.where}</p>
            <p className={style.date}>{props.when}</p>
            <ul>
                <li>{props.property1}</li>
                <li>{props.property2}</li>
                <li>{props.property3}</li>
                <li>{props.property4}</li>
                <li>{props.property5}</li>
            </ul>
        </div>
    )
}