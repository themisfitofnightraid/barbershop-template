"use client"

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const CoinThree = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    // const top = useTransform(ySpring, [0.5, -0.5], ["60%", "40%"]);
    // const left = useTransform(xSpring, [0.5, -0.5], ["-50%", "10%"]);
    const top = useTransform(ySpring, [0.5, -0.5], ["60%", "40%"]);
    const left = useTransform(xSpring, [0.5, -0.5], ["-290%", "-150%"]);


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
            className='flex flex-col gap-7 items-center absolute bottom-[1rem] right-[4rem]'
        >
            <motion.div
                layoutId='coin-three'
                className='hover:cursor-pointer h-[4rem] w-[4rem] 2xl:hidden rounded-full bg-primary heroOfferCard flex items-center justify-center'
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
                <svg width="1.8rem" height="3.8rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000" d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226L11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></path>
                </svg>
            </motion.div>
            <motion.div
                layoutId='coin-three-xl'
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
                <svg width="3.3rem" height="3.8rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000" d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226L11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></path>
                </svg>
            </motion.div>
            {/* <p className='2xl:text-[1.71rem]'>Rs. 250</p> */}
            <motion.video
                src="/assets/hero/videos/video1.mp4"
                autoPlay
                muted
                loop

                variants={{
                    initial: {
                        scale: 0,
                        rotate: "-12.5deg",
                    },
                    whileHover: {
                        scale: 1,
                        rotate: "12.5deg",
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

export default CoinThree