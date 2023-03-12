
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Bollywood from './Pages/bollywood/Bollywood';
import Home from './Pages/Home';
import Technology from './Pages/Technology/Technology';
import Hollywood from './Pages/Hollywood/Hollywood';
import Fitness from './Pages/Fitness/Fitness';
import Food from './Pages/Food/Food';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import FullView from './Reusable/FullView';
import Footer from './Component/Footer';

function App() {
  return (
    <>
    <div className="App">
      <Header/>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Bollywood' element={<Bollywood/>}/>
        <Route path='/Technology' element={<Technology/>}/>
        <Route path='/Hollywood' element={<Hollywood/>}/>
        <Route path='/Fitness' element={<Fitness/>}/>
        <Route path='/Food' element={<Food/>}/>
        <Route path='/:view' element={<FullView/>}/>
        <Route path='Bollywood/:title' element={<FullView/>}/>
        <Route path='/Hollywood/:view' element={<FullView/>}/>
        <Route path='/Technology/:view' element={<FullView/>}/>
        <Route path='/Fitness/:view' element={<FullView/>}/>
        <Route path='/Food/:view' element={<FullView/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
