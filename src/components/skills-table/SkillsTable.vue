<template>
  <div class="creation-elements-line">
    <div
      v-if="!currentClass"
      class="creation-element">
      <span>Groupe :</span>
      <div class="dropdown">
        <select
          class="dropdown-select"
          v-model="selectedGroup"
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
      v-if="!currentClass"
      class="creation-element">
      <span>Classe :</span>
      <div class="dropdown">
        <select
          class="dropdown-select"
          v-model="selectedClass"
          @change="changeClass">
          <option :value="null">-</option>
          <option
            v-for="(cls, index) in allClasses"
            :value="cls.code"
            :key="index">{{ cls.name }}</option>
        </select>
      </div>
    </div>
      
    <div class="creation-element">
      <span>Recherche par nom :</span>
      <input
        type="text"
        v-model="searchName"
        @keyup="changeFilteredSkills">
    </div>
  </div>

  <div class="table-large-alert margin-top-1">
    La liste ne peut pas être parcourue sur un écran mobile.
  </div>

  <table class="table-large margin-top-1">
    <thead>
      <tr>
        <th
          colspan="2"
          class="col-40">Nom</th>
        <th class="col-20">Groupe</th>
        <th class="col-20">Classes</th>
        <th class="col-20">Caractéristiques</th>
      </tr>
    </thead>
    <tbody>
      <template
        v-for="(skill, index) in filteredSkills"
        :key="index">
        <tr
          class="line-table to-select"
          :class="{ selected : selectedSkill === skill }"
          @click="seeMore(skill)">
          <td class="col-05">
            <img
              v-if="skill.image"
              :src="skill.image"
              :alt="skill.typeSkill.Libelle">
          </td>
          <td class="col-35">{{ skill.name }}</td>
          <td class="col-20">
            {{ skill.group.name }}
            <i
              class="margin-left-05"
              :class="skill.group.role.icon" />
          </td>
          <td class="col-20">{{ getLibClasses(skill) }}</td>
          <td class="col-20">{{ getCodCaracts(skill.caracts) }}</td>
        </tr>
        <tr
          v-if="selectedSkill === skill"
          class="line-table selected">
          <td colspan="5">
            <p>{{ skill.description ? skill.description : "Aucune description disponible" }}</p>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script lang="ts" src="./SkillsTable.ts"></script>
