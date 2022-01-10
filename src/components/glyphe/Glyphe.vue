<template>
  <div class="glyphe-view">
    <img
      :src="image(1)"
      class="glyphe glyphe01"
      alt="">
    <img
      :src="image(2)"
      class="glyphe glyphe02"
      alt="">
    <img
      :src="image(3)"
      class="glyphe glyphe03"
      alt="">
    <img
      :src="image(4)"
      class="glyphe glyphe04"
      alt="">
    <img
      :src="image(5)"
      class="glyphe glyphe05"
      :class="icon"
      alt="">
  </div>
</template>

<style lang="scss" scoped src="./Glyphe.scss"></style>
<script lang="ts" src="./Glyphe.ts"></script>
