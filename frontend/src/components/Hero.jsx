import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Hero = ({ deviceType }) => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={deviceType !== "mobile"}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="relative w-full min-h-[260px] h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <img src="/1.png" alt="item1" />
      </div>
      <div className="relative w-full min-h-[260px] h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <img src="/2.png" alt="item2" />
      </div>
      <div className="relative w-full min-h-[260px] h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <img src="/3.png" alt="item3" />
      </div>
    </Carousel>
  );
};

export default Hero;
