import Vue from 'vue'

export default async (_, inject) => {
  let sliceMachine = new Vue({
    methods: {
      resolver({ sliceName, i }) {
        return [ import(`/home/jan/private/prismic-nuxtjs-test/slices/${sliceName}.vue`), import(`/home/jan/private/prismic-nuxtjs-test/slices/${sliceName}/index.vue`), import(`/home/jan/private/prismic-nuxtjs-test/slices/${sliceName}/index.js`), import(`/home/jan/private/prismic-nuxtjs-test/slices/${sliceName}/${sliceName}.vue`) ]
      }
    }
  })
  inject('sliceMachine', sliceMachine);
}
