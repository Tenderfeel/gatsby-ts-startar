const path = require('path')
module.exports = {
  client: {
    name: 'your-project-name',
    tagName: 'graphql',
    includes: [
      './src/**/*.{ts,tsx}',
      //'./src/__generated__/gatsby-plugin-documents.graphql',
    ],
    service: {
      name: 'GatsbyJS',
      localSchemaFile:  path.resolve(__dirname, 'src/__generated__/gatsby-schema.graphql'),
    },
  },
}
