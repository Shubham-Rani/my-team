import React from 'react'

export default function Footer() {
    let footerStyle = {
        border: "5px solid green"
    }
  return (
    <footer className='bg-dark py-3 mt-5 text-light' style={footerStyle}>
        <p className='text-center'>Copyright &copy; MyTodosList.com</p>
    </footer>
  )
}
