import React from 'react';
import Slider from 'react-slick';
import youtubeImg from '../../assets/youtube.png';
import instagramImg from '../../assets/instagram.png';
import facebookImg from '../../assets/facebook.png';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Carrosel() {
    const data = [
        { id: '1', image: '../../asstes/instagram.png' },
        { id: '2', image: '../../asstes/youtube.png' },
        { id: '3', image: '../../asstes/facebook.png' },
    ]

    return (
        <div className="carousel">
            <h2>Filmes Recomendados</h2>
            <Swiper
                slidesPerView={1}
                pagination={{clickable: true}}
                navigation
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt='Slider'
                            className="slide-item"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Carrosel;
