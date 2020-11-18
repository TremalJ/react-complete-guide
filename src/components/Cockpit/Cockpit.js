import React, { useEffect } from 'react';
import './Cockpit.css';

const Cockpit = (props) => {
    useEffect(() => {
       console.log('[Cockpit.js] useEffect');
       //HTTP request...
       setTimeout(() => {
          alert('Saved data to the cloud!!')
       },1000)
    }, [props.persons]);

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

export default Cockpit;