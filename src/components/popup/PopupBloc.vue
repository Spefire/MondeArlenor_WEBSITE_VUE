<template>
  <div class="popup-zone">
    <div class="popup-bloc">
      <div class="popup-bloc-header">
        <h3>{{ blocTitle }}</h3>
        <h3
          class="pointer"
          @click="closePopup(false)">X</h3>
      </div>
      <div class="popup-bloc-content">
        <slot />
      </div>
      <div
        v-if="hasConfirmButton"
        class="popup-bloc-footer">
        <button
          class="link-button"
          @click="closePopup(true)">Valider</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./PopupBloc.scss"></style>
<script lang="ts" src="./PopupBloc.ts"></script>
