<template>
  <div class="layout-left creation-form">
    <div class="creation-element">
      <span>Groupe  <span required-libelle>*</span></span>
      <div class="dropdown">
        <select
          class="dropdown-select"
          v-model="selectedGrpCode"
          @change="changeGroup">
          <option :value="null">-</option>
          <option
            v-for="(grp, index) in allGroups"
            :value="grp.code"
            :key="index">
            {{ grp.name }}
          </option>
        </select>
      </div>
    </div>

    <div
      v-if="selectedGroup"
      class="bloc-text creation-element zone-element zone-element-semifree">
      <div class="zone-header">
        <img
          class="zone-icon is-little img-rounded"
          :src="selectedGroup.image"
          alt="">
        <div class="text-center margin-left-1">
          <h2>{{ selectedGroup.name }}</h2>
        </div>
      </div>
      <p class="zone-comment margin-top-1">
        {{ selectedGroup.description }}
      </p>
    </div>

    <div
      v-if="!selectedGroup"
      class="bloc-text creation-element zone-element zone-element-semifree">
      <div class="zone-header">
        <div class="text-center margin-left-1">
          <h2>Pas de groupe sélectionné</h2>
        </div>
      </div>
      <p class="zone-comment margin-top-1">
        Choisissez un groupe avant de sélectionner une classe.
      </p>
    </div>

    <div class="creation-element">
      <span>Classe  <span required-libelle>*</span></span>
      <div class="dropdown">
        <select
          class="dropdown-select"
          v-model="selectedSpeCode"
          @change="changeSpeciality">
          <option :value="null">-</option>
          <option
            v-for="(cls, index) in filteredSpecialities"
            :value="cls.code"
            :key="index">{{ cls.name }}</option>
        </select>
      </div>
    </div>

    <div
      v-if="selectedSpeciality"
      class="bloc-text creation-element zone-element zone-element-semifree">
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
      class="bloc-text creation-element zone-element zone-element-semifree">
      <div class="zone-header">
        <div class="text-center margin-left-1">
          <h2>Pas de classe sélectionnée</h2>
        </div>
      </div>
      <p class="zone-comment margin-top-1">
        Choisissez une classe avant de sélectionner des compétences&nbsp;/&nbsp;sorts.
      </p>
    </div>
  </div>

  <div class="layout-right creation-form">
    <div class="creation-element">
      <span>Sélection des compétences / sorts <span required-libelle>*</span></span>

      <table class="bloc-text margin-top-1">
        <thead>
          <tr>
            <th
              colspan="2"
              class="col-60">Nom</th>
            <th class="col-40">Description</th>
          </tr>
        </thead>
        <tbody>
          <template
            v-for="(skill, index) in filteredSkills"
            :key="index">
            <tr
              class="line-table to-select"
              :class="{ selected : selectedSkill?.code === skill.code }"
              @click="seeMore(skill)">
              <td class="col-05">
                <img
                  v-if="skill.image"
                  :src="skill.image"
                  :alt="skill.typeSkill.Libelle">
              </td>
              <td class="col-55">{{ skill.name }}</td>
              <td class="col-40">
                {{ skill.group.name }}
                <i
                  class="margin-left-05"
                  :class="skill.group.role.icon + ' ' + skill.group.color" />
              </td>
            </tr>
            <tr
              v-if="selectedSkill?.code === skill.code"
              class="line-table selected">
              <td colspan="3">
                <p>{{ skill.description ? skill.description : "Aucune description disponible" }}</p>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>

    <div class="creation-nav-button">
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
  </div>
</template>

<style lang="scss" scoped src="./../CreationView.scss"></style>
<script lang="ts" src="./CrystalForm.ts"></script>
