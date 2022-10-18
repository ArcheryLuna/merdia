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
                        <i className="fa-light fa-bars fixed right-2 top-2 z-[1000] md:text-2xl xl:text-3xl transition-all duration-300 hover:bg-blue-700 text-white bg-blue-600 px-3 py-[0.625rem] rounded-lg"></i>
                    </motion.button>
                </>
            );
        }

        return (
            <>
                <div id="menu">
                    <h1 id="title" className="fixed top-5 left-5 text-white text-3xl fancy"><img alt="Feeling Stressed?" src={LogoNoBG} className="h-6 w-34"/></h1>
                    <button onClick={() => {
                        setIsActive(!isActive);
                    }}>
                        <i className="fa-regular fa-x px-3 py-[0.5rem] bg-red-600 fixed md:text-2xl xl:text-3xl right-2 z-[1000] top-2 transition-all duration-300 hover:bg-red-700 text-white rounded-lg"></i>
                    </button>
                    <div id="menu-items">
                        <a href="/" className="menu-item">Home</a>
                        <a href="/stress-management" className="menu-item">Stress Management</a>
                        <a href="/contacts" className="menu-item">Contacts</a>
                    </div>
                    <div id="menu-background-pattern"></div>
                    <div id="menu-background-image"></div>
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
