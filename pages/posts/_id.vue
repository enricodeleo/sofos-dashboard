<template>
  <div>
    <h1>{{ post.title }}</h1>
    {{ post.body }}

    <h3>Questo articolo ha ricevuto {{ comments.length }} commenti</h3>

    <el-card  v-for="comment in comments" :key="comment.id" class="box-card" style="margin-bottom: 25px">
      <div slot="header" class="clearfix">
        <span>Da {{ comment.name }} [{{ comment.email }}]</span>
        <el-button style="float: right; padding: 3px 0" type="text">Modera commento</el-button>
      </div>
      {{ comment.body }}
    </el-card>
  </div>
</template>

<script>
export default {
  async asyncData ({ app, $axios, params }) {
    // console.log(parameters)
    let post
    let comments
    try {
      post = await $axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      comments = await $axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
    } catch (error) {

    }
    console.log(post)
    return {
      post: post.data,
      comments: comments.data
    }
  },

  data () {
    return {
      post: {},
      comments: []
    }
  }
}
</script>
