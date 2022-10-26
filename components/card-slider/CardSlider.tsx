import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import slide1 from '../../public/slide-1.webp';
import slide2 from '../../public/slide-2.jpg';
import css from './CardSlider.module.css';

type ICardSlider = {};

const CardSlider: React.FC<ICardSlider> = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className={css.container}>
            <Slider {...settings}>
                <div className={css.slickSlide}>
                    <Image src={slide1} alt="" />
                </div>
                <div className={css.slickSlide}>
                    <Image src={slide2} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default CardSlider;
