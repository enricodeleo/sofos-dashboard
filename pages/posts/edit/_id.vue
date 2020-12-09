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
    {{ date }}
  </div>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  async asyncData ({ app, $axios, params }) {
    // console.log(parameters)
    let post
    try {
      post = await $axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    } catch (error) {

    }
    console.log(post)
    return {
      post: post.data
    }
  },

  data () {
    return {
      post: {},
      date: null
    }
  },

  mounted () {
    this.date = DateTime.local().toLocaleString()
  },

  methods: {
    async savePost () {
      try {
        await this.$axios.put(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`, this.body)
        this.$message({
          message: 'Contenuto aggiornato correttamente',
          type: 'success'
        })
      } catch (error) {
        console.log(error)
        this.$message({
          message: 'Non sono riuscito ad aggiornare il contenuto',
          type: 'warning'
        })
      }
    }
  }
}
</script>
