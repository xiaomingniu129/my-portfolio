/**
 * client.js: Talk to sanity.
 */

import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '17c1rajp',
  dataset: 'production'
})