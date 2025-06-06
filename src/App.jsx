import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HeroSection from './components/HeroSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import LoanPlansSection from "./components/LoanPlansSection.jsx";
import FinancialProductsSection from "./components/FinancialProductsSection.jsx";
import BusinessServicesSection from "./components/BusinessServicesSection.jsx";
import TestimonialsSection from "./components/TestimonialsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import AboutUsSection from "./components/AboutUsSection.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const HomePage = () => (
    <>
        <SplashScreen />
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <LoanPlansSection />
        <FinancialProductsSection />
        <BusinessServicesSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
    </>
);

const AboutPage = () => (
    <>
        <Navbar />
        <AboutUsSection />
        <Footer />
    </>
);

const App = () => {
    return (
        <div className="font-sans bg-gradient-to-br from-blue-50 to-gray-50">
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </div>
    );
};

export default App;