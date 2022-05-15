<template>
  <div class="layout-view background-roleplay creation-view">

    <h2
      v-if="selection == 0"
      class="text-center">Caractéristiques du personnage (1/2)</h2>
    <h2
      v-if="selection == 1"
      class="text-center">Caractéristiques du personnage (2/2)</h2>
    <h2
      v-if="selection == 2"
      class="text-center">Compétences principales</h2>
    <h2
      v-if="selection == 3"
      class="text-center">Cristal évolutif (1/2)</h2>
    <h2
      v-if="selection == 4"
      class="text-center">Cristal évolutif (2/2)</h2>
    <h2
      v-if="selection == 5"
      class="text-center">Finitions</h2>

    <div v-if="hasModification">A des modifications en cours</div>

    <div class="creation-content">
      <RaceForm
        v-if="selection == 0"
        @changeStep="changeModifs()"
        @nextStep="increaseSelection()" />
      <CaractsForm
        v-if="selection == 1"
        @changeStep="changeModifs()"
        @previousStep="decreaseSelection()"
        @nextStep="increaseSelection()" />
      <AbilitiesForm
        v-if="selection == 2"
        @changeStep="changeModifs()"
        @previousStep="decreaseSelection()"
        @nextStep="increaseSelection()" />
      <CrystalForm
        v-if="selection == 3"
        :current-crystal="1"
        @changeStep="changeModifs()"
        @previousStep="decreaseSelection()"
        @nextStep="increaseSelection()" />
      <CrystalForm
        v-if="selection == 4"
        :current-crystal="2"
        @changeStep="changeModifs()"
        @previousStep="decreaseSelection()"
        @nextStep="increaseSelection()" />
      <IdentityForm
        v-if="selection == 5"
        @previousStep="decreaseSelection()"
        @changeStep="changeModifs()"
        @nextStep="increaseSelection()" />

      <ul class="selection-container inverted">
        <div class="dotline" />
        <li
          :class="{'active': selection == 0 }"
          class="dot" />
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
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./CreationView.scss"></style>
<script lang="ts" src="./CreationView.ts"></script>
