<template>
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

  <div class="layout-row">
    <div class="layout-col-33 form-element">
      <input
        type="checkbox"
        id="skill-for"
        v-model.trim.lazy="v$.form.checkFor.$model">
      <label for="skill-for">{{ caractNomEnum.Force.Libelle }}</label>
    </div>
    <div class="layout-col-33 form-element">
      <input
        type="checkbox"
        id="skill-hab"
        v-model.trim.lazy="v$.form.checkHab.$model">
      <label for="skill-hab">{{ caractNomEnum.Habilete.Libelle }}</label>
    </div>
    <div class="layout-col-33 form-element">
      <input
        type="checkbox"
        id="skill-int"
        v-model.trim.lazy="v$.form.checkInt.$model">
      <label for="skill-int">{{ caractNomEnum.Intellect.Libelle }}</label>
    </div>
  </div>

  <div class="layout-row">
    <div class="layout-col-33 form-element">
      <input
        type="checkbox"
        id="skill-ten"
        v-model.trim.lazy="v$.form.checkTen.$model">
      <label for="skill-ten">{{ caractNomEnum.Tenacite.Libelle }}</label>
    </div>
    <div class="layout-col-33 form-element">
      <input
        type="checkbox"
        id="skill-cha"
        v-model.trim.lazy="v$.form.checkCha.$model">
      <label for="skill-cha">{{ caractNomEnum.Charisme.Libelle }}</label>
    </div>
    <div class="layout-col-33 form-element">
      <input
        type="checkbox"
        id="skill-mag"
        v-model.trim.lazy="v$.form.checkMag.$model">
      <label for="skill-mag">{{ caractNomEnum.Magie.Libelle }}</label>
    </div>
  </div>

  <div class="form-element">
    <button
      class="link-button"
      :disabled="v$.form.$invalid"
      @click="submitForm(true)">Valider</button>
  </div>    
</template>

<script lang="ts" src="./SkillForm.ts"></script>
