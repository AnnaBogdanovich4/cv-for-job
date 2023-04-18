import style from "./Header.module.css"
import * as React from 'react';
import {Nav} from '../nav/Nav'
export const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
        </div>
    )
}