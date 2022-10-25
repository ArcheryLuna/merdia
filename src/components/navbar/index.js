import "./index.css"
import { motion } from "framer-motion"

import React, { Component, useState } from 'react'
import LogoNoBG from "../../assets/logo-no-background.png"

function Menu() {
    const [isActive, setIsActive] = useState(false)


        if (!isActive) {
            return (
                <>
                    <motion.button onClick={() => { setIsActive(!isActive) }}>
                        <i class="fa-light fa-bars-staggered fixed right-4 top-2 z-[100] text-2xl md:text-3xl text-[#0b5b4b]"></i>
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
                        <a href="/contacts" className="menu-item">Contacts</a>
                    </div>
                    <div id="menu-background-pattern"></div>
                    <div id="menu-background-image"></div>
                </motion.div>
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
