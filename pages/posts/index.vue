<template>
  <section>
    <h2>Posts list</h2>
    <PostsList />
  </section>
</template>

<script>
import PostsList from '@/components/PostsList'

export default {
  components: {
    PostsList
  },
  head: {
    title: 'Posts list',
    meta: [
      {
        hid: 'posts list',
        name: 'posts list',
        content: 'Posts list description'
      }
    ],
  }
}
</script>