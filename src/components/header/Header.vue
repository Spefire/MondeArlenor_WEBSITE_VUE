<template>
  <header>
    <!-- PC section -->

    <div class="header-section">
      <div class="header-main">
        <router-link to="/">Le Monde d'Arlénor</router-link>
      <!--a
        class="header-logo"
        routerLink="" />
      <a
        class="header-title"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLink=""
        [innerHtml]="'PAGE.HOME' | translate | uppercase" /-->
      </div>
      <nav>
        <router-link to="/universe">L'Univers</router-link>
        <router-link to="/roleplay">Le Jeu de Rôles</router-link>
        <router-link to="/celestia">L'Île Célestia</router-link>
      </nav>
    </div>
    <div class="header-subsection">
      <nav
        class="header-subnav"
        v-if="route == 'universe'">
        <router-link to="/universe">Le Monde</router-link> |
        <router-link to="/universe/crystals">Les Cristaux</router-link>
        <router-link to="/universe/population">Les Peuples</router-link>
        <router-link to="/universe/religion">La Religion</router-link>
      </nav>
    </div>

    <!-- Mobile section -->

    <div class="header-mobile-section">
      <div class="header-main">
        <router-link to="/">Le Monde d'Arlénor</router-link>
      <!--a
        class="header-logo"
        routerLink="" />
      <a
        class="header-list"
        (click)="toggleList()" /-->
      </div>
    </div>
    <div
      v-if="showSubmenu"
      class="header-mobile-subsection">
      <nav>
        <router-link to="/universe">L'Univers</router-link>
        <router-link to="/roleplay">Le Jeu de Rôles</router-link>
        <router-link to="/celestia">L'Île Célestia</router-link>
      </nav>
      <nav v-if="route == 'universe'">
        <router-link to="/universe">Le Monde</router-link> |
        <router-link to="/universe/crystals">Les Cristaux</router-link> |
        <router-link to="/universe/population">Les Peuples</router-link> |
        <router-link to="/universe/religion">La Religion</router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped src="./Header.scss"></style>
<script lang="ts" src="./Header.ts"></script>