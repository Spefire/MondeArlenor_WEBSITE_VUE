<template>
  <div class="creation-content">
    <div class="creation-form">
      <img
        class="layout-bloc creation-img-perso"
        src="./../../../../assets/images/about.png"
        alt="">
    </div>
    <div class="creation-form">
      <p>
        SkillsForm
      </p>
    </div>
  </div>

  <div class="creation-content-nav">
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
</template>

<style lang="scss" scoped src="./../CreationView.scss"></style>
<script lang="ts" src="./SkillsForm.ts"></script>
