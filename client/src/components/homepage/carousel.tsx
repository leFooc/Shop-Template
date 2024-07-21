import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { Box } from "zmp-ui";
import { bannerState } from "../../state";



interface SlideProps {
    src: string,
    alt: string,
    label: string,
}

interface CarouselProps {
    items: {
        src: string,
        alt: string,
        label: string, 
    } [],
}

const CarouselItem: React.FunctionComponent<SlideProps> = (props: SlideProps) => {
    return (
        <div className="slide-container">
            <img
                className="slide-image"
                src={props.src}
                alt={props.alt}
            />
            <span className="slide-label">{props.label}</span>
        </div>
    );
};

export const Carousel: React.FunctionComponent = () => {
    const items = useRecoilValue(bannerState);

    return (
        <Box className="banner-wrapper">
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 10000, 
                    disableOnInteraction: false,
                }}
                navigation
                pagination={{clickable: true}}
            >
                {
                    items.map((item, id) => 
                    <SwiperSlide key={id}>
                        <CarouselItem
                            src={item.src}
                            alt={item.alt}
                            label={item.label}
                        />
                    </SwiperSlide>
                    )
                }
            </Swiper>
        </Box>
    );
};