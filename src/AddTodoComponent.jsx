import React, { useState } from 'react';

function AddTodoComponent({addTodo}) {
  const [todoDescription, setTodoDescription] = useState("");
  const onUserType = (event) => {
    let value = event.target.value;
    setTodoDescription(value);
  }
  return (
    <div className="AddTodoComponent">
      <input type="text" value={todoDescription} onChange={onUserType}/>
      <button onClick={addTodo.bind(null, todoDescription)}> Add Todo</button>
    </div>
  );
}

export default AddTodoComponent;
