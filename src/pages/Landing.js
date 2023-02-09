import React from 'react'
import main from '../assets/images/main.svg'
import { Link } from "react-router-dom";
import Wrapper from '../assets/wrappers/LandingPage.js'
import { Logo } from '../components';
function Landing() {
    return (
        <Wrapper>
            <main>
                <nav><Logo></Logo></nav>
                <div className='container page'>
                    {/* info */}
                    <div className='info'>
                        <h1>
                            job <span>tracking</span> app
                        </h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <Link to="/register" className='btn btn-hero'>Login/Register</Link>
                    </div>
                    <img src={main} alt='job hunt' className='img main-img' />
                </div>
            </main>
        </Wrapper>
    )
}

export default Landing