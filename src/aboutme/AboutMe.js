import style from "./AboutMe.module.css"
import containerStyle from "../common/styles/Container.module.css";
import allStyle from "../common/styles/AllStyle.module.css";

export const AboutMe = () => {
    return (
        <div className={`${style.aboutMe} ${allStyle}`} id="about-me">
            <div className={`${containerStyle.container} ${style.container}`}>

                {/*If I want to have contact bottom my photo, I won't comment*/}

                {/*<div className={style.contact}>*/}
                {/*<div className={style.img}></div>*/}
                {/*<h3>Connect with me</h3>*/}
                {/*<ul>*/}
                {/*    <li><span className={style.icon1}>icon</span></li>*/}
                {/*    <li><span className={style.icon2}>icon</span></li>*/}
                {/*    <li><span className={style.icon3}>icon</span></li>*/}
                {/*    <li><span className={style.icon4}>icon</span></li>*/}
                {/*</ul>*/}
                {/*<button className="">download CV</button>*/}
                {/*</div>*/}
                <div className={style.myDescription}>
                    <div className={style.context}>
                        <h3>About me</h3>
                        <span>
                            <p> I am a beginner frontend developer.</p>
                            <p>I choose this profession because I like to solve logical tasks,
                            creating something new and see the result of my work.</p>
                            <p> I enjoy the development process and want to further develop in this direction.</p>
                        </span>
                    </div>
                    <div className={style.contact}>
                        <h3>Connect with me</h3>
                        <div className={style.icons}>
                            <a className={`${style.icon} ${style.phone}`} href="tel:+375296039099" target="_blank"></a>
                            <a className={`${style.icon} ${style.telegram}`} href="tg://resolve?domain=anitabogdanovich"
                               target="_blank"></a>
                            <a className={`${style.icon} ${style.linkedin}`}
                               href="https://linkedin.com/in/anna-bogdanovich-a9957522a" target="_blank"></a>
                            <a className={`${style.icon} ${style.gitHub}`} href="https://github.com/AnnaBogdanovich4"
                               target="_blank"></a>
                            <a className={`${style.icon} ${style.email}`} href="mailto:bogdanovicanna4@gmail.com"
                               target="_blank"></a>
                        </div>
                            <a className={style.download} href="/src/assets/img/cv.pdf" download="CV_Bogdanovich_Anna">download CV</a>
                      </div>
                </div>
                <div className={style.img}></div>
            </div>
        </div>
    )
}