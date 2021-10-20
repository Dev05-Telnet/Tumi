import React from 'react'
import OwlCarousel from '@components/features/owl-carousel';

import { productSlider } from '@utils/data/carousel';
import { RichText } from 'prismic-reactjs'

const CardsCarousel = ({ slice }) => {
    return (
        <div>
            <RichText render={slice.primary.eyebrow_headline} />
            <RichText render={slice.primary.title} />
            <RichText render={slice.primary.description} />
            <OwlCarousel adClass="owl-theme owl-nav-full" options={productSlider}>
                {slice.items.map((item, index) =>
                    <div key={`card-item-${index}`}>
                        <RichText render={item.title} />
                        <GalleryItem item={item} key={index} />
                        <RichText render={item.content} />
                        <RichText render={item.additional_info} />
                    </div>
                )}
            </OwlCarousel>
        </div>
    )
}

const GalleryItem = ({ item }) => (
    <div className="gallery-item">
        <img
            src={item.image.url}
            alt={item.image.alt}
        />
        <RichText
            render={item.image_description}
        />
    </div>
)

export default CardsCarousel