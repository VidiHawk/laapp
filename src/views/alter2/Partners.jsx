import React from "react";
import Swiper from "react-id-swiper";
import "swiper/dist/css/swiper.css";

const params = {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnIteration: false,
  },
  slidesPerView: 5,
  spaceBetween: 30,
};

const Partners = () => {
  return (
    <section className="section">
      <div className="container py-5 border-bottom">
        <Swiper {...params}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div className="swiper-slide" key={"swiper" + i}>
              <img
                src={require(`assets/img/logos/${i}.svg`)}
                className="img-responsive"
                alt="logos"
                style={{ maxHeight: "60px" }}
              />
            </div>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
