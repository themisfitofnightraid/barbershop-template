"use client"

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const CoinTwo = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const top = useTransform(ySpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(xSpring, [0.5, -0.5], ["-50%", "10%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = ref.current?.getBoundingClientRect();

        const width = rect?.width;
        const height = rect?.height;

        if (!rect) return;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        if (width && height) {
            const xPct = mouseX / width - 0.5;
            const yPct = mouseY / height - 0.5;

            x.set(xPct);
            y.set(yPct);
        }
    };
    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            className='flex flex-col gap-7 items-center'
        >
            <motion.div
                layoutId='coin-two'
                className='hover:cursor-pointer h-[4rem] w-[4rem] 2xl:hidden rounded-full bg-primary heroCircles dark:shadow-sm flex items-center justify-center'
                transition={{
                    duration: 0.8,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001,
                    },
                }}
            >
                <svg width="1.8rem" height="3.8rem" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000" d="M200.9 38.05c-1.7 0-2.9.36-3.6.84c-9.3 6.84-14.4 20.81-14.2 36.27c.1 7.36 1.6 14.85 4 21.67c8.3-5.28 17.1-10.41 26.3-15.38c-.2-1.2-.2-2.38-.2-3.51c0-5.38 1.4-10.15 2.6-14.5c1.2-4.34 2.3-8.28 2.7-11.14c.4-2.86.1-4.1-.3-4.65c-1.6-2.69-6.4-6.61-11.1-8.39c-2.4-.89-4.5-1.21-6.2-1.21m65.5 42.46c-6.4-.12-13.3 1.3-20.5 4.76h-.1C148.5 130.9 97.96 193 70.73 252.9c-27.27 59.8-31.08 117.5-33.39 154.3c-2.8 44.6 18.99 63.6 40.84 66.4c21.92 2.7 44.82-10.6 47.32-43.5C133.1 330 162.2 229 291.7 139.7l-.2.1c8.9-6.5 12.3-13.7 13-21.1c.6-7.4-1.9-15.4-7.1-22.13c-6.4-8.46-16.3-14.89-28.3-15.95c-.9-.1-1.8-.13-2.7-.15zm-30 29.09c13.7 0 25 11.3 25 25s-11.3 25-25 25s-25-11.3-25-25s11.3-25 25-25m0 18c-4 0-7 3-7 7s3 7 7 7s7-3 7-7s-3-7-7-7m52.4 36.3c-8.4 6.1-16.3 12.3-23.8 18.5l57.8 57.8l6.3 6.4l-11.4 11.3l142.7 142.7c1.7-2.5 3.3-5 4.7-7.5c5.8-10 9.5-20 9.8-28.7c.4-8.7-1.9-16.2-9.5-23.7c-58.8-58.9-117.7-117.9-176.6-176.8M305 270.7l-21.2 21.2l145.6 145.6c6.2-6.3 13.3-13.9 20.2-22.2z"></path>
                </svg>
            </motion.div>
            <motion.div
                layoutId='coin-two-xl'
                className='hidden h-[4rem] w-[4rem] xl:h-[7rem] xl:w-[7rem] rounded-full bg-primary heroCircles 2xl:flex items-center justify-center'
                transition={{
                    duration: 0.8,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001,
                    },
                }}
            >
                <svg width="3.3rem" height="3.8rem" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000" d="M200.9 38.05c-1.7 0-2.9.36-3.6.84c-9.3 6.84-14.4 20.81-14.2 36.27c.1 7.36 1.6 14.85 4 21.67c8.3-5.28 17.1-10.41 26.3-15.38c-.2-1.2-.2-2.38-.2-3.51c0-5.38 1.4-10.15 2.6-14.5c1.2-4.34 2.3-8.28 2.7-11.14c.4-2.86.1-4.1-.3-4.65c-1.6-2.69-6.4-6.61-11.1-8.39c-2.4-.89-4.5-1.21-6.2-1.21m65.5 42.46c-6.4-.12-13.3 1.3-20.5 4.76h-.1C148.5 130.9 97.96 193 70.73 252.9c-27.27 59.8-31.08 117.5-33.39 154.3c-2.8 44.6 18.99 63.6 40.84 66.4c21.92 2.7 44.82-10.6 47.32-43.5C133.1 330 162.2 229 291.7 139.7l-.2.1c8.9-6.5 12.3-13.7 13-21.1c.6-7.4-1.9-15.4-7.1-22.13c-6.4-8.46-16.3-14.89-28.3-15.95c-.9-.1-1.8-.13-2.7-.15zm-30 29.09c13.7 0 25 11.3 25 25s-11.3 25-25 25s-25-11.3-25-25s11.3-25 25-25m0 18c-4 0-7 3-7 7s3 7 7 7s7-3 7-7s-3-7-7-7m52.4 36.3c-8.4 6.1-16.3 12.3-23.8 18.5l57.8 57.8l6.3 6.4l-11.4 11.3l142.7 142.7c1.7-2.5 3.3-5 4.7-7.5c5.8-10 9.5-20 9.8-28.7c.4-8.7-1.9-16.2-9.5-23.7c-58.8-58.9-117.7-117.9-176.6-176.8M305 270.7l-21.2 21.2l145.6 145.6c6.2-6.3 13.3-13.9 20.2-22.2z"></path>
                </svg>
            </motion.div>
            <p className='2xl:text-[1.71rem]'>Rs. 150</p>
            <motion.video
                src="/assets/hero/videos/video1.webm"
                autoPlay
                muted
                loop

                variants={{
                    initial: {
                        scale: 0,
                        rotate: "12.5deg",
                    },
                    whileHover: {
                        scale: 1,
                        rotate: "-12.5deg",
                    },
                }}
                transition={{
                    type: "spring",
                }}
                style={{
                    top,
                    left,
                    translateX: '-50%',
                    translateY: '-50%',

                }}
                className="border border-secondary absolute z-10 h-24 w-32 rounded-lg object-cover md:h-38 md:w-34"
            >
            </motion.video>
        </motion.div>
    )
}

export default CoinTwo