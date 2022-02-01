<template>
  <div class="toggle-button">
    <label class="switch">
      <input
        type="checkbox"
        @change="submit">
      <span class="slider round" />
    </label>
    <span
      v-if="text"
      class="switch-text">{{ text }}</span>
  </div>
</template>

<style lang="scss" scoped src="./ToggleButton.scss"></style>
<script lang="ts" src="./ToggleButton.ts"></script>
