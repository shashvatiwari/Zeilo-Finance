import {motion} from "framer-motion";
import React from "react";
import {useRef} from "react";
import emailjs from "emailjs-com";

const ContactSection = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_ID)
            .then(
                (result) => {
                    alert("Message sent!");
                    form.current.reset();
                },
                (error) => {
                    alert("Failed to send message.");
                }
            );
    };

    return (
        <section id="contact" className="py-12 md:py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 md:space-y-8"
                    >
                        <div className="text-center md:text-left">
                            <span className="text-blue-600 font-semibold text-sm md:text-base mb-2 block">Contact Us</span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                                Let's discuss your financial needs
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-600">
                                Our team is ready to provide personalized solutions.
                            </p>
                        </div>

                        <div className="space-y-4 md:space-y-6">
                            <div className="flex items-start gap-4 p-4 sm:p-5 md:p-6 bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-blue-100 p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl text-blue-600 flex-shrink-0">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1">Phone Support</h4>
                                    <a href="tel:+919876543210" className="text-blue-600 font-medium text-sm sm:text-base hover:text-blue-800 transition-colors">
                                        +91 94159 75673
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 sm:p-5 md:p-6 bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-blue-100 p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl text-blue-600 flex-shrink-0">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1">Email Inquiry</h4>
                                    <a href="mailto:info@loanpro.com" className="text-blue-600 font-medium text-sm sm:text-base hover:text-blue-800 transition-colors">
                                        zeilofinance01@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 sm:p-5 md:p-6 bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-blue-100 p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl text-blue-600 flex-shrink-0">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1">Office Location</h4>
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        L.P. Complex, Bathua, Before Govt. Polytechnic First Gate, Rewa Road, Mirzapur (231001),Uttar pradesh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-6 sm:p-8 md:p-10 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl border border-gray-100"
                    >
                        <div className="mb-6 md:mb-8">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">Send us a message</h3>
                        </div>

                        <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
                            <div>
                                <label htmlFor="full-name" className="block text-gray-700 font-medium text-sm sm:text-base mb-1 sm:mb-2">Full Name</label>
                                <input
                                    type="name"
                                    name="full_name"
                                    id="full-name"
                                    className="w-full px-4 py-2 sm:px-5 sm:py-3 rounded-lg md:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium text-sm sm:text-base mb-1 sm:mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="w-full px-4 py-2 sm:px-5 sm:py-3 rounded-lg md:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 font-medium text-sm sm:text-base mb-1 sm:mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-2 sm:px-5 sm:py-3 rounded-lg md:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                                        placeholder="9876543210"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium text-sm sm:text-base mb-1 sm:mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="w-full px-4 py-2 sm:px-5 sm:py-3 rounded-lg md:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                                    placeholder="Tell us about your financial needs..."
                                ></textarea>
                            </div>

                            <div className="flex items-center">
                                <input
                                    id="consent"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                />
                                <label htmlFor="consent" className="ml-2 block text-xs sm:text-sm text-gray-700">
                                    I agree to the <a href="#" className="text-blue-600 hover:underline">privacy policy</a> and terms
                                </label>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 sm:py-4 px-6 rounded-lg md:rounded-xl font-medium sm:font-semibold text-base sm:text-lg transition-all shadow-md hover:shadow-lg"
                            >
                                Submit Message
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;