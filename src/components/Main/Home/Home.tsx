import * as React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';

// header component import
import Header from './Header/Header'

// big text component import
import BigText from '../../BigText/BigText';

// styles import
import './styles/Home.css';

// Import Swiper styles
import 'swiper/css';


const Home = () => {
  return (
    <section className="home">
      <Header />

      <Swiper
        loop={true}
        slidesPerView={1}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
        speed={1000}
      >
        <SwiperSlide>
          <div className="home__content">
            <BigText paragraph="hello! i'm" title='andriy bobyk' />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="home__content">
            <BigText paragraph="i'm from Ukraine" title='web developer' />
          </div>
        </SwiperSlide>
      </Swiper>

    </section>
  )
}

export default Home