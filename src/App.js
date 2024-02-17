import {useState, useEffect} from 'react'
import './App.css'

function App() {
  
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
        <div id="background"/>
      </div>
    </>
  )
}

export default App
