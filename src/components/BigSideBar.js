import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/BigSidebar'
import Logo from './Logo'
import NavLinks from './NavLinks';
import { toggleSidebar } from '../features/user/userSlice';

function BigSideBar() {
    const dispatch = useDispatch
    const handleToggleSidebar = () => {
        dispatch(toggleSidebar())
    }
    const { isSidebarOpen } = useSelector((state) => state.user)
    return (
        <Wrapper>
            <div
                className={
                    isSidebarOpen
                        ? "sidebar-container "
                        : "sidebar-container show-sidebar"
                }
            >
                <div className="content">
                    <header>
                        <Logo />
                    </header>
                    <NavLinks toggleSidebar={handleToggleSidebar}></NavLinks>

                </div>
            </div>
            );
        </Wrapper>
    )
}

export default BigSideBar