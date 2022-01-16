<template>
  <div>
    <a href="/">back</a>
    <slice-zone type="beach" :uid="$route.params.uid" />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone
  },
}
</script>
