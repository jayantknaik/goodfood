import { useEffect } from "react";

const Shimmer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    
    return (
        <div className="shimmer">
            <div className="shimmer__intro"></div>
            <div className="shimmer__title"></div>
            <div className="shimmer__swiper">
                <div className="shimmer__slide"></div>
                <div className="shimmer__slide"></div>
                <div className="shimmer__slide"></div>
            </div>
        </div>
    )
}

export default Shimmer;