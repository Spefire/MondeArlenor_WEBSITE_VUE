<template>
  <div class="layout-view creation">
    <RaceForm v-if="selection == 0" />
    <CaractsForm v-if="selection == 1" />
    <Crystal01Form v-if="selection == 2" />
    <Crystal02Form v-if="selection == 3" />
    <IdentityForm v-if="selection == 4" />

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
    </ul>
  </div>
</template>

<script lang="ts" src="./CreationView.ts"></script>
