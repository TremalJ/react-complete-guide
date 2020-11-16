import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Jsp', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26},
    ]
  }

  render () {
    return (
      <div class="App">
        <h1> Hi I'm a React App 1</h1>
        <p>This is really working!</p>
        <button>switch name!</button>
        <Person  name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person  name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person  name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // // // return React.createElement('div',null,'h1','Hi, I\'m a React App!!!')
    // return React.createElement('h1',null,'Hi, I\'m a React App!!!')
  }
}

export default App;
