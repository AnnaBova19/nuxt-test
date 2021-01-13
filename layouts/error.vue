<template>
  <section>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </section>
</template>

<script>
export default {
  props: ['error'],
  layout: 'empty'
}
</script>

<style scoped>
section {
  width: 600px;
  margin: 0 auto;
  padding-top: 5rem;;
}

h1 {
  color: red;
}
</style>

