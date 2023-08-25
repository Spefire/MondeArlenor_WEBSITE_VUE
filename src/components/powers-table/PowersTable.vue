<template>
  <div class="layout-row margin-top-1">
    <div class="layout-col-50 form-element">
      <span>Sélection d'une classe :</span>
      <div class="dropdown">
        <select
          class="dropdown-select"
          v-model="selectedSpeciality"
          @change="changeFilteredPowers">
          <option :value="null">-</option>
          <option
            v-for="(spe, index) in allSpecialities"
            :value="spe.code"
            :key="index">{{ spe.name }}</option>
        </select>
      </div>
    </div>
    <div class="layout-col-50 form-element">
      <span>Recherche par nom :</span>
      <input
        type="text"
        v-model="searchName"
        @keyup="changeFilteredPowers">
    </div>
  </div>

  <table class="table-max-height layout-bloc margin-top-1">
    <thead>
      
      <!---------- Entête --------->
      <tr>
        <th
          colspan="2"
          class="col-50">Nom du pouvoir</th>
        <th class="col-30">Cristal concerné</th>
        <th class="col-20">Actions</th>
      </tr>

    </thead>
    <tbody>

      <!---------- Aucun --------->
      <tr
        v-if="filteredPowers.length === 0"
        class="table-line">
        <td
          colspan="4"
          class="col-100 text-center">
          Aucun pouvoir
        </td>
      </tr>
      
      <template
        v-for="(power, index) in filteredPowers"
        :key="index">

        <!---------- Ligne --------->
        <tr
          class="table-line"
          :class="{ selected : selectedPower === power }">
          <td class="col-20">
            <PowerImage :power="power" />
          </td>
          <td 
            class="col-30 pointer"
            @click="seeMore(power)">
            {{ power.name }}
          </td>
          <td class="col-30">
            {{ power.speciality.name }}
          </td>
          <td class="col-20">
            <button
              class="link-button"
              title="Modifier"
              @click="editPower(power)">
              <i class="icon icon-pencil" />
            </button>
            <button
              class="link-button alert-button margin-left-1"
              title="Supprimer"
              @click="deletePower(power)">
              <i class="icon icon-bin2" />
            </button>
          </td>
        </tr>

        <!---------- Description --------->
        <PowersDescription
          v-if="selectedPower === power"
          :power="power" />

      </template>
    </tbody>
  </table>
</template>

<script lang="ts" src="./PowersTable.ts"></script>