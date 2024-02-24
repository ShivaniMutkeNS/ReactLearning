import {useState} from 'react'
import './App.css'
import Card from "./Components/Cards.jsx";
import Card2 from "./Components/Card2.jsx";
import BgChangerApp from "./Components/bg-changer"
import PassWordGenApp from "./Components/password-generator.jsx"
import Project from "./Components/projects.jsx";
function App() {
    let obj ={
        user:"Shivani",
        age:24
    }
    let arr=[1,2,3,4,5]

    return (
        <>
            <h1 className='bg-purple-400 text-black p-4 rounded-xl'>Lets Do code with chai</h1>
            <Card channel ="Chai Or CODE" object={arr} object2={obj}></Card>
            <Card2 name="Shivani" profession="Full-Stack Developer"></Card2>
            <Project></Project>
            {/*<Card2 name="Shivani"></Card2>*/}
            <PassWordGenApp></PassWordGenApp>
            <BgChangerApp></BgChangerApp>

        </>
    )
}

export default App
