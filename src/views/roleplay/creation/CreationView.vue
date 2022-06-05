<template>
  <div class="layout-view background-roleplay creation-view">

    <h2
      v-if="selection == 0"
      class="text-center">Fiche de personnage</h2>
    <h2
      v-if="selection == 1"
      class="text-center">Caractéristiques du personnage (1/2)</h2>
    <h2
      v-if="selection == 2"
      class="text-center">Caractéristiques du personnage (2/2)</h2>
    <h2
      v-if="selection == 3"
      class="text-center">Compétences principales</h2>
    <h2
      v-if="selection == 4"
      class="text-center">Cristal évolutif (1/2)</h2>
    <h2
      v-if="selection == 5"
      class="text-center">Cristal évolutif (2/2)</h2>
    <h2
      v-if="selection == 6"
      class="text-center">Finitions</h2>

    <div v-if="hasModification">A des modifications en cours</div>

    <div class="creation-content">
      
      <div
        v-if="selection == 0"
        class="layout-center creation-form">
        <div class="bloc-text">
          Ceci est un texte.
        </div>

        <div class="creation-nav-button">
          <button
            class="link-button"
            @click="startCreation()">Commencer la création</button>
        </div>
      </div>

      <RaceForm
        v-if="selection == 1"
        @changeStep="changeModifs()"
        @nextStep="increaseSelection()" />
      <CaractsForm
        v-if="selection == 2"
        @changeStep="changeModifs()"
        @previousStep="decreaseSelection()"
        @nextStep="increaseSelection()" />
      <AbilitiesForm
        v-if="selection == 3"
        @changeStep="changeModifs()"
        @previousStep="decreaseSelection()"
        @nextStep="increaseSelection()" />
      <CrystalForm
        v-if="selection == 4"
        :current-crystal="1"
        @changeStep="changeModifs()"
        @previousStep="decreaseSelection()"
        @nextStep="increaseSelection()" />
      <CrystalForm
        v-if="selection == 5"
        :current-crystal="2"
        @changeStep="changeModifs()"
        @previousStep="decreaseSelection()"
        @nextStep="increaseSelection()" />
      <IdentityForm
        v-if="selection == 6"
        @previousStep="decreaseSelection()"
        @changeStep="changeModifs()"
        @nextStep="increaseSelection()" />

      <div
        v-if="selection == 7"
        class="layout-center creation-form">
        <div class="bloc-text">
          Ceci est un texte.
        </div>
      </div>

      <ul class="selection-container creation-selection-steps">
        <div class="dotline" />
        <li
          :class="{'active': selection == 1 }"
          class="dot" />
        <div class="dotline" />
        <li
          :class="{'active': selection == 2 }"
          class="dot" />
        <div class="dotline" />
        <li
          :class="{'active': selection == 3 }"
          class="dot" />
        <div class="dotline" />
        <li
          :class="{'active': selection == 4 }"
          class="dot" />
        <div class="dotline" />
        <li
          :class="{'active': selection == 5 }"
          class="dot" />
        <div class="dotline" />
        <li
          :class="{'active': selection == 6 }"
          class="dot" />
        <div class="dotline" />
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./CreationView.scss"></style>
<script lang="ts" src="./CreationView.ts"></script>
