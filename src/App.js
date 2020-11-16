import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render () {
    return (
      <div class="App">
        <h1> Hi I'm a React App 1</h1>
        <p>This is really working!</p>
        <Person  name="Max" age="28" />
        <Person name="Manu" age="29" >My hobbies: Racing</Person>
        <Person name="Stephanie" age="26" />
      </div>
    );
    // // // return React.createElement('div',null,'h1','Hi, I\'m a React App!!!')
    // return React.createElement('h1',null,'Hi, I\'m a React App!!!')
  }
}

export default App;
