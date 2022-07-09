<template>
  <div class="layout-left creation-form">
    <div class="form-element">
      <span>Groupe  <span required-libelle>*</span></span>
      <div class="dropdown">
        <select
          class="dropdown-select"
          v-model="selectedGrpCode"
          @change="changeGroup">
          <option :value="null">-</option>
          <option
            v-for="(grp, index) in allGroups"
            :value="grp.code"
            :key="index">
            {{ grp.name }}
          </option>
        </select>
      </div>
    </div>

    <div
      v-if="selectedGroup"
      class="bloc-text form-element zone-element zone-element-semifree">
      <div class="zone-header">
        <img
          class="zone-icon is-little img-rounded"
          :src="selectedGroup.image"
          alt="">
        <div class="text-center margin-left-1">
          <h2>{{ selectedGroup.name }}</h2>
        </div>
      </div>
      <p class="zone-comment margin-top-1">
        {{ selectedGroup.description }}
      </p>
    </div>

    <div
      v-if="!selectedGroup"
      class="bloc-text form-element zone-element zone-element-semifree">
      <div class="zone-header">
        <div class="text-center margin-left-1">
          <h2>Pas de groupe sélectionné</h2>
        </div>
      </div>
      <p class="zone-comment margin-top-1">
        Choisissez un groupe avant de sélectionner une classe.
      </p>
    </div>

    <div class="form-element">
      <span>Classe  <span required-libelle>*</span></span>
      <div class="dropdown">
        <select
          class="dropdown-select"
          v-model="selectedSpeCode"
          @change="changeSpeciality">
          <option :value="null">-</option>
          <option
            v-for="(cls, index) in filteredSpecialities"
            :value="cls.code"
            :key="index">{{ cls.name }}</option>
        </select>
      </div>
    </div>

    <div
      v-if="selectedSpeciality"
      class="bloc-text form-element zone-element zone-element-semifree">
      <div class="zone-header">
        <img
          class="zone-icon is-little"
          :src="selectedSpeciality.image"
          alt="">
        <div class="text-center margin-left-1">
          <h2>{{ selectedSpeciality.name }}</h2>
        </div>
      </div>
      <p class="zone-comment margin-top-1">
        {{ selectedSpeciality.description }}
      </p>
    </div>

    <div
      v-if="!selectedSpeciality"
      class="bloc-text form-element zone-element zone-element-semifree">
      <div class="zone-header">
        <div class="text-center margin-left-1">
          <h2>Pas de classe sélectionnée</h2>
        </div>
      </div>
      <p class="zone-comment margin-top-1">
        Choisissez une classe avant de sélectionner des pouvoirs.
      </p>
    </div>
  </div>

  <div class="layout-right creation-form">
    <div class="form-element">
      <span>Choix des pouvoirs <span required-libelle>*</span></span>

      <div 
        v-if="!selectedSpeciality"
        class="bloc-text margin-top-1">
        Pas de classe sélectionnée.
      </div>

      <PowersSelectionTable
        v-if="selectedSpeciality"
        :filtered-powers="filteredPowers" />
    </div>

    <div class="creation-nav-button">
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
  </div>
</template>

<style lang="scss" scoped src="./../CreationView.scss"></style>
<script lang="ts" src="./CrystalForm.ts"></script>
