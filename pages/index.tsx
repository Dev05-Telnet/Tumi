import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import IntroSection from '@components/partials/home/intro-section'
import IntroSectionTwo from '@components/partials/home/intro-section-two'
import SliceZone from '@components/prismic/SliceZone'
import ProductCollection from '@components/partials/home/product-collection'
import { Grid, Marquee, Hero } from '@components/ui'
import BannerSection from '@components/partials/home/banner-section';
import BannerSectionTwo from '@components/partials/home/banner-section-two';
import FeaturedCollection from '@components/partials/home/featured-collection';
import TopRatedCollection from '@components/partials/home/top-rated-collection';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import { Client } from '@utils/prismicHelpers'

export async function getStaticProps({
  preview,
  previewData = {},
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 10 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  const { ref } : any = previewData
  const client = Client()

  // const doc = await client.getSingle('american_tourister', {}) || {}
  // get homepage of american tourister by ID
  const homePage = await client.getByID('YW6FtBIAAJvfAdDu', ref ? { ref } : {}) || {}
  return {
    props: {
      products,
      categories,
      brands,
      pages,
      homePage,
    },
    revalidate: 60,
  }
}

var loading = false;
export default function Home({
  products,
  homePage,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>

      <h1 className="d-none">Riode React eCommerce Template - Home</h1>

      <div className="page-content">
        <div className="container">

          <IntroSection />

          <IntroSectionTwo banners={homePage.data.homepage_banner}/>

          <SliceZone sliceZone={homePage.data.body} />

          <ProductCollection products={products} />

          <BannerSection />

          <FeaturedCollection products={products.slice(3, 8)} loading={loading} />

          <BannerSectionTwo />

          <TopRatedCollection products={products.slice(5, 10)} loading={loading} />


        </div>
      </div>
    </>
  )
}

Home.Layout = Layout
