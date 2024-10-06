import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';


import Header from './components/UI/Header';
import Footer from './components/UI/Footer';



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product/:id' element={<ProductDetails/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
