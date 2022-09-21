<template>
  <div class="layout-row margin-top-1">
    <div class="layout-col-50 form-element">
      <span>Sélection d'un type :</span>
      <div class="dropdown">
        <select
          class="dropdown-select"
          v-model="selectedType"
          @change="changeFilteredStuffs">
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
        @keyup="changeFilteredStuffs">
    </div>
  </div>

  <table class="layout-bloc margin-top-1">
    <thead>
      
      <!---------- Entête --------->
      <tr>
        <th
          colspan="2"
          class="col-50">Nom de l'équipement</th>
        <th class="col-30">Type de l'équipement</th>
        <th class="col-20">Actions</th>
      </tr>

    </thead>
    <tbody>

      <!---------- Aucun --------->
      <tr
        v-if="filteredStuffs.length === 0"
        class="table-line">
        <td
          colspan="4"
          class="col-100 text-center">
          Aucun équipement
        </td>
      </tr>
      
      <template
        v-for="(stuff, index) in filteredStuffs"
        :key="index">

        <!---------- Ligne --------->
        <tr
          class="table-line"
          :class="{ selected : selectedStuff === stuff }">
          <td class="col-20">
            <div
              class="power-img-layout"
              :title="stuff.type.Libelle">
              <img
                v-if="stuff.image"
                class="power-img"
                :src="stuff.image"
                :alt="stuff.type.Libelle">
            </div>
          </td>
          <td 
            class="col-30 pointer"
            @click="seeMore(stuff)">
            {{ stuff.name }}
          </td>
          <td class="col-30">
            {{ stuff.type.Libelle }}
          </td>
          <td class="col-20">
            <button
              class="link-button"
              title="Modifier"
              @click="editStuff(stuff)">
              <i class="icon icon-pencil" />
            </button>
            <button
              class="link-button alert-button margin-left-1"
              title="Supprimer"
              @click="deleteStuff(stuff)">
              <i class="icon icon-bin2" />
            </button>
          </td>
        </tr>

        <!---------- Description --------->
        <tr
          v-if="selectedStuff === stuff"
          class="table-line selected">
          <td colspan="4">
            <p>{{ stuff.description ? stuff.description : "Aucune description disponible" }}</p>
          </td>
        </tr>

      </template>
    </tbody>
  </table>
</template>

<script lang="ts" src="./StuffsTable.ts"></script>