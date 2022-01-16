<template>
  <div class="layout-view creation">
    
    <div class="layout-center large">

      <h2>Liste des compétences</h2>

      <div class="creation-element">
        <span>Groupe : </span>
        <div class="dropdown">
          <select
            class="dropdown-select"
            v-model="selectedGroup"
            @change="changeFilteredSkills">
            <option :value="null">-</option>
            <option
              v-for="(grp, index) in allGroups"
              :value="grp.code"
              :key="index">{{ grp.name }}</option>
          </select>
        </div>
      </div>

      <table class="margin-top-1">
        <thead>
          <tr>
            <th colspan="2">Nom</th>
            <th>Groupes</th>
            <th>Classes</th>
            <th>Caractéristiques</th>
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
              <td>
                <img
                  v-if="skill.image"
                  :src="skill.image"
                  :alt="getLibType(skill.typeSkill)">
              </td>
              <td>{{ skill.name }}</td>
              <td>{{ getLibGroups(skill.arlenorGroups) }}</td>
              <td>{{ getLibClasses(skill) }}</td>
              <td>{{ getCodCaracts(skill.caracts) }}</td>
            </tr>
            <tr
              v-if="selectedSkill === skill"
              class="line-table selected">
              <td colspan="5">
                <p>{{ skill.description }}</p>
              </td>
            </tr>
          </template>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script lang="ts" src="./SkillsView.ts"></script>
