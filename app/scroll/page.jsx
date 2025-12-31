"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const page = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    const translateY1 = useTransform(scrollYProgress, [0, 0.1], [200, 0])
    const translateY2 = useTransform(scrollYProgress, [0, 0.1], [240, 0])
    const translateY3 = useTransform(scrollYProgress, [0, 0.1], [280, -3])
    const translateY4 = useTransform(scrollYProgress, [0, 0.1], [320, 0])
    const scaleText = useTransform(scrollYProgress, [0, 0.2], [1.5, 1])

    const stranslateY1 = useSpring(translateY1, { stiffness: 100, damping: 30 });
    const stranslateY2 = useSpring(translateY2, { stiffness: 100, damping: 30 });
    const stranslateY3 = useSpring(translateY3, { stiffness: 100, damping: 30 });
    const stranslateY4 = useSpring(translateY4, { stiffness: 100, damping: 30 });
    const sscaleText = useSpring(scaleText, { stiffness: 100, damping: 30 })

    return (
        <div ref={containerRef} className="h-[350vh] w-screen relative">

            {/* Centered Text */}
            <motion.div style={{ scale: sscaleText }} className="h-screen sticky top-0 flex items-center justify-center text-black text-7xl tracking-tight text-center font-medium">
                Your indoor spaces should<br /> make you feel calm.
            </motion.div>

            {/* IMAGES STACKED */}
            <motion.img
                style={{ y: stranslateY1 }}
                className="w-80 sticky top-[40%] left-1/2 -translate-x-1/2 rounded-md rotate-6 z-[10]"
                src="https://cdn.cosmos.so/e6166157-5209-4135-b5b4-ad7fc8992d79?format=jpeg"
            />

            <motion.img
                style={{ y: stranslateY2, translateZ: "100px" }}
                className="w-96 sticky top-[40%] left-1/2 -translate-x-1/2 rounded-md -rotate-3 z-[20]"
                src="https://cdn.cosmos.so/a6b17efd-93ed-4ad1-ba35-5c7316f93707?format=jpeg"
            />

            <motion.img
                style={{ y: stranslateY3, translateZ: "200px" }}
                className="w-84 sticky top-[40%] left-1/2 -translate-x-1/2 rounded-md rotate-6 z-[30]"
                src="https://cdn.cosmos.so/7ba1afaf-887c-4a79-83b1-652ea35dcc74?format=jpeg"
            />

            <motion.img
                style={{ y: stranslateY4, translateZ: "300px" }}
                className="w-[26rem] sticky top-[40%] left-1/2 -translate-x-1/2 rounded-md -rotate-3 z-[40]"
                src="https://cdn.cosmos.so/a0cdac34-27e3-4f86-a0d7-b8b5b5260fc6?format=jpeg"
            />
        </div>
    );
};

export default page;
