import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/router";

const FadeIn = ({ children }) => {
    const pathname = useRouter().asPath;
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default FadeIn;