import style from "./Skill.module.css"
import allStyle from "./../common/styles/AllStyle.module.css"

export const Skill = (props) => {
    return (
        <div className={`${style.skill} ${allStyle}`} id="scills">
            <div className={style.icon}></div>
            <h4>{props.title}</h4>
            <span>{props.description}</span>
        </div>
    )
}