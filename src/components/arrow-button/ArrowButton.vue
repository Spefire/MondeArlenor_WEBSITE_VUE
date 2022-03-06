<template>
  <template v-if="linkPage">
    <router-link :to="linkPage">
      <i class="icon icon-arrow-right2" />En savoir plus
    </router-link>
  </template>

  <template v-if="linkPath && linkQuery">
    <router-link :to="{ path: linkPath, query: linkQuery }">
      <i class="icon icon-arrow-right2" />En savoir plus
    </router-link>
  </template>
</template>

<style lang="scss" scoped src="./ArrowButton.scss"></style>
<script lang="ts" src="./ArrowButton.ts"></script>
