import style from "./Nav.module.css"

export const Nav = () => {
    return (
        <div className={style.nav}>
            <ul className={style.ul}>
                <li><a href="#main">Main</a></li>
                <li><a href="#about-me">About me</a></li>
                <li><a href="#scills">Scills</a></li>
                <li><a href="#my-projects">My projects</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
        </div>
    )
}