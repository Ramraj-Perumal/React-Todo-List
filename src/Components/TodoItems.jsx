import React from 'react'
import "./TodoItems.css"
import { BsCircle, BsCheckCircle } from 'react-icons/bs'
import { AiOutlineCloseCircle, AiTwotoneEdit } from 'react-icons/ai'
// import { BiEdit } from 'react-icons/bi'

const TodoItems = ({ no, display, text, setTodo }) => {


  const deleteItems = (no) =>{
    let data = JSON.parse(localStorage.getItem("todo"));
    data = data.filter((todos)=> todos.no!==no);
    setTodo(data);
  }
  
  const toggle = (no) =>{
    let data = JSON.parse(localStorage.getItem("todo"));
    for(let i = 0; i<data.length;i++){
      if(data[i].no === no){
        if(data[i].display === ""){
          data[i].display = "line-through";
        }
        else{
          data[i].display = "";
        }
        break;
      }
    }
    setTodo(data);
  }
  return (
    <>
    <div className='todo-item'>
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
        {display === "" ? <BsCircle className='check' /> :  <BsCheckCircle className='check' /> }
        <div className="todoitems-text">
          {text}
        </div>
      </div>
      <div className="delete">
          {/* <AiTwotoneEdit style={{marginRight:"10px"}} /> */}
          <AiOutlineCloseCircle  onClick={()=>{deleteItems(no)}} />
      </div>
    </div>
    </>
  )
}

export default TodoItems