import React from 'react';
import ReactDOM from 'react-dom/client'; //react implementation use for web application
//||li we use react native to develop mobile app
import Chai from './Chai';

const root = ReactDOM.createRoot(document.getElementById('root'));//used in public/index.html
root.render(
    <>
        <Chai /><!--this is our new componet-->
        <h1>hey hey hey new chai</h1>
    </>
);
