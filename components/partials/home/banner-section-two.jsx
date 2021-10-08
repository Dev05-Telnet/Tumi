import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '@components/features/custom-link';

import { fadeIn, blurIn, zoomIn } from '@utils/data/keyframes';

function BannerSectionTwo() {
    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
            <section className="row mt-10 pt-4">
                <div className="col-lg-8 col-md-7 mb-4">
                    <div className="banner5 banner banner-fixed overlay-dark" style={ { backgroundColor: "#50a2ca" } }>
                        <figure>
                            <LazyLoadImage
                                src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                                alt="banner"
                                effect="opacity;"
                                width="auto"
                                height={ 420 }
                            />
                        </figure>
                        <div className="banner-content y-50 w-100" style={ { transformOrigin: "20%" } }>
                            <Reveal keyframes={ blurIn } delay={ 200 } duration={ 1200 } triggerOnce>
                                <h4 className="banner-subtitle font-weight-normal text-uppercase text-white">New Design</h4>
                                <h3 className="banner-title mb-2 font-weight-bold text-white">Fashion of Pairs</h3>
                                <p className="font-primary ls-m text-white">Free shipping on all over $99</p>
                                <ALink href="/shop" className="btn btn-md btn-outline btn-white btn-rounded">Shop now</ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-5 mb-4">
                    <div className="banner6 banner banner-fixed overlay-zoom" style={ { backgroundColor: "#fff" } }>
                        <figure>
                            <LazyLoadImage
                                src="https://images.unsplash.com/photo-1515622472995-1a06094d2224"
                                alt="banner"
                                effect="opacity; transform"
                                width="auto"
                                height={ 420 }
                            />
                        </figure>
                        <div className="banner-content text-center d-flex flex-column align-items-center">
                            <Reveal keyframes={ zoomIn } delay={ 400 } duration={ 1200 } triggerOnce>
                                <h4 className="banner-subtitle font-weight-normal text-uppercase">End at Summer Sale</h4>
                                <div className="banner-price-info text-uppercase text-primary font-weight-bold">
                                    <span className="d-block mb-4">up to</span>
                                    <h2 className="banner-price font-weight-bold"
                                        style={ { backgroundImage: "url(https://images.unsplash.com/photo-1515622472995-1a06094d2224)" } }>70</h2>
                                    <sup className="font-weight-bold">%</sup>
                                </div>
                                <h3 className="banner-title font-weight-normal text-uppercase">Discount</h3>
                                <ALink href="/shop" className="btn btn-md btn-primary btn-rounded">Shop now</ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( BannerSectionTwo );