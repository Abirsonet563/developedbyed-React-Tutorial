import React, {useState} from 'react';
import Tweet from './tweet';

function App(){
  const [red, setRed] = useState(false)
  const [count, setCount] = useState(10);
  function increment (){
   setCount(count + 1);
  //  setRed(true)
  //toggle
  setRed(!red);
}
  return(
    <div className='app'>
      <button onClick={increment}>Incrememnt</button>
      <h1 className={red ? "red" : ""}>Red Color</h1>
      <p>{count}</p>
      <Tweet name="Mosh" message="700K my dudes"/>

    </div>
  );
}

export default App;