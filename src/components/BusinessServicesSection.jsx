import {FaFileInvoiceDollar, FaIndustry, FaRegFileAlt} from "react-icons/fa";
import {motion} from "framer-motion";
import React from "react";

const BusinessServicesSection = () => {
    const services = [
        { icon: <FaFileInvoiceDollar className="text-3xl" />, name: "ITR Filing" },
        { icon: <FaRegFileAlt className="text-3xl" />, name: "GST Services" },
        { icon: <FaIndustry className="text-3xl" />, name: "Udyam Registration" }
    ];

    return (
        <section className="py-20 px-6 lg:px-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Business Services We Manage</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Comprehensive solutions to keep your business compliant and thriving.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center"
                        >
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.name}</h3>
                            <p className="text-gray-600">
                                {service.name === "ITR Filing"
                                    ? "Professional income tax return filing services."
                                    : service.name === "GST Services"
                                        ? "End-to-end GST registration, filing, and compliance."
                                        : "MSME registration to avail government benefits."}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BusinessServicesSection;