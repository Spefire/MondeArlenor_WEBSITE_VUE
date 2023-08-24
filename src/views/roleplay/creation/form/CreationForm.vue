<template>
  <div
    class="layout-view background-roleplay creation-view"
    :class="{ 'is-disabled' : isDisabled }">

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
          Retour
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
        @click="submit()">Valider</button>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./../CreationView.scss"></style>
<script lang="ts" src="./CreationForm.ts"></script>
