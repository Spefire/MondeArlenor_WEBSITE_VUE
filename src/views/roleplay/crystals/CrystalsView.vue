<template>
  <div class="layout-view background-roleplay crystals-view">
    <div class="layout-center large">
      <h2>Les cristaux évolutifs : classes principales</h2>

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
              <span
                class="text-bold"
                @click="changeGrp(grp.code)">
                {{ grp.name }}
              </span>
              <i
                class="margin-left-05"
                :class="grp.role.icon + ' ' + grp.color"
                :title="grp.role.name" />
            </div>
            <p class="docs-grid-body">{{ getDescription(grp.description) }}</p>
            <div class="margin-top-05 margin-bottom-05">
              <ArrowButton
                :link-path="'crystal'"
                :link-query="{ grp: grp.code }" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div little-separator />

  <div class="layout-view background-roleplay">
    <div class="layout-center large">
      <h2>Les cristaux évolutifs : spécialités</h2>

      <div class="docs-grid-list">
        <div
          v-for="(spe, index) in allSpecialities"
          class="docs-grid-element"
          :key="index">
          <img
            :src="spe.image"
            :alt="spe.name">
          <div>
            <div class="docs-grid-header">
              <span
                class="text-bold"
                @click="changeSpe(spe.code)">
                {{ spe.name }}
              </span>
              -
              <span class="text-italic">{{ spe.group.name }}</span>
              <i
                class="margin-left-05"
                :class="spe.group.role.icon + ' ' + spe.group.color"
                :title="spe.group.role.name" />
            </div>
            <p class="docs-grid-body">{{ getDescription(spe.description) }}</p>
            <div class="margin-top-05 margin-bottom-05">
              <ArrowButton
                :link-path="'crystal'"
                :link-query="{ spe: spe.code }" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./CrystalsView.scss"></style>
<script lang="ts" src="./CrystalsView.ts"></script>