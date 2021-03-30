
import './App.css';
import React from "react";
import Person from './components/person';



function App() {
  

  return (
    
                <div className="app">
                    <nav className="navbar navbar-expand-ig navbar-primary bg-info">
                        <a className="navbar-brand" href="/" style={{fontSize: 36, fontWeight: "normal", fontFamily: "Montserrat"}}>Personal Translator</a>
                    </nav>
                    <div class="dividerss"/>
                    <div class="d-flex justify-content-center">
                      <Person />
                      <div class="dividers"/>
                      <Person />
                      
                    </div>
                    <div class="dividersss"/>
                    <div class="d-flex justify-content-center">
                    <a href="https://elearning.ufl.edu/supported-services/qualtrics/">
                      <button 
                        style={{fontSize: 18,
                          fontWeight: "normal",
                          color: 'primary',
                          fontFamily: "Montserrat"}} 
                        
                        className="btn btn-primary"
                        type="button">
                        Exit to survey
                      </button>
                      </a>
                    </div>

                </div>
  );
}

export default App;
