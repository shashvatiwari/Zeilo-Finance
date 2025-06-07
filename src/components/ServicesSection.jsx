import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHandHoldingUsd, FaBusinessTime, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ServicesSection = () => {
    const [expandedService, setExpandedService] = useState(null);

    const toggleService = (index) => {
        setExpandedService(expandedService === index ? null : index);
    };

    const services = [
        {
            icon: <FaHandHoldingUsd className="text-4xl text-blue-600" />,
            title: "Micro Loan",
            shortDescription: "Small loans for immediate personal needs with quick approval",
            image: "https://media.licdn.com/dms/image/v2/C5612AQH6ULz-O9Mb5g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520134161484?e=2147483647&v=beta&t=sW3eUC4x-wO9ezBXI1dXG85Ajps6a4mcFFykDJmCq2U",
            details: [
                "Helping underserved communities with micro-financing solutions",
                "Loans from ₹5,000 to ₹50,000 with flexible repayment",
                "Minimal documentation and quick disbursal within 24 hours",
                "Special schemes for women entrepreneurs and rural populations",
                "Financial literacy programs included with every loan"
            ],
            benefits: [
                "Empowering individuals to start small businesses",
                "Helping families meet emergency financial needs",
                "Breaking the cycle of poverty through accessible credit",
                "Supporting education and healthcare expenses"
            ]
        },
        {
            icon: <FaBusinessTime className="text-4xl text-blue-600" />,
            title: "Micro Business Loan",
            shortDescription: "Fuel your entrepreneurial dreams with our tailored solutions",
            image: "https://media.istockphoto.com/id/1413204314/photo/happy-man-at-supermarket-store.jpg?s=612x612&w=0&k=20&c=Dn5UI46Z6UmBx2n9kYg56jObHBYoQtxcLjS5ukEuXCE=",
            details: [
                "Funding from ₹10,000 to ₹1,50,000 for small businesses",
                "Working capital and equipment financing available",
                "Customized repayment plans matching your cash flow",
                "Mentorship and business development support",
                "Special rates for women-owned and rural businesses"
            ],
            benefits: [
                "Helping small businesses scale operations",
                "Creating employment opportunities in local communities",
                "Supporting traditional artisans and craftsmen",
                "Enabling technology adoption in micro-enterprises"
            ]
        }
    ];

    return (
        <section id="services" className="py-20 px-6 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Tailored financial solutions designed to empower individuals and small businesses
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden transition-all ${expandedService === index ? 'ring-2 ring-blue-500' : ''}`}
                        >
                            <div
                                className="p-8 cursor-pointer"
                                onClick={() => toggleService(index)}
                            >
                                <div className="flex items-start">
                                    <div className="bg-white p-4 rounded-xl shadow-md mr-6">
                                        {service.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-800 mb-1">{service.title}</h3>
                                                <p className="text-gray-600">{service.shortDescription}</p>
                                            </div>
                                            <button className="text-blue-600 p-2">
                                                {expandedService === index ? <FaChevronUp /> : <FaChevronDown />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <AnimatePresence>
                                {expandedService === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-8">
                                            <div className="grid md:grid-cols-2 gap-8 mb-6">
                                                <div>
                                                    <img
                                                        src={service.image}
                                                        alt={service.title}
                                                        className="w-full h-48 object-cover rounded-xl shadow-md"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800 mb-3">Key Features:</h4>
                                                    <ul className="space-y-2">
                                                        {service.details.map((detail, i) => (
                                                            <li key={i} className="flex items-start">
                                                                <span className="text-blue-500 mr-2">•</span>
                                                                <span className="text-gray-700">{detail}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="bg-blue-100 p-6 rounded-xl">
                                                <h4 className="font-bold text-blue-800 mb-3">How This Helps:</h4>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    {service.benefits.map((benefit, i) => (
                                                        <div key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                                                            <div className="bg-blue-100 p-2 rounded-full mr-3">
                                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                                </svg>
                                                            </div>
                                                            <span className="text-gray-700">{benefit}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;