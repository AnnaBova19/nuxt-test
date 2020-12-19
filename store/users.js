const sleep = m => new Promise(r => setTimeout(r, m))

export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async fetch({commit}) {
    await sleep(500)
    const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
    commit('setUsers', users)
  }
}
export const getters = {
  users: state => state.users
}