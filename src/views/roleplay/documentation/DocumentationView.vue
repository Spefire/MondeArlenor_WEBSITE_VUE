<template>
  <div class="layout-view background-roleplay">
    <div class="layout-center large">
      <h2>Les races jouables</h2>

      <div class="docs-grid-list">
        <div
          v-for="(race, index) in allRaces"
          class="docs-grid-element"
          :key="index">
          <img
            class="img-rounded"
            :src="race.image"
            :alt="race.name">
          <div class="docs-grid-infos">
            <div class="docs-grid-header">
              <span class="text-bold">{{ race.name }}</span>
              <span
                class="text-bold margin-left-05"
                :class="getDifficultyColor(race)"
                :title="getDifficultyLibelle(race)">•</span>
            </div>
            <p
              class="docs-grid-body"
              v-html="getDescription(race.description, 200)" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div little-separator />

  <div class="layout-view background-roleplay">
    <div class="layout-center large">
      <h2>Les compétences</h2>

      <SkillsTable />
    </div>
  </div>
</template>

<script lang="ts" src="./DocumentationView.ts"></script>
