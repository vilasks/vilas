import styled from 'styled-components';
import { breakpoints } from '../breakpoints';
const DIV = styled.div`
color: ${props => props.color ? props.color : props.theme ? props.theme.color : ''};
background-color: ${props => props.bg ? props.bg : props.theme.bg ? props.theme.bg : ''};
height: ${props => props.height};
width: ${props => props.width};
display: ${props => props.display};
flex-direction: ${props => props.flexDirection};
justify-content: ${props => props.justifyContent};
align-content: ${props => props.alignContent};
align-items: ${props => props.alignItems};
gap: ${props => props.gap};
box-shadow: ${props => props.boxShadow};
flex-grow: ${props => props.flexgrow};
@media only screen and (max-width: ${breakpoints.md}){
    flex-wrap: wrap;
    padding: ${props => props.padding};
}
`

export default DIV