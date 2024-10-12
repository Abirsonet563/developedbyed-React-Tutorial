import React, {useState} from 'react';
import Tweet from './tweet';

function App(){
const [users, setUsers] = useState([
  {name: "Abir", message: "Be a Good Man"},
  {name: "Hasan", message: "Money is Not Everything"},
  {name: "Sonet", message: "Time is Most Expensive Things"}
]);

  return(
    <div className='app'>
     {users.map(user => (
      <Tweet name= {user.name} message = {user.message}/>
     ))}

    </div>
  );
}

export default App;