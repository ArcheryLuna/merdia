import React, { useEffect, useState } from "react";

import { classNames } from "../../utils/ClassNames";
import LogoSGV from "../../assets/Feeling-Stressed.svg"
import LogoNoBG from "../../assets/logo-no-background.png"

const LogoBar = () => {
    const [isVisable, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])
    
    return (
        <div className="absolute z-[10]">
            <div className="fixed flex items-center top-4 left-4">
                <a href="/"> <img alt="Feeling Stressed" src={LogoSGV} className={classNames(
                    isVisable ? 'opacity-100' : 'opacity-0',
                    'inline-flex text-red-400 h-6 w-34 fancy text-5xl duration-300 transition-opacity')} />
                    <img alt="Feeling Stressed Full Size" src={LogoNoBG} className={classNames(
                    isVisable ? 'opacity-0' : 'opacity-100',
                    'inline-flex text-red-400 h-6 w-34 fancy text-5xl duration-300 transition-opacity')} />
                    
                </a>
            </div>
        </div>
    )
}

export default LogoBar