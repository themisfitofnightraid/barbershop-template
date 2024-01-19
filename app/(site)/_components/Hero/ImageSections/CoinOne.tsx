"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from 'react';

const CoinOne = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    // const top = useTransform(ySpring, [0.5, -0.5], ["10%", "60%"]);
    // const left = useTransform(xSpring, [0.5, -0.5], ["-50%", "10%"]);

    const top = useTransform(ySpring, [0.5, -0.5], ["360%", "140%"]);
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
            className='flex flex-col gap-7 items-center absolute left-[1rem] -top-[2rem]'
        >
            <motion.div
                layoutId='coin-one'
                className='hover:cursor-pointer h-[4rem] w-[4rem] 2xl:h-[7rem] 2xl:w-[7rem] rounded-full bg-primary heroOfferCard flex items-center justify-center'
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
                <svg className="2xl:w-[3rem] 2xl:h-[3rem]" width="1.8rem" height="3.8rem" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000" d="M447.25 113.53a40.72 40.72 0 0 0-2.125.126C299.132 126.026 155.697 158.49 36.47 223.28c-10.362 5.632-15.204 13.98-16.845 26.345c-1.64 12.366.834 28.467 6.72 45.844c11.216 33.12 34.585 70.496 59.374 98.124l17.593-4.72L66.374 251l18.03-4.813l36.94 137.844l21.03-5.655l-36.938-137.813l18.032-4.843l36.936 137.81l18.78-5.03l-36.905-137.813l18.064-4.843l36.906 137.78l20.28-5.437l-36.936-137.78l18.062-4.845l36.906 137.782l21.032-5.656l-36.906-137.75l18.03-4.844l36.907 137.75l21.03-5.625l-36.905-137.75l18.03-4.845l36.94 137.72l19.53-5.22l-36.906-137.72l18.03-4.843l36.907 137.688l22.47-6.03l-36.875-137.69l18.063-4.843l36.875 137.688l21-5.625l-36.875-137.688L394 163.22l36.875 137.655l20.28-5.438l-36.874-137.625l18.033-4.843l36.875 137.624l17.687-4.75c7.676-36.4 9.244-81.307 2.406-116.03c-3.586-18.218-9.55-33.498-17.06-43.158c-6.574-8.452-13.485-12.827-22.908-13.125c-.673-.02-1.365-.02-2.062 0z"></path>
                </svg>
            </motion.div>
            {/* <p className='2xl:text-[1.71rem]'>Rs. 200</p> */}
            <motion.video
                src="/assets/hero/videos/video1.mp4"
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
                className="border border-secondary absolute z-10 h-[5rem] w-[10rem] rounded-lg object-cover "
            >
            </motion.video>
        </motion.div>
    )
}

export default CoinOne