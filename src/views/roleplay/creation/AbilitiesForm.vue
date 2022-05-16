<template>
  <div class="layout-left">
    <img
      src="./../../../assets/images/about.png"
      alt="">
  </div>
  <div class="layout-right creation-form">
    <p>
      Merci à mes joueurs Laetitia, Jérôme, Jonathan et Sylvain qui m'ont accompagné lors de la création d'Arlénor.
      Merci à mes MJs d'autres univers qui m'ont énormément apporté en terme de conseils et de soutien.
      Et puis merci à ce qui m'ont soutenu durant ce projet et ce site : Estelle, Alice, Audrey et mes amis testeurs...
      et puis merci à toi de t'intéresser au Monde d'Arlénor !
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

<style lang="scss" scoped src="./CreationView.scss"></style>
<script lang="ts" src="./AbilitiesForm.ts"></script>
