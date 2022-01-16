<template>
  <section class="section">
    <h1 class="title">{{ slice.primary.title[0].text }}</h1>
    <prismic-image :field="slice.primary.image" />
  </section>
</template>

<script>
export default {
  name: "HeroBeach",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped lang="scss">
.section {
  text-align: center;
}

.title {
  margin: 6rem auto 10rem;
}
</style>
