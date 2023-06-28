import Navbar from './components/navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home.js';
import Products from './pages/products';
import Product from './pages/product.js';
import Login from "./pages/login"
import Register from "./pages/register"
import AboutUs from "./pages/aboutUs.js"
import Profile from './pages/profile';
import AddProduct from "./pages/createProduct"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about/us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/create" element={<AddProduct />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
