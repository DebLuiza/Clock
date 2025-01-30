import CardCarousel from "../CardCarousel/CardCarousel"
import styles from "./Styles/Carousel.module.scss"

//swiper part
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carousel() {

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className={styles["my-custom-swiper"]}
    >
      <SwiperSlide>
        <div className={styles["slide-content"]} style={{ background: '#ffcccc' }}>
          <h2>Slide 1</h2>
          <p>Conteúdo do slide 1</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles["slide-content"]} style={{ background: '#ccffcc' }}>
          <h2>Slide 2</h2>
          <p>Conteúdo do slide 2</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles["slide-content"]} style={{ background: '#ccccff' }}>
          <h2>Slide 3</h2>
          <p>Conteúdo do slide 3</p>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
