import React from "react";
import DIV from "../../styled_components/styled_div";
import ICONHolder from "../SocialLogoHolders";
import GitHubLogo from '../../assets/github.svg';
import LinkedinLogo from '../../assets/linkedin.svg';
import TwitterLogo from '../../assets/twitter.svg'
import { useTheme } from "styled-components";
function AboutMe(){

    const theme = useTheme()

    return <DIV id="aboutme" bg="#820933" display="flex" justifyContent="space-around"  alignItems='center' width="100%" height="494px">
        <DIV bg="#820933" color='white' style={{lineHeight:'200%',letterSpacing:"1px",wordSpacing:"3px"}}>
            Hi, I'am Vilas Kathera, <br/> A <span style={{color: '#26FFE6',fontFamily: 'sans-serif',fontWeight:'bold'}}>Full Stack Web Developer</span>
            <DIV display='flex' justifyContent="space-between" alignItems='center' bg="#820933">
                <DIV display='flex' alignItems="center" bg="#820933">
                    <ICONHolder link='https://github.com/vilasks' image={GitHubLogo}/>
                    <ICONHolder link='https://www.linkedin.com/in/vilask/' image={LinkedinLogo}/>
                    <ICONHolder link='https://twitter.com/VilasKathera' image={TwitterLogo}/>
                </DIV>
                <button  style={{height: '30px',backgroundColor:'yellow',border:'none',borderRadius:'5%'}}><a style={{textDecoration:'none', color: 'black', fontWeight:'bold'}} title="vilaskathera@gmail.com" href="mailto:vilaskathera@gmail.com">Contact Me</a></button>
            </DIV>
        </DIV>
        <DIV>

        </DIV>
    </DIV>
}

export default AboutMe;