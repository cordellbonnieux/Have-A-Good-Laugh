import './App.css'
import './fonts/glashou.ttf'
import Menu from './Menu'
import Content from './Content'
import Footer from './Footer'
import Contact from './Contact'

function App() {

  const now = new Date()
  const announce = new Date('01/01/2023')
  const end = new Date('25/06/2023')
  const live = now >= new Date('01/01/2023') &&  now < end ? true : false

  const app = (
    <div className="App" id="container">
      <div id="bg" />
      <Menu />
      <Content />
      <Footer />
    </div>
  )

  const preHAGL = (
    <div className="App" id="container">
      <div id="bg" />
      Annoounce in x-many days
      <Contact />
    </div>
  )

  const postHAGL = (
    <div className="App" id="container">
      <div id="bg" />
      Annoounce in x-many days
    </div> 
  )

  return live ? app : preHAGL
}

export default App
