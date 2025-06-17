import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import '../src/App.css';

import HomePage from '../src/pages/HomePage.jsx';

function App() {

  return (
    <>
      <div id="body--main" className="box box--column max--content">
        <div id="topbar" className="box box--row width--content--1 align--center">
          <div className="box">
            <h3>LUIS H. CAMPANER</h3>
          </div>
          <div className="box box--row">
            <h3 className="title--3 title--3__topbar">Inicio</h3>
            <div className="box box--space__topbar"></div>
            <h3 className="title--3 title--3__topbar">Sobre</h3>
            <div className="box box--space__topbar"></div>
            <h3 className="title--3 title--3__topbar">Projetos</h3>
            <div className="box box--space__topbar"></div>
            <h3 className="title--3 title--3__topbar">Contato</h3>
            <div className="box box--space__topbar"></div>
          </div>
        </div>
        <HomePage />
      </div>
      
    </>
  )
}

export default App
