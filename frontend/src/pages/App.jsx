import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Footer from "@components/Footer";
import Header from "@components/Header";
import HomePage from '@pages/HomePage';
import ProductsPage from '@pages/ProductsPage';
import CreateProductPage from '@pages/CreateProductPage';

function App() {

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header/>
        <main className="container my-4 flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onAddToCart={handleAddToCart} />}
            />
          </Routes>
        </main>
        <Footer />
        
        <Toaster position="bottom-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;