// App.js
import React, {useState} from 'react'
import Header from './Header'
import LoginForm from './LoginForm'
import NewsList from './NewsList'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setLoggedIn(false)
  }

  return (
    <div>
      <Header
        loggedIn={loggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      {loggedIn ? <NewsList /> : <LoginForm onLogin={handleLogin} />}
    </div>
  )
}

export default App
