import CardCarousel from "../CardCarousel/CardCarousel"
import styles from "./Styles/Carousel.module.scss"

//swiper part
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function Carousel() {

  return (
    <>
      <Swiper
      className={styles["my-custom-swiper"]}
      spaceBetween={10}
      slidesPerView={4}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className={styles["my-custom-card"]}>
        <CardCarousel/>
      </SwiperSlide>
      <SwiperSlide className={styles["my-custom-card"]}>
        <CardCarousel/>
      </SwiperSlide>
      <SwiperSlide className={styles["my-custom-card"]}>
        <CardCarousel/>
      </SwiperSlide>
      <SwiperSlide className={styles["my-custom-card"]}>
        <CardCarousel/>
      </SwiperSlide>
      <SwiperSlide className={styles["my-custom-card"]}>
        <CardCarousel/>
      </SwiperSlide>
      <SwiperSlide className={styles["my-custom-card"]}>
        <CardCarousel/>
      </SwiperSlide>
      <SwiperSlide className={styles["my-custom-card"]}>
        <CardCarousel/>
      </SwiperSlide>
    </Swiper>
    </>
    
  )
}
