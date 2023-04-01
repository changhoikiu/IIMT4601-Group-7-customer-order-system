import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Books from './pages/Books';
import BestSellers from './pages/BestSellers';
import Enquiries from './pages/Enquiries';
import NaviMenu from './mui_components/NaviMenu';
import Header from './mui_components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/monthly-best-sellers" element={<BestSellers />} />
        <Route path="/enquiries" element={<Enquiries />} />
      </Routes>
    </>
  );
}

export default App;
