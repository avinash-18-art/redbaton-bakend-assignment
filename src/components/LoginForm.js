// LoginForm.js
import React, {useState} from 'react'
import axios from 'axios'

function LoginForm({onLogin}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // Call login API
    axios
      .post('/login', {username, password})
      .then(response => {
        onLogin()
      })
      .catch(error => {
        console.error('Login error:', error)
      })
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginForm
