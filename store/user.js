export default {
  state: {
    firstName: 'Enrico',
    lastName: '',
    email: ''
  },

  mutations: {
    update (state, payload) {
      state.firstName = payload.firstName
      state.lastName = payload.lastName
    },

    increment (state) {
      state.counter++
    }
  },

  actions: {
    async login() {
      try {
        const user = this.$axios()
        this.$store.commit('user/update', user)
      } catch (error) {

      }
    }
  }
}
