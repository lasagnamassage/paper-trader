// import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './Splash.css'

export function Splash() {

  return (
    <div className="Splash">
      <header className="Splash-header">
        <img src={logo} className="Splash-logo" alt="logo" />
        <p>
          Deployed on Firebase.
        </p>
      </header>

    </div>
  )
}