<template>
  <div class="creation-form">
    
    <div class="form-row">
      <div class="form-col-50 creation-element">
        <span>Nom du pouvoir <span required-libelle>*</span></span>
        <input
          type="text"
          class="text-center"
          v-model.trim.lazy="v$.form.name.$model">
      </div>
      <div class="form-col-50 creation-element">
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

    <div class="creation-element">
      <ToggleButton
        :text="isGroup ? 'Pouvoir de groupe' : 'Pouvoir de classe'"
        :value="isGroup"
        @change="toggleGroup" />
    </div>
    
    <div class="form-row">
      <div
        v-if="isGroup"
        class="form-col-50 creation-element">
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
        class="form-col-50 creation-element">
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
      <div class="form-col-50 creation-element">
        <span>Niveau</span>
        <input
          type="number"
          class="text-center"
          min="1"
          max="3"
          placeholder="1-3"
          v-model.trim.lazy="v$.form.level.$model">
      </div>
    </div>

    <div class="creation-element">
      <span>Description du pouvoir</span>
      <textarea
        v-model.trim.lazy="v$.form.description.$model"
        maxlength="440" />
    </div>

    <div class="form-row">
      <div class="form-col-33 creation-element">
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
      <div class="form-col-33 creation-element">
        <span>Durée du pouvoir</span>
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
      <div class="form-col-33 creation-element">
        <span>Cibles de pouvoir</span>
        <div class="dropdown">
          <select
            class="dropdown-select"
            v-model.trim.lazy="v$.form.codeTargets.$model">
            <option
              v-for="(targets, index) in allTargets"
              :value="targets.Code"
              :key="index">{{ targets.Libelle }}</option>
          </select>
        </div>
      </div>
    </div>
    
    <div class="form-row">
      <div class="form-col-50 creation-element">
        <input
          type="checkbox"
          id="power-chaneling"
          v-model.trim.lazy="v$.form.chaneling.$model">
        <label for="power-chaneling">Canalisation</label>
      </div>
      <div class="form-col-50 creation-element">
        <input
          type="checkbox"
          id="power-is-verified"
          v-model.trim.lazy="v$.form.isVerified.$model">
        <label for="power-is-verified">Est vérifié ?</label>
      </div>
    </div>

    <div class="creation-element">
      <button
        class="link-button"
        :disabled="v$.form.$invalid"
        @click="submitForm(true)">Valider</button>
    </div>
  </div>
</template>

<script lang="ts" src="./PowerForm.ts"></script>
