import React from "react";
import { Navigation, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "zmp-ui";

export const ProductCarousel: React.FunctionComponent = () => {
    return (
        <Box mt={6}>
            <h1 className="header">Sản phẩm</h1>
            <Box>
                <Swiper
                    modules={[Navigation, A11y]}
                    navigation
                    slidesPerView={4}    
                >
                    <SwiperSlide>a</SwiperSlide>
                    <SwiperSlide>b</SwiperSlide>
                    <SwiperSlide>c</SwiperSlide>
                    <SwiperSlide>d</SwiperSlide>
                    <SwiperSlide>e</SwiperSlide>
                    <SwiperSlide>f</SwiperSlide>
                </Swiper>
            </Box>
        </Box>
    );
};