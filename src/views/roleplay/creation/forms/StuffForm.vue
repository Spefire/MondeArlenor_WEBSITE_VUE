<template>
  <div class="creation-content">
    <div class="creation-form" />
    <div class="creation-form">
      <p>
        Aucun équipement possible.
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
<script lang="ts" src="./StuffForm.ts"></script>
