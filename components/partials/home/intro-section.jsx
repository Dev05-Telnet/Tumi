import React, { useEffect, useRef } from 'react';
import Image, { ImageProps } from 'next/image'
import Reveal from "react-awesome-reveal";
// import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '@components/features/custom-link';
// import OwlCarousel from '~/components/features/owl-carousel';

// import { introSlider } from '~/utils/data/carousel';
import { fadeIn, fadeInUpShorter, fadeInLeftShorter, blurIn, fadeInRightShorter } from '@utils/data/keyframes';

function IntroSection() {
    const ref = useRef(null);

    useEffect(() => {
        isotopeInit();
    }, []);

    async function isotopeInit() {
        const Isotope = (await import('isotope-layout')).default;

        let iso = new Isotope(ref.current, {
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-space'
            }
        });
    }

    return (
        <div className="categories grid row" ref={ref}>
            <div className="grid-item col-md-6 height-x2">
                <Reveal keyframes={fadeInRightShorter} delay={100} duration={1200} className="h-100" triggerOnce>
                    <div className="category category-banner text-white overlay-zoom category-absolute" style={{ backgroundColor: "#f0f0f0" }}>
                        <figure className="category-media">
                            <Image
                                quality="85"
                                src="https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1370&q=80"
                                alt='Product Image'
                                width="585"
                                height="434"
                                layout="fixed"
                            />
                        </figure>

                        <div className="category-content">
                            <h4 className="category-name">New Arrivals</h4>
                            <span className="category-count">
                                <span>6</span> Products
                            </span>
                            <ALink href={{ pathname: "/shop", query: { category: 'new-arrivals' } }} className="btn btn-underline btn-link">Shop Now</ALink>
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className="grid-item col-md-6 height-x15">
                <Reveal keyframes={fadeInLeftShorter} delay={200} duration={1200} className="h-100" triggerOnce>
                    <div className="category category-banner text-white overlay-zoom category-absolute" style={{ backgroundColor: "#dae0e0" }}>
                        <figure className="category-media">
                            <Image
                                quality="85"
                                src="https://images.unsplash.com/photo-1531938716357-224c16b5ace3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                                alt='Product Image'
                                width="585"
                                height="434"
                                layout="fixed"
                            />
                        </figure>

                        <div className="category-content">
                            <h4 className="category-name">Flash Sales</h4>
                            <span className="category-count">
                                <span>3</span> Products
                            </span>
                            <ALink href={{ pathname: "/shop", query: { category: 'flash-sales' } }} className="btn btn-underline btn-link">Shop Now</ALink>
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className="grid-item col-md-3 col-6 height-x15">
                <Reveal keyframes={fadeInUpShorter} delay={300} duration={1200} className="h-100" triggerOnce>
                    <div className="category category-banner overlay-zoom category-absolute " style={{ backgroundColor: "#e6e6e6" }}>
                        <figure className="category-media">
                            <Image
                                quality="85"
                                src="https://images.unsplash.com/photo-1581553680321-4fffae59fccd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                                alt='Product Image'
                                width="585"
                                height="434"
                                layout="fixed"
                            />
                        </figure>

                        <div className="category-content">
                            <h4 className="category-name">Cosmetia</h4>
                            <span className="category-count">
                                <span>3</span> Products
                            </span>
                            <ALink href={{ pathname: "/shop", query: { category: 'cosmetia' } }} className="btn btn-underline btn-link">Shop Now</ALink>
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className="grid-item col-md-3 col-6 height-x15">
                <Reveal keyframes={fadeInLeftShorter} delay={400} duration={1200} className="h-100" triggerOnce>
                    <div className="category category-banner overlay-zoom category-absolute text-white" style={{ backgroundColor: "#ce9174" }}>
                        <figure className="category-media">
                            <Image
                                quality="85"
                                src="https://images.unsplash.com/photo-1541336318489-083c7d277b8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                                alt='Product Image'
                                width="585"
                                height="434"
                                layout="fixed"
                            />
                        </figure>

                        <div className="category-content">
                            <h4 className="category-name">Footwear</h4>
                            <span className="category-count">
                                <span>3</span> Products
                            </span>
                            <ALink href={{ pathname: "/shop", query: { category: 'footwear' } }} className="btn btn-underline btn-link">Shop Now</ALink>
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className="grid-item col-md-6 height-x1">
                <Reveal keyframes={fadeInRightShorter} delay={200} duration={1200} className="h-100" triggerOnce>
                    <div className="category category-banner overlay-zoom category-absolute" style={{ backgroundColor: "#ebebeb" }}>
                        <figure className="category-media">
                            <Image
                                quality="85"
                                src="https://images.unsplash.com/photo-1522199710521-72d69614c702?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80"
                                alt='Product Image'
                                width="585"
                                height="434"
                                layout="fixed"
                            />
                        </figure>

                        <div className="category-content">
                            <h4 className="category-name">Best Seller</h4>
                            <span className="category-count">
                                <span>3</span> Products
                            </span>
                            <ALink href={{ pathname: "/shop", query: { category: 'best-seller' } }} className="btn btn-underline btn-link">Shop Now</ALink>
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className="grid-space col-1"></div>
        </div>
    )
}

export default React.memo(IntroSection);