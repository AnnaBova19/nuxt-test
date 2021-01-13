<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Nuxt SSR</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <div class="navbar-nav">
          <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">
            Home
          </nuxt-link>
          <nuxt-link active-class="active" class="nav-link" to="/about">
            About
          </nuxt-link>
          <nuxt-link active-class="active" class="nav-link" to="/users">
            Users
          </nuxt-link>
          <nuxt-link active-class="active" class="nav-link" to="/posts">
            Posts
          </nuxt-link>
          <nuxt-link active-class="active" class="nav-link" to="/mountains">
            Mountains
          </nuxt-link>
        </div>

        <!-- Right aligned nav items -->
        <div class="navbar-nav ml-auto">
          <nuxt-link v-if="!hasToken" active-class="active" class="nav-link" to="/login">
            Login
          </nuxt-link>
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->

          <b-nav-item-dropdown v-else right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click.prevent="logout" href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    hasToken() {
      return this.$store.getters.hasToken
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  } 
}
</script>