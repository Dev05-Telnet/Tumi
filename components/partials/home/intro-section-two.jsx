import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '@components/features/custom-link';
import OwlCarousel from '@components/features/owl-carousel';

import { introSlider } from '@utils/data/carousel';
import { fadeInRightShorter } from '@utils/data/keyframes';

function IntroSection(props) {

    var { banners } = props;

    return (
        <OwlCarousel adClass="intro-slider animation-slider owl-dot-inner owl-nav-big owl-theme" options={introSlider}>
            {banners.map((banner, index) => {
                return (
                    <div key={`banner-${index}`} className="intro-slide2 banner banner-fixed" style={{ backgroundColor: "#ececf3" }}>
                        <figure style={{ maxHeight: 469, minHeight: 200 }}>
                            <LazyLoadImage
                                src={banner.image.url}
                                alt={banner.image.alt || "Intro Slider"}
                                effect="opacity"
                            />
                        </figure>
                        <div className="container">
                            <div className="banner-content ml-auto y-50 mr-0">
                                <Reveal keyframes={fadeInRightShorter} delay={300} duration={800}>
                                    <h4 className="banner-subtitle text-uppercase text-primary">{banner.title[0].text}</h4>
                                    <h3 className="banner-title ls-s font-weight-bold">{banner.tagline[0].text}</h3>
                                    <ALink href={banner.button_link.url} className="btn btn-dark btn-outline btn-rounded mb-1">{banner.button_label[0].text}<i className="d-icon-arrow-right"></i></ALink>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                );
            })}
        </OwlCarousel>
    )
}

export default React.memo(IntroSection);