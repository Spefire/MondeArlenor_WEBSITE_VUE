<template>
  <div
    v-if="currentGroup || currentSpeciality"
    class="layout-view background-roleplay crystal-single-view hide-on-mobile">

    <!-- Menu à gauche -->
    <div class="side-menu left">
      <div class="docs-grid-list">
        <div
          v-for="(grp, index) in allGroups"
          class="docs-grid-element"
          :class="{ 'selected' : grp.code === currentGroup?.code }"
          :key="index">
          <img
            class="img-rounded"
            :src="grp.image"
            :title="grp.name"
            :alt="grp.name"
            @click="changeGrp(grp.code)">
        </div>
      </div>
    </div>

    <div class="layout-center large">
      <!-- Icone et titre -->
      <template v-if="currentGroup">
        <img
          class="group-img rounded"
          :src="currentGroup.image"
          :alt="currentGroup.name">
        <h2>{{ currentGroup.name }}</h2>
        <p class="crystals-main-description bloc-text">{{ currentGroup.description }}</p>
      </template>
      <template v-if="currentSpeciality">
        <img
          class="group-img"
          :src="currentSpeciality.image"
          :alt="currentSpeciality.name">
        <h2>{{ currentSpeciality.name }}</h2>
        <p class="crystals-main-description bloc-text">{{ currentSpeciality.description }}</p>
      </template>

      <!-- Compétences acquises par la classe -->
      <h3
        v-if="currentSpeciality"
        class="margin-top-2">Compétences acquises par la classe</h3>
      <div
        v-if="currentSpeciality && groupSkills.length > 0"
        class="crystals-docs docs-grid-list">
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
      </div>
      <p
        v-if="groupSkills.length === 0"
        class="crystals-main-description bloc-text margin-top-1">
        Aucune compétence n'est acquise par cette classe.
      </p>

      <!-- Compétences acquises par la spécialité -->
      <h3
        v-if="currentSpeciality"
        class="margin-top-2">Compétences acquises par la spécialité</h3>
      <div
        v-if="currentSpeciality && specialitySkills.length > 0"
        class="crystals-docs docs-grid-list">
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
          
        <p
          v-if="currentSpeciality && specialitySkills.length === 0"
          class="crystals-main-description bloc-text margin-top-1">
          Aucune compétence n'est acquise par cette spécialité.
        </p>
      </div>
    </div>

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
  </div>

  <div class="layout-view background-roleplay show-on-mobile">
    <div class="show-on-mobile-alert bloc-text">
      Cette page ne peut pas être parcourue sur un écran mobile.
    </div>
  </div>
</template>

<style lang="scss" scoped src="./CrystalSingleView.scss"></style>
<script lang="ts" src="./CrystalSingleView.ts"></script>