import React, { PureComponent } from 'react';
import Person from './Person/Person';

// const persons = (props) => (props.persons.map( (person, index) => {
class Persons extends PureComponent {  
    state = {

    }
    

    static getDerivedStateFromProps(props, state) {
        console.log ('[Persons.js] getDriveStateFromProps', props)
        return state;
    }

    // componentWillReceiveProps(props) {  //incluced in snapshot 
    //     console.log('[Persons.js] componentWillReceiveProps',props )
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate')
    //     if(nextProps.persons !== this.props.person || 
    //        nextProps.changed !== this.props.changed ||
    //        nextProps.clicked !==this.props.click) {
    //         return true;
    //     }
    //     return false; 
    // }

    //hen you should not add shouldComponentUpdate or React memo because you will just execute some extra

    // logic that makes no sense and actually just slows down the application a tiny bit.

    getSnapshotBeforeUpdate(prevProps, prevState) { //included later in componentDidUpdate
        console.log ('[Persons.js] getSnapshotBeforeUpdate')
        return { message: 'snapshot!'};
    }

    componentDidUpdate(prevProps, prevSate, snapshot) {
        console.log ('[Persons.js] componentDidUpdate')
        console.log(snapshot);
    }

    componentWillUnmount () {
        console.log ('[Persons.js] componentWillUnmount')
    }

    render () {
            console.log ('[Persons.js] rendering...')
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