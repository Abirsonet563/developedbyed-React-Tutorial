import React from 'react';

function App(){
  const hiButton = () =>{
    console.log('Hi')
  }
  return(
    <div>
      <h1>Hello</h1>
      <button onClick={hiButton}>Click Me</button>
    </div>
  );
}

export default App;