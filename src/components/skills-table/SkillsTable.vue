<template>
  <div
    v-if="!readOnly"
    class="layout-row margin-top-1">
    <div class="layout-col-50 form-element">
      <span>Sélection d'un type :</span>
      <div class="dropdown">
        <select
          class="dropdown-select"
          v-model="selectedType"
          @change="changeFilteredSkills">
          <option :value="null">-</option>
          <option
            v-for="(type, index) in allTypes"
            :value="type.Code"
            :key="index">{{ type.Libelle }}</option>
        </select>
      </div>
    </div>
    <div class="layout-col-50 form-element">
      <span>Recherche par nom :</span>
      <input
        type="text"
        v-model="searchName"
        @keyup="changeFilteredSkills">
    </div>
  </div>

  <table class="table-max-height layout-bloc margin-top-1">
    <thead>
      
      <!---------- Entête --------->
      <tr>
        <th
          colspan="2"
          :class="{'col-50': !readOnly, 'col-70': readOnly}">
          Nom de la compétence
        </th>
        <th class="col-30">
          Type de la compétence
        </th>
        <th 
          v-if="!readOnly"
          class="col-20">
          Actions
        </th>
      </tr>

    </thead>
    <tbody>

      <!---------- Aucun --------->
      <tr
        v-if="filteredSkills.length === 0"
        class="table-line">
        <td
          colspan="4"
          class="col-100 text-center">
          Aucune compétence
        </td>
      </tr>
      
      <template
        v-for="(skill, index) in filteredSkills"
        :key="index">

        <!---------- Ligne --------->
        <tr
          class="table-line"
          :class="{ selected : selectedSkill === skill }">
          <td class="col-20">
            <div
              class="power-img-layout"
              :title="skill.type.Libelle">
              <img
                v-if="skill.image"
                class="power-img"
                :src="skill.image"
                :alt="skill.type.Libelle">
            </div>
          </td>
          <td 
            class="pointer"
            :class="{'col-30': !readOnly, 'col-50': readOnly }"
            @click="seeMore(skill)">
            {{ skill.name }}
            <template v-if="skill.codeSpeciality">
              - {{ skill.speciality.name }}
            </template>
            <template v-if="skill.codeRace">
              - {{ skill.race.name }}
            </template>
          </td>
          <td class="col-30">
            {{ skill.type.Libelle }}
          </td>
          <td
            v-if="!readOnly"
            class="col-20">
            <button
              class="link-button"
              title="Modifier"
              @click="editSkill(skill)">
              <i class="icon icon-pencil" />
            </button>
            <button
              class="link-button alert-button margin-left-1"
              title="Supprimer"
              @click="deleteSkill(skill)">
              <i class="icon icon-bin2" />
            </button>
          </td>
        </tr>

        <!---------- Description --------->
        <SkillsDescription
          v-if="selectedSkill === skill"
          :skill="skill" />
      </template>
    </tbody>
  </table>
</template>

<script lang="ts" src="./SkillsTable.ts"></script>