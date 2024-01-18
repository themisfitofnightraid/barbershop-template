"use client"

import React, { useState } from 'react'

import { AnimatePresence, motion, Variants } from "framer-motion"
import ToggleTheme from '@/components/ToggleTheme'
import { Button } from '@/components/ui/button'

import { AlignRight, X } from 'lucide-react'

const itemVariants: Variants = {
    open: {
        opacity: 1,
        x: 0,
        transition: { 
            type: "spring",
            stiffness: 300,
            damping: 24,
            duration: 0.9,
        }
    },
    closed: {
        opacity: 0,
        x: 200,
    }
};

const NavSide = () => {
    const [status, setStatus] = useState(false);
    return (
        <>
            <div className='hidden md:flex gap-2 items-center'>
                <Button variant={"navCta"} className="text-muted">
                    Message
                </Button>
                <ToggleTheme />
            </div>
            <div className='flex items-center justify-center md:hidden'>
                <motion.div
                    layoutId='cross-icon'
                    initial={{
                        scale: 1,
                    }}
                    whileTap={{
                        scale: 1.2,
                    }}
                    exit={{
                        scale: 1,
                    }}
                    transition={{
                        ease: "backInOut",
                        duration: 0.5,
                    }}
                    className="flex items-center"
                >
                    <Button
                        className='bg-transparent w-fit h-fit p-0'
                        onClick={() => setStatus(!status)}
                    >
                        <AlignRight className='text-foreground' />
                    </Button>
                </motion.div>
            </div>
            {
                status && (
                    <AnimatePresence>
                        <motion.div
                            variants={itemVariants}
                            initial={{
                                opacity: 0,
                                x: 200,
                            }}
                            animate={status ? "open" : "closed"}
                            exit={{
                                opacity: 0,
                                x: 200,
                            }}
                            className='absolute z-[99999] bg-background h-screen w-full top-0 right-0 px-10 py-10 flex flex-col gap-7'
                        >
                            <div className='w-full flex justify-end'>
                                <motion.div
                                    layoutId='cross-icon'
                                >
                                    <Button
                                        className='bg-transparent w-fit h-fit p-0'
                                        onClick={() => setStatus(!status)}
                                    >
                                        <X className='text-destructive' />
                                    </Button>
                                </motion.div>
                            </div>
                            <motion.div
                                variants={{
                                    open: {
                                        transition: {
                                            type: "spring",
                                            bounce: 0,
                                            duration: 0.7,
                                            delayChildren: 0.3,
                                            staggerChildren: 0.05
                                        }
                                    },
                                    closed: {
                                        transition: {
                                            type: "spring",
                                            bounce: 0,
                                            duration: 0.3
                                        }
                                    }
                                }}
                                className='flex flex-col items-end justify-center gap-3'
                            >
                                <Button variant={"navCta"}>
                                    Message
                                </Button>
                                <ToggleTheme />
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                )
            }
        </>
    )
}

export default NavSide