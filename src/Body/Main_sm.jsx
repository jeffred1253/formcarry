import React from 'react';
import './../styles/main.css'
import nba from './../images/nba-logo.9219f4e8.svg'
import continental from './../images/continental-logo.910bf7a2.svg'
import vixen from './../images/vixen-logo.f7a6c087.svg'
import yeezy from './../images/yeezy-logo.57b88750.svg'
import cannes from './../images/cannes-logo.673ba9cc.svg'
import Menus from '../components/Menus';

const Main_sm = () => {
    return (
        <div className='main'>
            <div className='blue-title'>COLLECT FORM SUBMISSIONS</div>
            <h1 className='main-title'>Get emails and messages from your HTML form.</h1>
            <div>Code your own HTML form and style it, then point your form to formcarry to get email notifications, upload files, block spam and integrate with other apps.</div>
            <form className='mail'>
                <input type="text" placeholder='Your email address...' />
                <button>Get Stared</button>
            </form>
            <div className='brands'>
                <div>TRUSTED BY TOP BRANDS WORLDWIDE</div>
                <div>
                    <img src={nba} alt="nba" />
                    <img src={continental} alt="continental" />
                    <img src={vixen} alt="vixen" />
                    <img src={yeezy} alt="yeezy" />
                    <img src={cannes} alt="cannes" />
                </div>
            </div>
            <div className='violet-title'>Setup, easy-peasy!</div>
            <h2 className='subtitle'>Easiest way to setup <br />your HTML form.</h2>
            <p>
                Don't worry about emails, spam checking, integrations and form issues ever, <br />
                code your front-end, add your unique formcarry URL, and we'll handle the rest. <br />
                Within literally just 3 minutes, you can have a fully functional form for any platform
            </p>
            <div className='features'>
                <div className='yellow-title'>Savior, yeah time-savior</div>
                <h2 className='subtitle'>
                    Features that <br />
                    you need.
                </h2>
                <p>
                    Use features that normally take days to code, in minutes. <br />
                    Integration with your CRM in 2 minutes. Set auto-responses <br />
                    in 2 minutes. Field validations in 2 minutes. You get the idea.
                </p>
                <Menus/>
            </div>

        </div>
    );
};

export default Main_sm;