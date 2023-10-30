import React, { useRef, useEffect } from 'react'
import './NewTodo.css'
 
type Props = {
    onAddTodo: (todoText: string) => void;
}
 
const NewTodo: React.FC<Props> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null)

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText)
    }

return (
    <form onSubmit={todoSubmitHandler}>
        <div className='form-control'> 
            <label htmlFor='todo-text'>Todo text</label>
            <input type='text' id='todo-text' ref={textInputRef}/>
        </div>
        <button type='submit'>ADD TODO</button>
</form>
)
}
 
export default NewTodo