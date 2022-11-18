import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 *    -todo: like { id, title, description, priority }
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * Stateless
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {

  // console.log("EditableTodoList!!!!!!!!!", todos);

  return (
    <div className="EditableTodoList">
      {todos.map(todo => (
        <EditableTodo key={todo.id} todo={todo} update={update} remove={remove} />
      ))}
    </div>
  );
}

export default EditableTodoList;
