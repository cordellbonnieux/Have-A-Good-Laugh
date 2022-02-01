import './App.css';
import './fonts/glashou.ttf';
import Menu from './Menu';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="App" id="container">
      <div id="bg" />
      <Menu />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
