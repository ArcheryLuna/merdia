import React, { Component, useEffect, useState } from 'react'
import { classNames } from '../../utils/ClassNames';
import "./index.css"

import { motion } from "framer-motion"
import { ScrollDown } from "../../utils/ScrollDown"

export default class Contacts extends Component {

    Landing() {
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
            
            return (
                <>
                    <div className='landing-contacts'>
                        <h2 className='text-center text-[6vw] text-white-300'>
                            <strong className='relative z-[1] highlighter-contacts fancy text-white'>Contacts</strong>
                            <div className='scroll-indicator text-sm xl:text-base text-white'>
                                <button onClick={() => {
                                    ScrollDown(700)
                                }}
                                className={classNames(isVisable? "opacity-100" : "opacity-0", "transition-all duration-300")}>
                                    <i className={
                                    'text-3xl fa-solid fa-chevron-down'} ></i>
                                </button>
                            </div>
                        </h2>
                    </div>
                </>
            )
        }
            
        return (
            <Land/>
        )
    }

    Contact() {
        return (
            <>
                <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="px-12 grid lg:grid-cols-2 gap-6 xl:gap-12 mt-12 mb-12 items-center">
                        <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="mb-6 lg:mb-0">
                        <motion.h2 initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="duration-150 text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                            <i className="sm:fa-solid fa-thin fa-phone text-blue-400"></i> Childline
                        </motion.h2>
                        </motion.div>
                        <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="duration-150 mb-6 lg:mb-0">
                        <motion.p initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="uppercase tracking-tight text-sm text-transparent font-extrabold bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600 mb-4"><i className="fa-thin sm:fa-solid fa-circle-question text-blue-400"></i> Learn more</motion.p>
                            <motion.p initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="mb-6 text-lg">
                                Childline help people under the age of 19 with any problem they may be facing.
                            </motion.p>
                            <motion.a
                                initial={{ opacity: 0 }}
                                transition={{ duration: 1, delay: 0.25 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 text-center active:bg-blue-800 active:shadow-lg transition duration-300 ease-in-out"
                                href="https://childline.org.uk"
                            >
                                Go to Childline
                            </motion.a>
                        </motion.div>
                </motion.div>
                <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="px-12 mb-12 grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">
                        <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="mb-6 lg:mb-0">
                        <motion.h2 initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="duration-150 text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-orange-400 to-amber-600">
                            <i className="sm:fa-solid fa-thin fa-envelope text-amber-600"></i> NSPCC
                        </motion.h2>
                        </motion.div>
                        <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="duration-150 mb-6 lg:mb-0">
                        <motion.p initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="uppercase tracking-tight text-sm text-transparent font-extrabold bg-clip-text bg-gradient-to-br from-orange-400 to-amber-600 mb-4"><i className="fa-thin sm:fa-solid fa-circle-question text-orange-400"></i> Learn more</motion.p>
                            <motion.p initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="mb-6 text-lg">
                                They protect children from abuse and other crimes against children.
                            </motion.p>
                            <motion.a
                                initial={{ opacity: 0 }}
                                transition={{ duration: 1, delay: 0.25 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="mb-2 w-full inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 text-center active:bg-orange-800 active:shadow-lg transition duration-300 ease-in-out"
                                href="https://www.nspcc.org.uk"
                            >
                                Go to the NSPCC
                            </motion.a>
                        </motion.div>
                </motion.div>
                <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="px-12 mb-12 grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">
                        <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="mb-6 lg:mb-0">
                        <motion.h2 initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="duration-150 text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-rose-400 to-red-600">
                            <i className="sm:fa-solid fa-thin fa-siren text-red-600"></i> Emergency Responce
                        </motion.h2>
                        </motion.div>
                        <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="duration-150 mb-6 lg:mb-0">
                        <motion.p initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="uppercase tracking-tight text-sm text-transparent font-extrabold bg-clip-text bg-gradient-to-br from-rose-400 to-red-600 mb-4"><i className="fa-thin sm:fa-solid fa-circle-question text-rose-400"></i> Learn more</motion.p>
                            <motion.p initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="mb-6 text-lg">
                                If your situation is very dangourous and it's nessisary call 999, 911 or your coresponding emergency services number. <span className='relative z-[1] highlighter-contacts'>DISCLAMER</span> only do this in an emergency.
                            </motion.p>
                            <motion.a
                                initial={{ opacity: 0 }}
                                transition={{ duration: 1, delay: 0.25 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="mb-2 w-full inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 text-center active:bg-red-800 active:shadow-lg transition duration-300 ease-in-out"
                                href="https://www.police.uk"
                            >
                                Go to the Emergency responce ( United Kingdom )
                            </motion.a>
                        </motion.div>
                    </motion.div>
            </>
        )
    }

    ImportantInfo() {
        
        return <>
            <section id="Call-For-Some-Support" className="mt-12">

                <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="px-12 mb-12 gap-6 xl:gap-12 items-center">
                    <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="mb-6 lg:mb-0">
                        <motion.h2 initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="duration-150 mb-3 text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-lime-400 to-emerald-600">
                            <i className="fa-thin fa-phone-office text-green-600"></i> Contact
                        </motion.h2>
                        </motion.div>
                        <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="duration-150 mb-6 lg:mb-0">
                            <motion.p initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="mb-6 text-lg">
                                Contacting other human being's can be a bit scary at times because they're creatures of randomness. However, they are some of the wisest advice did not come from AI or some person on the internet but it came from respectable and trust worthy sources.
                            </motion.p>
                        </motion.div>
                </motion.div>
                <div
                    className='contacts-block'
                >   
                    <h2>
                        ‎
                    </h2>
                    <section className="overflow-hidden">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-12 text-center font-bold sm:text-xl md:text-3xl overflow-hidden lg:mb-24 mb-12 text-white"
                    >
                            <i className="fa-thin fa-phone-plus text-red-300"></i> Contact people to <span className="fancy highlighter-stress relative z-[1]">support you</span>
                    </motion.h2>

                    <div className="grid lg:grid-cols-2 px-12">
                        <motion.div initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25 }}
                        whileInView={{ opacity: 1 }} className="px-12 grid grid-cols-[min-content_1fr] lg:mb-6 gap-6 xl:gap-12 ">
                            <div className="mb-6 lg:mb-0">
                                <h2 className="duration-150 text-xl md:text-2xl xl:text-3xl font-bold text-white text-right">
                                    <i className="fa-thin fa-browsers text-3xl lg:text-6xl"></i>
                                </h2>
                            </div>
                            <div className="duration-150 mb-6 lg:mb-0">
                                <p className="uppercase tracking-tight text-sm text-white font-bold"><span className="relative z-[1] highlighter-stress">Childline</span></p>
                                    <p className='text-white'>Childline help people under the age of 19 with any problem they may be facing.</p>
                                    <a
                                        className="mb-2 w-full mt-3 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 text-center active:bg-blue-800 active:shadow-lg transition duration-300 ease-in-out"
                                        href="https://childline.org.uk"
                                    >
                                        Go to Childline
                                    </a>
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
                                    <i className="fa-thin fa-envelope text-3xl lg:text-6xl"></i>  
                                </h2>
                            </div>
                            <div className="duration-150 mb-6 lg:mb-0">
                                <p className="uppercase tracking-tight text-sm text-white font-bold"><span className="relative z-[1] highlighter-stress">NSPCC</span></p>
                                    <p className='text-white'>They protect children from abuse and other crimes against children.</p>
                                    <a
                                        className="mb-2 w-full mt-3 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 text-center active:bg-blue-800 active:shadow-lg transition duration-300 ease-in-out"
                                        href="https://www.nspcc.org.uk"
                                    >
                                        Go to the NSPCC
                                    </a>
                            </div>
                        </motion.div>
                    
                    
                        <motion.div initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75 }}
                        whileInView={{ opacity: 1 }} className="px-12 grid grid-cols-[min-content_1fr] lg:mb-6 gap-6 xl:gap-12 ">
                            <div className="mb-6 lg:mb-0">
                                <h2 className="duration-150 text-xl md:text-2xl xl:text-3xl font-bold text-white text-right">
                                    <i className="fa-thin fa-books text-3xl lg:text-6xl"></i>
                                </h2>
                            </div>
                            <div className="duration-150 mb-6 lg:mb-0">
                                <p className="uppercase tracking-tight text-sm text-white font-bold"><span className="relative z-[1] highlighter-stress">Therapists</span></p>
                                <p className='text-white'>Therapists are an exelent way of dealing with stess anxiety. They are the best option to go to.</p>
                            </div>
                        </motion.div>
                    
                    
                        <motion.div initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1 }} className="px-12 grid grid-cols-[min-content_1fr] lg:mb-6 gap-6 xl:gap-12 ">
                            <div className="mb-6 lg:mb-0">
                                <h2 className="duration-150 text-xl md:text-2xl xl:text-3xl font-bold text-white text-right">
                                    <i className="fa-thin fa-siren-on text-3xl lg:text-6xl mr-[-0.755rem]"></i>
                                </h2>
                            </div>
                            <div className="duration-150 mb-6 lg:mb-0">
                                <p className="uppercase tracking-tight text-sm text-white font-bold"><span className="relative z-[1] highlighter-stress">Emergency services</span></p>
                                <p className='text-white'>They should only be used when its out of hand. Please call your local emergency service if nessisary. I.E suicide hotlines or the police, ambulance or fire dept.</p>
                            </div>
                        </motion.div>
                    </div>
                </section>
                    <h1>
                        ‎
                    </h1>
                </div>
            </section>
        </>
    }

    render() {
        return (
            <>
                <this.Landing />   
                <this.ImportantInfo /> 
            </>
        )
    }
}
