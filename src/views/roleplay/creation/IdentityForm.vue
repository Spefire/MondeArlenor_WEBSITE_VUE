<template>
  <!-- Description de la caractéristique sélectionnée -->
  <div class="layout-left creation-form">
    <div class="creation-element">
      <span>Avatar du personnage</span>
      <label
        for="avatar"
        class="creation-avatar">
        <span v-if="!form.avatar">Importer une image<br>(ratio 1:1 | JPG, PNG | max 2Mo)</span>
        <img
          v-if="form.avatar"
          alt="Avatar du personnage"
          :src="form.avatar">
      </label>
      <input
        type="file"
        name="avatar"
        id="avatar"
        accept="image/png, image/jpeg"
        @change="changeAvatar">
    </div>
  </div>

  <!-- Description de la caractéristique sélectionnée -->
  <div class="layout-right creation-form">
    <div class="creation-element">
      <span>Nom du personnage <span required-libelle>*</span></span>
      <input
        type="text"
        v-model.trim.lazy="v$.form.name.$model">
    </div>

    <div class="creation-element">
      <span>Description du personnage <span required-libelle>*</span> (max : 440 caract.)</span>
      <textarea
        v-model.trim.lazy="v$.form.description.$model"
        maxlength="440" />
    </div>

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
        @click="submitForm()">Terminer</button>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./CreationView.scss"></style>
<script lang="ts" src="./IdentityForm.ts"></script>
