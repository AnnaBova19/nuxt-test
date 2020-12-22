<template>
  <div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching mountains</p>
    <ol v-else>
      <li v-for="(mountain, index) in mountains" :key="index">
        <div class="list-block mb-3">
          <div>
            <p>
              <strong>{{mountain.title}}</strong>, {{mountain.continent}}
            </p>
            <p>
              {{mountain.height}}
            </p>
            {{mountain.description}}
          </div>
          <img :src="mountain.image">
        </div>
      </li>
    </ol>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        mountains: []
      }
    },
    activated() {
      // Call fetch again if last fetch more than 30 sec ago (if keep-alive)
      if (this.$fetchState.timestamp <= Date.now() - 30000) {
        this.$fetch()
      }
    },
    async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    }
  }
</script>

<style lang="scss" scoped>
  .list-block {
    display: flex;
  }
</style>