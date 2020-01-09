import React from 'react';

function ListTodoComponent({todos}) {
  return (
    <table>
      <tr>
        <th>Sr. No</th>
        <th>Description</th>
        <th>Operation</th>
      </tr>
      {
        todos.map(todo => {
          return (<tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.description}</td>
            <td><button>Delete</button><button>Edit</button></td>
          </tr>)
        })
      }
    </table>
  );
}

export default ListTodoComponent;
