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
            <h3 class="margin-bottom-1">Classe de la spécialité&nbsp;:<br>{{ currentSpeciality.group.name }}</h3>
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
              class="ability-line"
              :key="index">
              <img
                class="ability-img"
                :src="ability.image"
                :alt="ability.name">
              <span class="ability-txt">{{ ability.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Compétences -->
      <div class="speciality-layout margin-top-1">
        <div class="bloc-text speciality-left">
          <h3 class="margin-bottom-1">Liste de compétences possibles</h3>
          <div
            v-for="(level, indexLevel) in levels"
            class="skills-content"
            :key="indexLevel">
            <div class="skills-content-title">Niveau {{ level }}</div>
            <div
              v-for="(skill, index) in getSkillsByLevel(level)"
              class="skill-line pointer"
              :class="{ 'selected' : skill.code === selectedSkill?.code }"
              @click="selectSkill(skill)"
              :key="index">
              <img
                class="skill-img"
                :src="skill.image"
                :alt="skill.name"
                :title="skill.name">
            </div>
          </div>
        </div>
      
        <div class="bloc-text speciality-right">
          <h3 class="margin-bottom-1">Détail de la compétence</h3>
          <div class="skill-separator" />
          <template v-if="selectedSkill">
            <div>
              {{ selectedSkill.typeSkill.Libelle }}<br>
              {{ selectedSkill.specialities.length > 0 ? '(de la spécialité)' : '(de la classe)' }}
            </div>
            <img
              class="margin-top-1"
              :src="selectedSkill.image"
              :alt="selectedSkill.name">
            <h2 class="margin-top-05">{{ selectedSkill.name }}</h2>
            <div class="skill-separator" />
            <div>
              {{ selectedSkill.description ? selectedSkill.description : 'Aucune description' }}
            </div>
            <div class="skill-separator" />
            <div>Niveau requis&nbsp;:&nbsp;{{ selectedSkill.level }}</div>
            <!--div>Caracts&nbsp;:&nbsp;{{ getCodCaracts(selectedSkill.caracts) }}</div>
            <div>Effet&nbsp;:&nbsp;{{ selectedSkill.effect ? selectedSkill.effect : '-' }}</div-->
          </template>
          <template v-if="!selectedSkill">
            <div>Pas de compétence sélectionnée.</div>
          </template>
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