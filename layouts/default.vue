<template>
  <section class="main-wrapper">
    <nuxt />
    <right-sidebar />
  </section>
</template>

<script>
import Sidebar from '~/components/Sidebar'

export default {
  name: 'DefaultLayout',
  components: {
    'right-sidebar': Sidebar
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  display: flex;
  width: 100%;
  min-height: 100vh;

  section {
    flex: 1;
  }
}
</style>
