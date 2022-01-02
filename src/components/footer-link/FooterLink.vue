<template>
  <a
    :href="link"
    target="_blank">
    <template v-if="withBorder">
      <span />
      <span />
      <span />
      <span />
    </template>
    <i
      class="icon"
      :class="iconClass" />
  </a>
</template>

<style lang="scss" scoped src="./FooterLink.scss"></style>
<script lang="ts" src="./FooterLink.ts"></script>
