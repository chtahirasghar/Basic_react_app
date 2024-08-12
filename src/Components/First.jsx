import React, { useState } from 'react'
import StudentR from './StudentR';

export default function First() {
    const [name, setName] = useState("Tahir");
    const [sub, setSub] = useState("JS");
    let changeName = () => {
        setName("Asghar")
    }
    function changeSub() {
        sub == "JS" ? setSub("React JS") : setSub("JS");
    }
    return (
        <>
            <h1>React js First Project</h1>
            <h2>Name : {name}</h2>
            <button onClick={() => { changeName() }}>ChnageName</button>
            <StudentR data={sub} />
            <button onClick={() => changeSub()}>Change Subject</button>


        </>
    )
}
