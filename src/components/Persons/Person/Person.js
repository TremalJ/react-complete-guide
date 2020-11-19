import React, { Component } from 'react';
import './Person.css'
import Aux from '../../../hoc/Aux';
// const person = (props) => {
class Person extends Component {    
    
    render (){
        return (
        <Aux>
            <p key="1" onClick={this.props.click} >I'm {this.props.name} and I have {this.props.age} years old! </p>
            <p key="2">{this.props.children}</p>
            <input 
                key="3" 
                type="text" 
                onChange={this.props.changed}  
                value={this.props.name}
            />
        </Aux>
            
        );
    }
};

export default Person;