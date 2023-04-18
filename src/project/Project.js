import style from "./Project.module.css"
import allStyle from "../common/styles/AllStyle.module.css";

export const Project = (props) => {
    return (
        <div className={`${style.project} ${allStyle}`}>
            <div className={style.img} style={{
                backgroundImage: `url(${props.url})`,backgroundSize: 'cover',
                backgroundPosition: 'center', width: '100%', height: 'auto'
            }}>
                <a href={props.href} className={style.linkProject} target={'_blank'}>Open</a>
            </div>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
        </div>
    )
}