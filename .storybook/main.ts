import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-addon-remix-react-router'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  refs: {
    '@chakra-ui/react': {
      title: 'Chakra UI',
      url: 'https://chakra-ui.com/storybook/',
      expanded: false,
      disable: false
    }
  }
}
export default config
