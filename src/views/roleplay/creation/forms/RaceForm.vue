<template>
  <div class="creation-content">
    <!-- Description de la race sélectionnée -->
    <div class="creation-form">
      <div
        v-if="!currentRace"
        class="creation-description layout-bloc">
        Pas de race sélectionnée.
      </div>
      <div
        v-if="currentRace"
        class="creation-description layout-bloc">
        <img
          class="creation-img"
          :src="currentRace.image"
          alt="">
        <h2>{{ currentRace.name }}</h2>
        <p class="text-italic">
          {{ currentRace.infoAge }}
          <br>
          Apparence : {{ currentRace.infoAppareance }}
        </p>
        <p
          class="text-justify"
          v-html="currentRace.description" />
        <div class="section-moreinfos">
          <p>
            <span class="text-bold">{{ currentRace.ratioWorld }}%</span> du monde sont des {{ currentRace.name.toLowerCase() }}s
          </p>
          <p>
            <span>Localisations</span>
            <br>
            <span
              v-for="(location, index) in currentRace.locations"
              :key="index">
              - {{ location }}<br>
            </span>
          </p>
          <p>
            <span class="text-bold">{{ currentRace.ratioMagic }}%</span> des {{ currentRace.name.toLowerCase() }}s peuvent utiliser la magie
          </p>
        </div>
      </div>
    </div>

    <!-- Sélection de la race -->
    <div class="creation-form">
      <div class="form-element">
        <span>Race du personnage <span required-libelle>*</span></span>
        <div class="dropdown">
          <select
            class="dropdown-select"
            v-model.trim.lazy="v$.form.raceCode.$model"
            @change="updateForm()">
            <option
              v-for="(race, index) in allRaces"
              :value="race.code"
              :key="index">{{ race.name }}</option>
          </select>
        </div>
      </div>

      <div
        v-if="currentRace"
        class="race-grid docs-grid-list grid-2">
        <div
          v-for="(skill, index) in getSkills(currentRace.code)"
          class="docs-grid-element"
          :key="index">
          <img
            :src="skill.image"
            :alt="skill.name">
          <div class="docs-grid-infos">
            <div class="docs-grid-header">
              <span class="text-bold">{{ skill.name }}</span>
            </div>
            <p
              class="docs-grid-body"
              v-html="skill.description" />
          </div>
        </div>
      </div>
    </div>
  </div>
      
  <div class="creation-content-nav">
    <button
      class="link-button"
      @click="cancelForm()">
      <template v-if="!isModified">
        Précédent
      </template>
      <template v-if="isModified">
        Annuler les modifications
        <template v-if="needConfirm">
          (Confirmez ?) 
        </template>
      </template>
    </button>

    <button
      class="link-button"
      :disabled="v$.form.$invalid"
      @click="submitForm()">Suivant</button>
  </div>
</template>

<style lang="scss" scoped src="./../CreationView.scss"></style>
<script lang="ts" src="./RaceForm.ts"></script>
