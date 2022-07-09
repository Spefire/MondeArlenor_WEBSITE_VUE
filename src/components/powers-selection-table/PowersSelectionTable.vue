<template>
  <table class="bloc-text margin-top-1">
    <thead>
      <tr>
        <th
          colspan="2"
          class="col-80">Nom du pouvoir</th>
        <th class="col-20">Oui ?</th>
      </tr>
    </thead>
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
              <span class="table-separator-title">Rang {{ rank.Libelle }} ({{ rank.Code }})</span>
              <span class="table-separator-line" />
              <span class="table-separator-title">1 / 3</span>
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
              <img
                v-if="power.image"
                class="creation-img-power"
                :src="power.image"
                :alt="power.type.Libelle">
            </td>
            <td 
              class="col-60 pointer"
              @click="seeMore(power)">
              {{ power.name }}
            </td>
            <td class="col-20">
              <input
                type="checkbox"
                @change="addPower(power)">
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
                  <span title="Portée du pouvoir">{{ power.range.Libelle }}</span>
                  &nbsp;•&nbsp;
                  <span title="Durée du pouvoir">{{ power.duration.Libelle }}</span>
                  &nbsp;•&nbsp;
                  <span title="Cibles du pouvoir">{{ power.targets.Libelle }}</span>
                  &nbsp;•&nbsp;
                  <span>{{ power.chaneling ? "Avec" : "Sans" }} canalisation</span>
                </i>
                <br>
                {{ power.description ? power.description : "Aucune description disponible" }}</p>
            </td>
          </tr>
        </template>
      </template>
    </tbody>
  </table>
</template>

<script lang="ts" src="./PowersSelectionTable.ts"></script>