const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const {
  wrapWithReanimatedMetroConfig
} = require('react-native-reanimated/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const configWithNativeWind = withNativeWind(config, {
  input: './styles/global.css'
});

module.exports = wrapWithReanimatedMetroConfig(configWithNativeWind);
