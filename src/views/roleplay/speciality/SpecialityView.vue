<template>
  <div
    v-if="currentSpeciality"
    class="layout-view background-roleplay speciality-view hide-on-mobile">

    <!-- Menu à droite -->
    <div class="side-menu top">
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
      <div class="speciality-layout margin-top-2">
        <div class="bloc-text speciality-center">
          <div class="speciality-section-top">
            <h3 class="margin-bottom-1">Classe de la spécialité :<br>{{ currentSpeciality.group.name }}</h3>
            <img
              class="margin-bottom-1 rounded"
              :src="currentSpeciality.group.image"
              :alt="currentSpeciality.group.name">
            <p class="crystals-main-description">{{ currentSpeciality.group.description }}</p>
          </div>
          <div class="speciality-separator" />
          <div class="speciality-section-top">
            <img
              :src="currentSpeciality.image"
              :alt="currentSpeciality.name">
            <h2>{{ currentSpeciality.name }}</h2>
            <p class="crystals-main-description">{{ currentSpeciality.description }}</p>
          </div>
          <div class="speciality-separator" />
          <div class="speciality-section-top">
            <h3 class="margin-bottom-1">Abilités de la spécialité</h3>
            <div
              v-for="(ability, index) in crystalAbilities"
              class="skill-line"
              :key="index">
              <img
                class="skill-img"
                :src="ability.image"
                :alt="ability.name">
              <span class="skill-txt">{{ ability.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Compétences -->
      <div class="speciality-layout margin-top-1">
        <div class="bloc-text speciality-left">
          <h3 class="margin-bottom-1">Arbre de compétences</h3>
          <div
            v-for="(skill, index) in groupSkills"
            class="skill-line"
            :key="index">
            <img
              class="skill-img"
              :src="skill.image"
              :alt="skill.name">
            <span class="skill-txt">{{ skill.name }}</span>
          </div>
          <div
            v-for="(skill, index) in specialitySkills"
            class="skill-line"
            :key="index">
            <img
              class="skill-img"
              :src="skill.image"
              :alt="skill.name">
            <span class="skill-txt">{{ skill.name }}</span>
          </div>
        </div>
      
        <div class="bloc-text speciality-right">
          <h3 class="margin-bottom-1">Détail de la compétence</h3>
        </div>
      </div>
    </div>
  </div>

  <div class="layout-view background-roleplay show-on-mobile">
    <div class="show-on-mobile-alert bloc-text">
      Cette page ne peut pas être parcourue sur un écran mobile.
    </div>
  </div>
</template>

<style lang="scss" scoped src="./SpecialityView.scss"></style>
<script lang="ts" src="./SpecialityView.ts"></script>