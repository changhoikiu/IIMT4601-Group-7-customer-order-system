import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Box } from '@mui/material';
import Books from './pages/Books';
import BestSellers from './pages/BestSellers';
import Enquiries from './pages/Enquiries';
import Header from './mui_components/Header';
import SubmitReservation from './pages/SubmitReservation';

function App() {

  return (
    <React.Fragment>
      <Header />
      <Box sx={{ mx: 15, my: 10 }}>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/monthly-best-sellers" element={<BestSellers />} />
        <Route path="/enquiries" element={<Enquiries />} />
        <Route path="/reserve" element={<SubmitReservation />} />
      </Routes>
      </Box>
    </React.Fragment>
  );
}

export default App;
