import React from 'react'
import Reveal from "react-awesome-reveal";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '@components/features/custom-link';

import { fadeInRightShorter } from '@utils/data/keyframes';

const CallToAction = ({ slice }) => {
    return (
        <div>
            <div className="intro-slide2 banner banner-fixed">
                <figure >
                    <LazyLoadImage
                        src={slice.primary.icon_image.url}
                        alt={slice.primary.icon_image.alt || "Intro Slider"}
                        effect="opacity"
                    />
                </figure>
                <div className="container">
                    <div className={`banner-content ml-auto y-50 mr-0 ${slice.primary.text_location == "Left" ? 'text-left':'text-right'}`} >
                        <Reveal keyframes={fadeInRightShorter} delay={300} duration={800}>
                            <h4 className="banner-subtitle text-uppercase text-primary">{slice.primary.title[0].text}</h4>
                            <h3 className="banner-title ls-s font-weight-bold ">{slice.primary.paragraph[0].text}</h3>
                            <ALink href={slice.primary.button_link.url} className="btn btn-dark btn-outline btn-rounded mb-1">
                                {slice.primary.button_label}
                                <i className="d-icon-arrow-right"></i>
                            </ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CallToAction