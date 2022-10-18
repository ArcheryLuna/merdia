import React, { Component } from 'react'
import { motion } from "framer-motion"
import "./stress-management.css"

function ScrollDown() {
        window.scrollTo({
            top: 700,
            behavior: 'smooth'
        });
    }

export default class StressManagment extends Component {

    Landing() {
        return <>
            <div
                className='landing-stress'
            >
                <h2 className='text-center text-[6vw] text-white-300'>
                    <strong className='relative z-[1] highlighter-red fancy text-white'>Stress <span className="text-white">Management</span></strong>
                    <div className='scroll-indicator text-sm xl:text-base text-white'>
                        <button onClick={() => {
                            ScrollDown()                   
                        }}><i className="text-3xl fa-solid fa-chevron-down"></i></button>
                    </div>
                </h2>
            </div>
        </>
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
                            <motion.p initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="text-gray-500 mb-6 text-lg">
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
            } else if (randomiseFamily === 1) {
                return <i className="fa-thin fa-family-dress text-3xl lg:text-6xl"></i>
            } else {
                return <i className="fa-thin fa-family-pants text-3xl lg:text-6xl"></i>
            }
        }

        return <>
            <section id="school" className='mb-12'>
                <div
                    className="px-12 gap-6 xl:gap-12 items-center"
                >
                    <motion.h2 initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="duration-150 mb-3 text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-amber-400 to-orange-600"><i className="fa-regular fa-school-circle-exclamation text-orange-600"></i> School stress management</motion.h2>
                    <motion.p initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className='text-gray-500 mb-6'>Stress is a very normal thing to experience in schools because schools are designed to put some managed stress on their students to try and make them excel in their subjects. However, there is a fine line between a good constructive stress that will help you push yourself and reach new heights and stresses that leave you in a state of despair and thinking that you will amount to nothing in life.</motion.p>
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
                            <i className="fa-thin fa-school-circle-check text-blue-300"></i> Deal with stress in schools <span className="fancy highlighter-school relative z-[1]">healthily</span>
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
                <motion.div initial={{ y: -250, opacity: 0,}} whileInView={{ y: 0, opacity: 1,}} transition={{ duration: 0.5}} viewport={{ once : true}} className='relative z-[-1] photographers-credit py-4 px-6'>
                    <p className='text-base text-white md:text-xl'>
                        <i className="fa-thin fa-camera ml-6"></i> Shazil Erfan
                    </p>
                </motion.div>

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
                            <motion.p initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} className="text-gray-500 mb-6 text-lg">
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

    render() {
        return (
            <>
                <this.Landing />
                <this.HealthyStress />
                <this.SchoolStress />
                <this.NeedMoreHelp />
            </>
        )
    }
}
