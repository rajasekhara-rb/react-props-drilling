import React from "react";

function ChildComponent(props){
    const {name,age} = props.student;
    return(
        <>
        <h2>Name: {name} </h2>
        <h2>Age: {age}</h2>
        </>
    )
}

export default ChildComponent;