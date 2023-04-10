import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Books from './pages/Books';
import BestSellers from './pages/BestSellers';
import Enquiries from './pages/Enquiries';
import Header from './mui_components/Header';
import Test from './pages/Test';
import Cart from './pages/Cart';

function App() {

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/monthly-best-sellers" element={<BestSellers />} />
        <Route path="/enquiries" element={<Enquiries />} />
        <Route path="/test" element={<Test />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
