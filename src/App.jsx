import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Users from './components/Users.jsx';
import User from './components/User.jsx';
import UserDetail from './components/UserDetail.jsx';
import Products from './components/Products.jsx';
import Product from './components/Product.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={< Users />} />
        <Route path="/products" element={< Products />} />
        <Route path="/product/:id" element={< Product />} />
        <Route path="/user/:id" element={< UserDetail />} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
