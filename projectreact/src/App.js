import React, {useState} from 'react';
import Tweet from './tweet';

function App(){
  const [count, setCount] = useState(10);
  function increment (){
   setCount(count + 1);
}
  return(
    <div className='app'>
      <button onClick={increment}>Incrememnt</button>
      <p>{count}</p>
      <Tweet name="Mosh" message="700K my dudes"/>

    </div>
  );
}

export default App;