import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../Features/todoSlice';

function TodoList() {
    const list=useSelector((state)=>state.todos)
    const dispatch=useDispatch();
    //const li=useSelector((state)=>state.todo.todos)
    const handlRemove=(id)=>{
        //console.log("delete clicked")
        dispatch(removeTodo(id))
        
        
    }
  return (
    <div>
      {list.map((todo)=>(
        <ul className='text-2xl m-2 '>
        <li key={todo.id} 
        className='bg-gray-200 w-fit mr-20'
        >{todo.text}
        <button className='border-1 bg-red-500 ml-20 rounded-lg p-1' onClick={()=>handlRemove(todo.id)}>del</button>
        </li>
        </ul>
      ))}
    </div>
  )
}

export default TodoList
