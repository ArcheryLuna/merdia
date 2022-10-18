import React, { Component} from 'react'
import { motion } from "framer-motion"

import "./homepage.css"
import MacM2 from "../../assets/Woman-On-MacM2.JPG"
import SchoolWorkW from "../../assets/Woman-Doing-Schoolwork.JPG"
import StickDrag from "../../assets/Woman-Dragging-Stick.JPG"

import NHSlogo from "../../assets/NHS-logo.png"

import { RowChart, data, options } from './barChart'

function ScrollDown() {
        window.scrollTo({
            top: 700,
            behavior: 'smooth'
        });
    }

export default class Homepage extends Component {

    Landing() {
        return <>
            <div>
                <div className='header'>
                    <motion.h2 className='header-content'> <strong><span className="fancy">Feeling Stressed?</span></strong></motion.h2>
                    <div className='scroll-indicator text-sm xl:text-base text-gray-600'>
                        <button onClick={() => {
                            ScrollDown()                   
                        }}><i className="text-3xl fa-solid fa-chevron-down"></i></button>
                        
                    </div>
                </div>
            </div>
        </>
    }

    Cards() {
        return <>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                <motion.div initial={{opacity : 0, x: -250}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration : 0.75}}  className="rounded bg-gray-700 text-white overflow-hidden shadow-lg">
                    <img src={MacM2} className="w-max" alt="Lake Ripple"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                            <i className="fa-thin fa-list-timeline text-blue-500"></i> Managing Stress</div>
                    <p className="text-gray-200 text-base">
                        Whether it is Homework getting you down or a sticky home life or maybe even exam season, you can count on the fact that this website will help you find a way to manage that stress in an effective an non concerning way.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <a href="/stress-management" className="inline-block bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Learn More <i className="fa-regular fa-arrow-right-to-bracket"></i></a>
                </div>
                </motion.div>

