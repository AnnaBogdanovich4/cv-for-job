import containerStyle from "./../common/styles/Container.module.css"
import style from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${containerStyle.container} ${style.container}`}>
                <h2>Anna Bogdanovich</h2>
                <div className={style.footerIcons}>
                    <a className={style.phone} href="tel:+375296039099" target="_blank"></a>
                    <a className={style.email} href="mailto:bogdanovicanna4@gmail.com"
                       target="_blank"></a>
                    <a className={style.telegram} href="tg://resolve?domain=anitabogdanovich"
                       target="_blank"></a>
                    <a className={style.linkedin} href="https://linkedin.com/in/anna-bogdanovich-a9957522a" target="_blank"></a>
                    <a className={style.gitHub} href="https://github.com/AnnaBogdanovich4"
                       target="_blank"></a>
                    <a className={style.portfolio} href="https://annabogdanovich4.github.io/CV-INCUBATOR/" target="_blank"></a>
                </div>
                <span>@2022 Все права защищены</span>
            </div>
        </div>
    )
}