import React from 'react';
import './App.css';
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'

function App() {
  return (
    <div>
      <h1 className="text-center text-danger">
        Counter
      </h1>
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default App;
