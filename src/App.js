import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'other state'
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState);

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: 'Tobias', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  //witouth () for execute only when is complished the envent, if we put () will be loaded on charge instantly.
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={() => switchNameHandler('Maximilian!!!')}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, 'MaX!')}
      >
         My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
};

export default App;



