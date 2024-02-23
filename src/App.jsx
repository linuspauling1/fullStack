import {useState, useEffect} from 'react'
import './App.css'

function App() {
  
  const [inputUser, setUser] = useState('')
  const [inputPass, setPass] = useState('')

  function handleChange(event, field) {
    if(field === 'user')
      setUser(event.target.value)
    else if(field === 'pass')
      setPass(event.target.value)
  }

  return (
    <>
      <div id="navbar" className="shadowed">
        <div id="notipy">
          <div id="name">Notipy</div>
          <div id="version">@0.0.0</div>
        </div>
        <div id="sections">
          <button className="nav-btn">👥 USERS</button>
          <button className="nav-btn">📱 APPS</button>
          <button className="nav-btn">🖥️ CLIENTS</button>
          <button className="nav-btn">🔓 LOGOUT</button>
          <button className="nav-btn-round">☀️</button>
          <button className="nav-btn-round">
            <img src="./github-mark-white.png" id="octocat"/>
          </button>
        </div>
      </div>
      <div id="content">
        <div id="sidebar">
          <button className="side-btn">All Messages</button>
          <div className="thick-horizontal"/>
        </div>
        <div id="vertical-delimiter"/>
        <div id="background">
          <div id="my-component">
            <div id="login-title">Login</div>
            <form id="login" className="shadowed">
              <label htmlFor="user" className="label">Username:</label>
              <input
                id="user"
                type="text"
                placeholder="Username"
                value={inputUser}
                onChange={event => handleChange(event,'user')}
              />
              <label htmlFor="password" className="label">Password:</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                onChange={event => handleChange(event, 'pass')}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
