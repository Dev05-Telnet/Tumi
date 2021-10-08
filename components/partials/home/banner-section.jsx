import React, { useEffect, useRef } from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '@components/features/custom-link';

import { fadeIn } from '@utils/data/keyframes';

function BannerSection () {
    const ref = useRef( null );

    useEffect( () => {
        isotopeInit();
    }, [] );

    async function isotopeInit () {
        const Isotope = ( await import( 'isotope-layout' ) ).default;

        let iso = new Isotope( ref.current, {
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-space'
            }
        } );
    }

    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
            <section className="banner-group grid row mt-7" ref={ ref }>
                <div className="grid-item col-lg-8 height-x2">
                    <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce className="h-100">
                        <div className="banner1 banner banner-fixed overlay-zoom" style={ { backgroundColor: "#efefef" } }>
                            <figure>
                                <LazyLoadImage
                                    src="https://images.unsplash.com/photo-1468234560893-89c00b6385c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80"
                                    alt="category banner"
                                    effect="opacity;"
                                    width="auto"
                                    height={ 434 }
                                />
                            </figure>
                            <div className="banner-content">
                                <h4 className="banner-subtitle">New Collection</h4>
                                <h3 className="banner-title mb-3 text-uppercase">Up to <strong className="text-primary">35% off</strong></h3>
                                <ALink href="/shop" className="btn btn-white btn-md btn-rounded font-weight-bold">Shop now</ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="grid-item col-lg-3 col-lg-4 col-sm-6 height-x15">
                    <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce className="h-100">
                        <div className="banner2 banner banner-fixed overlay-zoom" style={ { backgroundColor: "#141112" } }>
                            <figure>
                                <LazyLoadImage
                                    src="https://images.unsplash.com/photo-1588407087387-650d5b634676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                                    alt="category banner"
                                    effect="opacity;"
                                    width="auto"
                                    height={ 434 }
                                />
                            </figure>

                            <div className="banner-content x-50 text-center w-100">
                                <h3 className="banner-title mb-3 text-white font-weight-normal">Sport Essentials<strong className="d-block">FOR WOMEN'S</strong></h3>
                                <ALink href="/shop" className="btn btn-white btn-link btn-underline font-weight-bold">Shop now<i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="grid-item col-lg-3 col-lg-4 col-sm-6 height-x15">
                    <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce className="h-100">
                        <div className="banner3 banner banner-fixed">
                            <div className="banner-content x-50 y-50 text-center w-100">
                                <h3 className="banner-title mb-1 font-weight-normal text-uppercase text-body">Subscribe to our<strong className="d-block text-dark mt-2">Newsletter</strong></h3>
                                <p className="text-grey">Start Shopping Right Now</p>
                                <form action="#" method="get" className="input-wrapper">
                                    <input type="email" className="form-control text-light text-center mb-4" name="email" id="email" placeholder="Email address here..." required />
                                    <button className="btn btn-primary btn-sm btn-rounded font-weight-bold" type="submit">Subscribe<i className="d-icon-arrow-right"></i></button>
                                </form>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="grid-item col-lg-8 height-x1">
                    <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce className="h-100">
                        <div className="banner4 banner banner-fixed overlay-zoom" style={ { backgroundColor: "#e2c798" } }>
                            <figure>
                                <LazyLoadImage
                                    src="https://images.unsplash.com/photo-1534778524404-28a22495e9ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                                    alt="category banner"
                                    effect="opacity;"
                                    width="auto"
                                    height={ 434 }
                                />
                            </figure>
                            <div className="banner-content x-50 y-50 text-center w-100">
                                <h4 className="banner-subtitle mb-1 font-weight-normal">Top Trending</h4>
                                <h3 className="banner-title text-uppercase">New Accessories</h3>
                                <ALink href="/shop" className="btn btn-link btn-underline font-weight-bold">Shop now<i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="grid-space col-1"></div>
            </section>
        </Reveal>
    )
}

export default React.memo( BannerSection );