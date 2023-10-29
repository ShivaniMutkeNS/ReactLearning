import Chai from "./Chai.jsx"
import React from "react";

function App() {
    const userName  = <h1>New USER</h1>
    return (
        <>
            <Chai/>
            <p>this this paragraph and user name is {userName}</p>
        </>
    )//we can return only one html component in return so instead of using div we can use only <></> fragment
}

export default App
//in vite we need to use jsx and all function name should be in uppercase
//in basic react it will not needed

