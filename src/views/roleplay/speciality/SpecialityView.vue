<template>
  <div
    v-if="currentSpeciality"
    class="layout-view background-roleplay speciality-view hide-on-mobile">

    <!-- Menu à droite -->
    <div class="side-menu right">
      <div class="docs-grid-list">
        <div
          v-for="(spe, index) in allSpecialities"
          class="docs-grid-element"
          :class="{ 'selected' : spe.code === currentSpeciality?.code }"
          :key="index">
          <img
            :src="spe.image"
            :title="spe.name"
            :alt="spe.name"
            @click="changeSpe(spe.code)">
        </div>
      </div>
    </div>

    <div class="layout-center large">
      <!-- Icone et titre -->
      <img
        class="group-img"
        :src="currentSpeciality.image"
        :alt="currentSpeciality.name">
      <h2>{{ currentSpeciality.name }}</h2>
      <p class="crystals-main-description bloc-text">{{ currentSpeciality.description }}</p>

      <!-- Compétences acquises -->
      <h3 class="margin-top-2">Compétences acquises de base</h3>
      <div class="crystals-docs docs-grid-list">
        <div
          v-for="(skill, index) in groupSkills"
          class="docs-grid-element"
          :key="index">
          <img
            class="img"
            :src="skill.image"
            :alt="skill.name">
          <div class="docs-grid-infos">
            <div class="docs-grid-header">
              <span class="text-bold">{{ skill.name }}</span>
            </div>
            <p
              class="docs-grid-body"
              v-html="getDescription(skill.description, 200)" />
          </div>
        </div>
        <div
          v-for="(skill, index) in specialitySkills"
          class="docs-grid-element"
          :key="index">
          <img
            class="img"
            :src="skill.image"
            :alt="skill.name">
          <div class="docs-grid-infos">
            <div class="docs-grid-header">
              <span class="text-bold">{{ skill.name }}</span>
            </div>
            <p
              class="docs-grid-body"
              v-html="getDescription(skill.description, 200)" />
          </div>
        </div>
      </div>
    </div>

    <div class="layout-view background-roleplay show-on-mobile">
      <div class="layout-center large">
        <div class="show-on-mobile-alert bloc-text">
          Cette page ne peut pas être parcourue sur un écran mobile.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./SpecialityView.scss"></style>
<script lang="ts" src="./SpecialityView.ts"></script>