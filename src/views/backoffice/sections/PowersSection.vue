<template>
  <button
    class="link-button margin-top-1"
    @click="openAddPower()">Ajouter un pouvoir</button>

  <label
    class="link-button margin-top-1 margin-left-1"
    for="import-power-json">
    Importer
  </label>
  <input
    type="file"
    id="import-power-json"
    accept=".json, application/json"
    @change="importPowers">
    
  <a
    id="export-powers-json"
    class="link-button margin-top-1 margin-left-1"
    @click="exportPowers()">
    Exporter
  </a>

  <button
    class="link-button alert-button margin-top-1 margin-left-1"
    @click="openDeleteAllPowers()">Supprimer tout</button>

  <PowersTable
    :all-powers="allPowers"
    @edit="openEditPower()"
    @delete="openDeletePower()" />

  <PopupBloc
    v-if="showAddPopup"
    :bloc-title="'Ajout d\'un pouvoir'"
    @close="closeAddPower()">
    Ceci est le contenu de la popup.
  </PopupBloc>
  
  <PopupBloc
    v-if="showEditPopup"
    :bloc-title="'Modification d\'un pouvoir'"
    @close="closeEditPower()">
    Ceci est le contenu de la popup.
  </PopupBloc>
  
  <PopupBloc
    v-if="showDeletePopup"
    :bloc-title="'Suppression d\'un pouvoir'"
    @close="closeDeletePower()">
    Ceci est le contenu de la popup.
  </PopupBloc>
  
  <PopupBloc
    v-if="showDeleteAllPopup"
    :bloc-title="'Suppression de tous les pouvoirs'"
    @close="closeDeleteAllPowers()">
    Ceci est le contenu de la popup.
  </PopupBloc>
</template>

<script lang="ts" src="./PowersSection.ts"></script>