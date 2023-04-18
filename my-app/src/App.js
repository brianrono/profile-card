import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfile from './components/profile';



const App = () => {
  const name = 'Brian Rono';
  const age = 24;
  const hobbies = ['Playing Video Games', 'Travelling', 'Watching movies'];

  return (
    <div className="App">
      <h1>My Profile</h1>
      <UserProfile name={name} age={age} hobbies={hobbies} />
    </div>
  );
};

export default App;




// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

