<template>
  <div class="head-layout-view background universe-black">
    <img
      :src="imageLeft"
      alt="">
    <div class="head-text">
      <h1 class="margin-bottom-1">{{ title }}</h1>
      <slot />
    </div>
    <img
      :src="imageRight"
      alt="">
  </div>
  <div class="head-layout-view-mobile background universe-black">
    <div class="head-title">
      <img
        :src="imageLeft"
        alt="">
      <h1>{{ title }}</h1>
      <img
        :src="imageRight"
        alt="">
    </div>
    <div class="head-text">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped src="./HeadLayout.scss"></style>
<script lang="ts" src="./HeadLayout.ts"></script>