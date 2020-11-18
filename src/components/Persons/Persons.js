import React, { Component } from 'react';
import Person from './Person/Person';

// const persons = (props) => (props.persons.map( (person, index) => {
class Persons extends Component {    
    static getDerivedStateFromProps(props, state) {
        console.log ('[Persons.js] getDriveStateFromProps', props)
        return state;
    }

    // componentWillReceiveProps(props) {  //incluced in snapshot 
    //     console.log('[Persons.js] componentWillReceiveProps',props )
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        return true; 
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) { //included later in componentDidUpdate
    //     console.log ('[Persons.js] getSnapshotBeforeUpdate')
    //     return { message: 'snapshot!'};
    // }

    componentDidUpdate(prevProps, prevSate, snapshot) {
        console.log ('[Persons.js] componentDidUpdate')
        console.log(snapshot);
    }

    render () {
            console.log ('[Persons.js] render')
            return this.props.persons.map( (person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name} 
                    age={person.age} 
                    key={person.id} 
                    changed = {(event) => this.props.changed(event, person.id)} >
                </Person>  
            );
        });
    }       
};

export default Persons;