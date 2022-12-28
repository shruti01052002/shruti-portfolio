import React, { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

    }, [])
    return (
        <>
            <nav>
                <button onClick={toggleNav} style={{ backgroundColor: "#30231d", border: 'none', float: 'right' }} className='btn'><MenuIcon style={{ backgroundColor: '#30231d', padding: '10px 15px 10px ', color: 'white', position: 'relative' }} /></button>
                {(toggleMenu || screenWidth > 500) && (
                    <ul className="list">
                        <li className="items"><HashLink smooth to="/#about" >About</HashLink></li>
                        <li className="items"><HashLink smooth to="/#projects" >Projects</HashLink></li>
                        <li className="items"><HashLink smooth to="/#skills">Skills</HashLink></li>
                        <li className="items"><HashLink smooth to="/#profiles">Profiles</HashLink></li>
                        <li className="items"><HashLink smooth to="/#contact">Contact</HashLink></li>
                    </ul>
                )}
            </nav>
            <br className="break"></br>
            <br className="break"></br>
            <br className="break"></br>
        </>
    );
}

export default Navbar;