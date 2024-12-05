import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleCountChange = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div>
        <label>Count: {count}</label>
      </div>
      <button onClick={() => handleCountChange(1)}>Increment</button>
      <button onClick={() => handleCountChange(-1)}>Decrement</button>
    </div>
  );
}

export default App;
