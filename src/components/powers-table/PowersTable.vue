<template>
  <div class="creation-elements-line">
    <div class="creation-element">
      <span>Sélection d'une classe :</span>
      <div class="dropdown">
        <select
          class="dropdown-select"
          v-model="selectedSpeciality"
          @change="changeSpeciality">
          <option :value="null">-</option>
          <option
            v-for="(spe, index) in allSpecialities"
            :value="spe.code"
            :key="index">{{ spe.name }}</option>
        </select>
      </div>
    </div>
      
    <div class="creation-element">
      <span>Recherche par nom :</span>
      <input
        type="text"
        v-model="searchName"
        @keyup="changeFilteredPowers">
    </div>
  </div>

  <table class="bloc-text margin-top-1">
    <thead>
      <tr>
        <th
          colspan="2"
          class="col-40">Nom du pouvoir</th>
        <th class="col-20">Classes</th>
        <th class="col-20">Niveau</th>
        <th class="col-20">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-if="filteredPowers.length === 0"
        class="line-table">
        <td
          colspan="5"
          class="col-100 text-center">Aucun pouvoir</td>
      </tr>
      <template
        v-for="(power, index) in filteredPowers"
        :key="index">
        <tr
          class="line-table"
          :class="{ selected : selectedPower === power }">
          <td class="col-05">
            <img
              v-if="power.image"
              :src="power.image"
              :alt="power.type.Libelle">
          </td>
          <td 
            class="col-35 pointer"
            @click="seeMore(power)">{{ power.name }}</td>
          <td class="col-20">{{ getLibSpecialities(power) }}</td>
          <td class="col-20">{{ getLibLevel(power.level) }}</td>
          <td class="col-20">
            <button
              class="link-button"
              title="Modifier"
              @click="editPower()">Mod.</button>

            <button
              class="link-button alert-button margin-left-1"
              title="Supprimer"
              @click="deletePower()">Sup.</button>
          </td>
        </tr>
        <tr
          v-if="selectedPower === power"
          class="line-table selected">
          <td colspan="5">
            <p>{{ power.description ? power.description : "Aucune description disponible" }}</p>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script lang="ts" src="./PowersTable.ts"></script>