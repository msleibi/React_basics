import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter > 0 && counter - 1);
  };

  return (
    <div>
      Simple counter: 
       {counter} 
      <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      </div>
      
      </div>
  );
};

export default App;
