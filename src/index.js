import React from 'react';
import ReactDOM from 'react-dom';
import './App.sass';
import Header from "./header";
import Card from "./card"


const App = () =>{
    return (
        <div>
        <Header text={"Receipe search"}/>
        <div className="container">
          <Card/>
        </div>

        <Header text={"Developed by Jithendra"}/>
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'));
