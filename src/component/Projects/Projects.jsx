import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Projects.css"

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Projects = () => {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper-Swiperrr1 animate__animated animate__backInRight animate__delay"
            >
                                <SwiperSlide className="swiper-slideee__">
                    <h3>E-commerce with React</h3>
                    <a target={"_blank"} href="https://ecommerce-projeckt.vercel.app/">Live Demo</a>
                    <img src="images\other\ecommerce.PNG" height={"100%"} />
                </SwiperSlide>
                <SwiperSlide className="swiper-slideee__">
                    <h3>todo-list with JS</h3>
                    <a target={"_blank"} href="https://todo-list-js-delta.vercel.app/">Live Demo</a>
                    <img src="images\other\todo-list-js.PNG" height={"100%"} />
                </SwiperSlide>
                <SwiperSlide className="swiper-slideee__">
                    <h3>X-O-game with JS</h3>
                    <a target={"_blank"} href="https://x-o-game-nu.vercel.app/">Live Demo</a>
                    <img src="images\other\x-o-game.PNG" height={"100%"} />
                </SwiperSlide>
                <SwiperSlide className="swiper-slideee__">
                    <h3>food with html&css</h3>
                    <a target={"_blank"} href="https://food-one-eta.vercel.app/">Live Demo</a>
                    <img src="images\other\food.PNG" height={"100%"} />
                </SwiperSlide>
                <SwiperSlide className="swiper-slideee__">
                    <h3>facebook with html&css</h3>
                    <a target={"_blank"} href="https://login-facebook-lr7u0iokk-mohammed-mahmmud20.vercel.app/">Live Demo</a>
                    <img src="images\other\facebook.PNG" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slideee__">
                    <h3>notes-app with React</h3>
                    <a target={"_blank"} href="https://notes-app-eta-fawn.vercel.app/">Live Demo</a>
                    <img src="images\other\notes-app.PNG" height={"100%"} />
                </SwiperSlide>
                <SwiperSlide className="swiper-slideee__">
                    <h3>memory-game with JS</h3>
                    <a target={"_blank"} href="https://memory-game-tau-rust.vercel.app/">Live Demo</a>
                    <img src="images\other\memory-game.PNG" height={"100%"} />
                </SwiperSlide>
                <SwiperSlide className="swiper-slideee__">
                    <h3>netflex with html&css</h3>
                    <a target={"_blank"} href="https://netflex-colon-rgupfq4bx-mohammed-mahmmud20.vercel.app/">Live Demo</a>
                    <img src="images\other\netflex.PNG" height={"100%"} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default Projects