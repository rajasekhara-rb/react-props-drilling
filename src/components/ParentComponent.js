import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
    // const name = "Budda Rajasekhara Reddy";
    // const age = 24;
    // return <ChildComponent name={name} age={age}/>

    const students = [
        {
            id: 101,
            name: "Reddy",
            age: 24
        },
        {
            id: 102,
            name: "Shivam",
            age: 25
        },
        {
            id: 103,
            name: "Mohan",
            age: 26
        },
        {
            id: 104,
            name: "Raju",
            age: 28
        }
    ]

    return (
        <>
            <h1>Students List</h1>
            {students.map((student) => (    
                <ChildComponent key={student.id} student={student} />
            ))}
        </>

    )
}

export default ParentComponent;