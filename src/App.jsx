import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { FooterProvider } from './contexts/FooterContext';
import Index from './pages/Index';
import Page404 from './pages/Page404';
import Products from './pages/products/Products';

import ProfilePage from './pages/Profile/ProfilePage';

function App() {
  return (
    <BrowserRouter basename="/gamgyul-social-market">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <FooterProvider>
        <Footer />
      </FooterProvider>
    </BrowserRouter>
  );
}

export default App;
