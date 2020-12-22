<template>
  <section>
    <h2>Mountains list</h2>
    <LazyMountainsList v-if="show" />
    <button v-if="!show" class="btn btn-primary" @click="showList">
      Show List
    </button>
  </section>
</template>

<script>
import MountainsList from '@/components/MountainsList'

export default {
  components: {
    MountainsList
  },
  data: () => ({
    show: false
  }),
  methods: {
    showList() {
      this.show = true
    }
  },
  head: {
    title: 'Mountains list',
    meta: [
      {
        hid: 'mountains list',
        name: 'mountains list',
        content: 'Mountains list description'
      }
    ],
  }
}
</script>