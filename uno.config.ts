// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    { 'text-color-primary-base': 'cursor-pointer transition-all hover:(color-primary transition-duration-150 transition-property-color)' },
    { 'text-color-primary-base-pin': 'cursor-pointer transition-all hover:(color-indigo-5 transition-duration-150 transition-property-color)' },
  ],
  theme: {
    colors: {
      primary: '#FF0000',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})