import React from 'react';
import './App.css';



function App() {
    return (
        <div className="App">
      App component
            <Raiting />
            <Raiting />
            <Raiting />
            <Raiting />

            <Raiting />
            <Accordion />

        </div>
    );
}


function Accordion() {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
function Raiting() {
    return (
        <div>
            <div>Star</div>
        </div>
    )
}

export default App;
