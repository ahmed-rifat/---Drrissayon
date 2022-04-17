import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import Packages from './Packages/Packages';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import Checkout from './Component/Checkout/Checkout';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div>
      <div><Header></Header></div>
      <div>
      <Routes>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
        <Route path='/packages' element={<Packages></Packages>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        
        <Route
            path='/checkout'
            element={
              
                <RequireAuth>
                  <Checkout></Checkout>
                </RequireAuth>
             
            }
          ></Route>
        <Route path='/signup' element={<Signup></Signup>} ></Route>
      </Routes>
      </div>

      
    </div>
  );
}

export default App;
