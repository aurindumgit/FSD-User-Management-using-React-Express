import React from 'react'
import axios from 'axios'

const Update = () => {
  const handleupdate = async (e) => {
    e.preventDefault()
    const id = e.target.id.value
    const name = e.target.name.value
    const age = e.target.age.value
    const data = { name, age }
    await axios.put(`http://localhost:4000/users/${id}`, data)
    alert("Success")
  }

  return (
    <div style={{ padding: '10px', border: '2px solid #ccc', backgroundColor: '#f0f8ff' }}>
      <h2>Update User</h2>
      <form onSubmit={handleupdate} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>ID: <input type="text" name="id" /></label>
        <label>Name: <input type="text" name="name" /></label>
        <label>Age: <input type="text" name="age" /></label>
        <button type="submit" style={{ padding: '5px', backgroundColor: 'blue', color: 'white' }}>Update</button>
      </form>
    </div>
  )
}

export default Update
