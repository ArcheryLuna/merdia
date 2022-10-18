import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"

import { classNames } from "../../utils/ClassNames";

const BackToTop = () => {
    const [isVisable, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])
    
    return (
        <div className="absolute z-[10]">
            <div className="fixed bottom-4 right-4">
                <motion.button whileHover={{ scale: 1.3 }} whileTap={{scale: 1}} type="button" onClick={ScrollToTop} className={classNames(
                    isVisable ? 'opacity-100' : 'opacity-0',
                    'inline-flex items-center p-3 rounded-xl shadow-sm text-white bg-blue-600 transition-opacity hover:bg-blue-700'
                )}><i className="fa-regular fa-chevron-up h-6 w-6"></i></motion.button>
            </div>
        </div>
    )
}

export default BackToTop