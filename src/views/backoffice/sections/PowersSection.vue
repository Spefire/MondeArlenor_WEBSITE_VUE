<template>
  <div class="margin-top-1">
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
  </div>

  <PowersTable
    :all-powers="allPowers"
    @edit="openEditPower"
    @delete="openDeletePower" />

  <PopupBloc
    v-if="showAddPopup"
    :bloc-title="`Ajout d'un pouvoir`"
    @close="closeAddPower">
    <PowerForm
      :current-power="currentPower" 
      @submit="closeAddPower" />
  </PopupBloc>
  
  <PopupBloc
    v-if="showEditPopup"
    :bloc-title="`Modification d'un pouvoir`"
    @close="closeEditPower">
    <PowerForm
      :current-power="currentPower"
      @submit="closeEditPower" />
  </PopupBloc>
  
  <PopupBloc
    v-if="showDeletePopup"
    :bloc-title="`Suppression d'un pouvoir`"
    :has-confirm-button="true"
    @close="closeDeletePower">
    Souhaitez-vous vraiment supprimer le pouvoir nommé <b>{{ selectedPower.name }}</b> ?
    <br> <br>
    Cette action est irréversible.
  </PopupBloc>
</template>

<script lang="ts" src="./PowersSection.ts"></script>