<template>
  <CreationForm
    form-title="Choix des compétences"
    :is-modified="isModified"
    :is-invalid="v$.form.$invalid"
    @outCancel="cancelForm()"
    @outSubmit="submitForm()">
    
    <!------------------------------------------------------------------->
    <div class="creation-column">
      <div class="form-element">
        <span>Compétences <span required-libelle>*</span></span>
        <div class="layout-bloc">
          <span
            v-if="form.idsSkills.length !== this.level.maxSkills"
            required-libelle>
            Compétences restantes à sélectionner :
            {{ level.maxSkills - form.idsSkills.length }}
          </span>
          <template v-else>
            Toutes les compétences ont été sélectionnées.
          </template>
        </div>
      </div>
    </div>

    <!------------------------------------------------------------------->
    <div class="creation-column">
      <SkillsSelectionTable
        :level="level"
        :ids-skills="form.idsSkills"
        :filtered-skills="allSkills"
        class="creation-table"
        @add="addSkill"
        @remove="removeSkill" />
    </div>
  </CreationForm>
</template>

<script lang="ts" src="./SkillsForm.ts"></script>
