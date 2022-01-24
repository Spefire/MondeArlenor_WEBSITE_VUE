<template>
  <div class="population-view layout-view universe-background">
    <div class="layout-center large">
      <div class="population-imgs">
        <button
          class="link-button"
          @click="previousSelection()">
          <i class="icon icon-arrow-right2" />
        </button>

        <img
          @click="previousSelection()"
          class="population-img"
          :src="previousImage"
          alt="">
        <img
          class="population-img main"
          :src="currentImage"
          alt="">
        <img
          @click="nextSelection()"
          class="population-img"
          :src="nextImage"
          alt="">

        <button
          class="link-button"
          @click="nextSelection()">
          <i class="icon icon-arrow-right2" />
        </button>
      </div>
      <div class="population-description">
        <h2>{{ currentRace.name }}</h2>
        <p>{{ currentRace.description }}</p>
        <p class="population-location">
          <span
            v-for="(location, index) in currentRace.locations"
            :key="index">
            - {{ location }}<br>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./PopulationView.ts"></script>
