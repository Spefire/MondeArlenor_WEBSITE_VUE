<template>
  <div class="form-row margin-top-1">
    <div class="form-col-33 form-element">
      <span>Sélection d'un groupe :</span>
      <div class="dropdown">
        <select
          class="dropdown-select"
          v-model="selectedGroup"
          @change="changeGroup">
          <option :value="null">-</option>
          <option
            v-for="(grp, index) in allGroups"
            :value="grp.code"
            :key="index">{{ grp.name }}</option>
        </select>
      </div>
    </div>
    <div class="form-col-33 form-element">
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
    <div class="form-col-33 form-element">
      <span>Recherche par nom :</span>
      <input
        type="text"
        v-model="searchName"
        @keyup="changeFilteredPowers">
    </div>
  </div>

  <table class="bloc-text margin-top-1">
    <thead>
      
      <!---------- Entête --------->
      <tr>
        <th
          colspan="2"
          class="col-40">Nom du pouvoir</th>
        <th class="col-20">Cristal concerné</th>
        <th class="col-20">Rang</th>
        <th class="col-20">Actions</th>
      </tr>

    </thead>
    <tbody>

      <!---------- Aucun --------->
      <tr
        v-if="filteredPowers.length === 0"
        class="table-line">
        <td
          colspan="5"
          class="col-100 text-center">Aucun pouvoir</td>
      </tr>
      
      <template
        v-for="(power, index) in filteredPowers"
        :key="index">

        <!---------- Ligne --------->
        <tr
          class="table-line"
          :class="{ selected : selectedPower === power }">
          <td class="col-05">
            <PowerImage :power="power" />
          </td>
          <td 
            class="col-35 pointer"
            @click="seeMore(power)">{{ power.name }}</td>
          <td class="col-20">{{ getLibSpeGrp(power) }}</td>
          <td class="col-20">{{ power.rank.Libelle }} ({{ power.rank.Code }})</td>
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