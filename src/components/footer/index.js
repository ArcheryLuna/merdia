import React, { Component } from 'react'
import "./index.css"
import LogoSVG from "../../assets/Feeling-Stressed.svg"

export default class Footer extends Component {
    getCurrentYear() {
        const CurrentYear = `${new Date().getFullYear()}`

        return CurrentYear
    }
    render() {
        return (
            <>
                <footer className="text-center lg:text-left bg-gray-800 text-gray-100">        
                    <div className="mx-6 py-10 text-center md:text-left">
                        <div className="grid grid-1 lg:grid-cols-3 gap-8">
                        <div className="">
                            <h6 className="
                                uppercase
                                font-semibold
                                mb-4
                                flex
                                items-center
                                justify-center
                                md:justify-start
                            ">
                            <img src={LogoSVG} className="w-6 h-6 mr-2" alt="Small Logo"></img> Feeling Stressed?
                            </h6>
                            <p>
                                <strong className='relative fancy z-[1] '>A very human website. - <i className="fa-thin fa-robot-astromech"></i></strong>
                            </p>
                        </div>
                        <div className="">
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Useful links
                            </h6>
                            <p className="mb-4">
                                <a href="/" className="text-gray-300">
                                    <i className="fa-thin fa-house"></i> Home
                                </a>
                            </p>
                            <p className="mb-4">
                                <a href="/stress-managment" className="text-gray-300">
                                    <i className="fa-thin fa-list-check"></i> Stress management
                                </a>
                            </p>
                            <p className="mb-4">
                                <a href="/contacts" className="text-gray-300">
                                    <i className="fa-thin fa-address-book"></i> Contacts
                                </a>
                            </p>
                            <p>
                            <a href="https://github.com/ArcheryLuna/merdia" className="text-gray-300"><i className="fa-brands fa-github"></i> Github Repo for this project</a>
                            </p>
                        </div>
                        <div className="">
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Contact
                            </h6>
                            <p className="flex text-gray-300 items-center justify-center md:justify-start mb-4">
                            <i className="w-4 mr-4 fa-thin fa-house"></i> 363 London Road, Central London, London
                            </p>
                            <p className="flex items-center justify-center md:justify-start mb-4">
                            <i className="fa-thin fa-envelope w-4 mr-4"></i>
                            sysadmin@lunacs.co.uk
                            </p>
                            <p className="flex items-center justify-center md:justify-start mb-4">
                            <i className="fa-thin fa-phone w-4 mr-4"></i> +44 7123 456789
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="text-center p-6 bg-gray-700">
                        <span>© 2022 Copyright:</span>
                        <a className="text-gray-400 font-semibold" href="https://archery-luna.com/"> Archery Luna</a>
                    </div>
                </footer>
            </>
        )
    }
}
