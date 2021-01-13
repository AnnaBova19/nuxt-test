<template>
  <div>
    <ul class="post-list">
      <li v-for="(post, index) in posts" :key="index">
        <strong>{{post.title}}</strong>
        <p class="mt-3">
          {{post.body}}
        </p>
      </li>
    </ul>

    <infinite-loading 
      spinner="spiral"
      @infinite="infiniteScroll">
    </infinite-loading>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    data() {
      return {
        posts: [],
        page: 1
      }
    },
    computed: {
      url() {
        return "https://jsonplaceholder.typicode.com/posts?_page=" + this.page;
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        const response = await axios.get(this.url)
        this.posts = response.data
      },
      infiniteScroll($state) {
        setTimeout(() => {
          this.page++;
          axios
            .get(this.url)
            .then(response => {
              if (response.data.length > 1) {
                response.data.forEach(item => this.posts.push(item))
                $state.loaded()
              } else {
                $state.complete()
              }
            })
            .catch(err => {
              console.log(err)
            });
        }, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
.post-list {
  list-style: none;
  padding-left: 0 !important;
  li {
    display: block;
    padding: 10px;
    border-radius: 6px;
    background-color: #f9f5f5;
    margin-bottom: 15px;
    transition: box-shadow .4s cubic-bezier(.25,.8,.25,1);
    &:hover {
      cursor: pointer;
      box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
    }
  }
}
</style>