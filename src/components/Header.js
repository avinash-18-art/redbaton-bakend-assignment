import React from 'react'

function Header({loggedIn, onLogin, onLogout}) {
  return (
    <div>
      <h1>News Dashboard</h1>
      {loggedIn ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <button onClick={onLogin}>Login</button>
      )}
    </div>
  )
}

export default Header
