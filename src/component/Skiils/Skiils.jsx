import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./Skiils.css"
// import required modules
import { EffectCube, Pagination } from "swiper";

const Skiils = () => {
    return (
        <>
            <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiperr-Swiper1 animate__animated animate__backInRight animate__delay"
            >
                {/* 
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images\languages programing\CS50_5.jpg" height={"100%"}   width="100%" />
                </SwiperSlide>  
                */}
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images/languages programing\HTML5_logo_and_wordmark.svg" width="100%" height={"100%"} />
                    <h2>Front End</h2>
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images/languages programing\CSS.3.svg" height={"100%"}   width="100%" />
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images\languages programing\java script.png" height={"100%"}  width="100%"/>
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images\languages programing\bootstrap-icon-png-10.jpg" height={"100%"}   width="100%"/>
                </SwiperSlide>
                {/*
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images\languages programing\sass.png" width="100%" height={"100%"}  />
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images\languages programing\material ui.png" width="100%" height={"100%"}  />
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images\languages programing\tailwindcss_logo_icon_170649.png" width="100%" height={"100%"}  />
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images\languages programing\typescript.png" height={"100%"}  width="100%" />
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images\languages programing\gulp.png" height={"100%"} }  width="100%"/>
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images\languages programing\pug.jfif" height={"100%"} }  width="100%"/>
                </SwiperSlide>
                */}
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images\languages programing\React.png" height={"100%"}   width="100%"/>
                </SwiperSlide>

                {/*                 
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images\languages programing\next.jfif" height={"100%"} } width="100%"/>
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images\languages programing\React Native.jfif" height={"100%"} } width="100%"/>
                    <h2>Mobile Developer</h2>
                </SwiperSlide>

                */}
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images\languages programing\php.png" height={"100%"}  width="100%" />
                    <h2>Back End</h2>
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images/languages programing\mysql.png" height={"100%"}  width="100%" />
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images/languages programing\laravel.png"  height={"100%"}  width="100%" />
                </SwiperSlide>
                {/*                                 
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images\languages programing\python-icon-png-3.jpg" height={"100%"}  width="100%" />
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images\languages programing\problem-solving-icon-28.jpg" height={"100%"}  width="100%" />
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images\languages programing\devops.jpg" height={"100%"}  width="100%"/>
                </SwiperSlide> 
                */}
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images\languages programing\API.jpg" height={"100%"}  width="100%" />
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide1">
                    <img src="images\languages programing\git&github.png" height={"100%"}  width="100%" />
                </SwiperSlide>
                {/* <SwiperSlide className="__swiperrr-slide2">
                    <img src="images\other\Adobe_Photosho.png" height={"100%"}  />
                    <h2>Other things learned</h2>
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide2">
                    <img src="images\other\adobe-premiere.png" height={"100%"}  />
                </SwiperSlide> 
                <SwiperSlide className="__swiperrr-slide2">
                    <img src="images\other\encyclopedia-????-????-??????????-????????-????????.jpg" height={"100%"}  />
                </SwiperSlide> */}
                {/* <SwiperSlide className="__swiperrr-slide2">
                    <img src="images\languages\??????????????.png" height={"100%"} width="100%" />
                    <h2>My Original Languages</h2>
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide2">
                    <img src="images\languages\ENGLISH.jfif" height={"100%"} width="100%" />
                </SwiperSlide> */}
                {/* <SwiperSlide className="__swiperrr-slide2">
                    <img src="images\languages\GERMAN.jfif" height={"100%"}  width="100%" />
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide2">
                    <img src="images\languages\FRENCH.jfif" height={"100%"}  width="100%" />
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide2">
                    <img src="images\languages\Italian.jfif" height={"100%"}  width="100%" />
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide2">
                    <img src="images\languages\ESPANOL.jfif" height={"100%"}  width="100%" />
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide2">
                    <img src="images\languages\Turkce[.jfif" height={"100%"}  width="100%" />
                </SwiperSlide>
                <SwiperSlide className="__swiperrr-slide2">
                    <img src="images\languages\Russian.png" height={"100%"}  width="100%" />
                </SwiperSlide> */}
            </Swiper>            
        </>
    );
}
export default Skiils