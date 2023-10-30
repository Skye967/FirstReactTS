import React,{useState} from 'react'
import ToDoList from './components/ToDoList'
import { Todo } from './todo.model'
import NewTodo from './components/NewTodo'
import {Route} from 'react-router-dom'
 
type Props = {}
 
const App: React.FC = (props: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const toDoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);

  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  }


return (
  <div>
    <NewTodo onAddTodo={toDoAddHandler} />
    <ToDoList items={todos} onDeleteTodo={todoDeleteHandler} />
    
</div>
)
}
 
export default App