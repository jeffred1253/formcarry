import React, { useEffect, useState } from 'react';
import logo from './../images/formcarry_logo.svg';
import './../styles/header_lg.css';

const Header_lg = () => {
    const [lastScroll, setLastScroll] = useState(0)
    useEffect(() => {
        const headerLg = document.querySelector('.header-lg')
        const signUp = document.querySelector('.signUp-lg')
    
        window.addEventListener('scroll', () => {
            if (lastScroll > window.scrollY) {
                headerLg.classList.remove('hideHeader')
                if (window.scrollY <= 50) {
                    signUp.classList.remove('blackSignUp')
                    setLastScroll(0)
                }
            } else if (window.scrollY <= 300) {
                setLastScroll(0)
                if (window.scrollY < 20) {
                    headerLg.classList.remove('adaptedHeader')
                }
            } else if (window.scrollY > 250) {
                if (window.scrollY > 250) {
                    headerLg.classList.add('hideHeader')
                }
                if (window.scrollY > 350) {
                    headerLg.classList.add('adaptedHeader')
                    signUp.classList.add('blackSignUp')
                }
                setLastScroll(window.scrollY)
            }
        })
    }, [window.scrollY])

    return (
       <header className='header-lg'>
            <img src={logo} alt="logo" />
            <ul className='links-lg'>
                <li><a href='/'>Examples</a></li>
                <li><a href='/'>Form Generator</a></li>
                <li><a href='/'>Integrations</a></li>
                <li><a href='/'>Docs</a></li>
                <li><a href='/'>Pricing</a></li>
            </ul>
            <div className='auth-lg'>
                <button className='login-lg'>Login</button>
                <button className='signUp-lg'>Sign Up</button>
            </div>
       </header>
    );
};

export default Header_lg;