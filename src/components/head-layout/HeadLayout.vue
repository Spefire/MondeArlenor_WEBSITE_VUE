<template>
  <div
    class="head-layout-view"
    :class="useClass ? useClass : 'background-universe-black'">
    <img
      v-if="imageLeft"
      :src="imageLeft"
      alt="">
    <div class="head-text">
      <h1 class="margin-bottom-1">{{ title }}</h1>
      <slot />
    </div>
    <img
      v-if="imageRight"
      :src="imageRight"
      alt="">
  </div>
  <div
    class="head-layout-view-mobile"
    :class="useClass ? useClass : 'background-universe-black'">
    <div class="head-title">
      <img
        v-if="imageLeft"
        :src="imageLeft"
        alt="">
      <h1>{{ title }}</h1>
      <img
        v-if="imageRight"
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