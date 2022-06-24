<template>
  <div class="popup-zone">
    <div class="popup-bloc">
      <div class="popup-bloc-title">
        <h3>{{ blocTitle }}</h3>
        <h3
          class="pointer"
          @click="closePopup()">X</h3>
      </div>
      <div class="popup-bloc-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./PopupBloc.scss"></style>
<script lang="ts" src="./PopupBloc.ts"></script>
