import { useState } from 'react';
import ItemCreate from './components/ItemCreate';

function App () {
  const[ tasks, setTasks ] = useState([]);

  const createItem = (taskNames) => {
    console.log(taskNames)
  }

  return (
    <div>
      <ItemCreate onSubmit={createItem}/>
    </div>
  )

}

export default App;
