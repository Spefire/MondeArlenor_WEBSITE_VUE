<template>
  <CreationForm
    form-title="Choix des compétences"
    :is-disabled="isDisabled"
    :is-modified="isModified"
    :is-invalid="v$.form.$invalid"
    @outCancel="cancelForm()"
    @outSubmit="submitForm()">
    <div class="creation-column">
      <div
        v-if="form.idsSkills.length !== this.level.maxSkills"
        class="layout-bloc margin-top-1"
        required-libelle>
        Compétences restantes à sélectionner :
        {{ level.maxSkills - form.idsSkills.length }}
      </div>

      <div
        v-if="form.idsSkills.length === this.level.maxSkills"
        class="layout-bloc margin-top-1">
        Toutes les compétences ont été sélectionnées.
      </div>
    </div>

    <div class="creation-column">
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
  </CreationForm>
</template>

<style lang="scss" scoped src="./../CreationView.scss"></style>
<script lang="ts" src="./SkillsForm.ts"></script>
