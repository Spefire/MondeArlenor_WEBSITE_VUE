<template>
  <div class="creation-content">
    <div class="creation-form">
      <div class="form-element">
        <span>Compétences acquises par la race et les pouvoirs</span>
      </div>
    </div>
    <div class="creation-form">
      <div class="form-element">
        <span>Compétences <span required-libelle>*</span></span>

        <SkillsSelectionTable
          :level="level"
          :ids-skills="form.idsSkills"
          :filtered-skills="allSkills"
          @add="addSkill"
          @remove="removeSkill" />
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
<script lang="ts" src="./SkillsForm.ts"></script>
