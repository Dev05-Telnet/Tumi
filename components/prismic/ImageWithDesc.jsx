import React from "react";
import Reveal from "react-awesome-reveal";

import { RichText } from 'prismic-reactjs';
import RichHeading from './RichHeading'

import ALink from '@components/features/custom-link';
import { fadeInRightShorter } from '@utils/data/keyframes';


const ImageWithDesc = ({ slice }) => {
    return (
        <div className="banner banner-fixed">
            <figure >
                <img src={slice.primary.image.url} />
            </figure>
            <div className="container ">
                <div className={`banner-content ml-auto y-50 mr-0 ${slice.primary.text_position == "Left" ? 'text-left' : 'text-right'}`} >
                <Reveal keyframes={fadeInRightShorter} delay={300} duration={800}>
                    <RichHeading {...slice.primary.title[0]} color={slice.primary.title_text_color} />
                    <div style={{ color: slice.primary.description_text_color }}>
                        <RichText render={slice.primary.description} />
                    </div>
                    {
                        slice.primary.link.url &&
                            slice.primary.link_text ?
                            slice.primary.link_display_type === "Text Link"
                                ? <ALink href={slice.primary.link.url}>{slice.primary.link_text}</ALink>
                                : <ALink href={slice.primary.link.url} className="btn btn-dark btn-outline btn-rounded mb-1">{slice.primary.link_text}</ALink>
                            : <a href={slice.primary.link.url}>{slice.primary.link.url}</a>
                    }
                    </Reveal>
                </div>
            </div>
        </div>
    )
}

export default ImageWithDesc;