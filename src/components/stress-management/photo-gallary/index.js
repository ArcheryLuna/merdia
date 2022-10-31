import React, { Component, useEffect } from 'react'
import "./index.css"

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
      <div class="gallery mt-12">

        <div class="gallery-item">
          <img class="gallery-image" src={ImageOne} alt="Photo was taken at the happyest place on earth"/>
            </div>

            <div class="gallery-item">
              <img class="gallery-image" src={ImageTwo} alt="Millenium Falcon hyperdrive"/>
            </div>

            <div class="gallery-item">
              <img class="gallery-image" src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop" alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"/>
            </div>

            <div class="gallery-item">
              <img class="gallery-image" src={ImageThree} alt="Palm tree at the Universal Citywalk"/>
            </div>

            <div class="gallery-item">
              <img class="gallery-image" src={ImageFour} alt="The Wonderfull LA skyline. LA - Where dreams are made."/>
            </div>

            <div class="gallery-item">
              <img class="gallery-image" src={ImageFive} alt="Beverly Hills"/>
            </div>

        </div>
    </div>
    )
  }

export default PhotoGallery;