import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
// import required modules
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import 'swiper/css/pagination';
export const Testimonials: React.FC = () => {

    return (
        <>
            <div className='testimonials-section border-bottom border-top py-5'>

                <div className="row g-0">
                    <div className="col-md-12 px-3">
                        <div className="heading text-center">
                            <h2 className="h2 mb-2">What Our Players Say</h2>
                            <p className="text-muted">Discover the joy of online gaming with our user-generated content</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-md-12 px-5">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                480: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide className='testimonial-swiper'>
                                <div className="swiper-content">
                                    <div className="rating-icon">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <div className="user-comment"> 
                                        <p>I’m in Vegas from the comfort of my home. Incredible app!"</p>
                                    </div>
                                    <div className="comment-author">
                                        <div className="author-name">
                                            <p>Sonu</p>
                                        </div>
                                        <div className="author-title">
                                            <p>Player</p>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>
                            <SwiperSlide className='testimonial-swiper'>
                                <div className="swiper-content">
                                    <div className="rating-icon">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <div className="user-comment">
                                        <p>"Amazing experience!  It truly feels like being in a real casino. Highly recommend it!".</p>
                                    </div>
                                    <div className="comment-author">
                                        <div className="author-name">
                                            <p>Shivam</p>
                                        </div>
                                        <div className="author-title">
                                            <p>Player</p>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>
                            <SwiperSlide className='testimonial-swiper'>
                                <div className="swiper-content">
                                    <div className="rating-icon">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <div className="user-comment">
                                        <p>I love the variety of games available. Whether it’s poker, blackjack, or slots.</p>
                                    </div>
                                    <div className="comment-author">
                                        <div className="author-name">
                                            <p>Rinku Yadav</p>
                                        </div>
                                        <div className="author-title">
                                            <p>Player</p>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>
                            <SwiperSlide className='testimonial-swiper'>
                                <div className="swiper-content">
                                    <div className="rating-icon">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <div className="user-comment">
                                        <p>the customer support is excellent. I had an issue with a transaction, and they resolved it quickly.</p>
                                    </div>
                                    <div className="comment-author">
                                        <div className="author-name">
                                            <p>Sunil Sharma</p>
                                        </div>
                                        <div className="author-title">
                                            <p>Player</p>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>
                            <SwiperSlide className='testimonial-swiper'>
                                <div className="swiper-content">
                                    <div className="rating-icon">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <div className="user-comment">
                                        <p>This casino app is addictive in the way possible.and the competition keeps it exciting!"

</p>
                                    </div>
                                    <div className="comment-author">
                                        <div className="author-name">
                                            <p>Virat</p>
                                        </div>
                                        <div className="author-title">
                                            <p>Player</p>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>
                            <SwiperSlide className='testimonial-swiper'>
                                <div className="swiper-content">
                                    <div className="rating-icon">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <div className="user-comment">
                                        <p>"I’ve tried many casino apps, but this one stands out for its realistic gameplay and fair chances of winning.</p>
                                    </div>
                                    <div className="comment-author">
                                        <div className="author-name">
                                            <p>Harsh</p>
                                        </div>
                                        <div className="author-title">
                                            <p>Player</p>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>
                            <SwiperSlide className='testimonial-swiper'>
                                <div className="swiper-content">
                                    <div className="rating-icon">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <div className="user-comment">
                                        <p>I’ve won so many free spins, and the daily challenges keep me coming back every day."</p>
                                    </div>
                                    <div className="comment-author">
                                        <div className="author-name">
                                            <p>Mukul</p>
                                        </div>
                                        <div className="author-title">
                                            <p>Player</p>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>
                            <SwiperSlide className='testimonial-swiper'>
                                <div className="swiper-content">
                                    <div className="rating-icon">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <div className="user-comment">
                                        <p>The rewards and bonuses are fantastic! </p>
                                    </div>
                                    <div className="comment-author">
                                        <div className="author-name">
                                            <p>Rohit</p>
                                        </div>
                                        <div className="author-title">
                                            <p>Player</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 px-2">
                        <div className="row our-success">
                            <div className="col-md-3 col-sm-6 mb-4 Px-3">
                                <h4>Categories</h4>
                                <p>10+</p>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4 Px-3">
                                <h4>Slots</h4>
                                <p>2548</p>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4 Px-3">
                                <h4>Games</h4>
                                <p>3</p>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4 Px-3">
                                <h4>Tournaments</h4>
                                <p>256</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
