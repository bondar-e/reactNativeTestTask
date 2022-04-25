module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@shared': './src/shared',
          '@theme': './src/theme',
          '@constants': './src/constants',
          '@contexts': './src/contexts',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
