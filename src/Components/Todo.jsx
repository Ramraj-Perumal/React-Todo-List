import React, { useEffect, useRef, useState } from 'react';
import "./Todo.css";
import TodoItems from './TodoItems';

let count = 0;
const Todo = () => {
    const [todo, setTodo] = useState([]);

    const inputRef = useRef(null);

    const add = () => {
        setTodo([...todo, { no: count++, text: inputRef.current.value, display: "" }]);
        inputRef.current.value = "";
        localStorage.setItem("todosCount", count)
    }

    useEffect(()=>{
        setTodo(JSON.parse(localStorage.getItem("todo")));
        count = localStorage.getItem("todosCount")
    },[])

    useEffect(() => {
        setTimeout(()=>{
            console.log(todo);
            localStorage.setItem("todo", JSON.stringify(todo))
        }, 100)
    }, [todo])
    return (
        <div className='todo'>
            <div className='todo-header'>To-Do List</div>
            <div className="todo-add">
                <input ref={inputRef} type="text" placeholder='add your task' className='todo-input' />
                <div onClick={() => { add() }} className="todo-add-btn">ADD</div>
            </div>
            <div className="todo-list">
                {todo.map((item, index) => {
                    return <TodoItems setTodo={setTodo} key={index} no={item.no} display={item.display} text={item.text} />
                })}
            </div>
        </div>
    )
}

export default Todo