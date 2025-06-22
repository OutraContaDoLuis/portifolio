import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import '../src/App.css';

import { Outlet, useNavigate } from 'react-router';

function App() {

  const navigate = useNavigate();

  function changePageFunction(route) {
    return navigate(route, { replace: true })
  }

  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <>
      <div id="body--main" className="box box--column">
        <div id="topbar" className="box box--row width--content--1 align--center">
          <div className="box">
            <h3 id="topbar--name">LUIS H. CAMPANER</h3>
          </div>
          <div className="box box--row">
            <h3 className="title--3 title--3__topbar" onClick={() => changePageFunction("/")}>Inicio</h3>
            <div className="box box--space__topbar"></div>
            <h3 className="title--3 title--3__topbar" onClick={() => changePageFunction("about")}>Sobre</h3>
            <div className="box box--space__topbar"></div>
            <h3 className="title--3 title--3__topbar">Projetos</h3>
            <div className="box box--space__topbar"></div>
            <h3 className="title--3 title--3__topbar">Contato</h3>
          </div>
        </div>
        <Outlet />
        <div id="footer" className="box box--column max--content--width">
          <div className="box max-content-width divider__div"></div>
          <div className="box box--column max--content--height max--content--width between-content">
            <div id="footer--row--links" className="box align--left margin--1">
              <div className="box box--column footer--buttons--column">
                <h2 className="footer__h2 align--left">Links</h2>
                <p className="align--left">Sobre</p>
                <p className="align--left">Projetos</p>
              </div>
              <div className="box box--column footer--buttons--column">
                <h2 className="footer__h2 align--left">Contato</h2>
                <p className="align--left">Linkedin</p>
                <p className="align--left">Instagram</p>
                <p className="align--left">Github</p>
              </div>
              <div className="box box--column footer--buttons--column">
                <h2 className="footer__h2 align--left">Jurídico</h2>
                <p className="align--left">Termos e Condições</p>
              </div>
            </div>
            <div className="box box--row width--content--1 between-content"> 
              <p id="footer--copyright__p" className="align--left">&#169; { currentYear } Luis Henrique Campaner</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
