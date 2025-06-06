import {FaChartLine, FaPiggyBank, FaShieldAlt} from "react-icons/fa";
import {motion} from "framer-motion";
import React from "react";

const FinancialProductsSection = () => {
    const products = [
        { icon: <FaChartLine className="text-3xl" />, name: "Mutual Funds" },
        { icon: <FaPiggyBank className="text-3xl" />, name: "Bank FD's" },
        { icon: <FaShieldAlt className="text-3xl" />, name: "Insurances" }
    ];

    return (
        <section className="py-20 px-6 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Investment & Protection</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Grow and protect your wealth with our curated financial products.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center"
                        >
                            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 shadow-md">
                                {product.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
                            <p className="text-gray-600">
                                {product.name === "Mutual Funds"
                                    ? "Expertly managed funds for long-term wealth creation."
                                    : product.name === "Bank FD's"
                                        ? "Secure fixed deposits with attractive interest rates."
                                        : "Comprehensive coverage for life, health, and assets."}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FinancialProductsSection;