import { motion } from 'framer-motion';
import { FaHandshake, FaChartLine, FaUsers, FaAward } from 'react-icons/fa';

const AboutUsSection = () => {
    return (
        <section id="about" className="py-20 px-6 lg:px-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Empowering financial dreams with transparent solutions and personalized service
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -top-6 -left-6 w-full h-full border-2 border-blue-200 rounded-xl z-0"></div>
                        <div className="relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                alt="Our team"
                                className="rounded-xl shadow-xl w-full"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Who We Are</h3>
                        <p className="text-gray-600 mb-6">
                            Founded in 2015, LoanPro has grown from a small financial consultancy to one of the most trusted names in loan facilitation and financial services. Our mission is to bridge the gap between financial institutions and borrowers, making the process simpler, faster, and more transparent.
                        </p>
                        <p className="text-gray-600 mb-6">
                            With a team of 50+ financial experts across 10 cities, we've helped over 25,000 customers achieve their financial goals - whether it's buying a dream home, expanding a business, or securing their family's future.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {/*<motion.button*/}
                            {/*    whileHover={{ scale: 1.05 }}*/}
                            {/*    whileTap={{ scale: 0.95 }}*/}
                            {/*    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-all"*/}
                            {/*>*/}
                            {/*    Meet Our Team*/}
                            {/*</motion.button>*/}
                            {/*<motion.button*/}
                            {/*    whileHover={{ scale: 1.05 }}*/}
                            {/*    whileTap={{ scale: 0.95 }}*/}
                            {/*    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all"*/}
                            {/*>*/}
                            {/*    Our Achievements*/}
                            {/*</motion.button>*/}
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 text-center">Our Core Values</h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FaHandshake className="text-4xl text-blue-600" />,
                                title: "Trust & Transparency",
                                description: "We believe in complete honesty about terms, rates, and processes."
                            },
                            {
                                icon: <FaChartLine className="text-4xl text-blue-600" />,
                                title: "Customer First",
                                description: "Every decision is made with our customers' best interests in mind."
                            },
                            {
                                icon: <FaUsers className="text-4xl text-blue-600" />,
                                title: "Financial Inclusion",
                                description: "We strive to make financial products accessible to all sections of society."
                            },
                            {
                                icon: <FaAward className="text-4xl text-blue-600" />,
                                title: "Excellence",
                                description: "We continuously improve our services to deliver exceptional results."
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
                            >
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Milestones Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Journey</h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
                        {[
                            { number: "25,000+", label: "Happy Customers" },
                            { number: "₹500Cr+", label: "Loans Disbursed" },
                            { number: "50+", label: "Financial Experts" },
                            { number: "10+", label: "Cities Across India" }
                        ].map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white/10 p-4 md:p-6 rounded-xl backdrop-blur-sm"
                            >
                                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">
                                    {milestone.number}
                                </div>
                                <div className="text-sm md:text-base text-blue-100">
                                    {milestone.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUsSection;