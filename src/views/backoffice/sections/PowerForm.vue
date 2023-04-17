<template>
  <div class="creation-form">
    
    <div class="layout-row">
      <div class="layout-col-50 form-element">
        <span>Nom du pouvoir <span required-libelle>*</span></span>
        <input
          type="text"
          class="text-center"
          v-model.trim.lazy="v$.form.name.$model">
      </div>
      <div class="layout-col-50 form-element">
        <span>Type de pouvoir</span>
        <div class="dropdown">
          <select
            class="dropdown-select"
            v-model.trim.lazy="v$.form.codeType.$model">
            <option
              v-for="(type, index) in allTypes"
              :value="type.Code"
              :key="index">{{ type.Libelle }}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="form-element">
      <ToggleButton
        :text="isGroup ? 'Pouvoir de groupe' : 'Pouvoir de classe'"
        :value="isGroup"
        @change="toggleGroup" />
    </div>
    
    <div class="layout-row">
      <div
        v-if="isGroup"
        class="layout-col-50 form-element">
        <span>Groupe</span>
        <div class="dropdown">
          <select
            class="dropdown-select"
            v-model.trim.lazy="v$.form.codeGroup.$model">
            <option
              v-for="(grp, index) in allGroups"
              :value="grp.code"
              :key="index">{{ grp.name }}</option>
          </select>
        </div>
      </div>
      <div
        v-if="!isGroup"
        class="layout-col-50 form-element">
        <span>Classe</span>
        <div class="dropdown">
          <select
            class="dropdown-select"
            v-model.trim.lazy="v$.form.codeSpeciality.$model">
            <option
              v-for="(spe, index) in allSpecialities"
              :value="spe.code"
              :key="index">{{ spe.name }}</option>
          </select>
        </div>
      </div>
      <div class="layout-col-50 form-element">
        <span>Rang</span>
        <div class="dropdown">
          <select
            class="dropdown-select"
            v-model.trim.lazy="v$.form.codeRank.$model">
            <option
              v-for="(rank, index) in allRanks"
              :value="rank.Code"
              :key="index">{{ rank.Libelle }}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="form-element">
      <span>Description du pouvoir</span>
      <textarea
        v-model.trim.lazy="v$.form.description.$model"
        maxlength="180" />
    </div>

    <div class="layout-row">
      <div class="layout-col-50 form-element">
        <span>Portée du pouvoir</span>
        <div class="dropdown">
          <select
            class="dropdown-select"
            v-model.trim.lazy="v$.form.codeRange.$model">
            <option
              v-for="(range, index) in allRanges"
              :value="range.Code"
              :key="index">{{ range.Libelle }}</option>
          </select>
        </div>
      </div>
      <div class="layout-col-50 form-element">
        <span>Durée et rechargement du pouvoir</span>
        <div class="dropdown">
          <select
            class="dropdown-select"
            v-model.trim.lazy="v$.form.codeDuration.$model">
            <option
              v-for="(duration, index) in allDurations"
              :value="duration.Code"
              :key="index">{{ duration.Libelle }}</option>
          </select>
        </div>
      </div>
    </div>
    
    <div class="layout-row">
      <div class="layout-col-50 form-element">
        <input
          type="checkbox"
          id="power-chaneling"
          v-model.trim.lazy="v$.form.chaneling.$model">
        <label for="power-chaneling">Canalisation</label>
      </div>
      <div class="layout-col-50 form-element">
        <input
          type="checkbox"
          id="power-is-verified"
          v-model.trim.lazy="v$.form.isVerified.$model">
        <label for="power-is-verified">Pouvoir vérifié ?</label>
      </div>
    </div>

    <div class="form-element">
      <button
        class="link-button"
        :disabled="v$.form.$invalid"
        @click="submitForm(true)">Valider</button>
    </div>
  </div>
    
</template>

<script lang="ts" src="./PowerForm.ts"></script>
