import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavigation = (item) => {
        const sectionId = item.toLowerCase();
        setMobileMenuOpen(false); // Close mobile menu when navigating

        if (item === 'About') {
            navigate('/about');
        } else {
            if (location.pathname !== '/') {
                // Navigate to home, then scroll after short delay
                navigate('/');
                setTimeout(() => {
                    const section = document.getElementById(sectionId);
                    section?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const section = document.getElementById(sectionId);
                section?.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const { scrollYProgress } = useScroll();
    const background = useTransform(scrollYProgress, [0, 0.1], ['rgba(255,255,255,0)', 'rgba(255,255,255,1)']);
    const shadow = useTransform(scrollYProgress, [0, 0.1], ['0 4px 6px rgba(0,0,0,0)', '0 4px 6px rgba(0,0,0,0.1)']);

    const navItems = ['Home', 'Services', 'Plans', 'About', 'Contact'];

    return (
        <motion.nav
            style={{ background, boxShadow: shadow }}
            className="fixed w-full z-50 py-3 px-4 sm:py-4 sm:px-6 lg:px-16 transition-all duration-300"
        >
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center"
                >
                    <div className="relative inline-block">
                        <img
                            src="./src/assets/zeilo-org.png"
                            alt="Zeilo Finance Logo"
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                        />
                        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/3 rounded-full w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center text-[6px] sm:text-[8px] font-extrabold border border-blue-900">
                            TM
                        </div>
                    </div>

                    <span className="text-2xl sm:text-2xl lg:text-3xl ml-2 font-bold text-gray-800">Zeilo Finance</span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6 lg:space-x-8">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleNavigation(item)}
                            className="text-sm lg:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <motion.button
                        onClick={() => {
                            const el = document.getElementById('contact');
                            el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 text-sm rounded-full font-medium shadow-lg transition-all"
                    >
                        Get Started
                    </motion.button>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-gray-700 focus:outline-none"
                    >
                        {mobileMenuOpen ? (
                            <FaTimes className="w-6 h-6" />
                        ) : (
                            <FaBars className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Desktop Get Started Button */}
                <motion.button
                    onClick={() => {
                        const el = document.getElementById('contact');
                        el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-full font-medium shadow-lg transition-all"
                >
                    Get Started
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 pt-16 px-6"
                    >
                        <div className="flex flex-col space-y-6 mt-8">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item}
                                    onClick={() => handleNavigation(item)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-lg font-medium text-gray-800 py-2 border-b border-gray-100 text-left"
                                >
                                    {item}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="fixed inset-0 bg-black z-40 md:hidden"
                />
            )}
        </motion.nav>
    );
};

export default Navbar;