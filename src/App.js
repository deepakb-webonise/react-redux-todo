import React from "react";
import ListTodoComponent from "./ListTodoComponent";
import AddTodoComponent from "./AddTodoComponent";
import { connect } from "react-redux";
import { addTodo } from "./store/actions/todoAction";

function App(props) {
  const addTodo = todo => {
    console.log(todo);
    let todoObject = {
      id: 1,
      description: todo
    }

    props.addTodo(todoObject);
  };
  return (
    <div className="App">
      <AddTodoComponent addTodo={addTodo} />
      <ListTodoComponent todos={props.myTodos} />
    </div>
  );
}
const mapStateToProps = store => {
  return { myTodos: store.todos };
};
const mapDispacthToProps = (dispatch) => {
  return { addTodo: (todo) => dispatch(addTodo(todo)) };
};
export default connect(mapStateToProps, mapDispacthToProps)(App);
