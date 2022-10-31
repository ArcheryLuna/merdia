import React, { Component, useEffect } from 'react'
import "./index.css"
import { motion } from "framer-motion"

// Images
import ImageOne from "../../../assets/Cave.jpg"
import ImageTwo from "../../../assets/Engine.jpeg"
import ImageThree from "../../../assets/Exotic-Palm-Tree.jpg"
import ImageFour from "../../../assets/LA-Skyline.jpg"
import ImageFive from "../../../assets/Palm\ Trees.jpg"

const PhotoGallery = () => {
  useEffect(() => {

    }, [])
  return (
    <div className='relative top-12 mx-4'>
      <div class="gallery mt-12 sm:mt-6 flex flex-col">
        <div className='grid md:grid-cols-3 gap-x-3'>
        <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} class="gallery-item">
          <img class="gallery-image" src={ImageOne} alt="Photo was taken at the happyest place on earth"/>
            </motion.div>

            <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} class="gallery-item">
              <img class="gallery-image" src={ImageTwo} alt="Millenium Falcon hyperdrive"/>
            </motion.div>

            <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} class="gallery-item">
              <img class="gallery-image" src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop" alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"/>
            </motion.div>

            <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}}  class="gallery-item">
              <img class="gallery-image" src={ImageThree} alt="Palm tree at the Universal Citywalk"/>
            </motion.div>

            <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} class="gallery-item">
              <img class="gallery-image" src={ImageFour} alt="The Wonderfull LA skyline. LA - Where dreams are made."/>
            </motion.div>

            <motion.div initial={{opacity:0}} transition={{duration: 1, delay: 0.25}} whileInView={{opacity: 1}} viewport={{once: true}} class="gallery-item">
              <img class="gallery-image" src={ImageFive} alt="Beverly Hills"/>
            </motion.div>
          </div>
        </div>
    </div>
    )
  }

export default PhotoGallery;