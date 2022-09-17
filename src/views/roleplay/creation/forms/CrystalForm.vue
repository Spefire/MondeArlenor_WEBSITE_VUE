<template>
  <div class="creation-content">
    <div class="creation-form">
      <div class="form-element">
        <span>Classe  <span required-libelle>*</span></span>
        <div class="dropdown">
          <select
            class="dropdown-select"
            v-model.trim.lazy="v$.form.codeSpeciality.$model"
            @change="changeSpeciality">
            <option :value="null">-</option>
            <option
              v-for="(spe, index) in allSpecialities"
              :value="spe.code"
              :disabled="!checkPowers(spe)"
              :key="index">{{ spe.name }} ({{ spe.group.name }})</option>
          </select>
        </div>
      </div>

      <div
        v-if="selectedSpeciality"
        class="layout-bloc form-element zone-element zone-element-semifree">
        <div class="zone-header">
          <img
            class="zone-icon is-little img-rounded"
            :src="selectedSpeciality.group.image"
            alt="">
          <div class="text-center margin-left-1">
            <h2>{{ selectedSpeciality.group.name }}</h2>
          </div>
        </div>
        <p class="zone-comment margin-top-1">
          {{ selectedSpeciality.group.description }}
        </p>
      </div>

      <div
        v-if="selectedSpeciality"
        class="layout-bloc form-element zone-element zone-element-semifree">
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
        class="layout-bloc form-element zone-element zone-element-semifree">
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

    <div class="creation-form">
      <div class="form-element">
        <span>Pouvoirs <span required-libelle>*</span></span>

        <div 
          v-if="!selectedSpeciality"
          class="layout-bloc margin-top-1">
          Pas de classe sélectionnée.
        </div>

        <PowersSelectionTable
          v-if="selectedSpeciality"
          :level="level"
          :ids-powers="form.idsPowers"
          :filtered-powers="filteredPowers"
          @add="addPower"
          @remove="removePower" />
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
<script lang="ts" src="./CrystalForm.ts"></script>
