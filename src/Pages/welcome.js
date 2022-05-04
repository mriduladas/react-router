import { useEffect } from "react";

const Welcome = (props) => {

    useEffect(()=> {console.log(props.path)}, [props.path]);
    return <h1>The Welcome Page. Path is {props.path}</h1>
}

export default Welcome;