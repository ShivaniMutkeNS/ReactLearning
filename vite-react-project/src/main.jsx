import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";

function MyApp() {
    return (
        <div>
            <h1>Custom app</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)
const anotherUser = <h1>New USER</h1>

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    "This is React element",
    anotherUser
)
//used in public/index.html
ReactDOM.createRoot(document.getElementById('root')).render(
    // <>1
    //     <App/>
    //     <MyApp></MyApp><!--we can also write MyApp()-->
    // </>
    //MyApp() 2
    //ReactElement 3
   // reactElement //4 - 5
    <App/>
)


