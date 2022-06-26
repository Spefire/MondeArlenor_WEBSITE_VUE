<template>
  <button
    class="link-button margin-top-1"
    @click="addPower()">Ajouter un pouvoir</button>

  <label
    class="link-button margin-top-1"
    for="import-power-json">
    Importer des pouvoirs
  </label>
  <input
    type="file"
    id="import-power-json"
    accept=".json, application/json"
    @change="importPowers">
    
  <a
    id="export-powers-json"
    class="link-button margin-top-1"
    @click="exportPowers()">
    Exporter des pouvoirs
  </a>

  <button
    class="link-button margin-top-1"
    @click="deletePowers()">Supprimer tous les pouvoirs</button>

  <PowersTable :all-powers="allPowers" />

  <PopupBloc
    v-if="showPopup"
    :bloc-title="'Ceci est le titre de la popup'"
    @close="closePower()">
    Ceci est le contenu de la popup.
  </PopupBloc>
</template>

<script lang="ts" src="./PowersSection.ts"></script>