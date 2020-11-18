import React from 'react';

const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
      btnClass = assignedClasses.Red;
    }

    if(props.persons.length <= 2) {
      assignedClasses.push('red'); // classes['red'];
    }
    if(props.persons.length <= 1) {
      assignedClasses.push('bold') // classes ['red', 'bold'];
    }   
    console.log(btnClass);
    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} alt={props.showPersons}
                onClick={props.clicked}>Switch Name
            </button>
        </div>  
    );    
};

export default cockpit;