<template>
  <button
    class="link-button margin-top-1"
    @click="addPower()">Ajouter un pouvoir</button>

  <PowersTable />

  <PopupBloc
    v-if="showPopup"
    :bloc-title="'Ceci est le titre de la popup'"
    @close="closePower()">
    Ceci est le contenu de la popup.
  </PopupBloc>
</template>

<script lang="ts" src="./PowersSection.ts"></script>