import React, { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import OwlCarousel from '@components/features/owl-carousel';

import { fadeIn, fadeInUpShorter } from '@utils/data/keyframes';
import { productSlider } from '@utils/data/carousel';

// import { useLazyQuery } from '@apollo/react-hooks';

import ProductThree from '@components/features/product/product-three';

// import withApollo from '~/server/apollo';
// import { GET_PRODUCTS } from '~/server/queries';


function ProductCollection( props ) {

    const { products } = props;

    console.log(products)

    var loading = false;
    
    let categoryList = [
        {
            name: "Accessories",
            slug: "accessories"
        },
        {
            name: "Footwear",
            slug: "footwear"
        },
        {
            name: "Tops",
            slug: "tops"
        },
        {
            name: "Bags",
            slug: "bags"
        },
        {
            name: "Clothes",
            slug: "clothes"
        }
    ]

    return (
        <Reveal keyframes={fadeIn} delay={200} duration={1200} triggerOnce>
            <section className="product-wrapper mt-10 pt-5">
                <Reveal keyframes={fadeInUpShorter} delay={500} duration={1200} triggerOnce>
                    <h2 className="title title-simple mb-4">Trends 2021</h2>
                </Reveal>

                <Reveal keyframes={fadeIn} delay={800} duration={1200} triggerOnce>
                    <Tabs selectedTabClassName="active" selectedTabPanelClassName="active" className="tab tab-nav-simple tab-nav-center">
                        <TabList className="nav nav-tabs">
                            {
                                categoryList.map((item) =>
                                    <Tab className="nav-item" key={"nav-filter" + item.name}>
                                        <span className="nav-link" onClick={() => getProducts({ variables: { category: item.slug } })}>{item.name}</span>
                                    </Tab>
                                )
                            }
                        </TabList>
                        <div className="tab-content">
                            {
                                categoryList.map((item) =>
                                    <TabPanel className="tab-pane" key={"tab-content-item.name" + item.name}>
                                        <OwlCarousel adClass="owl-theme owl-nav-full" options={productSlider}>
                                            {
                                                loading ?
                                                    [1, 2, 3, 4, 5, 6].map((item) =>
                                                        <div className="product-loading-overlay" key={'product-skel-' + item}></div>
                                                    ) :
                                                    products && products.slice(0, 10).map((item, index) =>
                                                        <Reveal keyframes={fadeInUpShorter} delay={300 + 100 * index} duration={1200} triggerOnce key={'products-' + item.slug}>
                                                            <ProductThree product={item} isCat={false} key={'product-' + index} />
                                                        </Reveal>
                                                    )
                                            }
                                        </OwlCarousel>
                                    </TabPanel>
                                )
                            }
                        </div>
                    </Tabs>
                </Reveal>
            </section>
        </Reveal>
    )
}

// export default withApollo( { ssr: typeof window === 'undefined' } )( ProductCollection );
export default ProductCollection;