<template>
  <div class="margin-top-1">
    <button
      class="link-button margin-top-1"
      @click="openAddStuff()">Ajouter un équipement</button>
  </div>

  <StuffsTable
    :all-stuffs="allStuffs"
    @edit="openEditStuff"
    @delete="openDeleteStuff"
    @update="updateFilteredStuffs" />

  <PopupBloc
    v-if="showAddPopup"
    :bloc-title="`Ajout d'un équipement`"
    @close="closeAddStuff">
    <StuffForm
      :current-stuff="currentStuff" 
      @submit="closeAddStuff" />
  </PopupBloc>
  
  <PopupBloc
    v-if="showEditPopup"
    :bloc-title="`Modification d'un équipement`"
    @close="closeEditStuff">
    <StuffForm
      :current-stuff="currentStuff"
      @submit="closeEditStuff" />
  </PopupBloc>
  
  <PopupBloc
    v-if="showDeletePopup"
    :bloc-title="`Suppression d'un équipement`"
    :has-confirm-button="true"
    @close="closeDeleteStuff">
    Souhaitez-vous vraiment supprimer l'équipement nommé <b>{{ currentStuff.name }}</b> ?
    <br> <br>
    Cette action est irréversible.
  </PopupBloc>
</template>

<script lang="ts" src="./StuffsSection.ts"></script>