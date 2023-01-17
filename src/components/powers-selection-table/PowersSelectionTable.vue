<template>
  <table class="layout-bloc">
    <tbody>
      
      <!---------- Aucun --------->
      <tr
        v-if="filteredPowers.length === 0"
        class="table-line">
        <td
          colspan="3"
          class="col-100 text-center">
          Aucun pouvoir
        </td>
      </tr>

      <template
        v-for="(rank, indexRank) in ranks"
        :key="indexRank">

        <!---------- Ligne de rang --------->
        <tr class="table-line">
          <td
            colspan="3"
            class="col-100">
            <div class="table-separator">
              <span class="table-separator-line" />
              <span class="table-separator-title">
                Rang {{ rank.Libelle }}
              </span>
              <span class="table-separator-line" />
              <span class="table-separator-title">
                {{ currentRanks[rank.Code].current }} / {{ currentRanks[rank.Code].max }}
              </span>
              <span class="table-separator-line" />
            </div>
          </td>
        </tr>

        <template
          v-for="(power, index) in getPowersByRank(rank.Code)"
          :key="index">
          
          <!---------- Ligne --------->
          <tr
            class="table-line"
            :class="{ selected : selectedPower?.code === power.code }">
            <td class="col-20">
              <PowerImage :power="power" />
            </td>
            <td 
              class="col-60 pointer"
              @click="seeMore(power)">
              {{ power.name }}
            </td>
            <td class="col-20">
              <input
                type="checkbox"
                :checked="checkPower(power)"
                :disabled="checkDisabled(rank.Code, power)"
                @change="changePower($event.target.checked, power)">
            </td>
          </tr>

          <!---------- Description --------->
          <PowersDescription
            v-if="selectedPower === power"
            :power="power" />

        </template>
      </template>
    </tbody>
  </table>
</template>

<style lang="scss" scoped src="./PowersSelectionTable.scss"></style>
<script lang="ts" src="./PowersSelectionTable.ts"></script>