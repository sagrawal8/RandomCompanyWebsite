import React from 'react'
import Carousel from './carousel'
import CarouselItem from './carousel-item'
import Review from './review'

const Testimonials: React.FC = () => 
<Carousel className='bg-black text-white pt-10 mb-7 lg:py-20'>
    <CarouselItem index={0}>
        <div>
            <Review by="Axel (Showtime)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices quis est a tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam imperdiet tempor libero mollis vulputate.
            </Review>
        </div>
    </CarouselItem>
    <CarouselItem index={1}>
        <div>
            <Review by="Axel (Google)">
            Pellentesque quis orci pharetra, semper ligula non, iaculis urna. Proin sodales arcu sit amet maximus egestas. Proin sit amet pharetra mauris. Cras scelerisque ut tellus non ornare. Fusce pretium id velit sit amet pretium. In hac habitasse platea dictumst.
            </Review>
        </div>
    </CarouselItem>
    <CarouselItem index={2}>
        <div>
            <Review by="Axel (Amazon)">
            Quisque quis urna porttitor, hendrerit tortor a, accumsan tortor. Integer ut tortor risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vulputate efficitur nulla in consectetur. Aliquam erat volutpat. Aenean eget leo lobortis libero vehicula consequat.
            </Review>
        </div>
    </CarouselItem>
</Carousel>

export default Testimonials