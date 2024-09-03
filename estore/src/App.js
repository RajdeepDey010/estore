import './App.css';
import LandingPage from './Components';
import Cart from './Components/Cart';
import CatNav from './Components/CatNav/CatNav';
import ProductDetails from './Components/ProductDetails';
import TopNav from './Components/TopNav/TopNav';
import { Routes,Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/productdetails" Component={ProductDetails} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </div>
  );
}

export default App;
