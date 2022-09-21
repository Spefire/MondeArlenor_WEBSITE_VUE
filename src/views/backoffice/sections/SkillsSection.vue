<template>
  <div class="margin-top-1">
    <button
      class="link-button margin-top-1"
      @click="openAddSkill()">Ajouter une compétence</button>
  </div>

  <SkillsTable
    :all-skills="allSkills"
    @edit="openEditSkill"
    @delete="openDeleteSkill"
    @update="updateFilteredSkills" />

  <PopupBloc
    v-if="showAddPopup"
    :bloc-title="`Ajout d'une compétence`"
    @close="closeAddSkill">
    <SkillForm
      :current-skill="currentSkill" 
      @submit="closeAddSkill" />
  </PopupBloc>
  
  <PopupBloc
    v-if="showEditPopup"
    :bloc-title="`Modification d'une compétence`"
    @close="closeEditSkill">
    <SkillForm
      :current-skill="currentSkill"
      @submit="closeEditSkill" />
  </PopupBloc>
  
  <PopupBloc
    v-if="showDeletePopup"
    :bloc-title="`Suppression d'une compétence`"
    :has-confirm-button="true"
    @close="closeDeleteSkill">
    Souhaitez-vous vraiment supprimer la compétence nommée <b>{{ currentSkill.name }}</b> ?
    <br> <br>
    Cette action est irréversible.
  </PopupBloc>
</template>

<script lang="ts" src="./SkillsSection.ts"></script>