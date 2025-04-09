import React from 'react'
import axios from 'axios'

const Delete = () => {
  const handleDelete = async (e) => {
    e.preventDefault()
    const id = e.target.id.value
    await axios.delete(`http://localhost:4000/users/${id}`)
    alert('User deleted successfully')
  }

  return (
    <div style={{ padding: '10px', border: '2px solid #ccc', backgroundColor: '#ffe4e1' }}>
      <h2>Delete User</h2>
      <form onSubmit={handleDelete} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <input type="text" placeholder="Enter user ID" name="id" />
        <button type="submit" style={{ padding: '5px', backgroundColor: 'red', color: 'white' }}>Delete</button>
      </form>
    </div>
  )
}

export default Delete
