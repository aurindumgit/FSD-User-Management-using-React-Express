import React, { useState, useEffect } from 'react'
import axios from 'axios'

const View = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    viewdata()
  }, [])

  const viewdata = async () => {
    const res = await axios.get('http://localhost:4000/users')
    setUsers(res.data)
  }

  return (
    <div style={{ padding: '10px', border: '2px solid #ccc', backgroundColor: '#fffacd' }}>
      <h2>Registered Users List</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: 'orange', color: 'white' }}>
            <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.id}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default View
