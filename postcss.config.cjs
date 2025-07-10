module.exports = {
    plugins: [
      require('@tailwindcss/postcss'),
      require('autoprefixer'),
      require('postcss-preset-env')({
        stage: 1,
        features: {
          'custom-properties': false // for iOS 13 compatibility
        }
      })
    ]
  }
  