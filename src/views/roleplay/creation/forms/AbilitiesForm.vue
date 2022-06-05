<template>
  <div class="layout-left">
    <img
      src="./../../../../assets/images/about.png"
      alt="">
  </div>
  <div class="layout-right creation-form">
    <p>
      AbilitiesForm
    </p>
    <div class="creation-nav-button">
      <button
        class="link-button"
        @click="cancelForm()">
        <template v-if="!isModified">
          Précédent
        </template>
        <template v-if="isModified">
          Annuler les modifications
          <template v-if="needConfirm">
            (Confirmez ?) 
          </template>
        </template>
      </button>

      <button
        class="link-button"
        :disabled="v$.form.$invalid"
        @click="submitForm()">Suivant</button>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./../CreationView.scss"></style>
<script lang="ts" src="./AbilitiesForm.ts"></script>
