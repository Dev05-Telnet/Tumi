export const productPrices = /* GraphQL */ `
  fragment productPrices on Prices {
    price {
      value
      currencyCode
    }
    salePrice {
      value
      currencyCode
    }
    retailPrice {
      value
      currencyCode
    }
  }
`

export const swatchOptionFragment = /* GraphQL */ `
  fragment swatchOption on SwatchOptionValue {
    isDefault
    hexColors
    label
    entityId
    imageUrl(width:1200)
  }
`

export const multipleChoiceOptionFragment = /* GraphQL */ `
  fragment multipleChoiceOption on MultipleChoiceOption {
    values {
      edges {
        node {
          label
          ...swatchOption
        }
      }
    }
  }

  ${swatchOptionFragment}
`

export const productInfoFragment = /* GraphQL */ `
  fragment productInfo on Product {
    entityId
    name
    path
    sku
    categories{
      edges{
        node{
          name
          path
        }
      }
    }
    brand {
      entityId
    }
    description
    prices {
      ...productPrices
    }
    images {
      edges {
        node {
          urlOriginal
          altText
          isDefault
        }
      }
    }
    variants {
      edges {
        node {
          entityId
          defaultImage {
            urlOriginal
            altText
            isDefault
          }
        }
      }
    }
    reviewSummary{
      numberOfReviews
      summationOfRatings
    }
    productOptions {
      edges {
        node {
          __typename
          entityId
          displayName
          isRequired
          isVariantOption
          ...multipleChoiceOption
        }
      }
    }
    localeMeta: metafields(namespace: $locale, keys: ["name", "description"])
      @include(if: $hasLocale) {
      edges {
        node {
          key
          value
        }
      }
    }
  }

  ${productPrices}
  ${multipleChoiceOptionFragment}
`

export const productConnectionFragment = /* GraphQL */ `
  fragment productConnnection on ProductConnection {
    pageInfo {
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...productInfo
      }
    }
  }

  ${productInfoFragment}
`
