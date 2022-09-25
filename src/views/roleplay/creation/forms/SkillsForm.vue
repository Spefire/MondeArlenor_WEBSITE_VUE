<template>
  <div class="creation-content">
    <div class="creation-form">
      <div class="layout-bloc form-element zone-element zone-element-semifree">
        <div class="zone-header">
          <div class="text-center">
            <h2>Compétences obtenues par les classes</h2>
          </div>
        </div>
        <div class="zone-description margin-top-1">
          <div
            v-for="(speSkill, indexSkill) in speSkills"
            class="power-line"
            :key="indexSkill">
            <div class="power-img-layout">
              <img
                class="power-img"
                :src="speSkill.image"
                :alt="speSkill.name">
            </div>
            <span class="power-txt">{{ speSkill.name }}</span>
          </div>
        </div>
        <p 
          v-if="!spe02"
          class="zone-comment margin-top-1">
          Classe concernée : {{ spe01.name }}
        </p>
        <p
          v-if="spe02"
          class="zone-comment margin-top-1">
          Classes concernées : {{ spe01.name }}, {{ spe02.name }}
        </p>
      </div>

      <div
        v-if="(speSkills.length + form.idsSkills.length) !== this.level.maxSkills"
        class="layout-bloc margin-top-1"
        required-libelle>
        Compétences restantes à sélectionner :
        {{ level.maxSkills - (form.idsSkills.length + speSkills.length) }}
      </div>

      <div
        v-if="(form.idsSkills.length + speSkills.length) === this.level.maxSkills"
        class="layout-bloc margin-top-1">
        Toutes les compétences ont été sélectionnées.
      </div>
    </div>

    <div class="creation-form">
      <div class="form-element">
        <span>Compétences <span required-libelle>*</span></span>

        <SkillsSelectionTable
          :level="level"
          :ids-skills="form.idsSkills"
          :filtered-skills="allSkills"
          :fixed-skills="speSkills"
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
