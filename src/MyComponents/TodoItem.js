import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <>
        <h4>{todo.Sno}</h4>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>DELETE</button>
        <hr />
    </>
      
  )
}
