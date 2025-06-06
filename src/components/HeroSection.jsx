import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
import React from "react";

const HeroSection = () => {
    const MotionLink = motion(Link);
    return (
        <section id="home" className="relative pt-32 pb-20 px-6 lg:px-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Your Financial Freedom <span className="text-yellow-300">Starts Here</span>
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-8">
                        Fast, transparent, and tailored loan solutions to meet your personal and business needs.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <motion.button
                            onClick={() => {
                                const el = document.getElementById('contact');
                                el?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-bold shadow-lg transition-all"
                        >
                            Reach Us
                        </motion.button>
                        <MotionLink
                            to="/about"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-3 rounded-full font-bold transition-all"
                        >
                            Learn More
                        </MotionLink>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
                    <img
                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="Happy customer"
                        className="relative z-10 rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
                    />
                </motion.div>
            </div>

            <motion.div
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </motion.div>
        </section>
    );
};

export default HeroSection;