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
      <h2>Les cristaux évolutifs : groupes</h2>

      <div class="docs-grid-list">
        <div
          v-for="(grp, index) in allGroups"
          class="docs-grid-element"
          :key="index">
          <img
            class="img-rounded"
            :src="grp.image"
            :alt="grp.name">
          <div class="docs-grid-infos">
            <div class="docs-grid-header">
              <span class="text-bold">{{ grp.name }}</span>
              <i
                class="margin-left-05"
                :class="grp.role.icon + ' ' + grp.color"
                :title="grp.role.name" />
            </div>
            <p class="docs-grid-body">{{ getDescription(grp.description) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div little-separator />

  <div class="layout-view background-roleplay">
    <div class="layout-center large">
      <h2>Les cristaux évolutifs : classes</h2>

      <div class="docs-grid-list">
        <div
          v-for="(cls, index) in allClasses"
          class="docs-grid-element"
          :key="index">
          <img
            :src="cls.image"
            :alt="cls.name">
          <div>
            <div class="docs-grid-header">
              <span class="text-bold">{{ cls.name }}</span>
              -
              <span class="text-italic">{{ cls.group.name }}</span>
              <i
                class="margin-left-05"
                :class="cls.group.role.icon + ' ' + cls.group.color"
                :title="cls.group.role.name" />
            </div>
            <p class="docs-grid-body">{{ getDescription(cls.description) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div little-separator />

  <div class="layout-view background-roleplay">
    <div class="layout-center large">
      <h2>Les cristaux évolutifs : compétences</h2>

      <SkillsTable />
    </div>
  </div>
</template>

<script lang="ts" src="./DocsView.ts"></script>
