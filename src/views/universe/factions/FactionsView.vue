<template>
  <HeadLayout
    :title="title"
    :image-left="imageLeft"
    :image-right="imageRight">
    <div class="layout-bloc">
      Section en cours de développement...
    </div>
  </HeadLayout>

  <div little-separator />

  <div class="factions-view layout-view background-universe-vertical">
    
    <h2 class="text-center">Liste des factions officielles</h2>
    <div class="grid-list grid-2">
      <div
        v-for="(faction, index) in factionsOfficielles"
        class="faction-item grid-element"
        :key="index">
        <img
          v-if="faction.image"
          class="faction-image"
          :src="faction.image"
          alt="">
        <div class="info-right">
          <h3 class="margin-bottom-1">{{ faction.title }}</h3>
          <p>{{ faction.description }}</p>
          <p class="faction-values">
            Valeurs :
            <template
              v-for="(value, indexValue) in faction.values"
              :key="indexValue">
              {{ indexValue > 0 ? ', ' : '' }}{{ value }}
            </template>
            <br>
            Position de la base : {{ faction.location }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div little-separator />

  <div class="factions-view layout-view background-universe-vertical">
    <h2 class="text-center">Liste des autres factions</h2>
    <div class="grid-list grid-2">
      <div
        v-for="(faction, index) in factionsNonOfficielles"
        class="faction-item grid-element"
        :key="index">
        <img
          v-if="faction.image"
          class="faction-image"
          :src="faction.image"
          alt="">
        <div class="info-right">
          <h3 class="margin-bottom-1">{{ faction.title }}</h3>
          <p>{{ faction.description }}</p>
          <p class="faction-values">
            Valeurs :
            <template
              v-for="(value, indexValue) in faction.values"
              :key="indexValue">
              {{ indexValue > 0 ? ', ' : '' }}{{ value }}
            </template>
            <br>
            Position de la base : {{ faction.location }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./FactionsView.scss"></style>
<script lang="ts" src="./FactionsView.ts"></script>
