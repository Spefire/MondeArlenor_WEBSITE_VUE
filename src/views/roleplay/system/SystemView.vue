<template>
  <div class="hide-on-mobile">
    <div class="layout-view background-roleplay">
      <h2>Les composantes d'un personnage</h2>
      <PersoSection />
    </div>

    <div little-separator />

    <div class="layout-view background-roleplay">
      <h2>Les règles du système</h2>
      <RulesSection />
    </div>
  </div>

  <div class="layout-view background-roleplay show-on-mobile">
    <div class="show-on-mobile-alert layout-bloc">
      Cette page ne peut pas être parcourue sur un écran mobile.
    </div>
  </div>
</template>

<script lang="ts" src="./SystemView.ts"></script>
