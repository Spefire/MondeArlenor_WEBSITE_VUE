<template>
  <div class="layout-view background-roleplay">

    <div class="side-menu left">
      <div class="docs-grid-list">
        <div
          v-for="(grp, index) in allGroups"
          class="docs-grid-element"
          :key="index">
          <img
            class="img-rounded"
            :src="grp.image"
            :title="grp.name"
            :alt="grp.name">
        </div>
      </div>
    </div>

    <div 
      v-if="currentSpeciality"
      class="layout-center large">
      <img
        :src="currentSpeciality.image"
        :alt="currentSpeciality.name">
      <h2>{{ currentSpeciality.name }}</h2>
      <p class="bloc-text">{{ currentSpeciality.description }}</p>
      <SkillsTable :current-speciality="currentSpeciality" />
    </div>

    <div class="side-menu right">
      <div class="docs-grid-list">
        <div
          v-for="(spe, index) in allSpecialities"
          class="docs-grid-element"
          :class="{ 'selected' : spe.code === currentSpeciality.code }"
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
</template>

<script lang="ts" src="./SpecialityView.ts"></script>
