// /** @type {import('next').NextConfig} */
// const withReactSvg = require('next-react-svg')
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = withReactSvg(nextConfig)
const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config, options) {
    return config
  },
  env: {
    botKey: '5472641997:AAE1HmY_aL5KSQFZQcR6n1z9f0DNtBQMpfY',
  },
})