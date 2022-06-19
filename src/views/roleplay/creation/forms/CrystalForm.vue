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
      <span>Choix des capacités magiques <span required-libelle>*</span></span>

      <div 
        v-if="!selectedSpeciality"
        class="bloc-text margin-top-1">
        Pas de classe sélectionnée.
      </div>

      <table 
        v-if="selectedSpeciality"
        class="bloc-text margin-top-1">
        <thead>
          <tr>
            <th
              colspan="2"
              class="col-80">Nom de la capacité magique</th>
            <th class="col-20">Choisir ?</th>
          </tr>
        </thead>
        <tbody>
          <template
            v-for="(level, indexLevel) in levels"
            :key="indexLevel">
            <tr class="line-table">
              <td
                colspan="3"
                class="full-width">
                <div class="creation-table-separator">
                  <span class="creation-table-line" />
                  <span class="creation-table-title">Niveau {{ getLibLevel(level) }} (1 / 3)</span>
                  <span class="creation-table-line" />
                </div>
              </td>
            </tr>
            <template
              v-for="(skill, index) in getSkillsByLevel(level)"
              :key="index">
              <tr
                class="line-table"
                :class="{ selected : selectedSkill?.code === skill.code }">
                <td class="col-20">
                  <img
                    v-if="skill.image"
                    class="creation-img-skill"
                    :src="skill.image"
                    :alt="skill.typeSkill.Libelle">
                </td>
                <td 
                  class="col-60 pointer"
                  @click="seeMore(skill)">
                  {{ skill.name }}
                </td>
                <td class="col-20">
                  <input
                    type="checkbox"
                    @change="addSkill(skill)">
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
