<template>
  <header v-if="showHeader">
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
          to="/roleplay">
          <span class="text-bold margin-right-05">•</span>
          {{ pages.roleplay }}
        </router-link>
        <router-link
          class="link"
          to="/celestia">
          {{ pages.celestia }}
        </router-link>
      </nav>
    </div>
    <div
      class="header-subsection"
      :class="{ active : onUniverseRoute}">
      <nav>
        <router-link
          class="link exact-link"
          to="/universe/calendrier">{{ pages.calendrier }}</router-link>
        <router-link
          class="header-subtitle link exact-link"
          to="/universe">{{ pages.worldmap }}</router-link>
        <router-link
          class="link exact-link"
          to="/universe/religion">{{ pages.religion }}</router-link>
        <router-link
          class="link exact-link"
          to="/universe/magic">{{ pages.magic }}</router-link>
        <router-link
          class="link exact-link"
          to="/universe/races">{{ pages.races }}</router-link>
        <router-link
          class="link exact-link"
          to="/universe/factions">{{ pages.factions }}</router-link>
      </nav>
    </div>
    <div
      class="header-subsection"
      :class="{ active : onRoleplayRoute}">
      <nav>
        <router-link
          class="link exact-link"
          to="/roleplay/creation">{{ pages.creation }}</router-link>
        <router-link
          class="header-subtitle link exact-link"
          to="/roleplay">{{ pages.adventure }}</router-link>
        <router-link
          class="link exact-link"
          to="/roleplay/system">{{ pages.system }}</router-link>
        <router-link
          class="link exact-link"
          to="/roleplay/crystals?spe=PALADIN">{{ pages.crystals }}</router-link>
      </nav>
    </div>
    <div
      class="header-subsection"
      :class="{ active : onCelestiaRoute}">
      <nav>
        <router-link
          class="link exact-link"
          to="/celestia/chronologie">{{ pages.chronologie }}</router-link>
        <router-link
          class="header-subtitle link exact-link"
          to="/celestia">{{ pages.etincelles }}</router-link>
        <router-link
          class="link exact-link"
          to="/celestia/cercle">{{ pages.cercle }}</router-link>
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
          to="/celestia">{{ pages.celestia }}</router-link>
      </nav>
      <nav v-if="onUniverseRoute">
        <router-link
          class="link exact-link"
          to="/universe/calendrier">{{ pages.calendrier }}</router-link>
        <router-link
          class="link exact-link"
          to="/universe">{{ pages.worldmap }}</router-link>
        <router-link
          class="link exact-link"
          to="/universe/religion">{{ pages.religion }}</router-link>
        <router-link
          class="link exact-link"
          to="/universe/magic">{{ pages.magic }}</router-link>
        <router-link
          class="link exact-link"
          to="/universe/races">{{ pages.races }}</router-link>
        <router-link
          class="link exact-link"
          to="/universe/factions">{{ pages.factions }}</router-link>
      </nav>
      <nav v-if="onCelestiaRoute">
        <router-link
          class="link exact-link"
          to="/celestia/chronologie">{{ pages.chronologie }}</router-link>
        <router-link
          class="link exact-link"
          to="/celestia">{{ pages.etincelles }}</router-link>
        <router-link
          class="link exact-link"
          to="/celestia/cercle">{{ pages.cercle }}</router-link>
      </nav>
    </div>
  </header>
  <div
    v-if="onUniverseRoute || onRoleplayRoute || onCelestiaRoute"
    class="header-toggle-button" 
    :class="{ active : showHeader }"
    @click="toggleHeader()">
    <i class="icon-arrow-right2" />
  </div>
</template>

<style lang="scss" scoped src="./Header.scss"></style>
<script lang="ts" src="./Header.ts"></script>