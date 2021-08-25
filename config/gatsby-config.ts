import { GatsbyConfig, PluginRef } from 'gatsby'

const siteMetadata = {
  siteUrl: 'https://www.yourdomain.tld',
  title: 'gatsby-typescript',
}

const plugins: PluginRef[] = [
  'gatsby-plugin-image',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/icon.png',
    },
  },
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/',
    },
  },
  {
    resolve: 'gatsby-plugin-typegen',
    options: {
      emitSchema: {
        'src/__generated__/gatsby-introspection.json': true,
      },
      emitPluginDocuments: {
        'src/__generated__/gatsby-plugin-documents.graphql': true,
      },
    },
  },
]

export default { siteMetadata, plugins } as GatsbyConfig
