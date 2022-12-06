import React, { Component, useState, useEffect } from 'react'
import { motion } from "framer-motion"
import "./stress-management.css"
import { classNames } from '../../utils/ClassNames'
import { ScrollDown } from '../../utils/ScrollDown'
// import PhotoGallery from './photo-gallary'



export default class StressManagment extends Component {

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
            
            return <>
                <div
                    className='landing-stress'
                >
                    <h2 className='text-center text-[6vw] text-white-300'>
                        <strong className='relative z-[1] highlighter-red fancy text-white'>Stress <span className="text-white">Management</span></strong>
                        <div className='scroll-indicator text-sm xl:text-base text-white'>
                            <button onClick={() => {
                                ScrollDown(700)                   
                            }} className={classNames(isVisable ? "opacity-100" : "opacity-0", "transition-all duration-300")} ><i className="text-3xl fa-solid fa-chevron-down"></i></button>
                        </div>
                    </h2>
                </div>
            </>
        }

        return <Land/>
    }

    HealthyStress() {
        return <>
            <section id="Healthy-Management" className="mt-12 mb-12">

                <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="px-12 mb-12 gap-6 xl:gap-12 items-center">
                    <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="mb-6 lg:mb-0">
                        <motion.h2 initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="duration-150 mb-3 text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-lime-400 to-emerald-600">
                            <i className="fa-regular fa-heart-circle-check text-emerald-600"></i> Healthy stress management
                        </motion.h2>
                        </motion.div>
                        <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="duration-150 mb-6 lg:mb-0">
                            <motion.p initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className=" mb-6 text-lg">
                                Stress is a big part of almost everyone’s life and you have most probably experienced stress at least once in your life. Stress can be a good thing motivating you to do good thing and try to excel in your field. However, stress can also be a very overwhelming and very distracting and could lead to less productivity and less attentiveness. Like with everything else dealing with stress is also something that can be a bit troublesome the first time you try to do it. If you attempt to deal with your stress unhealthily you can end up feeling more stressed and even developing some unintended side effects.
                            </motion.p>
                        </motion.div>
                </motion.div>
                <div
                    className='healthy-stress-managers'
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
                            <i className="fa-thin text-red-300 fa-heart-circle-check"></i> How to deal with <span className="fancy highlighter-stress relative z-[1]">stress healthily</span>
                    </motion.h2>

                    <div className="grid lg:grid-cols-2 px-12">
                        <motion.div initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25 }}
                        whileInView={{ opacity: 1 }} className="px-12 grid grid-cols-[min-content_1fr] lg:mb-6 gap-6 xl:gap-12 ">
                            <div className="mb-6 lg:mb-0">
                                <h2 className="duration-150 text-xl md:text-2xl xl:text-3xl font-bold text-white text-right">
                                    <i className="fa-thin fa-calendar-lines-pen text-3xl lg:text-6xl"></i>
                                </h2>
                            </div>
                            <div className="duration-150 mb-6 lg:mb-0">
                                <p className="uppercase tracking-tight text-sm text-white font-bold">Plan in <span className="relative z-[1] highlighter-stress">advance</span></p>
                                <p className='text-white'>Plan your events in advance to try and do thing's so your responsibility's do not intrude with your plans.</p>
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
                                    <i className="fa-thin fa-list-check text-3xl lg:text-6xl"></i>
                                </h2>
                            </div>
                            <div className="duration-150 mb-6 lg:mb-0">
                                <p className="uppercase tracking-tight text-sm text-white font-bold">Do some <span className="relative z-[1] highlighter-stress">abstraction</span></p>
                                <p className='text-white'>Abstraction is the act of splitting your problems up into mini problems to make them easier to manage.</p>
                            </div>
                        </motion.div>
                    
                    
                        <motion.div initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75 }}
                        whileInView={{ opacity: 1 }} className="px-12 grid grid-cols-[min-content_1fr] lg:mb-6 gap-6 xl:gap-12 ">
                            <div className="mb-6 lg:mb-0">
                                <h2 className="duration-150 text-xl md:text-2xl xl:text-3xl font-bold text-white text-right">
                                    <i className="fa-thin fa-dumbbell text-3xl lg:text-6xl mr-[-0.74rem]"></i>    
                                </h2>
                            </div>
                            <div className="duration-150 mb-6 lg:mb-0">
                                <p className="uppercase tracking-tight text-sm text-white font-bold">Be more <span className="relative z-[1] highlighter-stress">active</span></p>
                                <p className='text-white'>The more active you are the calmer you are, staying and being more active is also a really positive move for your physical health too. So overall it is a good move in general. </p>
                            </div>
                        </motion.div>
                    
                    
                        <motion.div initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1 }} className="px-12 grid grid-cols-[min-content_1fr] lg:mb-6 gap-6 xl:gap-12 ">
                            <div className="mb-6 lg:mb-0">
                                <h2 className="duration-150 text-xl md:text-2xl xl:text-3xl font-bold text-white text-right">
                                    <i className="fa-thin fa-face-smile-hearts text-3xl lg:text-6xl mr-[-0.755rem]"></i>
                                </h2>
                            </div>
                            <div className="duration-150 mb-6 lg:mb-0">
                                <p className="uppercase tracking-tight text-sm text-white font-bold">Get some <span className="relative z-[1] highlighter-stress">positivity</span></p>
                                <p className='text-white'>Positivity can help you get over the stressfull environment you are in. Self positivity is also something that is very useful as it can also be as effective as complements from your friends, family and peers.</p>
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

    SchoolStress() {

        function randomiseFamily() {
            const RandomFamily = Math.floor(Math.random() * 3)

            if (RandomFamily === 0) {
                return <i className="fa-thin fa-family text-3xl lg:text-6xl"></i>
            } else if (RandomFamily === 1) {
                return <i className="fa-thin fa-family-dress text-3xl lg:text-6xl"></i>
            } else {
                return <i className="fa-thin fa-family-pants text-3xl lg:text-6xl"></i>
            }
        }

        return <>
            <section id="school" className='mb-12'>
                <div
                    className="px-12 gap-6  mb-12 xl:gap-12 items-center"
                >
                    <motion.h2 initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="duration-150 mb-3 text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-amber-400 to-orange-600"><i className="fa-regular fa-school-circle-exclamation text-orange-600"></i> School stress management</motion.h2>
                    <motion.p initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className='mb-6'>Stress is a very normal thing to experience in schools because schools are designed to put some managed stress on their students to try and make them excel in their subjects. However, there is a fine line between a good constructive stress that will help you push yourself and reach new heights and stresses that leave you in a state of despair and thinking that you will amount to nothing in life.</motion.p>
                </div>

                <div
                    className='healthy-stress-managers-school'
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
                            <i className="fa-thin fa-school-circle-check text-yellow-300"></i> Deal with stress in schools <span className="fancy highlighter-school relative z-[1]">healthily</span>
                    </motion.h2>

                    <div className="grid mb-12 lg:grid-cols-2 px-12">
                        <motion.div initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25 }}
                        whileInView={{ opacity: 1 }} className="px-12 grid grid-cols-[min-content_1fr] lg:mb-6 gap-6 xl:gap-12 ">
                            <div className="mb-6 lg:mb-0">
                                <h2 className="duration-150 text-xl md:text-2xl xl:text-3xl font-bold text-white text-right">
                                    <i className="fa-thin fa-chalkboard-user text-3xl lg:text-6xl"></i>
                                </h2>
                            </div>
                            <div className="duration-150 mb-6 lg:mb-0">
                                <p className="uppercase tracking-tight text-sm text-white font-bold"><span className="relative z-[1] highlighter-school">Teachers</span></p>
                                <p className='text-white'>Talk to your teacher since your teacher can support you and help you throught the stress and can even help you with the place where you messed up or did not understand.</p>
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
                                    <i className="fa-thin fa-screen-users text-3xl lg:text-6xl"></i>
                                </h2>
                            </div>
                            <div className="duration-150 mb-6 lg:mb-0">
                                <p className="uppercase tracking-tight text-sm text-white font-bold"><span className="relative z-[1] highlighter-school">Friends</span></p>
                                <p className='text-white'>Your friends are the people who will allways beleive in you. This means that they will also be some of the most supportive people in your scholarly career.</p>
                            </div>
                        </motion.div>
                    
                    
                        <motion.div initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75 }}
                        whileInView={{ opacity: 1 }} className="px-12 grid grid-cols-[min-content_1fr] lg:mb-6 gap-6 xl:gap-12 ">
                            <div className="mb-6 lg:mb-0">
                                <h2 className="duration-150 text-xl md:text-2xl xl:text-3xl font-bold text-white text-right">
                                    { randomiseFamily() }
                                </h2>
                            </div>
                            <div className="duration-150 mb-6 lg:mb-0">
                                <p className="uppercase tracking-tight text-sm text-white font-bold"><span className="relative z-[1] highlighter-school">Family</span></p>
                                <p className='text-white'>Your parents/guardians are the people who will allways be there and will allways support you as much or more than your friends they are the ones who will help you make the most important decidions and support you in the most troubling of times. </p>
                            </div>
                        </motion.div>
                    
                    
                        <motion.div initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1 }} className="px-12 grid grid-cols-[min-content_1fr] lg:mb-6 gap-6 xl:gap-12 ">
                            <div className="mb-6 lg:mb-0">
                                <h2 className="duration-150 text-xl md:text-2xl xl:text-3xl font-bold text-white text-right">
                                    <i className="fa-thin fa-user-shield text-3xl lg:text-6xl"></i>
                                </h2>
                            </div>
                            <div className="duration-150 mb-6 lg:mb-0">
                                <p className="uppercase tracking-tight text-sm text-white font-bold"><span className="relative z-[1] highlighter-school">Safe guarding team</span></p>
                                <p className='text-white'>For anything that is troubling you your schools safe guarding team is there to protect and help you emotionaly and physicaly. They will help you with stress to being bullied. To find out who your safe guarding team is ask your teachers.</p>
                            </div>
                        </motion.div>
                        </div>
                </section>
                    <h1>
                        ‎
                    </h1>
                </div>
                {/**
                <motion.div initial={{ y: -250, opacity: 0,}} whileInView={{ y: 0, opacity: 1,}} transition={{ duration: 0.5}} viewport={{ once : true}} className='relative z-[-1] photographers-credit py-4 px-6'>
                    <p className='text-base text-white md:text-xl'>
                        <i className="fa-thin fa-camera ml-6"></i> Shazil Erfan
                    </p>
                </motion.div>
                 */}

            </section>
        </>
    }

    NeedMoreHelp() {
        return (
            <>
                <section id="More Help" className="mb-12">

                    <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="px-12 grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">
                        <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="mb-6 lg:mb-0">
                        <motion.h2 initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="duration-150 text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400">
                            <i className="sm:fa-solid fa-thin fa-circle-question text-red-600"></i> Need more help
                        </motion.h2>
                        </motion.div>
                        <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="duration-150 mb-6 lg:mb-0">
                            <motion.p initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="mb-6 text-lg">
                                Do you need more help trying to manage your stress? Never fear our contacts page will help you find the most efficient and effective way of managing with absolutly anything you throw at them.
                            </motion.p>
                            <motion.a
                                initial={{ opacity: 0 }}
                                transition={{ duration: 1, delay: 0.25 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="mb-2 w-full inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 text-center active:bg-red-800 active:shadow-lg transition duration-300 ease-in-out"
                                href="/contacts"
                            >
                                Learn More
                            </motion.a>
                        </motion.div>
                    </motion.div>

                </section>
            </>
        )
    }

    FullScreenVideo() {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-700 mt-12">
                <div className='tracking-tight md:mt-0 mt-12 my-6 md:my-3 py-0 md:py-24 px-3 md:px-12'>
                    <motion.h1 initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ opacity: 1 }} className='duration-150 md:mt-0 mt-12 tracking-tight text-center md:text-left text-xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 inline-block text-transparent bg-clip-text'>
                        <i className="fa-solid fa-microphone text-white"></i> An interview with a student
                    </motion.h1>
                    <motion.p
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75 }}
                    whileInView={{ opacity: 1 }} className='text-white mt-3 text-base md:text-2xl'>
                        In this interview we talk to a student about how they manage their stress and how they cope with it. The insite they give is very helpful and will help you understand how to manage your stress. Furthermore it may help you understand healthier ways to deal with stress.
                    </motion.p>
                </div>
                <div className=' my-6 md:my-3 flex justify-center'>
                    <motion.iframe initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1 }} className='min-h-max min-w-max md:min-w-[560px] md:min-h-[315px]' src="https://www.youtube.com/embed/NBlNhjrK1dY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></motion.iframe>
                </div>
            </div>
        )
    }

    ContactInfo() {
        
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
                            <i className="fa-thin fa-phone-plus text-blue-700"></i> Contact people to <span className="fancy highlighter-contact relative z-[1]">support you</span>
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
                                <p className="uppercase tracking-tight text-sm text-white font-bold"><span className="relative z-[1] highlighter-contact">Childline</span></p>
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
                                <p className="uppercase tracking-tight text-sm text-white font-bold"><span className="relative z-[1] highlighter-contact">NSPCC</span></p>
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
                                    <i class="fa-thin fa-books text-3xl lg:text-6xl"></i>
                                </h2>
                            </div>
                            <div className="duration-150 mb-6 lg:mb-0">
                                <p className="uppercase tracking-tight text-sm text-white font-bold"><span className="relative z-[1] highlighter-contact">Therapists</span></p>
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
                                <p className="uppercase tracking-tight text-sm text-white font-bold"><span className="relative z-[1] highlighter-contact">Emergency services</span></p>
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
                <this.HealthyStress />
                <this.SchoolStress />
                {/*<this.NeedMoreHelp />*/}
                <this.ContactInfo />
                {/*<PhotoGallery />*/}
                <this.FullScreenVideo />
                
            </>
        )
    }
}
