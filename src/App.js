import React, { Fragment, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import Header from './components/LayoutComponents/Header/Header';
import Footer from './components/LayoutComponents/Footer/Footer';
import Loader from './components/LayoutComponents/Loader/Loader';
const AboutPage = React.lazy(() => import('./pages/AboutPage')); // Lazy-loaded
const CareerPage = React.lazy(() => import('./pages/CareerPage')); // Lazy-loaded
const ServicesPage = React.lazy(() => import('./pages/ServicesPage')); // Lazy-loaded
const Coorperative = React.lazy(() => import('./pages/Coorperative')); // Lazy-loaded
const ContactPage = React.lazy(() => import('./pages/ContactPage')); // Lazy-loaded
const FaqPage = React.lazy(() => import('./pages/FaqPage')); // Lazy-loaded
const Hr = React.lazy(() => import('./pages/HrPage')); // Lazy-loaded

function App() {
  return (
    <Fragment>
      <Suspense fallback={<Loader/>}>
        <Header />

        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/coorperative" element={<Coorperative />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/faq' element={<FaqPage/>} />
          <Route path='/hr' element={<Hr/>} />

        </Routes>

        <Footer />
     
      </Suspense>
    </Fragment>

  );
}

export default App;
