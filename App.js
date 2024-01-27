import React from "react";
import ReactDom from "react-dom/client";


// const JSXheading = <h1>Namaskar Dosto</h1>;

// console.log(JSXheading);
const ComponentComposition = ()=>(
    <h1>Toh kese ho app log</h1>
)

const HeadingComponent = ()=>{
    return (
        <div>
        <h1>Namaskar Dosto</h1>
       {ComponentComposition()}
        </div>
    )
}


const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />);
