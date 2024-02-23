import React from 'react';
import './App.css';



function App() {
    return (
        <div className="App">
            App component
            <Rating />
            <Rating />

            <Accordion />

        </div>
    );
}


function Accordion() {
    return (
        <div>
            <AccordionTitle />
            <AccordionMenu />

        </div>
    )
}
function Rating() {
    console.log('Hello')
    return (
        <div>
            <div>Star</div>
        </div>
    )
}
function AccordionMenu() {
    console.log('HI')
    return (
        <div>
            <h3> Menu</h3>

        </div>
    )
}
function AccordionTitle() {
    return (

        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    )
}
export default App;
