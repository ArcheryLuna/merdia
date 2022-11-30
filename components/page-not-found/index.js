import "./index.css";
import React, { Component } from 'react'

export default class PageNotFound extends Component {
    Landing() {
        return (
            <>
                <div className="header-page-missing">
                    <h2 className='header-content'>
                        <strong><span className="fancy text-white">404!</span></strong><br/><a
                                className="inline-block px-6 py-2.5 bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none hover:outline-1 hover:outline-dashed  focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out"
                                href="/"
                            >
                                Go home?
                            </a>
                    </h2>
                </div>
            </>
        )
    }  
    render() {
    return (
        <>
            <this.Landing/>
        </>
    )
  }
}
