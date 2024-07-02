import React from 'react';
import youtubeImg from '../../assets/youtube.png';
import instagramImg from '../../assets/instagram.png';
import facebookImg from '../../assets/facebook.png';
import { Container } from './styles';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Carrosel() {
    const [popularMovie, setPopularMovie] = useState([]);
    const [nowPlay, setNowPlay] = useState([]);
    const [slides, setSlides] = useState(4);

    useEffect(() => {
        const fetchPopularMovie = async () => {
            const chave = '50d40a2240618b139f66a68e2bbd3623';
            const url = `https://api.themoviedb.org/3/movie/popular?api_key=${chave}&language=pt-BR`;

            try {
                const response = await axios.get(url);
                setPopularMovie(response.data.results);
            } catch (error) {
                console.error('Erro ao buscar filme', error);
            }
        };

        const fectNowPlay = async () => {
            const chave = '50d40a2240618b139f66a68e2bbd3623';
            const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${chave}&language=pt-BR`;

            try {
                const response = await axios.get(url);
                setNowPlay(response.data.results);
            } catch (error) {
                console.error('Erro ao buscar filmes', error);
            }
        };

        fectNowPlay();
        fetchPopularMovie();

        function handleSize() {
            if (window.innerWidth <= 720) {
                setSlides(3);
            }
            if (window.innerWidth > 720) {
                setSlides(4);
            }
            if (window.innerWidth > 1800) {
                setSlides(6);
            }
        }
        handleSize();
        window.addEventListener("resize", handleSize)
        return () => {
            window.removeEventListener("resize", handleSize)
        }

    }, []);

    if (!popularMovie) {
        return <div>Carregando...</div>
    }

    return (
        <>
            <Container>
                <h2>Filmes Recomendados</h2>
                <Swiper
                    slidesPerView={slides}
                    pagination={false}
                    scrollbar={{ draggable: true, hide: true }}
                    spaceBetween={20}
                    navigation
                >
                    {popularMovie.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title}
                                className="slide-item"
                            />
                            <h3>{item.title}</h3>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div>
                    
                </div>
                <Swiper
                    slidesPerView={slides}
                    pagination={false}
                    scrollbar={{ draggable: true, hide: true }}
                    spaceBetween={20}
                    navigation
                >
                    {nowPlay.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title}
                                className="slide-item"
                            />
                            <h3>{item.title}</h3>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </>
    );
}

export default Carrosel;
