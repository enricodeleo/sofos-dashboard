<template>
  <div>
    <el-form>
      <el-form-item label="Nome" prop="title">
        <el-input v-model="user.name" type="text" />
      </el-form-item>
      <el-form-item label="Email" prop="title">
        <el-input v-model="user.email" type="text" />
      </el-form-item>
      <el-form-item label="Telefono" prop="title">
        <el-input v-model="user.phone" type="text" />
      </el-form-item>
      <el-form-item label="Sito web" prop="title">
        <el-input v-model="user.website" type="text" />
      </el-form-item>

      <el-form-item label="Azienda" prop="title">
        <el-input v-model="user.company.name" type="text" />
      </el-form-item>

      <el-button type="primary" @click="saveUser">Salva modifiche</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  async asyncData ({ app, $axios, params }) {
    // console.log(parameters)
    let user
    try {
      user = await $axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    } catch (error) {

    }

    return {
      user: user.data
    }
  },

  data () {
    return {
      user: {}
    }
  },

  methods: {
    async saveUser () {
      try {
        await this.$axios.put(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`, this.body)
        this.$message({
          message: 'Utente aggiornato correttamente',
          type: 'success'
        })
      } catch (error) {
        console.log(error)
        this.$message({
          message: 'Non sono riuscito ad aggiornare l\'utente',
          type: 'warning'
        })
      }
    }
  }
}
</script>
