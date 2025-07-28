'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const testimonials = [
    {
        text: "It's the best automation tool ever. Anything is possible with n8n. You just need some technical knowledge + imagination. I'm actually looking to start a side project. Just to have an excuse to use n8n more 😅",
        author: "Felix Leber",
        handle: "@felixleber",
        avatar: "/images/avatar_maxim_poulsen_48f450887b_852d0439bc.jpeg",
    },
    {
        text: "It's the best automation tool ever. Anything is possible with n8n. You just need some technical knowledge + imagination. I'm actually looking to start a side project. Just to have an excuse to use n8n more 😅",
        author: "Nanbing",
        handle: "@Ironben",
        avatar: "/images/avatar_maxim_poulsen_48f450887b_852d0439bc.jpeg",
    },
    {
        text: "It's the best automation tool ever. Anything is possible with n8n. You just need some technical knowledge + imagination. I'm actually looking to start a side project. Just to have an excuse to use n8n more 😅",
        author: "Maxim Poulsen",
        handle: "@maximpoulsen",
        avatar: "/images/avatar_maxim_poulsen_48f450887b_852d0439bc.jpeg",
    },
    {
        text: "It's the best automation tool ever. Anything is possible with n8n. You just need some technical knowledge + imagination. I'm actually looking to start a side project. Just to have an excuse to use n8n more 😅",
        author: "Maxim Poulsen",
        handle: "@maximpoulsen",
        avatar: "/images/avatar_maxim_poulsen_48f450887b_852d0439bc.jpeg",
    }, {
        text: "It's the best automation tool ever. Anything is possible with n8n. You just need some technical knowledge + imagination. I'm actually looking to start a side project. Just to have an excuse to use n8n more 😅",
        author: "Maxim Poulsen",
        handle: "@maximpoulsen",
        avatar: "/images/avatar_maxim_poulsen_48f450887b_852d0439bc.jpeg",
    },
];

export default function TestimonialCarousel() {
    const controls = useAnimation();
    const duplicated = [...testimonials, ...testimonials];
    const isPaused = useRef(false);

    const startLoop = async () => {
        while (!isPaused.current) {
            await controls.start({
                x: '-50%',
                transition: { duration: 70, ease: 'linear' },
            });
            await controls.set({ x: 0 });
        }
    };

    useEffect(() => {
        startLoop();
    }, []);

    const handlePause = () => {
        isPaused.current = true;
        controls.stop();
    };

    const handleResume = () => {
        if (!isPaused.current) return;
        isPaused.current = false;
        startLoop();
    };

    return (
        <section className="relative w-full overflow-hidden  text-white py-16">
            {/* Smoke gradients */}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#090319] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#090319] to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex w-max gap-5 px-6 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: -1000, right: 0 }}
                animate={controls}
                onMouseEnter={handlePause}
                onMouseLeave={handleResume}
                onDragStart={handlePause}
                onDragEnd={handleResume}
            >
                {duplicated.map((item, index) => (
                    <div
                        data-aos="flip-left"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                        key={index}
                        className="flex-shrink-0 w-[320px] sm:w-[360px] md:w-[600px]  bg-gradient-to-t from-[#1b3969] via-[#1A091A] to-[#1B0A1B] p-6 rounded-2xl hove:shadow-xl border-1 border-[#767676c3] transition-colors hover:from-[#3064b8] hover:via-[#341234] hover:to-[#1B0A1B] duration-500">
                        <p className="text-[1.5em] leading-relaxed mb-6 py-7">{item.text}</p>
                        <div className="flex items-center gap-3">
                            <Image
                                src={item.avatar}
                                alt={item.author}
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <div>
                                <h4 className="text-base font-semibold">{item.author}</h4>
                                <p className="text-sm text-white/60">{item.handle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}