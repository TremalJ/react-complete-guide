import React, { useEffect } from 'react';
import './Cockpit.css';

const Cockpit = (props) => {
    useEffect(() => {
       console.log('[Cockpit.js] useEffect');
       //HTTP request...
       const timer = setTimeout(() => {
          alert('Saved data to the cloud!!')
       },1000);
      return () => {
        clearTimeout(timer);
        console.log('[cockpit.js] Cleanyp work in useEffect')
      }
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] 2 useEffect');
      //HTTP request...
     return () => {
       console.log('[cockpit.js] Cleanyp work in 2nd useEffect')
     };
   });

    let assignedClasses = [];
    let btnClass = 'green';

    if(props.showPersons) {
      btnClass = 'red';
    }

    console.log(props.personsLength);

    if(props.personsLength <= 2) {
      assignedClasses.push('pred'); // classes['red'];
    }
    if(props.personsLength <= 1) {
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

export default React.memo(Cockpit);