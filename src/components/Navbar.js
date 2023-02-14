import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { logoutUser, toggleSidebar } from '../features/user/userSlice';
function Navbar() {
    const [isShowLogout, setShowLogout] = useState(false)
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(logoutUser())
    }
    return (
        <Wrapper>
            <div className="nav-center">
                <button
                    type="button"
                    className="toggle-btn"
                    onClick={() => dispatch(toggleSidebar())}
                >
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo></Logo>
                    <h3 className="logo-text">dashboard</h3>
                </div>
                <div className="btn-container">
                    <button
                        type="button"
                        className="btn"
                        onClick={() => setShowLogout(!isShowLogout)}
                    >
                        <FaUserCircle />
                        {user?.name}
                        <FaCaretDown />
                    </button>
                    {isShowLogout && <div className="dropdown show-dropdown">
                        <button
                            type="button"
                            className="dropdown-btn"
                            onClick={logout}
                        >
                            logout
                        </button>
                    </div>}
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar