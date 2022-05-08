import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>  
    </div>
  );
}

export default App;
