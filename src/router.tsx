import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Index from './views/index';
import Bands from './views/bands';
import Merch from './views/merch';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Index />} index />
          <Route path="/bands" element={<Bands />} />
          <Route path="/merch" element={<Merch />} />
          {/* <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} /> Nueva ruta para la vista de pago */}
          {/* <Route path='/hero' element={<Hero />}  /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
