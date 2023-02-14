import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';
import { useSelector } from 'react-redux';
import NavLinks from './NavLinks';

function SmallSideBar() {
    const dispatch = useDispatch()
    const { isSidebarOpen } = useSelector((state) => state.user)
    const handleToggleSidebar = () => {
        dispatch(toggleSidebar())
    }
    return (
        <Wrapper>
            <div className={isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"}>
                <div className="content">
                    <button className="close-btn" onClick={handleToggleSidebar}>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <NavLinks toggle={handleToggleSidebar} />
                </div>
            </div>
        </Wrapper>
    )
}

export default SmallSideBar