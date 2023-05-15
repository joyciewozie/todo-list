import { useState } from 'react';

function ItemCreate ( {onSubmit} ) {
  const [ taskNames, setTaskNames ] = useState('')

  // Update state
  const handleChange = (event) => {
    setTaskNames(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit((taskNames));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Enter your task: </label>
      <input value={taskNames} onChange={handleChange} type="text"/>
      <button>Enter</button>
    </form>
  )

}

export default ItemCreate;
