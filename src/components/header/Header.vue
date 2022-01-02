<template>
  <header>
    <!-- Tablet / PC section -->

    <div class="header-section">
      <div class="header-main">
        <router-link
          class="header-icon link logo"
          to="/" />
        <router-link
          class="header-title link"
          to="/">Le Monde d'Arlénor</router-link>
      </div>
      <nav>
        <router-link
          class="link"
          to="/universe">L'Univers</router-link>
        <router-link
          class="link"
          to="/roleplay">Le Jeu de Rôles</router-link>
        <router-link
          class="link"
          to="/celestia">L'Île Célestia</router-link>
      </nav>
    </div>
    <div
      class="header-subsection"
      :class="{ active : onUniverseRoute}">
      <nav class="header-subnav">
        <router-link
          class="header-subtitle link exact-link"
          to="/universe">La Carte du Monde</router-link>
        <router-link
          class="link exact-link"
          to="/universe/crystals">Les Cristaux</router-link>
        <router-link
          class="link exact-link"
          to="/universe/population">Les Peuples</router-link>
        <router-link
          class="link exact-link"
          to="/universe/religion">La Religion</router-link>
      </nav>
    </div>

    <!-- Mobile section -->

    <div class="header-mobile-section">
      <div class="header-main">
        <router-link
          class="header-icon link logo"
          to="/" />
        <a
          class="header-icon link list"
          @click="toggleList()" />
      </div>
    </div>
    <div
      v-if="showSubmenu"
      class="header-mobile-subsection">
      <nav>
        <router-link
          class="link"
          to="/universe">L'Univers</router-link>
        <router-link
          class="link"
          to="/roleplay">Le Jeu de Rôles</router-link>
        <router-link
          class="link"
          to="/celestia">L'Île Célestia</router-link>
      </nav>
      <nav v-if="onUniverseRoute">
        <router-link
          class="link exact-link"
          to="/universe">La Carte du Monde</router-link>
        <router-link
          class="link exact-link"
          to="/universe/crystals">Les Cristaux</router-link>
        <router-link
          class="link exact-link"
          to="/universe/population">Les Peuples</router-link>
        <router-link
          class="link exact-link"
          to="/universe/religion">La Religion</router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped src="./Header.scss"></style>
<script lang="ts" src="./Header.ts"></script>