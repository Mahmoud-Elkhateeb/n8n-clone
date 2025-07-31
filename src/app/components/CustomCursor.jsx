'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const move = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', move)
        return () => window.removeEventListener('mousemove', move)
    }, [])

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
            animate={{
                x: position.x - 12,
                y: position.y - 12,
            }}
            transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
            }}
        />
    )
}
