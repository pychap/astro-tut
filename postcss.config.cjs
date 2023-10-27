module.exports = {
    // plugins: [
    //   require('postcss-import'),
    //   'tailwindcss/nesting': 'postcss-nesting',
    //   require('postcss-preset-env')({
    //     stage: 1,
    //     features: {
    //       'nesting-rules': true,
    //     },
    //   }),
    //   require('autoprefixer'),
    //   require('postcss-nested'),
    //   require('tailwindcss'),
    //   require('flowbite/plugin'),
    // ]
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
      'postcss-preset-env': {
        stage: 1,
            features: {
              'nesting-rules': true,
            },},
      'flowbite/plugin': {},
    }
}