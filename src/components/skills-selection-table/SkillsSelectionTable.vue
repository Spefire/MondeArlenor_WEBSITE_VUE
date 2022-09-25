<template>
  <table class="layout-bloc">
    <tbody>
      
      <!---------- Aucun --------->
      <tr
        v-if="filteredSkills.length === 0"
        class="table-line">
        <td
          colspan="3"
          class="col-100 text-center">
          Aucune compétence
        </td>
      </tr>

      <template
        v-for="(type, indexType) in types"
        :key="indexType">

        <!---------- Ligne de rang --------->
        <tr class="table-line">
          <td
            colspan="3"
            class="col-100">
            <div class="table-separator">
              <span class="table-separator-line" />
              <span class="table-separator-title">
                {{ type.Libelle }}
              </span>
              <span class="table-separator-line" />
            </div>
          </td>
        </tr>

        <template
          v-for="(skill, index) in getSkillsByType(type.Code)"
          :key="index">
          
          <!---------- Ligne --------->
          <tr
            class="table-line"
            :class="{ selected : selectedSkill?.code === skill.code }">
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
              class="col-60 pointer"
              @click="seeMore(skill)">
              {{ skill.name }}
            </td>
            <td class="col-20">
              <input
                type="checkbox"
                :checked="checkSkill(skill)"
                :disabled="checkDisabled(skill)"
                @change="changeSkill($event.target.checked, skill)">
            </td>
          </tr>

          <!---------- Description --------->
          <tr
            v-if="selectedSkill === skill"
            class="table-line selected">
            <td colspan="4">
              <p>{{ skill.description ? skill.description : "Aucune description disponible" }}</p>
            </td>
          </tr>

        </template>
      </template>
    </tbody>
  </table>
</template>

<style lang="scss" scoped src="./SkillsSelectionTable.scss"></style>
<script lang="ts" src="./SkillsSelectionTable.ts"></script>