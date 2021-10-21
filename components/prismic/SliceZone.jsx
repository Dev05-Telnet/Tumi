import React from 'react'
import CardsCarousel from './CardsCarousel'
import CallToAction from './CallToAction'
import ImageWithDesc from './ImageWithDesc'
const SliceZone = ({ sliceZone }) => (
  <div className="container">
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case ('cards_carousel'):
          return <CardsCarousel slice={slice} key={`slice-${index}`} />
        case ('call_to_action'):
          return <CallToAction slice={slice} key={`slice-${index}`} />
        case ('image_with_description'):
          return <ImageWithDesc slice={slice} key={`slice-${index}`} />
        default:
          return null
      }

    })}
  </div>
)

export default SliceZone
