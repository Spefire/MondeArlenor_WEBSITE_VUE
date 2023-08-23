<template>
  <div
    v-if="currentSpeciality"
    class="layout-view background-roleplay crystals-view hide-on-mobile">

    <!-- Menu en haut -->
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

    <!-- Icone et titre -->
    <div class="crystals-layout margin-top-2">
      <div class="crystals-top layout-bloc">
        <div class="crystals-section">
          <div>Archétype</div>
          <h3 class="margin-bottom-1">"{{ currentSpeciality.archetypeName01 }}"</h3>
          <img
            class="crystal-img margin-bottom-1 rounded"
            :src="currentSpeciality.otherImage"
            :alt="currentSpeciality.archetypeName01">
          <p class="crystals-main-description">{{ currentSpeciality.archetypeDesc01 }}</p>
          <div class="power-line justify-center">
            <div class="power-img-layout">
              <img
                class="power-img"
                :src="currentSpeciality.archetypeSkill01.image"
                :alt="currentSpeciality.archetypeSkill01.name">
            </div>
            <span class="power-txt">{{ currentSpeciality.archetypeSkill01.name }}</span>
          </div>
        </div>
        <div class="crystals-separator" />
        <div class="crystals-section">
          <img
            class="crystal-img"
            :src="currentSpeciality.image"
            :alt="currentSpeciality.name">
          <h2>{{ currentSpeciality.name }}</h2>
          <p class="crystals-main-description">{{ currentSpeciality.description }}</p>
          <p class="crystals-main-description">
            Apparence : {{ currentSpeciality.appearance }}
          </p>
        </div>
        <div class="crystals-separator" />
        <div class="crystals-section">
          <div>Archétype</div>
          <h3 class="margin-bottom-1">"{{ currentSpeciality.archetypeName02 }}"</h3>
          <img
            class="crystal-img margin-bottom-1 rounded"
            :src="currentSpeciality.otherImage"
            :alt="currentSpeciality.archetypeName02">
          <p class="crystals-main-description">{{ currentSpeciality.archetypeDesc02 }}</p>
          <div class="power-line justify-center">
            <div class="power-img-layout">
              <img
                class="power-img"
                :src="currentSpeciality.archetypeSkill02.image"
                :alt="currentSpeciality.archetypeSkill02.name">
            </div>
            <span class="power-txt">{{ currentSpeciality.archetypeSkill02.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Pouvoirs -->
    <div class="crystals-layout margin-top-1">
      <div class="crystals-left layout-bloc">

        <h3 class="margin-bottom-1">Liste des Pouvoirs</h3>
        <div class="powers-content">
          <div class="powers-content-title">Liés à la classe</div>
          <div
            v-for="(power, index) in powersByRank"
            class="power-line pointer"
            :class="{ 'selected' : power.code === selectedPower?.code }"
            @click="selectPower(power)"
            :key="index">
            <PowerImage :power="power" />
            <span class="power-txt">{{ power.name }}</span>
          </div>
          <div v-if="powersByRank.length === 0">
            Aucun pouvoir
          </div>
        </div>
      </div>
      
      <div class="crystals-right layout-bloc">
        <h3 class="margin-bottom-1">Détails du pouvoir</h3>
        <div class="power-separator" />
        <template v-if="selectedPower">
          <div>
            {{ selectedPower.type.Libelle }} de Rang
            {{ selectedPower.rank.Libelle }}
          </div>
          <PowerImage
            class="power-img-layout big margin-top-1"
            :power="selectedPower" />
          <h2 class="margin-top-1">{{ selectedPower.name }}</h2>
          <div class="power-separator" />
          <div>
            {{ selectedPower.description ? selectedPower.description : 'Aucune description' }}
          </div>
          <div class="power-separator" />
          <div>
            <i
              class="icon icon-enlarge"
              title="Portée du pouvoir" />&nbsp;
            <span title="Portée du pouvoir">{{ selectedPower.range.Libelle }}</span>
          </div>
          <div class="margin-top-05">
            <i
              class="icon icon-hour-glass"
              title="Durée et rechargement du pouvoir" />&nbsp;
            <span title="Durée et rechargement du pouvoir">{{ selectedPower.duration.Libelle }}</span>
          </div>
          <div class="margin-top-05 margin-bottom-05">
            <i class="icon icon-spinner9" />&nbsp;
            <span>{{ selectedPower.chaneling ? "Avec" : "Sans" }} canalisation</span>
          </div>
        </template>
        <template v-if="!selectedPower">
          <div>Pas de pouvoir sélectionné</div>
        </template>
      </div>
    </div>

    <div class="layout-view background-roleplay show-on-mobile">
      <div class="show-on-mobile-alert layout-bloc">
        Cette page ne peut pas être parcourue sur un écran mobile.
      </div>
    </div>
  </div></template>

<style lang="scss" scoped src="./CrystalsView.scss"></style>
<script lang="ts" src="./CrystalsView.ts"></script>