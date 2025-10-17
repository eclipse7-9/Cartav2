import React from 'react'
import { useState, useEffect } from 'react'
import '../Card.css'

export default function Card() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  const toggleTheme = () => {
    setDarkMode((prev) => !prev)
  }

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <div className={`card ${darkMode ? 'dark' : ''}`}>
      <img
        src="https://picsum.photos/400/400"
        alt="avatar"
        className="avatar"
      />

      <h2 className="name">Wilso Esteban Ontibón</h2>

      <p className="description">
        "Y hay que prohibir el autotune,"
      </p>

      <button onClick={toggleTheme} className="theme-button">
        {darkMode ? 'MODO CLARO ☀️' : 'MODO OSCURO 🌙'}
      </button>
    </div>
  )
}
