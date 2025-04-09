import React from 'react'
import axios from 'axios'
const Delete = () => {
    const handleDelete=async(e)=>{
        e.preventDefault()
        const id=e.target.id.value;
        await axios.delete(`http://localhost:4000/users/${id}`)
        alert('Product deleted successfully')
    }
  return (
    <div>
        <form onSubmit={handleDelete}>
            <input type="text" placeholder="Enter user ID" name="id" />
            <button type="submit">Delete</button>
        </form>
    </div>
  )
}

export default Delete