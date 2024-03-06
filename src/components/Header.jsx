import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='sticky'>
      <h2>Todo List</h2>
      <Link className='todo_p_button' to={`/add-task`}>
        Create Reminder
      </Link>
    </header>
  )
}

export default Header