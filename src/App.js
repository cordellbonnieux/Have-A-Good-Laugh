import { useState, useEffect } from 'react'
import './App.css'
import './fonts/glashou.ttf'
import Menu from './Menu'
import Content from './Content'
import Footer from './Footer'
import Contact from './Contact'

import flyer from './images/flyers/hagl2023_anim.gif'

function App() {
  const [ now, setNow ] = useState(new Date())
  const announce = new Date('01/01/2023')
  const end = new Date('25/06/2023')
  const live = new Date() >= new Date('01/01/2023') &&  new Date() < end ? true : false

  const app = (
    <div className="App" id="container">
      <div id="bg" />
      <Menu />
      <Content />
      <Footer />
    </div>
  )

  const announceApp = (
    <div className="App" id="container">
      <div id="bg" />
      <div className='section section_dark'>
        <h1>Have A Good Laugh</h1>
        <img src={flyer} alt='Have A good Laugh 2023 Animated Announce Flyer' style={{maxWidth: '100%'}}/>
        <h2>Tickets, line-up, venues and more right here on Februray 5th!</h2>
      </div>
      <Contact />
    </div>
  )

  const notHAGL = (
    <div className="App" id="container">
      <div id="bg" />
      <div className='section section_dark'>
        <h1>Have A Good Laugh</h1>
        <h2>Line-up announcement in {31 - now.getDate()} days and {12 - (now.getMonth() + 1)} months.</h2>
      </div>
      <Contact />
    </div>
  )

  return app
}

export default App
