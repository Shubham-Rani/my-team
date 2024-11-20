import logo from './logo.svg';
import './App.css';
import './CSS/Todos.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import React, { useState, useEffect } from 'react';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './MyComponents/Home';
import LinkPage from './MyComponents/LinkPage';
import ImagesDemo from './MyComponents/ImagesDemo';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);

    //---- Deleting this way in react will not work -----
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)

    let Sno;
    if (todos.length == 0) {
      Sno = 1;
    }
    else {
      Sno = todos[todos.length - 1].Sno + 1;
    }
    const myTodo = {
      Sno: Sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>

     <Router>
        <Header title="My Website" searchBar={true} />
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/link" element={<LinkPage />} />
        </Routes>
        
        <ImagesDemo/>
        <Footer />
    </Router>

    </>
  );
}

export default App;








