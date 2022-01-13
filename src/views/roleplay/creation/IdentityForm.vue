<template>
  <div class="layout-left">
    <img
      src="./../../../assets/images/about.png"
      alt="">
  </div>
  <div class="layout-right">
    <h2>Choix de la race</h2>
    <p>
      Merci à mes joueurs Laetitia, Jérôme, Jonathan et Sylvain qui m'ont accompagné lors de la création d'Arlénor.
      Merci à mes MJs d'autres univers qui m'ont énormément apporté en terme de conseils et de soutien.
      Et puis merci à ce qui m'ont soutenu durant ce projet et ce site : Estelle, Alice, Audrey et mes amis testeurs...
      et puis merci à toi de t'intéresser au Monde d'Arlénor !
    </p>
    <input
      v-model="name"
      placeholder="Nom du personnage">
    <button @click="submitForm()">Continuez</button>
  </div>
</template>

<script lang="ts" src="./IdentityForm.ts"></script>
