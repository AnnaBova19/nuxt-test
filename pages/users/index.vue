<template>
  <section>
    <h2>{{pageTitle}}</h2>
    <ul>
      <li v-for="user of users" :key="user.id">
        <a href="#" @click.prevent="openUser(user)">{{user.name}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  middleware: ['auth'],
  data: () => ({
    pageTitle: 'Users page'
  }),
  // async asyncData({$axios}) {
  //   const users = await $axios.$get('https://jsonplaceholder.typicode.com/users')
  //   return {users}
  // },
  // для SSR fetch используем, если работаем со state
  async fetch({store}) {
    if (store.getters['users/users'].length === 0) {
      await store.dispatch('users/fetch')
    }
  },
  computed: {
    users() {
      return this.$store.getters['users/users']
    }
  },
  methods: {
    openUser(user) {
      this.$router.push(`/users/${user.id}`)
    }
  },
  head: {
    title: 'Users page',
    meta: [
      {
        hid: 'users page',
        name: 'users page',
        content: 'Users page description'
      }
    ],
  }
}
</script>