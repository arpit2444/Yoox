import logo from './logo.svg';
import './App.css';
import Navbar1 from './Components/Navbar1';
import Navbar2 from './Components/Navbar2';
import Navbar3 from './Components/Navbar3';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Product from './Pages/Product';
import AllRoute from './Pages/AllRoute';

function App() {
  document.body.style.backgroundColor = "rgb(248,248,248)";

  return (
    <div className="App">
      <Navbar1/>
  <Navbar2/>
  <Navbar3/>
  <AllRoute/>
  {/* <Home/> */}
  {/* <Product/> */}
  <Footer/>
    </div>
  );
}

export default App;
