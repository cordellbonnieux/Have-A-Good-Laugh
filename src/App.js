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

  const app = (
    <div className="App" id="container">
      <div id="bg" />
      <Menu />
      <Content />
      <Footer />
    </div>
  )

  // TODO: when i have the mental energy I will create a timer here that swaps the page
  // to a hidden state after the fest is over

  return app
}

export default App
