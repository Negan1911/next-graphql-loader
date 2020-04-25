# next-graphql-loader
Allows importing .graphql or .gql files on Nextjs via graphql-tag.

## Installation

```bash
npm install --save graphql next-graphql-loader
```

Or using yarn:

```bash
yarn add graphql next-graphql-loader
```

Then, import the library in your `next.config.js` file.

```js
// next.config.js
const withGraphql = require("next-svgr-react-component");

module.exports = withGraphql({});
```

or, with `next-compose-plugins`:
```js
const withGraphql = require("next-svgr-react-component");

module.exports = withPlugins([withGraphql])
```

## Usage:
Just import any .graphql file :)