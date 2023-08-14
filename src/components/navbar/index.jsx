import React from "react";
import DIV from "../../styled_components/styled_div";
import LOGO from "../../styled_components/logo";
import ThemeSwitch from "../themeSwitch";
import styled,{ useTheme } from "styled-components";

const LinkHolder = styled(DIV)`

&:hover{
    background-color: ${props => props.theme.hoverColor};
    color: black;
}
cursor: pointer;
`

function Navbar({changeTheme}){

    const theme = useTheme()

    function goToProjects(){
        let element = document.getElementById("projectHolder").offsetTop
        window.scroll({
            top: element,
            behavior: 'smooth'
        })
    }

    function goToAbout(){
        let element = document.getElementById('aboutme').offsetTop
        window.scroll({
            top: element,
            behavior: 'smooth'
        })
    }

    return(
        <DIV display='flex' justifyContent='space-between' alignContent='center'>
            <LOGO>Vilas.</LOGO>
            <DIV display='flex' justifyContent="space-between" alignContent='center' alignItems="center" gap="30px">
                <LinkHolder onClick={goToAbout}>About Me</LinkHolder>
                <LinkHolder onClick={goToProjects}>Projects</LinkHolder>
                <LinkHolder><a style={{textDecoration:'none', color: theme.color}} title="vilaskathera@gmail.com" href="mailto:vilaskathera@gmail.com">Contact Me</a></LinkHolder>
            </DIV>
            <ThemeSwitch changeTheme={changeTheme}/>
        </DIV>
    )
}

export default Navbar