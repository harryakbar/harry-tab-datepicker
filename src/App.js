import React from 'react';
import './App.css';
import { Tab, DatePicker } from './modules';

function App() {
  return (
    <div className="App">
      <Tab />
      <div style={{ height:'10px', background: 'black' }}></div>
      <DatePicker />
    </div>
  );
}

export default App;
