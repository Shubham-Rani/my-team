import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {

     const[title, setTitle] = useState("");
     const[desc, setDesc] = useState("");

     const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can not be blank");
        }
        else{
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
     }

  return (
    <div className="container my-5">
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Todo Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control"  aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todo Description</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" />
            </div>
           
            <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>

    </div>
  )
}
