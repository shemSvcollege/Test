import React from 'react'
import '../App.css';
import Logo from '../images/logo.png'
export default function Header() {
    return (
        <div className='row svcollegeColor'>
            <div className='col-2'><img className='imageLogo' src={Logo} alt="LOGO" /></div>
            <div className='col-8 title'>מבדק התאמה</div>
            <div className='col-2'></div>            
        </div>
    )
}
