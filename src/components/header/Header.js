import React from 'react';
import {NavLink, Outlet} from "react-router-dom"

import css from './Header.module.css'


export const Header = () => {

    //Theme

    const changeTheme = () => {
        const theme = localStorage.getItem("theme");

        if (theme !== "white") {
            localStorage.setItem("theme", "white");
            document.body.classList.add("white")
        } else {
            localStorage.removeItem("theme");
            document.body.classList.remove("white")
        }
    }

    return (
        <div>
            <div className={css.wrap}>
                <div className={css.Header}>
                    <div className={css.Home_and_Theme}>
                        <NavLink to={'/home'}>
                            <button>Home Page</button>
                        </NavLink>
                        <button onClick={changeTheme}>Theme</button>
                    </div>
                    <div className={css.User}>
                        <img
                            className={css.UserImage}
                            src="https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png"
                            alt="user"/>
                    </div>
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

