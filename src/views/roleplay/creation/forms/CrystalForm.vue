<template>
  <CreationForm
    :form-title="(indexCrystal == 0) ? 'Choix du cristal primaire' : 'Choix du cristal secondaire'"
    :is-modified="isModified"
    :is-invalid="v$.form.$invalid"
    @outCancel="cancelForm()"
    @outSubmit="submitForm()">

    <!------------------------------------------------------------------->
    <div class="creation-column">
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
              :key="index">{{ spe.name }}</option>
          </select>
        </div>
      </div>

      <div
        v-if="selectedSpeciality"
        class="layout-bloc section is-height-semifree margin-top-1">
        <div class="section-header">
          <img
            class="section-icon is-little"
            :src="selectedSpeciality.image"
            alt="">
          <div class="text-center margin-left-1">
            <h2>{{ selectedSpeciality.name }}</h2>
          </div>
        </div>
        <p class="section-comment margin-top-1">
          {{ selectedSpeciality.description }}
        </p>
      </div>

      <div
        v-if="!selectedSpeciality"
        class="layout-bloc margin-top-1"
        required-libelle>
        <span required-libelle>Pas de classe sélectionnée.</span>
      </div>

      <div class="form-element margin-top-2">
        <span>Pouvoirs <span required-libelle>*</span></span>
        <div class="layout-bloc">
          <span
            v-if="!selectedSpeciality"
            required-libelle>
            Choisissez une classe avant de sélectionner des pouvoirs.
          </span>
          <span
            v-if="selectedSpeciality && !form.isNbPowersValid"
            required-libelle>
            Il reste des pouvoirs à sélectionner...
          </span>
          <template v-if="selectedSpeciality && form.isNbPowersValid">
            Tous les pouvoirs ont été sélectionnés.
          </template>
        </div>
      </div>
    </div>
    
    <!------------------------------------------------------------------->
    <div class="creation-column">
      <PowersSelectionTable
        v-if="selectedSpeciality"
        :index-crystal="indexCrystal"
        :level="level"
        :ids-powers="form.idsPowers"
        :filtered-powers="filteredPowers"
        class="creation-table"
        @add="addPower"
        @remove="removePower" />
    </div>
  </CreationForm>
</template>

<script lang="ts" src="./CrystalForm.ts"></script>
