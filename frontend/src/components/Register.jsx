import React from 'react'
import axios from 'axios'

const Register = () => {
  const handleregister = async (e) => {
    e.preventDefault()
    const user = {
      name: e.target.name.value,
      age: e.target.age.value
    }
    await axios.post('http://localhost:4000/users', user)
    alert('User Registered Successfully')
  }

  return (
    <div style={{ padding: '10px', border: '2px solid #ccc', backgroundColor: '#f9f9f9' }}>
      <h2>Register User</h2>
      <form onSubmit={handleregister} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>Name: <input type='text' name='name' /></label>
        <label>Age: <input type='text' name='age' /></label>
        <button type='submit' style={{ padding: '5px', backgroundColor: 'green', color: 'white' }}>Register</button>
      </form>
    </div>
  )
}

export default Register
