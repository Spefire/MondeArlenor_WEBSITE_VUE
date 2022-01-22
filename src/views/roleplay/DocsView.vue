<template>
  <div class="layout-view creation">
    
    <div class="layout-center large">
      
      <h2>Les groupes</h2>

      <div class="docs-grid-list">
        <div
          v-for="(grp, index) in allGroups"
          class="docs-grid-element"
          :key="index">
          <img
            :src="grp.image"
            :alt="grp.name">
          <div class="docs-grid-infos">
            <div class="margin-bottom-1 text-bold">{{ grp.name }}</div>
            <p>{{ getDescription(grp.description) }}</p>
          </div>
        </div>
      </div>

      <h2>Les classes</h2>

      <div class="docs-grid-list">
        <div
          v-for="(cls, index) in allClasses"
          class="docs-grid-element"
          :key="index">
          <img
            :src="cls.image"
            :alt="cls.name">
          <div>
            <div class="margin-bottom-1">
              <span class="text-bold">{{ cls.name }}</span>
              -
              <span class="text-italic">{{ cls.group.name }}</span>
            </div>
            <p>{{ getDescription(cls.description) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div little-separator />
  <div class="layout-view creation">
    
    <div class="layout-center large">
      <h2>La liste des compétences</h2>

      <SkillsTable />

    </div>
  </div>
</template>

<script lang="ts" src="./DocsView.ts"></script>
