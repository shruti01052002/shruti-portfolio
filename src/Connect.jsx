import React, { useState } from "react";
import Shruti from './images/yadav.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Connect = () => {
    const tar = '_blank';
    const [isIHovering, setIsIHovering] = useState(false);
    const [isLHovering, setLIsHovering] = useState(false);
    const [isTHovering, setTIsHovering] = useState(false);

    const handleIMouseEnter = () => {
        setIsIHovering(true);
    };

    const handleIMouseLeave = () => {
        setIsIHovering(false);
    };
    const handleLMouseEnter = () => {
        setLIsHovering(true);
    };

    const handleLMouseLeave = () => {
        setLIsHovering(false);
    };
    const handleTMouseEnter = () => {
        setTIsHovering(true);
    };

    const handleTMouseLeave = () => {
        setTIsHovering(false);
    };
    return (
        <>
        <section id="contact">
            <div className="phnview">
                <h1 className="connect1">Connect With Me</h1>
                <div style={{ paddingLeft: '50px' }}>
                    <h2 className="email">Email:</h2>
                    <a href="mailto:shrutiyadav26072002@gmail.com" target={tar}><h3 className="gmail">shrutiyadav26072002@gmail.com</h3></a>
                    <h2 className="email">Socials:</h2>
                    <div>
                        <a href='https://www.google.com' target={tar}><InstagramIcon style={{ height: '30px', width: '30px', color: isIHovering ? 'black' : '#30231d' }} onMouseEnter={handleIMouseEnter}
                            onMouseLeave={handleIMouseLeave} /></a>
                        <a href="https://www.linkedin.com/in/shruti-yadav-28a249196/" target={tar}><LinkedInIcon style={{ paddingLeft: "20px", height: '30px', width: '30px', color: isLHovering ? 'black' : '#30231d', }} onMouseEnter={handleLMouseEnter}
                            onMouseLeave={handleLMouseLeave} /></a>
                        <a href="https://twitter.com/ShrutiY38714905" target={tar}><TwitterIcon style={{ paddingLeft: "20px", height: '30px', width: '30px', color: isTHovering ? 'black' : '#30231d', }} onMouseEnter={handleTMouseEnter}
                            onMouseLeave={handleTMouseLeave} /></a>
                    </div>
                </div>
            </div>
            <div className="con_div">
                <div className="proj_div">
                    <div className="edu">
                        <img src={Shruti} alt="Shruti" className="shru" />
                    </div>
                    <div className="edu">
                        <h1 className="connect">Connect With Me</h1>
                        <h2 className="email">Email:</h2>
                        <a href="mailto:shrutiyadav26072002@gmail.com" target={tar}><h3 className="gmail">shrutiyadav26072002@gmail.com</h3></a>
                        <h2 className="email">Socials:</h2>
                        <div>
                            <a href='https://www.google.com' target={tar}><InstagramIcon style={{ height: '30px', width: '30px', color: isIHovering ? 'black' : '#30231d' }} onMouseEnter={handleIMouseEnter}
                                onMouseLeave={handleIMouseLeave} /></a>
                            <a href="https://www.linkedin.com/in/shruti-yadav-28a249196/" target={tar}><LinkedInIcon style={{ paddingLeft: "20px", height: '30px', width: '30px', color: isLHovering ? 'black' : '#30231d', }} onMouseEnter={handleLMouseEnter}
                                onMouseLeave={handleLMouseLeave} /></a>
                            <a href="https://twitter.com/ShrutiY38714905" target={tar}><TwitterIcon style={{ paddingLeft: "20px", height: '30px', width: '30px', color: isTHovering ? 'black' : '#30231d', }} onMouseEnter={handleTMouseEnter}
                                onMouseLeave={handleTMouseLeave} /></a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}
export default Connect;