import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';

function App() {
  return (
    <div>
      <Header className ="sticky-top"></Header>
      <Home></Home>
      
    </div>
  );
}

export default App;
