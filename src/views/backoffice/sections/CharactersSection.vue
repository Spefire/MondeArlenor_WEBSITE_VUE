<template>
  <CharactersTable
    :all-characters="allCharacters"
    @download="downloadCharacter"
    @delete="openDeleteCharacter"
    @update="updateFilteredCharacters" />

  <PopupBloc
    v-if="showDeletePopup"
    :bloc-title="`Suppression d'un personnage`"
    :has-confirm-button="true"
    @close="closeDeleteCharacter">
    Souhaitez-vous vraiment supprimer le personnage nommé <b>{{ currentCharacter.name }}</b> ?
    <br> <br>
    Cette action est irréversible.
  </PopupBloc>
</template>

<script lang="ts" src="./CharactersSection.ts"></script>