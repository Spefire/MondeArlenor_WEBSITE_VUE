<template>
  <div class="layout-row margin-top-1">
    <div class="layout-col-50 form-element">
      <span>Sélection d'une race :</span>
      <div class="dropdown">
        <select
          class="dropdown-select"
          v-model="selectedRace"
          @change="changeFilteredCharacters">
          <option :value="null">-</option>
          <option
            v-for="(race, index) in allRaces"
            :value="race.code"
            :key="index">{{ race.name }} ({{ race.name }})</option>
        </select>
      </div>
    </div>
    <div class="layout-col-50 form-element">
      <span>Recherche par nom :</span>
      <input
        type="text"
        v-model="searchName"
        @keyup="changeFilteredCharacters">
    </div>
  </div>

  <table class="layout-bloc margin-top-1">
    <thead>
      
      <!---------- Entête --------->
      <tr>
        <th
          colspan="2"
          class="col-40">Nom du personnage</th>
        <th class="col-20">Race</th>
        <th class="col-20">Classes</th>
        <th class="col-20">Actions</th>
      </tr>

    </thead>
    <tbody>

      <!---------- Aucun --------->
      <tr
        v-if="filteredCharacters.length === 0"
        class="table-line">
        <td
          colspan="4"
          class="col-100 text-center">
          Aucun personnage
        </td>
      </tr>
      
      <template
        v-for="(character, index) in filteredCharacters"
        :key="index">

        <!---------- Ligne --------->
        <tr
          class="table-line"
          :class="{ selected : selectedCharacter === character }">
          <td class="col-20">
            <div
              class="power-img-layout"
              :title="character.name">
              <img
                v-if="character.image"
                class="power-img"
                :src="character.image"
                :alt="character.name">
            </div>
          </td>
          <td 
            class="col-20 pointer"
            @click="seeMore(character)">
            {{ character.name }}
          </td>
          <td class="col-20">
            {{ character.name }}
          </td>
          <td class="col-20">
            {{ character.name }}
          </td>
          <td class="col-20">
            <button
              class="link-button"
              title="Télécharger"
              @click="downloadCharacter(character)">
              <i class="icon icon-folder-upload" />
            </button>
            <button
              class="link-button alert-button margin-left-1"
              title="Supprimer"
              @click="deleteCharacter(character)">
              <i class="icon icon-bin2" />
            </button>
          </td>
        </tr>

        <!---------- Description --------->
        <tr
          v-if="selectedCharacter === character"
          class="table-line selected">
          <td colspan="5">
            <p>Aucune description disponible</p>
          </td>
        </tr>

      </template>
    </tbody>
  </table>
</template>

<script lang="ts" src="./CharactersTable.ts"></script>