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
          to="/">{{ pages.home }}</router-link>
      </div>
      <nav>
        <router-link
          class="link"
          to="/universe">{{ pages.universe }}</router-link>
        <router-link
          class="link"
          to="/roleplay">{{ pages.roleplay }}</router-link>
        <router-link
          class="link"
          to="/celestia">{{ pages.celestia }}</router-link>
      </nav>
    </div>
    <div
      class="header-subsection"
      :class="{ active : onUniverseRoute}">
      <nav class="header-subnav">
        <router-link
          class="header-subtitle link exact-link"
          to="/universe">{{ pages.universe }}</router-link>
        <router-link
          class="link exact-link"
          to="/universe/crystals">{{ pages.crystals }}</router-link>
        <router-link
          class="link exact-link"
          to="/universe/population">{{ pages.population }}</router-link>
        <router-link
          class="link exact-link"
          to="/universe/religion">{{ pages.religion }}</router-link>
      </nav>
    </div>

    <!-- Mobile section -->

    <div class="header-mobile-section">
      <div class="header-main">
        <router-link
          class="header-icon link logo"
          to="/" />
        <a
          class="header-menu-icon link list"
          @click="toggleList()">
          <i class="icon icon-stack" /></a>
      </div>
    </div>
    <div
      v-if="showSubmenu"
      class="header-mobile-subsection">
      <nav>
        <router-link
          class="link"
          to="/universe">{{ pages.universe }}</router-link>
        <router-link
          class="link"
          to="/roleplay">{{ pages.roleplay }}</router-link>
        <router-link
          class="link"
          to="/celestia">{{ pages.celestia }}</router-link>
      </nav>
      <nav v-if="onUniverseRoute">
        <router-link
          class="link exact-link"
          to="/universe">{{ pages.universe }}</router-link>
        <router-link
          class="link exact-link"
          to="/universe/crystals">{{ pages.crystals }}</router-link>
        <router-link
          class="link exact-link"
          to="/universe/population">{{ pages.population }}</router-link>
        <router-link
          class="link exact-link"
          to="/universe/religion">{{ pages.religion }}</router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped src="./Header.scss"></style>
<script lang="ts" src="./Header.ts"></script>