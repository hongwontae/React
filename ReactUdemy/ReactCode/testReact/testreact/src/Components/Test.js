import Segment from "./Segment";

function Test(props){
    console.log(props);
    return(
        <div>
            <Segment good={props.test[0]} good2={props.test[1]} good3={props.test[2]}></Segment>
        </div>
    )
}

export default Test;