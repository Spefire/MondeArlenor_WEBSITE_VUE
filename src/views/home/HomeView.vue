<template>
  <div class="home-view">
    <div
      :class="{'active': selection == 0 }"
      class="home-container container01">
      <div class="home-subcontainer">
        <img
          src="../../assets/images/logo.png"
          alt="">
        <h2>{{ pages.home }}</h2>
        <h1>{{ pages.universe }}</h1>
        <p>
          Découvrez l'univers du Monde d'Arlénor, la religion dominante, la magie omni-présente, les différents peuples y vivant et les conflits y règnant...
        </p>
        <router-link
          class="link-button"
          to="/universe">
          Découvrir
        </router-link>
      </div>
    </div>
    <div
      :class="{'active': selection == 1 }"
      class="home-container container02">
      <div class="home-subcontainer inversed-container">
        <h2>{{ pages.home }}</h2>
        <h1>{{ pages.roleplay }}</h1>
        <p>
          Vivez une histoire épique à travers de jeunes héros, découvrant la notion du Destin et de l'effet papillon...
        </p>
        <router-link
          class="link-button"
          to="/roleplay">
          Osez l'aventure
        </router-link>
      </div>
    </div>
    <div
      :class="{'active': selection == 2 }"
      class="home-container container03">
      <div class="home-subcontainer">
        <h2>{{ pages.home }}</h2>
        <h1>{{ pages.celestia }}</h1>
        <p>
          Chaque personnage a une histoire. Découvrez celles de Romain, Elisa, Jérémy... et de tous les autres, sur l'île de Célestia.
        </p>
        <router-link
          class="link-button"
          to="/celestia">
          Prochainement disponible
        </router-link>
      </div>
    </div>
    <ul class="selection-container">
      <div class="dotline" />
      <li
        :class="{'active': selection == 0 }"
        class="dot"
        @click="setSelection(0)" />
      <div class="dotline" />
      <li
        :class="{'active': selection == 1 }"
        class="dot"
        @click="setSelection(1)" />
      <div class="dotline" />
      <li
        :class="{'active': selection == 2 }"
        class="dot"
        @click="setSelection(2)" />
      <div class="dotline" />
    </ul>
  </div>
</template>

<script lang="ts" src="./HomeView.ts"></script>
