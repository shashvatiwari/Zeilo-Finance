import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6 lg:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
                <div>
                    <div className="flex items-center mb-6">
                        <img
                            src="/assets/zeilo-white-logo.png"
                            alt="Zeilo Finance Logo"
                            className="w-16 h-16 object-contain"
                        />
                        <span className="text-2xl m-2 font-bold">Zeilo Finance</span>
                    </div>
                    <p className="text-gray-400 mb-6">
                        Your trusted partner for all financial needs, providing transparent and customized solutions.
                    </p>
                    <div className="flex space-x-4">
                        {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                            <a key={social} href="#" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-3">
                        {['Home', 'About Us', 'Services', 'Plans', 'Contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6">Services</h4>
                    <ul className="space-y-3">
                        {['Micro Loan', 'Business Loan', 'Personal Loan', 'Home Loan', 'Gold Loan'].map((item) => (
                            <li key={item}>
                                <a href="#plans" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6">Newsletter</h4>
                    <p className="text-gray-400 mb-4">
                        Subscribe to our newsletter for the latest updates and offers.
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                        />
                        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>© {new Date().getFullYear()} Zeilo Finance. All rights reserved. Partner with leading corporate DSA, FA Wizard Pvt. Ltd</p>
            </div>
        </footer>
    );
};

export default Footer