const stories = ['../../components/**/*.stories.@(ts|js)','../../.slicemachine/assets/**/*.stories.@(js|jsx|ts|tsx|svelte)']
const addons  = ["@storybook\u002Faddon-essentials"]

function nuxifyStorybook(storybookConfig) {
  return {
    ...storybookConfig,
    webpackFinal(config, options) {
      if (options.nuxtStorybookConfig) {
        config = options.nuxtStorybookConfig.webpackFinal(config, options)
      }
      if (typeof storybookConfig.webpackFinal === 'function') {
        config = storybookConfig.webpackFinal(config, options)
      }
      return config
    },
    stories: [
      ...stories,
      ...storybookConfig.stories
    ],
    addons: [
      ...addons,
      ...storybookConfig.addons
    ],
  }
}

module.exports = {
  webpackFinal(config, options) {
    return options.nuxtStorybookConfig.webpackFinal(config, options)
  },
  stories,
  addons,
  nuxifyStorybook
}
