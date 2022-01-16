<template>
  <section class="section" :style="`background-image: url(${slice.primary.background.url})`">
    <h1 class="title">{{ slice.primary.title[0].text }}</h1>
  </section>
</template>

<script>
export default {
  name: "Hero",
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
  height: 100vh;
  display: grid;
  place-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
}

.title {
  font-size: clamp(2rem, 6vw + 1rem, 20rem);
  color: white;
}
</style>
