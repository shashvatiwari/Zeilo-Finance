import {motion} from "framer-motion";
import React from "react";
import BusinessServicesSection from "./BusinessServicesSection.jsx";

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "The loan process was incredibly smooth and transparent. I got my personal loan approved within 24 hours!",
            name: "Rahul Sharma",
            role: "Software Engineer",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
        },
        {
            quote: "As a small business owner, their micro business loan helped me expand my operations at just the right time.",
            name: "Priya Patel",
            role: "Boutique Owner",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
        },
        {
            quote: "Excellent service and guidance for my home loan. They found me the best rate in the market.",
            name: "Vikram Singh",
            role: "Bank Manager",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
        }
    ];

    return (
        <section className="py-20 px-6 lg:px-16 bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
                    <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
                    <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                        Trusted by thousands of satisfied customers across the country.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-blue-700 p-8 rounded-2xl hover:bg-blue-800 transition-colors"
                        >
                            <div className="text-yellow-400 text-4xl mb-4">"</div>
                            <p className="text-lg mb-6">{testimonial.quote}</p>
                            <div className="flex items-center">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white mr-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                    <p className="text-blue-200 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;