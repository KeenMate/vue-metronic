<template>
    <m-row>
        <router-view></router-view>
    </m-row>
</template>

<script>
import Row from "../components/metronic/structure/m-row.vue"

export default {
  name: "EmptyScreen",
  components: {
      mRow: Row
  }
}
</script>
