import DIV from "../../styled_components/styled_div";
import ICONHolder from "../SocialLogoHolders";
import styled, { useTheme } from 'styled-components';
import { breakpoints } from "../../breakpoints";

const ResponsiveImage = styled.img`
width: 496px;
height: 220px;
@media only screen and (max-width: ${breakpoints.md}){
    width: 100vw;
    height: 200px;
    flex-wrap: wrap;
}
`

function SingleProject(props){

    const theme = useTheme()

    const techstack = props.tech.map((ele,i) => {
        return <ICONHolder key={i} image={ele}/>
    })

    return <DIV boxShadow={theme.boxShadow} display='flex' gap='10px' justifyContent='space-around'>
        <DIV>
            <ResponsiveImage src={props.image}/>
        </DIV>
        <DIV style={{flexGrow:1}}>
            <h2 style={{margin:0}}>{props.title}</h2>
            <hr/>
            <p>{props.desc}</p>
            <DIV display='flex' justifyContent='space-between' alignItems='center'>
                <DIV>
                    <h4>Technologies</h4>
                    <DIV display='flex' gap='5px'>
                        {techstack}
                    </DIV>
                </DIV>
                <DIV>
                    <button style={{padding: '10px',marginRight:'10px', fontWeight:'bold',backgroundColor:'#26FFE6',border:'none',borderRadius:'5%',cursor:'pointer'}}><a style={{textDecoration:'none', color: 'black'}} title={props.link} href={props.link} target="_blank">Visit Site</a></button>
                </DIV>
            </DIV>
        </DIV>
    </DIV>
}

export default SingleProject;
