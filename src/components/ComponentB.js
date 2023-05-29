import React from "react";
import ComponentC from "./ComponentC";

function ComponentB(props) {
    return (
        <>
            <h1>Component B</h1>
            <ComponentC data={props.data} />
        </>

    )
}

export default ComponentB;