import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import Packages from './Packages/Packages';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/packages' element={<Packages></Packages>} ></Route>
      </Routes>

      
    </div>
  );
}

export default App;
