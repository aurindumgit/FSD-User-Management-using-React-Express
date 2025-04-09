import React from 'react'
import Register from './components/Register'
import View from './components/View'
import Delete from './components/Delete'
import Update from './components/Update'

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ backgroundColor: 'orange', padding: '10px', textAlign: 'center' }}>User Registration System</h1>
      <div style={{ margin: '20px 0' }}>
        <Register />
      </div>
      <div style={{ margin: '20px 0' }}>
        <Update />
      </div>
      <div style={{ margin: '20px 0' }}>
        <Delete />
      </div>
      <div style={{ margin: '20px 0' }}>
        <View />
      </div>
    </div>
  )
}

export default App
