import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '@components/features/owl-carousel';

import ProductThree from '@components/features/product/product-three';

import { productSlider } from '@utils/data/carousel';
import { fadeIn, fadeInLeftShorter } from '@utils/data/keyframes';

function TopRatedCollection ( props ) {
    const { products, loading } = props;

    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
            <section className="product-wrapper mt-9">
                <h2 className="title title-simple">Most Viewed</h2>

                {
                    loading ?
                        <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider }>
                            {
                                [ 1, 2, 3, 4, 5, 6 ].map( ( item ) =>
                                    <div className="product-loading-overlay" key={ 'top-rated-skel-' + item }></div>
                                )
                            }
                        </OwlCarousel>
                        :
                        <OwlCarousel adClass="owl-theme owl-nav-full" options={ productSlider }>
                            {
                                products && products.map( ( item, index ) =>
                                    <Reveal keyframes={ fadeInLeftShorter } delay={ Math.max( 700 - ( index * 100 ), 200 ) } duration={ 1200 } triggerOnce key={ `top-rated-product ${ index }` }>
                                        <ProductThree
                                            product={ item }
                                            isCat={ false }
                                        />
                                    </Reveal>
                                )
                            }
                        </OwlCarousel>
                }
            </section>
        </Reveal>
    )
}

export default React.memo( TopRatedCollection );
