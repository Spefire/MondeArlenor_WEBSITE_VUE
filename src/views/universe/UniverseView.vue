<template>
  <div class="universe-view layout-view background-universe">
    <div class="universe-container">
      <div class="universe-left section">
        <img
          class="section-image"
          :src="currentZone.image"
          :alt="currentZone.name">
        <div class="section-header-buttons">
          <div
            class="section-button inverted"
            @click="previousSelection()">
            <i class="icon icon-arrow-right2" />
          </div>
          <div class="text-center margin-bottom-1">
            <h2>{{ currentZone.name }}</h2>
            <h3>{{ showCities ? currentZone.sector.city : currentZone.sector.name }}</h3>
          </div>
          <div
            class="section-button"
            @click="nextSelection()">
            <i class="icon icon-arrow-right2" />
          </div>
        </div>
        <div class="section-description">
          <span v-html="currentZone.description" />
        </div>
        <p
          v-if="currentZone.comment"
          class="section-comment margin-top-1"
          :title="currentZone.comment + '\n - ' + currentZone.commentName">
          "{{ currentZone.comment }}"
          <br>
          - {{ currentZone.commentName }}
        </p>
      </div>
      <div class="universe-right">
        <div class="universe-title margin-bottom-1">
          <h2>{{ showCities ? currentZone.sector.city : currentZone.sector.name }}</h2>
          <h3 v-if="!showCities">
            Climat&nbsp;:&nbsp;<span class="text-capitalize">{{ currentZone.sector.climate }}</span>
          </h3>
          <h3 v-if="showCities">
            Niveau de danger&nbsp;:&nbsp;<span class="text-capitalize">{{ currentZone.sector.danger }}</span>
          </h3>
        </div>
        <div class="universe-map-section">
          <i
            v-for="(zone, index) in allZones"
            :value="zone.code"
            class="universe-map-target icon icon-location mid-opacity pointer"
            :class="{ 'full-opacity': zone.name === currentZone.name }"
            :style="{ top: zone.posTop + '%', left: zone.posLeft + '%' }"
            @click="selectZone(index)"
            :key="index" />
          <img
            v-show="!showCities"
            class="universe-map layout-bloc"
            src="./../../assets/images/world/worldmap_climates.jpg"
            alt="Carte des Climats">
          <img
            v-show="showCities"
            class="universe-map layout-bloc"
            src="./../../assets/images/world/worldmap_cities.jpg"
            alt="Carte des Cités">
        </div>
        <div class="universe-title margin-top-1">
          <ToggleButton
            :text="'Voir la version des cités et les niveaux de danger'"
            :value="showCities"
            @change="toggleMap" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./UniverseView.scss"></style>
<script lang="ts" src="./UniverseView.ts"></script>
