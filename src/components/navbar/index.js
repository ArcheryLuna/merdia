import "./index.css"
import { motion } from "framer-motion"

import React, { Component, useState } from 'react'
import LogoNoBG from "../../assets/logo-no-background.png"

import { classNames } from "../../utils/ClassNames"
import { isVisible } from "@testing-library/user-event/dist/utils"

function Menu() {
    const [isActive, setIsActive] = useState(false)


        
    return (
        <>
            <motion.button onClick={() => { setIsActive(!isActive) }}>
                <i className={classNames(isActive ? "opacity-0" : "opacity-100", "transition-all duration-300 fa-light fa-bars-staggered fixed right-4 top-2 z-[100] text-2xl md:text-3xl text-black")}></i>
            </motion.button>
            <div className={classNames(isActive ? "opacity-100" : "opacity-0", "transition-all duration-300")}>
                <div id="menu">
                    <h1 id="title" className="fixed top-5 left-5 text-white text-3xl fancy"><img alt="Feeling Stressed?" src={LogoNoBG} className="h-6 w-34" /></h1>
                    <button onClick={() => {
                        setIsActive(!isActive);
                    }}>
                        <i className="fa-regular fa-x fixed top-2 right-4 z-[1001] text-red-500 hover:text-red-600 transition-all duration-150 text-2xl md:text-3xl"></i>
                    </button>
                    <div id="menu-items">
                        <a href="/" className="menu-item">Home</a>
                        <a href="/stress-management" className="menu-item">Stress Management</a>
                        <a href="/contacts" className="menu-item">Contacts</a>
                    </div>
                    <div id="menu-background-pattern"></div>
                    <div id="menu-background-image"></div>
                </div>
            </div>
        </>
    )
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
