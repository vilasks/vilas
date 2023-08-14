import React from "react";
import styled from 'styled-components';

const IMG = styled.img`
width: 50px;
height: 50px; 
filter: grayscale(100%);
transition: filter 500ms;
&:hover{
    filter: grayscale(0%)
}
`

function ICONHolder({image,link}){
    return <a title={link} style={{margin:0,padding:0}} href={link} target="_blank"><IMG src={image}/></a>
}

export default ICONHolder;