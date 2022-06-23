<template>
  <div
    v-if="currentSpeciality"
    class="layout-view background-roleplay crystals-view hide-on-mobile">

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
            @click="moveToSpe(spe.code)">
        </div>
      </div>
    </div>

    <div class="layout-center large">
      <!-- Icone et titre -->
      <div class="crystals-layout margin-top-2">
        <div class="bloc-text crystals-center">
          <div class="crystals-section-top">
            <h3 class="margin-bottom-1">Groupe de la classe&nbsp;:<br>{{ currentSpeciality.group.name }}</h3>
            <img
              class="margin-bottom-1 rounded"
              :src="currentSpeciality.group.image"
              :alt="currentSpeciality.group.name">
            <p class="crystals-main-description">{{ currentSpeciality.group.description }}</p>
          </div>
          <div class="crystals-separator" />
          <div class="crystals-section-top">
            <img
              :src="currentSpeciality.image"
              :alt="currentSpeciality.name">
            <h2>{{ currentSpeciality.name }}</h2>
            <p class="crystals-main-description">{{ currentSpeciality.description }}</p>
          </div>
          <div class="crystals-separator" />
          <div class="crystals-section-top">
            <h3 class="margin-bottom-1">Compétences de la classe</h3>
            <div
              v-if="currentSpeciality.weaponAbility"
              class="skill-line">
              <img
                class="skill-img"
                :src="currentSpeciality.weaponAbility.image"
                :alt="currentSpeciality.weaponAbility.name">
              <span class="skill-txt">{{ currentSpeciality.weaponAbility.name }}</span>
            </div>
            <div 
              v-if="currentSpeciality.armorAbility"
              class="skill-line">
              <img
                class="skill-img"
                :src="currentSpeciality.armorAbility.image"
                :alt="currentSpeciality.armorAbility.name">
              <span class="skill-txt">{{ currentSpeciality.armorAbility.name }}</span>
            </div>
            <h3 class="margin-top-1 margin-bottom-1">Propriétés diverses</h3>
            <div 
              v-if="currentSpeciality.timeCastingAbility"
              class="skill-line">
              <img
                class="skill-img"
                :src="currentSpeciality.timeCastingAbility.image"
                :alt="currentSpeciality.timeCastingAbility.name">
              <span class="skill-txt">{{ currentSpeciality.timeCastingAbility.name }}</span>
            </div>
            <div 
              v-if="currentSpeciality.numberUseAbility"
              class="skill-line">
              <img
                class="skill-img"
                :src="currentSpeciality.numberUseAbility.image"
                :alt="currentSpeciality.numberUseAbility.name">
              <span class="skill-txt">{{ currentSpeciality.numberUseAbility.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Pouvoirs -->
      <div class="crystals-layout margin-top-1">
        <div class="bloc-text crystals-left">
          <h3 class="margin-bottom-1">Pouvoirs de la classe</h3>
          <div
            v-for="(level, indexLevel) in levels"
            class="powers-content"
            :key="indexLevel">
            <div class="powers-content-title">Niveau {{ getLibLevel(level) }}</div>
            <div
              v-for="(power, index) in getPowersByLevel(level, true)"
              class="power-line pointer"
              :class="{ 'selected' : power.code === selectedPower?.code }"
              @click="selectPower(power)"
              :key="index">
              <img
                class="power-img"
                :src="power.image"
                :alt="power.name"
                :title="power.name">
              <span class="power-name">{{ power.name }}</span>
            </div>
            <div
              v-for="(power, index) in getPowersByLevel(level, false)"
              class="power-line pointer"
              :class="{ 'selected' : power.code === selectedPower?.code }"
              @click="selectPower(power)"
              :key="index">
              <img
                class="power-img"
                :src="power.image"
                :alt="power.name"
                :title="power.name">
              <span class="power-name">{{ power.name }}</span>
            </div>
          </div>
        </div>
      
        <div class="bloc-text crystals-right">
          <h3 class="margin-bottom-1">Détail du pouvoir</h3>
          <div class="power-separator" />
          <template v-if="selectedPower">
            <div>
              {{ selectedPower.type.Libelle }}
              {{ selectedPower.speciality ? '(de la classe)' : '(du groupe)' }}
            </div>
            <img
              class="margin-top-1"
              :src="selectedPower.image"
              :alt="selectedPower.name">
            <h2 class="margin-top-05">{{ selectedPower.name }}</h2>
            <div class="power-separator" />
            <div>
              {{ selectedPower.description ? selectedPower.description : 'Aucune description' }}
            </div>
            <div
              v-if="selectedPower.effect0"
              class="power-separator" />
            <div v-if="selectedPower.effect0">
              <span class="text-bold">Simple<br></span>
              {{ selectedPower.effect0 }}
            </div>
            <div
              v-if="selectedPower.effect1"
              class="margin-top-05">
              <span class="text-bold">Complexe<br></span>
              {{ selectedPower.effect1 }}
            </div>
            <div
              v-if="selectedPower.effect2"
              class="margin-top-05">
              <span class="text-bold">Difficile<br></span>
              {{ selectedPower.effect2 }}
            </div>
            <div
              v-if="selectedPower.effect3"
              class="margin-top-05">
              <span class="text-bold">Epique<br></span>
              {{ selectedPower.effect3 }}
            </div>
            <div class="power-separator" />
            <div>
              Jets à réaliser :
              <span title="Jets du lanceur">{{ getCodCaracts(selectedPower.caractsUse) }}</span>
            </div>
            <div>
              Jets en opposition :
              <span title="Jets de la cible">{{ getCodCaracts(selectedPower.caractsTarget) }}</span>
            </div>
            <div class="margin-top-05">{{ getCasting(selectedPower.timeCastingAbility) }}</div>
            <div>{{ getReloading(selectedPower.numberUseAbility) }}</div>
          </template>
          <template v-if="!selectedPower">
            <div>Pas de pouvoir sélectionné.</div>
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

<style lang="scss" scoped src="./CrystalsView.scss"></style>
<script lang="ts" src="./CrystalsView.ts"></script>