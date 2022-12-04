import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { classNames } from '../../../utils/ClassNames'
import { ScrollDown } from '../../../utils/ScrollDown'

const Land = () => {
    const [isVisable, setIsVisible] = useState(true)


    const toggleVisibility = () => {
        if (window.pageYOffset > 50) {
            setIsVisible(false)
        } else {
            setIsVisible(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return <>
        <div>
            <div className='header'>
                <motion.h2 className='header-content'> <strong><span className="fancy">Feeling Stressed?</span></strong></motion.h2>
                <div className='scroll-indicator text-sm xl:text-base text-white'>
                    <button onClick={() => {
                        ScrollDown(700)                  
                    }} className={classNames(isVisable ? "opacity-100" : "opacity-0", "transition-all duration-300")}>
                        <i className="text-3xl fa-solid fa-chevron-down" ></i>
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default Land