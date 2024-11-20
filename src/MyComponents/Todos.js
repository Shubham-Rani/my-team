import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

export const Todos = (props) => {

  const myStyle={
    minHeight: "30vh",
    fontWeight: "500",
  }

  const h1Style={
    color: "blue",
  }

  return (
         <div className="container" style={myStyle}>
            <h3>Todos List</h3>
            {props.todos.length===0? "No Todos to dispaly": props.todos.map((todo) => {
                return (
                    <>
                      <TodoItem todo={todo} key={todo.Sno} onDelete={props.onDelete}/>
                    </>
                    )
              })
            }

            {/* <TodoItem todo={todo[0]}/> */}    
         </div>
  )
}


