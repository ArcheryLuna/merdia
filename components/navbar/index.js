import "./index.css"
import { motion } from "framer-motion"

import React, { Component, useState, useEffect } from 'react'
import LogoNoBG from "../../assets/logo-no-background.png"
import { classNames } from "../../utils/ClassNames"

const Menu = () => {
    const [isActive, setIsActive] = useState(false)
    const [isVisable, setIsVisible] = useState(false)
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [isHover, setIsHover] = useState(false)

    useEffect(() => {
        function handleWindowResize() {
        setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        const menu = document.getElementById("menu");

        Array.from(document.getElementsByClassName("menu-item"))
        .forEach((item, index) => {
            item.onmouseover = () => {
            menu.dataset.activeIndex = index;
            }
        });
    }, [])

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const handleMouseEnter = () => {
        if (window.pageYOffset > 300) {
            return
        } else {
            if (isVisable) {
                setIsHover(!isHover)
            } else {
                setIsVisible(!isVisable) && setIsHover(!isHover)
            }
        }
        
    }

    const handleMouseExit = () => {
        if (window.pageYOffset > 300) {
            return
        } else {
            if (isVisable === false) {
                return console.log("Hello")
            } else if (isHover === false) {
                return console.log("World")
            } else {
                return setIsVisible(!isVisable) && setIsHover(!isHover)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    if (windowSize.innerWidth <= 767) {
        if (!isActive) {
            return (
                <>
                    <motion.button className="fixed right-5 top-5 z-[100]" onClick={() => { setIsActive(!isActive) }}>
                        <i class="fa-light fa-bars-staggered text-2xl md:text-3xl text-white"></i>
                    </motion.button>
                </>
            );
        }

        return (
            <>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} className="relative z-[1000]" id="menu">
                    <h1 id="title" className="fixed top-5 left-5 text-white text-3xl fancy"><img alt="Feeling Stressed?" src={LogoNoBG} className="h-6 w-34"/></h1>
                    <button onClick={() => {
                        setIsActive(!isActive);
                    }}>
                        <i className="fa-regular fa-x fixed top-2 right-4 z-[1001] text-red-500 hover:text-red-600 transition-all duration-150 text-2xl md:text-3xl"></i>
                    </button>
                    <div id="menu-items">
                        <a href="/" className="menu-item">Home</a>
                        <a href="/stress-management" className="menu-item">Stress Management</a>
                        <a href="/#" className="menu-item">Our Goal</a>
                        <a href="/#" className="menu-item">Contact Us</a>
                    </div>
                    <div id="menu-background-pattern"></div>
                    <div id="menu-background-image"></div>
                </motion.div>
            </>
        )
    }
    
    return (<>
        <nav onMouseEnter={() => {
            handleMouseEnter()
        }} onMouseLeave={() => handleMouseExit()} className={classNames(isVisable ? "opacity-100" : "opacity-0" , "fixed transition-all duration-300 w-[100%] z-[100] top-0 bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900")}>
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                    <img src={LogoNoBG} className="h-5 mr-3" alt="Feeling Stressed Logo" />
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Home</a>
                    </li>
                    <li>
                    <a href="/stress-management" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Stress Management</a>
                    </li>
                    <li>
                    <a href="/#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Our Goal</a>
                    </li>
                    <li>
                    <a href="/contacts" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact's</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>

        

    )

    }

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}
export default class Navbar extends Component {

    render() {
    return (
        <>
            <Menu/>
        </>
    )
  }
}
