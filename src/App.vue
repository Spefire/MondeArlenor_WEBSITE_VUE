<template>
  <div id="nav">
    <router-link to="/">Le Monde d'Arlénor</router-link> |
    <router-link to="/universe">L'Univers</router-link> |
    <router-link to="/universe/crystals">Les Cristaux</router-link> |
    <router-link to="/universe/population">Les Peuples</router-link> |
    <router-link to="/universe/religion">La Religion</router-link> |
    <router-link to="/roleplay">Le Jeu de Rôles</router-link> |
    <router-link to="/celestia">L'Île Célestia</router-link> |
    <router-link to="/legacy">Mentions légales</router-link> |
    <router-link to="/about">A propos</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
