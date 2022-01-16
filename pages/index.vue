<template>
  <div>
    <slice-zone type="home" queryType="single" />
    <ul>
      <li v-for="(page) in document.results" :key="page.id">
        <a :href="`/${page.uid}`">{{ page.uid }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone
  },

  // @ts-ignore
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'beach')
    )
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
