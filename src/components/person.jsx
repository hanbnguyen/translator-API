import React, { Component } from 'react';
import {ReactComponent as UpIcon} from './hand-thumbs-up-fill.svg';
import {ReactComponent as DownIcon} from './hand-thumbs-down-fill.svg';
//config = require("./config");



class Person extends Component {
    
    styles = {
        fontSize: 24,
        fontWeight: "normal",

    };

    styless = {
        fontSize: 18,
        fontWeight: "normal",
        color: '#ffffff',
        fontFamily: "Montserrat"

    };

    constructor(props) {
        super(props);
        this.state = {
          color: 'transparent',
          text: "Translated oddly",
          update: "...text edited, click translate once done",
        };
      }

 
      changeColor() {
        this.setState({
            color: '#008000',
            text: "Translated well!"
      })
    }

    changeColors() {
        this.setState({
            color: 'red',
            text: "Translated oddly"
      })
    }

    cleared() {
        this.setState({
            color: 'transparent',
          text: "Translated is oddly",
          update: "...text edited, click translate once done"
        })
    }

    translated() {
        this.setState({
            update: "Translated!"
        })
    }


    render() { 
        
        return (
            
            <div className="person">

                <nav className="navbar navbar-expand-ig navbar-secondary bg-info">
                    <a className="navbar-brand" href="/" style={this.styles}>Person:</a>
                    <div class="dropdown">
                        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select Language
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </nav>


                <div>
                    <form>
                        <div className="form-floating">
                            
                            <textarea class="form-control" 
                                id="text" 
                                rows="14"
                                placeholder="Enter Text">
                                </textarea>
                        </div>

                        <button 
                            style={this.styless} 
                            onClick={this.translated.bind(this)}
                            id="update"
                            type="button"
                            className="btn btn-warning"
                            >
                            Translate
                        </button>
                        <div class="divider"/>
                        <button 
                            style={this.styless} 
                            onClick={this.cleared.bind(this)}
                            className="btn btn-warning"
                            type="reset"
                            >
                            Clear
                        </button>

                        <button onClick={this.changeColor.bind(this)} type="button" class="btn btn-link">
                            <UpIcon />
                        </button>
                        <button onClick={this.changeColors.bind(this)} type="button" class="btn btn-link">
                            <DownIcon />
                        </button>
                    </form>
                </div>

                <h3 style={{color: this.state.color}} id="text" onChange={this.changeColor}>{this.state.text}</h3>
                
                <h3 style={{fontSize: 18,
                    fontWeight: "normal",
                    color: 'primary',
                    fontFamily: "Montserrat"}} 
                    id="update" onChange={this.translated}>{this.state.update}</h3>

                

            </div>

            
        );

    }
}
 
export default Person;