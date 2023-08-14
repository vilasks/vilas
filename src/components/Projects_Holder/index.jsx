import SingleProject from "../single_project";
import { WhispheringChamber,BhavCopy } from "../../projects";
import DIV from "../../styled_components/styled_div";

function Projects(){
    return <DIV id="projectHolder" display='flex' flexDirection='column' gap='30px'>
        <SingleProject {...WhispheringChamber} />
        <SingleProject {...BhavCopy}/>
    </DIV>
        
    
}

export default Projects