import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Collection from './pages/Collection';
import Products from './pages/Products';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/collection' element={<Collection />} />
      <Route path='/products' element={<Products />} />
    </Routes>
  );
}

export default App;
