import React from 'react';
import styles from './Slider.module.css';

// imgs
import img1 from '../../assets/img/slider1.png'
import img2 from '../../assets/img/slider2.jpg'
import img3 from '../../assets/img/slider3.jpg'

const Slider = () => {
  return (
    <div className='col col-12 col-lg-9 mt-3 d-flex'>
      <div id="customSlider" className={`carousel slide ${styles.section} position-relative overflow-hidden`} data-bs-ride="carousel" data-bs-interval="3000">
        {/* the buttons below the slider */}
          <div className='carousel-indicators'>
            <button
              type="button"
              data-bs-target="#customSlider"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#customSlider"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#customSlider"
              data-bs-slide-to="2"
            ></button>
          </div>

        

        {/* slider content */}
        <div className="carousel-inner h-100">
          <div className="carousel-item active h-100" data-bs-interval="3000">
            <img src={img1} className={`d-block w-100 h-100 rounded overflow-hidden ${styles.sliderImg}`} alt="Slide 1" />
          </div>
          <div className="carousel-item h-100" data-bs-interval="3000">
            <img src={img2} className={`d-block w-100 h-100 rounded overflow-hidden ${styles.sliderImg}`} alt="Slide 2" />
          </div>
          <div className="carousel-item h-100" data-bs-interval="3000">
            <img src={img3} className={`d-block w-100 h-100 rounded overflow-hidden ${styles.sliderImg}`} alt="Slide 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
