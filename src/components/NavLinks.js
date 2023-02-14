import React from 'react'
import links from '../ultils/links';
import { NavLink } from "react-router-dom";

function NavLinks({ toggle }) {
    return (
        <>
            <div className="nav-links">
                {links.map((link) => {
                    const { text, path, id, icon } = link;

                    return (
                        <NavLink
                            to={path}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                            key={id}
                            onClick={toggle}
                        >
                            <span className="icon">{icon}</span>
                            {text}
                        </NavLink>
                    );
                })}
            </div>
        </>
    )
}

export default NavLinks