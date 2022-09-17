<template>
  <table class="bloc-text margin-top-1">
    <tbody>
      <tr
        v-if="filteredPowers.length === 0"
        class="table-line">
        <td
          colspan="3"
          class="full-width">
          <p class="text-center">Aucun pouvoir</p>
        </td>
      </tr>
      <template
        v-for="(rank, indexRank) in ranks"
        :key="indexRank">
        <tr class="table-line">
          <td
            colspan="3"
            class="full-width">
            <div class="table-separator">
              <span class="table-separator-line" />
              <span class="table-separator-title">
                Rang {{ rank.Libelle }} ({{ rank.Code }})
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
          <tr
            class="table-line"
            :class="{ selected : selectedPower?.code === power.code }">
            <td class="col-20">
              <div class="power-img-layout">
                <img
                  v-if="power.image"
                  class="power-img"
                  :src="power.image"
                  :alt="power.type.Libelle"
                  :title="power.type.Libelle">
                <img
                  class="power-img-ok"
                  src="./../../assets/icons/powers/ok.png">
              </div>
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
          <tr
            v-if="selectedPower === power"
            class="table-line selected">
            <td colspan="5">
              <p>
                <i>
                  <span title="Type de pouvoir">{{ power.type.Libelle }}</span>
                  &nbsp;•&nbsp;
                  <i
                    class="icon icon-enlarge"
                    title="Portée du pouvoir" />&nbsp;
                  <span title="Portée du pouvoir">{{ power.range.Libelle }}</span>
                  &nbsp;•&nbsp;
                  <i
                    class="icon icon-hour-glass"
                    title="Durée du pouvoir" />&nbsp;
                  <span title="Durée du pouvoir">{{ power.duration.Libelle }}</span>
                  &nbsp;•&nbsp;
                  <i
                    class="icon icon-dice"
                    title="Tests du pouvoir" />&nbsp;
                  <span title="Tests du pouvoir">{{ power.tests.Libelle }}</span>
                  &nbsp;•&nbsp;
                  <i class="icon icon-spinner9" />&nbsp;
                  <span>{{ power.chaneling ? "Avec" : "Sans" }} canalisation</span>
                </i>
                <br>
                {{ power.description ? power.description : "Aucune description disponible" }}
              </p>
            </td>
          </tr>
        </template>
      </template>
    </tbody>
  </table>
</template>

<script lang="ts" src="./PowersSelectionTable.ts"></script>