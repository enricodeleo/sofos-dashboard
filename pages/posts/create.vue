<template>
  <div>
    <el-form>
      <el-form-item label="Titolo" prop="title">
        <el-input v-model="post.title" type="text" />
      </el-form-item>
      <el-form-item label="Contenuto" prop="body">
        <el-input v-model="post.body" type="textarea" />
      </el-form-item>

      <el-button type="primary" @click="savePost">Salva modifiche</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post: {}
    }
  },

  methods: {
    async savePost () {
      try {
        await this.$axios.post('https://jsonplaceholder.typicode.com/posts', this.body)
        this.$message({
          message: 'Contenuto creato correttamente',
          type: 'success'
        })
      } catch (error) {
        console.log(error)
        this.$message({
          message: 'Non sono riuscito a creare il contenuto',
          type: 'warning'
        })
      }
    }
  }
}
</script>
