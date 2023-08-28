<template>
  <div
    v-if="currentSpeciality"
    class="layout-view background-roleplay crystals-view hide-on-mobile">

    <!-- Menu en haut -->
    <div class="side-menu">
      <div class="side-list">
        <div
          v-for="(spe, index) in allSpecialities"
          class="side-element"
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
        <div
          v-if="currentSpeciality.archetype01"
          class="crystals-section">
          <div>Archétype</div>
          <h3 class="margin-bottom-1">"{{ currentSpeciality.archetype01.name }}"</h3>
          <img
            class="crystal-img margin-bottom-1 rounded"
            :src="currentSpeciality.imageForArchetype"
            :alt="currentSpeciality.archetype01.name">
          <p class="crystals-main-description">
            {{ currentSpeciality.archetype01.description }}
          </p>
          <div
            v-if="currentSpeciality.archetype01.skill"
            class="power-line justify-center">
            <div class="power-img-layout">
              <img
                class="power-img"
                :src="currentSpeciality.archetype01.skill.image"
                :alt="currentSpeciality.archetype01.skill.name">
            </div>
            <span class="power-txt">{{ currentSpeciality.archetype01.skill.name }}</span>
          </div>
        </div>
        <div class="crystals-separator" />
        <div 
          class="crystals-section">
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
        <div 
          v-if="currentSpeciality.archetype02"
          class="crystals-section">
          <div>Archétype</div>
          <h3 class="margin-bottom-1">"{{ currentSpeciality.archetype02.name }}"</h3>
          <img
            class="crystal-img margin-bottom-1 rounded"
            :src="currentSpeciality.imageForArchetype"
            :alt="currentSpeciality.archetype02.name">
          <p class="crystals-main-description">
            {{ currentSpeciality.archetype02.description }}
          </p>
          <div
            v-if="currentSpeciality.archetype02.skill"
            class="power-line justify-center">
            <div class="power-img-layout">
              <img
                class="power-img"
                :src="currentSpeciality.archetype02.skill.image"
                :alt="currentSpeciality.archetype02.skill.name">
            </div>
            <span class="power-txt">{{ currentSpeciality.archetype02.skill.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Pouvoirs -->
    <div class="crystals-layout margin-top-1">
      <div class="crystals-left layout-bloc">

        <h3 class="margin-bottom-1">Liste des Pouvoirs</h3>
        <div
          v-for="(rank, indexRank) in ranks"
          class="powers-content"
          :key="indexRank">
          <div class="powers-content-title">Rang {{ rank.Libelle }}</div>
          <div
            v-for="(power, indexPower) in getRankPowers(rank)"
            class="power-line pointer"
            :class="{ 'selected' : power.code === selectedPower?.code }"
            @click="selectPower(power)"
            :key="indexPower">
            <PowerImage :power="power" />
            <span class="power-txt">{{ power.name }}</span>
          </div>
          <div v-if="getRankPowers(rank).length === 0">
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