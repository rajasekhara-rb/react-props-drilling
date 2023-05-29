import React from "react";
import ComponentD from "./ComponentD";

function ComponentC(props){
    return(
        <>
        <h1>Component C</h1>
        <ComponentD data={props.data}/></>
    )
}

export default ComponentC;