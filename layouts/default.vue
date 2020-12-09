<template>
  <el-container id="app">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-tickets"></i>Articoli</template>
          <RouterLink to="/">
            <el-menu-item index="1-4-1">Tutti gli articoli</el-menu-item>
          </RouterLink>
          <RouterLink to="/posts/create">
            <el-menu-item index="1-4-1">Crea nuovo</el-menu-item>
          </RouterLink>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-user"></i>Utenti</template>
          <RouterLink to="/users/all">
            <el-menu-item index="1-4-1">Tutti gli utenti</el-menu-item>
          </RouterLink>
          <RouterLink to="/users/create">
            <el-menu-item index="1-4-1">Aggiungi nuovo utente</el-menu-item>
          </RouterLink>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <span>{{ firstName }}</span>
      </el-header>

      <el-main>
        <Nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {

  computed: {
    firstName () {
      return this.$store.state.user.firstName
    }
  }

}
</script>

<style>
html,
body,
#app {
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
