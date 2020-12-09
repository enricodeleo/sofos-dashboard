<template>
  <div class="container">
    <h1>Tutti gli utenti</h1>

    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="name"
        label="Nome"
      />
      <el-table-column
        prop="email"
        label="Email"
      />
      <el-table-column
        prop="phone"
        label="Telefono"
      />
      <el-table-column
        prop="website"
        label="Sito web"
      />
      <el-table-column
        prop="company.name"
        label="Azienda"
      />
      <el-table-column
        fixed="right"
        label="Operations"
        width="120"
      >
        <template slot-scope="scope">
          <RouterLink :to="`/users/${scope.row.id}`">
            <el-button type="text" size="small">
              Dettaglio
            </el-button>
          </RouterLink>
          <RouterLink :to="`/users/edit/${scope.row.id}`">
            <el-button type="text" size="small">
              Modifica
            </el-button>
          </RouterLink>
          <el-popconfirm
            title="Sei sicuro di voler eliminare questo contenuto?"
            confirm-button-text='Sì'
            cancel-button-text='No'
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
  </div>
</template>

<script>
export default {
  async asyncData ({ app, $axios }) {
    let data
    try {
      data = await $axios.get('https://jsonplaceholder.typicode.com/users')
    } catch (error) {
      // console.log(error)
    }

    return {
      tableData: data.data
    }
  },

  data () {
    return {
      tableData: []
    }
  },

  methods: {
    handleClick () {

    },

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
