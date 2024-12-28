import React, { useState } from 'react';
import logo from './../images/formcarry_logo.svg';
import './../styles/header_sm.css';

const Header_sm = () => {
    const [showed, setShow] = useState(false);

    const switchShow = () => {
        const detail = document.querySelector('.detail')
        if (!showed) {
            setShow(true)
            detail.classList.add('visible')
        } else {
            setShow(false)
            detail.classList.remove('visible')
        }
    }
    
    return (
        <header className='header-sm'>
            <div className='title'>
                <img className='logo-sm' src={logo} alt="logo" />
                <svg onClick={switchShow} className='shower' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d={!showed ? "M12.5 13.3335H27.5V15.0002H12.5V13.3335ZM17.5 19.1668H27.5V20.8335H17.5V19.1668ZM12.5 25.0002H27.5V26.6668H12.5V25.0002Z" : "M20.0001 18.8218L24.1251 14.6968L25.3034 15.8751L21.1784 20.0001L25.3034 24.1251L24.1251 25.3034L20.0001 21.1784L15.8751 25.3034L14.6968 24.1251L18.8218 20.0001L14.6968 15.8751L15.8751 14.6968L20.0001 18.8218Z"} fill="#0E0B3D"></path></svg>
            </div>
            <div className='detail'>
                <ul>
                    <li className='link-sm'><a href='/'>Docs</a></li>
                    <li className='link-sm'><a href='/'>Integrations</a></li>
                    <li className='link-sm'><a href='/'>Blog</a></li>
                    <li className='link-sm'><a href='/'>Pricing</a></li>
                </ul>
                <div className='auth-sm'>
                    <button className='login-sm btn-hd-sm'>Login</button>
                    <button className='signUp-sm btn-hd-sm'>Sign Up</button>
                </div>
            </div>
        </header>
    );
};

export default Header_sm;