"use client"
import React from 'react'
import { motion } from "framer-motion";

interface LoaderProps {
  setIsLoading: (value: boolean) => void;
}

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const coins = {
  hidden: {
    opacity: 0,
    y: -30,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001,
      },
      duration: 1.6,
    },
  },
};

const Loader = ({ setIsLoading }: LoaderProps) => {
  return (
    <motion.div
      className='h-screen w-fulll flex flex-col md:flex-row items-center justify-center md:gap-20 lg:gap-[10rem] 2xl:gap-[15rem]'
      variants={container}
      initial="hidden"
      animate="show"
      onAnimationComplete={() => setIsLoading(false)}
    >
      <div className='flex flex-col gap-7 items-center'>
        <motion.div
          variants={coins}
          layoutId='coin-one'
          className='h-[4rem] w-[4rem] 2xl:hidden rounded-full bg-primary heroCircles flex items-center justify-center'
        >
          <svg width="1.8rem" height="3.8rem" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M447.25 113.53a40.72 40.72 0 0 0-2.125.126C299.132 126.026 155.697 158.49 36.47 223.28c-10.362 5.632-15.204 13.98-16.845 26.345c-1.64 12.366.834 28.467 6.72 45.844c11.216 33.12 34.585 70.496 59.374 98.124l17.593-4.72L66.374 251l18.03-4.813l36.94 137.844l21.03-5.655l-36.938-137.813l18.032-4.843l36.936 137.81l18.78-5.03l-36.905-137.813l18.064-4.843l36.906 137.78l20.28-5.437l-36.936-137.78l18.062-4.845l36.906 137.782l21.032-5.656l-36.906-137.75l18.03-4.844l36.907 137.75l21.03-5.625l-36.905-137.75l18.03-4.845l36.94 137.72l19.53-5.22l-36.906-137.72l18.03-4.843l36.907 137.688l22.47-6.03l-36.875-137.69l18.063-4.843l36.875 137.688l21-5.625l-36.875-137.688L394 163.22l36.875 137.655l20.28-5.438l-36.874-137.625l18.033-4.843l36.875 137.624l17.687-4.75c7.676-36.4 9.244-81.307 2.406-116.03c-3.586-18.218-9.55-33.498-17.06-43.158c-6.574-8.452-13.485-12.827-22.908-13.125c-.673-.02-1.365-.02-2.062 0z"></path>
          </svg>
        </motion.div>
        <motion.div
          layoutId='coin-one-xl'
          variants={coins}
          className='hidden h-[4rem] w-[4rem] xl:h-[7rem] xl:w-[7rem] rounded-full bg-primary heroCircles 2xl:flex items-center justify-center'
        >
          <svg width="3.3rem" height="3.8rem" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M447.25 113.53a40.72 40.72 0 0 0-2.125.126C299.132 126.026 155.697 158.49 36.47 223.28c-10.362 5.632-15.204 13.98-16.845 26.345c-1.64 12.366.834 28.467 6.72 45.844c11.216 33.12 34.585 70.496 59.374 98.124l17.593-4.72L66.374 251l18.03-4.813l36.94 137.844l21.03-5.655l-36.938-137.813l18.032-4.843l36.936 137.81l18.78-5.03l-36.905-137.813l18.064-4.843l36.906 137.78l20.28-5.437l-36.936-137.78l18.062-4.845l36.906 137.782l21.032-5.656l-36.906-137.75l18.03-4.844l36.907 137.75l21.03-5.625l-36.905-137.75l18.03-4.845l36.94 137.72l19.53-5.22l-36.906-137.72l18.03-4.843l36.907 137.688l22.47-6.03l-36.875-137.69l18.063-4.843l36.875 137.688l21-5.625l-36.875-137.688L394 163.22l36.875 137.655l20.28-5.438l-36.874-137.625l18.033-4.843l36.875 137.624l17.687-4.75c7.676-36.4 9.244-81.307 2.406-116.03c-3.586-18.218-9.55-33.498-17.06-43.158c-6.574-8.452-13.485-12.827-22.908-13.125c-.673-.02-1.365-.02-2.062 0z"></path>
          </svg>
        </motion.div>
        <p className='2xl:text-[1.71rem]'>Rs. 200</p>
      </div>
      <div className='flex flex-col gap-7 items-center'>
        <motion.div
          layoutId='coin-two'
          variants={coins}
          className='h-[4rem] w-[4rem] 2xl:hidden rounded-full bg-primary heroCircles flex items-center justify-center'
        >
          <svg width="1.8rem" height="3.8rem" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M200.9 38.05c-1.7 0-2.9.36-3.6.84c-9.3 6.84-14.4 20.81-14.2 36.27c.1 7.36 1.6 14.85 4 21.67c8.3-5.28 17.1-10.41 26.3-15.38c-.2-1.2-.2-2.38-.2-3.51c0-5.38 1.4-10.15 2.6-14.5c1.2-4.34 2.3-8.28 2.7-11.14c.4-2.86.1-4.1-.3-4.65c-1.6-2.69-6.4-6.61-11.1-8.39c-2.4-.89-4.5-1.21-6.2-1.21m65.5 42.46c-6.4-.12-13.3 1.3-20.5 4.76h-.1C148.5 130.9 97.96 193 70.73 252.9c-27.27 59.8-31.08 117.5-33.39 154.3c-2.8 44.6 18.99 63.6 40.84 66.4c21.92 2.7 44.82-10.6 47.32-43.5C133.1 330 162.2 229 291.7 139.7l-.2.1c8.9-6.5 12.3-13.7 13-21.1c.6-7.4-1.9-15.4-7.1-22.13c-6.4-8.46-16.3-14.89-28.3-15.95c-.9-.1-1.8-.13-2.7-.15zm-30 29.09c13.7 0 25 11.3 25 25s-11.3 25-25 25s-25-11.3-25-25s11.3-25 25-25m0 18c-4 0-7 3-7 7s3 7 7 7s7-3 7-7s-3-7-7-7m52.4 36.3c-8.4 6.1-16.3 12.3-23.8 18.5l57.8 57.8l6.3 6.4l-11.4 11.3l142.7 142.7c1.7-2.5 3.3-5 4.7-7.5c5.8-10 9.5-20 9.8-28.7c.4-8.7-1.9-16.2-9.5-23.7c-58.8-58.9-117.7-117.9-176.6-176.8M305 270.7l-21.2 21.2l145.6 145.6c6.2-6.3 13.3-13.9 20.2-22.2z"></path>
          </svg>
        </motion.div>
        <motion.div
          layoutId='coin-two-xl'
          variants={coins}
          className='hidden h-[4rem] w-[4rem] xl:h-[7rem] xl:w-[7rem] rounded-full bg-primary heroCircles 2xl:flex items-center justify-center'
        >
          <svg width="3.3rem" height="3.8rem" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M200.9 38.05c-1.7 0-2.9.36-3.6.84c-9.3 6.84-14.4 20.81-14.2 36.27c.1 7.36 1.6 14.85 4 21.67c8.3-5.28 17.1-10.41 26.3-15.38c-.2-1.2-.2-2.38-.2-3.51c0-5.38 1.4-10.15 2.6-14.5c1.2-4.34 2.3-8.28 2.7-11.14c.4-2.86.1-4.1-.3-4.65c-1.6-2.69-6.4-6.61-11.1-8.39c-2.4-.89-4.5-1.21-6.2-1.21m65.5 42.46c-6.4-.12-13.3 1.3-20.5 4.76h-.1C148.5 130.9 97.96 193 70.73 252.9c-27.27 59.8-31.08 117.5-33.39 154.3c-2.8 44.6 18.99 63.6 40.84 66.4c21.92 2.7 44.82-10.6 47.32-43.5C133.1 330 162.2 229 291.7 139.7l-.2.1c8.9-6.5 12.3-13.7 13-21.1c.6-7.4-1.9-15.4-7.1-22.13c-6.4-8.46-16.3-14.89-28.3-15.95c-.9-.1-1.8-.13-2.7-.15zm-30 29.09c13.7 0 25 11.3 25 25s-11.3 25-25 25s-25-11.3-25-25s11.3-25 25-25m0 18c-4 0-7 3-7 7s3 7 7 7s7-3 7-7s-3-7-7-7m52.4 36.3c-8.4 6.1-16.3 12.3-23.8 18.5l57.8 57.8l6.3 6.4l-11.4 11.3l142.7 142.7c1.7-2.5 3.3-5 4.7-7.5c5.8-10 9.5-20 9.8-28.7c.4-8.7-1.9-16.2-9.5-23.7c-58.8-58.9-117.7-117.9-176.6-176.8M305 270.7l-21.2 21.2l145.6 145.6c6.2-6.3 13.3-13.9 20.2-22.2z"></path>
          </svg>
        </motion.div>
        <p className='2xl:text-[1.71rem]'>Rs. 200</p>
      </div>
      <div className='flex flex-col gap-7 items-center'>
        <motion.div
          layoutId='coin-three'
          variants={coins}
          className='h-[4rem] w-[4rem] 2xl:hidden rounded-full bg-primary heroCircles flex items-center justify-center'
        >
          <svg width="1.8rem" height="3.8rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226L11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></path>
          </svg>
        </motion.div>
        <motion.div
          layoutId='coin-three-xl'
          variants={coins}
          className='hidden h-[4rem] w-[4rem] xl:h-[7rem] xl:w-[7rem] rounded-full bg-primary heroCircles 2xl:flex items-center justify-center'
        >
          <svg width="3.3rem" height="3.8rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226L11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></path>
          </svg>
        </motion.div>
        <p className='2xl:text-[1.71rem]'>Rs. 200</p>
      </div>
    </motion.div>
  )
}

export default Loader


{/* <motion.div
    variants={coins} animate="animate"
      
    >

      
   
    </motion.div> */}