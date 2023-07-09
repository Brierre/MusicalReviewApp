import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate from './components/Navigate';
import MusicalList from './components/MusicalList';


function App() {

  return (
    <div className="bg-dark container-fluid App">
      <div className='row'>
      <Navigate/>
      <MusicalList/>
      </div>
    </div>
  );
}

export default App;
