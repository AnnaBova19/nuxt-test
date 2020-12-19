<template>
  <section>
    <h2>{{user.name}}</h2>
    <hr>
    <h3>{{user.email}}</h3>
  </section>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({$axios, params}) {
    const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    return {user}
  },
}
</script>