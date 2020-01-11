import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Jumbo from './components/Jumbo';
import Events from './components/Events';


function App() {
  return (
    <div className="App">
       <NavBar />
       <Jumbo />
       <Events />
    </div>
  );
}

export default App;