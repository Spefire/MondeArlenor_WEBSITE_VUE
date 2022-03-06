<template>

  <div
    v-if="!currentSpeciality"
    class="layout-view background-roleplay">
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

  <div
    v-if="!currentSpeciality"
    little-separator />

  <div
    v-if="!currentSpeciality"
    class="layout-view background-roleplay">
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
                <router-link :to="{ path: 'crystals', query: { code: spe.code }}">
                  {{ spe.name }}
                </router-link>
              </span>
              -
              <span class="text-italic">{{ spe.group.name }}</span>
              <i
                class="margin-left-05"
                :class="spe.group.role.icon + ' ' + spe.group.color"
                :title="spe.group.role.name" />
            </div>
            <p class="docs-grid-body">{{ getDescription(spe.description) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!------------------------------------------------------------------------>

  <div
    v-if="currentSpeciality"
    class="layout-view background-roleplay crystals-view">

    <div class="side-menu left">
      <div class="docs-grid-list">
        <div
          v-for="(grp, index) in allGroups"
          class="docs-grid-element"
          :key="index">
          <img
            class="img-rounded"
            :src="grp.image"
            :title="grp.name"
            :alt="grp.name">
        </div>
      </div>
    </div>

    <div class="layout-center large">
      <img
        class="group-img"
        :src="currentSpeciality.image"
        :alt="currentSpeciality.name">
      <h2>{{ currentSpeciality.name }}</h2>
      <p class="bloc-text">{{ currentSpeciality.description }}</p>
      <!--SkillsTable :current-speciality="currentSpeciality" -->
    </div>

    <div class="side-menu right">
      <div class="docs-grid-list">
        <div
          v-for="(spe, index) in allSpecialities"
          class="docs-grid-element"
          :class="{ 'selected' : spe.code === currentSpeciality?.code }"
          :key="index">
          <router-link :to="{ path: 'crystals', query: { code: spe.code }}">
            <img
              :src="spe.image"
              :title="spe.name"
              :alt="spe.name"
              @click="changeSpe(spe.code)">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./CrystalsView.scss"></style>
<script lang="ts" src="./CrystalsView.ts"></script>