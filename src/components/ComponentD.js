import React from "react";

function ComponentD(props){
    return(
        <>
        <h1>Component D</h1>
        <h1> Name: {props.data.name}</h1>
        <h1>Email: {props.data.email}</h1>
        </>
    )
}

export default ComponentD;