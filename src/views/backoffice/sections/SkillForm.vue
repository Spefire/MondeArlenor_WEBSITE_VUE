<template>
  <div class="creation-form">
    
    <div class="layout-row">
      <div class="layout-col-50 form-element">
        <span>Nom de la compétence <span required-libelle>*</span></span>
        <input
          type="text"
          class="text-center"
          v-model.trim.lazy="v$.form.name.$model">
      </div>
      <div class="layout-col-50 form-element">
        <span>Type de compétence</span>
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
      <span>Description de la compétence</span>
      <textarea
        v-model.trim.lazy="v$.form.description.$model"
        maxlength="180" />
    </div>

    <div class="form-element">
      <button
        class="link-button"
        :disabled="v$.form.$invalid"
        @click="submitForm(true)">Valider</button>
    </div>
  </div>
    
</template>

<script lang="ts" src="./SkillForm.ts"></script>
