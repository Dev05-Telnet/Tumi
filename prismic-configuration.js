// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
// export const apiEndpoint = 'https://sitemulti.cdn.prismic.io/api/v2'
export const apiEndpoint = 'https://nextayatademo.cdn.prismic.io/api/v2'

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = 'MC5ZVzU5d1JJQUFOemtBYXh5.77-9VhHvv71SCm4377-977-9Je-_vX3vv71uD--_ve-_vW3vv73vv73vv71l77-9a--_ve-_vTbvv70kBu-_vQ'

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  return '/'
}

// Additional helper function for Next/Link component
export const hrefResolver = (doc) => {
  if (doc.type === 'page') {
    return '/[uid]'
  }
  return '/'
}
