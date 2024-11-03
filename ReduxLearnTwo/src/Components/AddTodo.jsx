import React, { useRef, useState } from 'react'
import {useDispatch} from "react-redux"
import {addTodo} from "../Features/todoSlice"
function AddTodo() {
        const [input,setInput]=useState('')
    const dispatch=useDispatch()

    const addTodohandl=(e)=>{
       e.preventDefault();
       
        dispatch(addTodo(input       
      ))
      setInput('') 
        }
    

  return (
    <div className=' justify-center items-center text-center'>
        <form  onSubmit={addTodohandl}>
        <input type="text"
        placeholder='Enter your list'
        className='border-4 border-purple-200 p-2'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
         <button type='submit'
        className='border-2 ml-2 rounded-lg p-2 bg-purple-300 hover:bg-purple-600 hover:border-red-400'
                >Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
