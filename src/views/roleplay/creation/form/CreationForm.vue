<template>
  <div class="layout-view background-roleplay creation-view">

    <h2 class="text-center margin-top-0 margin-bottom-1">
      {{ formTitle }}
      <span
        v-if="isModified"
        title="A des modifications en cours">&nbsp;*</span>
    </h2>
    
    <div class="creation-content">
      <slot />
    </div>

    <div class="creation-content-nav">
      <button
        class="link-button"
        @click="cancel()">
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
        :disabled="isInvalid"
        @click="submit()">Suivant</button>
    </div>
  </div>
</template>

<script lang="ts" src="./CreationForm.ts"></script>
