import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Electronicspage from './pages/Electronicspage';
import Jewellerypage from './pages/Jewellerypage';
import Menscloth from './pages/Menscloth';
import Womenscloth from './pages/Womenscloth';
import Registerpage from './pages/Registerpage';
import Login from './pages/Loginpage';
import Cartpage from './pages/Cartpage';
import Errorpage from './pages/Errorpage';
import Favroitepage from './pages/Favroitepage';



function App() {
  return (
    <>
    <div className='whole-container'>
    <div className="App">
      <Router>
        <Routes>
        <Route path='/Register' element = {<Registerpage/>}></Route>
          <Route path='/login' element = {<Login/>}></Route>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/electronics' element = {<Electronicspage/>}></Route>
          <Route path='/jewellery' element = {<Jewellerypage/>}></Route>
          <Route path='/menscloth' element = {<Menscloth/>}></Route>
          <Route path='/womenscloth' element = {<Womenscloth/>}></Route>
          <Route path='/cart' element = {<Cartpage/>}></Route>
          <Route path='/favroite' element = {<Favroitepage/>}></Route>
          <Route path='/*' element = {<Errorpage/>}></Route>

        </Routes>
      </Router>
    
    </div>
    </div>
    </>
  );
}

export default App;
