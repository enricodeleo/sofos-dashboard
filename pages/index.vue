<template>
  <div class="container">
    <el-row type="flex" :gutter="4">
      <el-col :span="8">
        <el-card shadow="always">
          <apexchart type="donut" :options="options" :series="completedTodos"></apexchart>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always">
          <apexchart type="donut" :options="options" :series="completedTodos"></apexchart>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always">
          <apexchart type="donut" :options="options" :series="completedTodos"></apexchart>
        </el-card>
      </el-col>
    </el-row>

    <Title :text="tableData[0].title" />

    <h1>Tutti gli articoli</h1>

    <el-table
      :data="current"
      style="width: 100%"
    >
      <el-table-column
        prop="title"
        label="Titolo"
      />
      <el-table-column
        prop="userId"
        label="Titolo"
      />
      <el-table-column
        fixed="right"
        label="Operations"
        width="120"
      >
        <template slot-scope="scope">
          <RouterLink :to="`/posts/${scope.row.id}`">
            <el-button type="text" size="small">
              Dettaglio
            </el-button>
          </RouterLink>
          <RouterLink :to="`/posts/edit/${scope.row.id}`">
            <el-button type="text" size="small">
              Modifica
            </el-button>
          </RouterLink>
          <el-popconfirm
            title="Sei sicuro di voler eliminare questo contenuto?"
            confirm-button-text="Sì"
            cancel-button-text="No"
            @confirm="deletePost(scope.row.id)"
          >
            <el-button
              type="text"
              size="small"
              slot="reference"
            >
              Cancella
            </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :current-page.sync="page"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    apexchart: VueApexCharts
  },

  async asyncData ({ app, $axios }) {
    let data
    try {
      data = await $axios.get('https://jsonplaceholder.typicode.com/posts')
    } catch (error) {
      // console.log(error)
    }

    return {
      tableData: data.data
    }
  },

  data () {
    return {
      tableData: [],
      page: 0,
      limit: 10,
      options: {
        labels: ['Task completati', 'Task non completati']
      },
      completedTodos: []
    }
  },

  computed: {
    current () {
      const page = this.page - 1
      return this.tableData.slice(this.limit * page, this.limit * (page + 1))
    }
  },

  async mounted () {
    let todos
    this.$store.dispatch()
    try {
      todos = await this.$axios.get('https://jsonplaceholder.typicode.com/todos')
      const trues = todos.data.map(item => item.completed).filter(item => item).length
      const falses = todos.data.length - trues
      this.completedTodos = [trues, falses]
    } catch (error) {

    }
  },

  methods: {
    async deletePost (id) {
      try {
        await this.$axios.delete(`https://jsonplaceholder.typicode.com/post/${id}`)
        this.$message({
          message: 'Contenuto eliminato correttamente',
          type: 'success'
        })
      } catch (error) {
        this.$message({
          message: 'Non sono riuscito ad cancellare il contenuto',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style>
</style>
