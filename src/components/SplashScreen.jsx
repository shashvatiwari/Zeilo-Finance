import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const SplashScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // 3 seconds splash screen duration

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 bg-white z-50 flex items-center justify-center"
                >
                    <motion.div
                        initial={{ scale: 0.8, rotate: 0 }}
                        animate={{
                            rotate: 360, // Full rotation
                        }}
                        transition={{
                            duration: 1,
                            ease: "linear",
                            repeat: Infinity,
                            // repeatType: "loop"
                        }}
                        className="flex flex-col items-center"
                    >
                        <img
                            src="/assets/zeilo-org.png"
                            alt="Zeilo Finance Logo"
                            className="w-32 h-32 object-contain"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;