import LightLogo from '../../assets/light_mode.svg';
import DarkLogo from '../../assets/dark_mode.svg';
import styled, { useTheme } from 'styled-components';

const ThemeBtn = styled.span`

padding: 5px 9px 8px 5px;
background-color: rgba(216, 189, 203, 0.3);
width: 20px;
height: 20px;
border-radius: 10%;
text-align: center;
cursor: pointer;
&:hover{
    box-shadow: 0px 5px 5px -0px rgba(216,190,205,0.5);
}
transition: box-shadow 300ms;
margin-right: 5px;
`

function ThemeSwitch({changeTheme}){
    const theme = useTheme()
    if(theme?.name === "dark"){
        return <ThemeBtn onClick={() => changeTheme()} className='material-symbols-outlined'>light_mode</ThemeBtn> 
    }else{
        return <ThemeBtn onClick={() => changeTheme()} className='material-symbols-outlined'>dark_mode</ThemeBtn>
    }
}

export default ThemeSwitch