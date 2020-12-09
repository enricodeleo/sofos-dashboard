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

      <el-button type="primary" @click="saveUser">Aggiungi utente</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {}
    }
  },

  methods: {
    async saveUser () {
      try {
        await this.$axios.post('https://jsonplaceholder.typicode.com/users', this.body)
        this.$message({
          message: 'Utente creato correttamente',
          type: 'success'
        })
      } catch (error) {
        console.log(error)
        this.$message({
          message: 'Non sono riuscito a creare l\'utente',
          type: 'warning'
        })
      }
    }
  }
}
</script>
