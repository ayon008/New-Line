import { PlayIcon, X } from 'lucide-react';
import React from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { motion } from 'motion/react'
import { delay } from 'motion';

const Modal = () => {
    const waveTransition = {
        repeat: Infinity,
        duration: 2,
        ease: "easeOut",
        repeatType: "loop",
    };

    return (
        <div className=''>
            <Dialog className={``}>
                <DialogTrigger>
                    <div className='w-[100px] h-[100px] rounded-full flex items-center justify-center p-0 bg-transparent border-4 border-white hover:bg-primary transition-all duration-200 ease-in absolute top-1/2 left-1/2 cursor-pointer -translate-x-1/2 -translate-y-1/2 z-10'>
                        <PlayIcon className='w-8 h-8 text-white' />
                        {
                            [0, 0.7, 1.4].map((delay, i) => {
                                return (
                                    <motion.div
                                        initial={{ scale: 1.1, opacity: 1 }}
                                        animate={{ scale: 2.5, opacity: 0 }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 2,
                                            ease: "easeOut",
                                            repeatDelay: 0.5,
                                            repeatType: "none",
                                            delay: delay
                                        }}
                                        className='absolute w-full h-full inset-0 bg-transparent rounded-full border border-primary'
                                    >
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </DialogTrigger>
                <DialogContent className="!w-[90%] !mx-auto !max-w-[750px] !p-0 !m-0 !bg-black [&>button]:hidden">
                    <div className='aspect-video w-full'>
                        <iframe
                            width="100%"
                            height="400"
                            className="!w-full"
                            src="https://www.youtube.com/embed/tmkHzlX_kyg"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <DialogClose className="absolute top-4 right-4 text-white hover:text-gray-300 cursor-pointer">
                            <X className="w-8 h-8" />
                        </DialogClose>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Modal;