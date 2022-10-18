import React, { Component } from 'react'
import { motion } from "framer-motion"
import './index.css'

function ScrollDown() {
    window.scrollTo({
        top: 700,
        behavior: 'smooth'
    })
}

export default class Technologies extends Component {

    Landing() {
        return <>
                <div className='landing-tech'>
                    <h2 className='text-center text-[6vw] text-white-300'>
                        <strong className='relative z-[1] highlighter-tech fancy text-white'>Technologies</strong>
                        <div className='scroll-indicator text-sm xl:text-base text-white'>
                            <i onClick={() => ScrollDown()} className={
                                'text-3xl fa-solid fa-chevron-down'} ></i>
                        </div>
                    </h2>
                </div>
            </>
    }

    TechnologiesUsed() {

        return (
            <>
                <div className='technologiesUsed'>
                        <div
                        className='tech-please'
                    >   
                        <h2>
                            ‎
                        </h2>
                        <section className="mb-12 overflow-hidden">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileInView={{ opacity: 1 }}
                            className="mt-12 text-center font-bold sm:text-xl md:text-3xl overflow-hidden lg:mb-24 mb-12 text-white"
                        >
                                <i className="fa-thin fa-code text-green-300"></i> The <span className="fancy highlighter-tech relative z-[1]">technologies</span>
                        </motion.h2>

                        <div className="grid lg:grid-cols-2 px-12">
                            <motion.div initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.25 }}
                            whileInView={{ opacity: 1 }} className="px-12 grid grid-cols-[min-content_1fr] lg:mb-6 gap-6 xl:gap-12 ">
                                <div className="mb-6 lg:mb-0">
                                    <h2 className="duration-150 text-xl md:text-2xl xl:text-3xl font-bold text-white text-right">
                                        <i className="fa-brands fa-react text-3xl lg:text-6xl"></i>
                                    </h2>
                                </div>
                                <div className="duration-150 mb-6 lg:mb-0">
                                    <p className="uppercase tracking-tight text-sm text-white font-bold"><span className="relative z-[1] highlighter-tech">Reactjs</span></p>
                                    <p className='text-white'>Powerfull Javascript libary for creating reactive code.</p>
                                </div>
                            </motion.div>
                        
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    whileInView={{ opacity: 1 }}
                                    className="px-12 grid grid-cols-[min-content_1fr] lg:mb-6 gap-6 xl:gap-12 "
                                >
                                <div className="mb-6 lg:mb-0">
                                    <h2 className="duration-150 text-xl md:text-2xl xl:text-3xl font-bold text-white text-right">
                                        <i className="fa-brands fa-css3 text-3xl lg:text-6xl"></i>
                                    </h2>
                                </div>
                                <div className="duration-150 mb-6 lg:mb-0">
                                    <p className="uppercase tracking-tight text-sm text-white font-bold"><span className="relative z-[1] highlighter-tech">CSS & SCSS</span></p>
                                    <p className='text-white'>Used for stylings that can't be made with tailwindcss</p>
                                </div>
                            </motion.div>
                        
                        
                            <motion.div initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.75 }}
                            whileInView={{ opacity: 1 }} className="px-12 grid grid-cols-[min-content_1fr] lg:mb-6 gap-6 xl:gap-12 ">
                                <div className="mb-6 lg:mb-0">
                                    <h2 className="duration-150 text-xl md:text-2xl xl:text-3xl font-bold text-white text-right">
                                        <i className="fak fa-tailwind-css-logo text-3xl lg:text-6xl"></i>    
                                    </h2>
                                </div>
                                <div className="duration-150 mb-6 lg:mb-0">
                                    <p className="uppercase tracking-tight text-sm text-white font-bold"><span className="relative z-[1] highlighter-tech">Tailwindcss</span></p>
                                    <p className='text-white'>Tailwind makes styling websites easy with there easy to use utility styles.</p>
                                </div>
                            </motion.div>
                        
                        
                            <motion.div initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            whileInView={{ opacity: 1 }} className="px-12 grid grid-cols-[min-content_1fr] lg:mb-6 gap-6 xl:gap-12 ">
                                <div className="mb-6 lg:mb-0">
                                    <h2 className="duration-150 text-xl md:text-2xl xl:text-3xl font-bold text-white text-right">
                                        <i className="fa-brands fa-square-js text-3xl lg:text-6xl"></i>
                                    </h2>
                                </div>
                                <div className="duration-150 mb-6 lg:mb-0">
                                    <p className="uppercase tracking-tight text-sm text-white font-bold"><span className="relative z-[1] highlighter-tech">Javascript</span></p>
                                    <p className='text-white'>The scripting language that allows the logic of the site to run. V8 engine.</p>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                        <h1>
                            ‎
                        </h1>
                    </div>
                </div>
            </>
        )
    } 

    render() {
        return (
            <>
                <this.Landing />
                <this.TechnologiesUsed />
            </>
        )
    }
}