                <motion.div initial={{opacity : 0, x: -250}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration : 0.5}} className="rounded bg-gray-700 text-white overflow-hidden shadow-lg">
                <img className="w-full" src={SchoolWorkW} alt="Young Lady does her schoolwork"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2"><i className="fa-thin fa-school text-blue-500"></i> School</div>
                    <p className="text-gray-200 text-base">
                        School in your opinion may be the single worst cause off stress or it may be the one place you feel calm. Whichever boat you land on you’ve probably have encounter one thing that caused you some stress.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <a href="/stress-management#school" className="inline-block bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Learn More <i className="fa-regular fa-arrow-right-to-bracket"></i></a>
                </div>
                </motion.div>

                <motion.div initial={{opacity : 0, x: -250}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration : 0.25}}  className="rounded bg-gray-700 text-white overflow-hidden shadow-lg">
                <img className="w-full" src={StickDrag} alt="Woman Draging Stick In Forest"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2"><i className="fa-thin fa-handshake text-blue-500"></i> Need Help Managing</div>
                    <p className="text-gray-200 text-base">
                        Still need help with a specific thing not listed on the other pages? If you do, we still got some places you can go contact for whatever need. This page can help you get personalised advice outside of the scope of this site.
                    </p>
                </div>
                    <div className="px-6 pt-4 pb-2">
                        <a href="/contacts" className="inline-block bg-blue-600 hover:bg-blue-700 rounded-full px-3 py-1 transition-all duration-300 text-sm font-semibold text-white mr-2 mb-2">Learn More <i className="fa-regular fa-arrow-right-to-bracket"></i></a>
                    </div>
                </motion.div>
            </div>
        </>
    }

    Statistics() {
        

        return (
            <div className=" text-center place-content-center px-6 mb-12 overflow-hidden ">
                <motion.h2 initial={{ x: -250, opacity: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className='font-bold sm:text-xl md:text-3xl overflow-hidden mb-3'>
                    <i className="fa-thin fa-chart-simple text-green-600"></i> The Statistics and <strong className='fancy'>facts</strong>
                </motion.h2>
                <RowChart options={options} data={data} />
            </div>
            
        )
    }

    LogoCloud() {

        return (
            <>
                <section className="logoCloudBg mb-12 overflow-hidden text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-12 font-bold sm:text-xl md:text-3xl overflow-hidden lg:mb-24 mb-12 logoCloudContent text-white"
                    >
                        <i className="fa-regular text-blue-300 fa-handshake"></i> Partnered with <strong className="fancy">200+</strong> companies
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-6 px-6">
                        <motion.div initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.125}}
                            className="mb-12 lg:mb-0 mx-auto"
                        >
                            <img
                                src="https://seeklogo.com/images/C/ChildLine-logo-430A5FAEE0-seeklogo.com.png"
                                className="img-fluid grayscale logoCloud"
                                alt="Childline - Logo"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.25}}
                            className="mb-12 lg:mb-0 mx-auto"
                        >
                            <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/2/22/American_Psychological_Association_logo.svg/1200px-American_Psychological_Association_logo.svg.png"
                            className="img-fluid grayscale logoCloud"
                            alt="APA - Logo"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.375}}
                            className="mb-12 lg:mb-0 mx-auto"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/2/2f/Nspcc_logo_2.png"
                                className="img-fluid grayscale logoCloud"
                                alt="NSPCC - Logo"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5}}
                            className="mb-12 lg:mb-0 mx-auto"
                        >
                            <img
                            src="https://www.christiecampus.com/CCH/media/Design/headspace-small.png?ext=.png"
                                className="img-fluid grayscale logoCloud"
                                alt="Headspace - Logo"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.625}}
                            className="mb-12 lg:mb-0 mx-auto"
                        >
                            <img
                            src="https://www.mentalhealth.org.uk/sites/default/files/2022-04/MHF_scotland_RGB.png"
                                className="img-fluid grayscale logoCloud"
                                alt="Mental Health Foundation - Logo"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.75}}
                            className="lg:mb-24 mb-12 mx-auto"
                        >
                            <img
                            src={NHSlogo}
                            className="img-fluid grayscale logoCloud"
                            alt="NHS - logo"
                            />
                        </motion.div>
                    </div>
                </section>
            </>
        )
    }

    WhyImportant() {
        return (
            <>
                <section id="About-Us" className="logoCloudBg">

                    <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="px-12 grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">
                        <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="mb-6 lg:mb-0">
                        <motion.h2 initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="duration-150 md:mt-0 mt-12 text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-center md:text-left text-transparent bg-clip-text bg-gradient-to-l from-white to-blue-300">
                            <i className="sm:fa-solid fa-thin fa-circle-info text-blue-400"></i> A little about us
                        </motion.h2>
                        </motion.div>
                        <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="duration-150 mb-6 lg:mb-0">
                        <motion.p initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="uppercase tracking-tight text-sm text-transparent font-extrabold md:mt-12 bg-clip-text bg-gradient-to-l from-white to-blue-300 mb-4"><i className="fa-thin sm:fa-solid fa-circle-question text-blue-300"></i> Learn more</motion.p>
                            <motion.p initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="text-white mb-6 text-lg">
                                We were founded to try and help people with problems managing their stress and anxiety.  Founded by Sebastian Luna we strive to help you find the help that you need and deserve. We think we can create a more solid foundation on dealing with your own stress.
                            </motion.p>
                            <motion.a
                                initial={{ opacity: 0 }}
                                transition={{ duration: 1, delay: 0.25 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="mb-2 w-full inline-block sm:mb-12 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 text-center active:bg-blue-800 active:shadow-lg transition duration-300 ease-in-out"
                                href="/stress-management"
                            >
                                Learn More
                            </motion.a>
                        </motion.div>
                    </motion.div>

                </section>
            </>
        )
    }

    render() {
        return (
            <>
                <this.Landing />
                <this.Cards />
                <this.Statistics />
                { /*<this.LogoCloud /> */ }
                <this.WhyImportant/>
            </>
        )
    }
}
