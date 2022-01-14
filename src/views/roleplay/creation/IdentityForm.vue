<template>
  <div class="layout-center">
    <h2>Identité du personnage</h2>
    <div class="creation-element">
      <span>Nom du personnage</span>
      <input
        type="text"
        v-model="name">
    </div>
    <div class="creation-element">
      <span>Description du personnage (max : 440 caract.)</span>
      <textarea
        v-model="description"
        maxlength="440" />
    </div>
    <div class="creation-element">
      <span>Avatar du personnage</span>
      <label
        for="avatar"
        class="creation-avatar">
        <span v-if="!avatar">Importer une image<br>(ratio 1:1 | JPG, PNG | max 2Mo)</span>
        <img
          v-if="avatar"
          alt=""
          :src="avatar">
      </label>
      <input
        type="file"
        name="avatar"
        id="avatar"
        accept="image/png, image/jpeg"
        @change="changeAvatar">

    </div>
    <button
      class="margin-top-1 link-button"
      @click="submitForm()">Terminer</button>
  </div>
</template>

<script lang="ts" src="./IdentityForm.ts"></script>
