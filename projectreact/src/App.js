import React from 'react';
import Tweet from './tweet';

function App(){

  return(
    <div className='app'>
      <Tweet name="Dev ED" message="This is a Random Tweet"/>
      <Tweet name="John Snow" message="My new Course is Available"/>
      <Tweet name="Winter is Coming" message="I'm the True King"/>
      <Tweet name="Mosh" message="700K my dudes"/>

    </div>
  );
}

export default App;