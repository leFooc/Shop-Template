import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { categoryPickState, categoryState } from "../../state";
import { useRecoilValue } from "recoil";

export const CategoryList: React.FunctionComponent = () => {
    const categories = useRecoilValue(categoryState);
    const categoryOption = useRecoilValue(categoryPickState);
    console.log(categoryOption);

    return (
        <div className="category-list-wrapper">
            <Swiper
                slidesPerView={4}
            >
                {
                    categories.map((category, idx) => 
                        <SwiperSlide key={idx}>
                            <div
                                className="category-wrapper"
                            >
                                <span className={`category ${idx == 1 ? "active" : ""}`}>{idx == 1 ? "fu bar bar fu tofu futon yo hi there " : "yo hi"}</span>
                                <span className={`category-indicator ${idx == 1 ? "active" : ""}`} />
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
            <Swiper>

            </Swiper>
        </div>
    );
};