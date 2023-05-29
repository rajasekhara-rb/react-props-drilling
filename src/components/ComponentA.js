import React from "react";
import ComponentB from "./ComponentB";

function ComponentA(){
let UsersData = {
    name: "someone",
    email: "someone@gmail.com",
}
return(
    <>
    <h1>Component A</h1>
    <ComponentB data={UsersData}/>
    </>
)
}

export default ComponentA;