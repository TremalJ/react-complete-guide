import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = 'green';

    if(props.showPersons) {
      btnClass = 'red';
    }

    if(props.persons.length <= 2) {
      assignedClasses.push('pred'); // classes['red'];
    }
    if(props.persons.length <= 1) {
      assignedClasses.push('pbold') // classes ['red', 'bold'];
    }   
  
    return (
        <div>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} alt={props.showPersons.toString()}
                onClick={props.clicked}>Switch Name
            </button>
        </div>  
    );    
};

export default cockpit;