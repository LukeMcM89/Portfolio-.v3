import logo from './logo.svg';
import Header from './pages/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <About/>
     <Portfolio/>
     <Footer/>
    </div>
  );
}

export default App;
