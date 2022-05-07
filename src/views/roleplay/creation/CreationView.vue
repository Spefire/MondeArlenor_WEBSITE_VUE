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

    <div class="creation-content">
      <RaceForm
        v-if="selection == 0"
        @nextStep="increaseSelection()" />
      <CaractsForm
        v-if="selection == 1"
        @nextStep="increaseSelection()" />
      <Crystal01Form
        v-if="selection == 3"
        @nextStep="increaseSelection()" />
      <Crystal02Form
        v-if="selection == 4"
        @nextStep="increaseSelection()" />
      <IdentityForm v-if="selection == 5" />

      <ul class="selection-container inverted">
        <div class="dotline" />
        <li
          :class="{'active': selection == 0 }"
          class="dot"
          @click="setSelection(0)" />
        <div class="dotline" />
        <li
          :class="{'active': selection == 1 }"
          class="dot"
          @click="setSelection(1)" />
        <div class="dotline" />
        <li
          :class="{'active': selection == 2 }"
          class="dot"
          @click="setSelection(2)" />
        <div class="dotline" />
        <li
          :class="{'active': selection == 3 }"
          class="dot"
          @click="setSelection(3)" />
        <div class="dotline" />
        <li
          :class="{'active': selection == 4 }"
          class="dot"
          @click="setSelection(4)" />
        <div class="dotline" />
        <li
          :class="{'active': selection == 5 }"
          class="dot"
          @click="setSelection(5)" />
        <div class="dotline" />
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./CreationView.scss"></style>
<script lang="ts" src="./CreationView.ts"></script>
