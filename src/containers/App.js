import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor', props);
  }


  state = {
    persons: [
      { id: 'asfa1' , name: 'Max', age: 28 },
      { id: 'asfa2' , name: 'Manu', age: 29 },
      { id: 'asfa3' , name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
  }

  static getDerivedStateFromProps (props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  // componentWillMount () { //Included in getDerivedStateFromProps
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidMount () {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentDidUpdate () {
    console.log('[App.js] shouldComponentDidUpdate')
    return true;
  }

  componentDidUpdate () {
    console.log('[App.js] componentDidUpdate')
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState( {
      persons: persons
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1); // delete elements from an array
      this.setState({persons: persons})
  }

  render () {
    console.log('[App.js] render')
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
          />
        </div>
      );
      style.backgroundColor = 'red';
    }

    return (
        <WithClass className="classes.App">
          <button 
            onClick={() => {
                this.setState({ showCockpit: false});
              }
            }
          >
          Remove Cockpit
          </button>
          {this.state.showCockpit ? 
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          /> : null}
          {persons}
        </WithClass>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
