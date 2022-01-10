<template>
  <div class="roleplay-view">
    <div class="title-container">
      <h2>La Carte du Monde, et ses habitants</h2>
      <p>
        Avant de créer son personnage, ou même de lire les règles du jeu de rôles...
        découvrez l'univers du Monde d'Arlénor : la religion dominante, la magie omni-présente, les différents peuples y vivant et les conflits y règnant...
      </p>
      <router-link
        class="link-button"
        to="/universe">
        Voir le Monde
      </router-link>
    </div>
    <Glyphe
      class="glyphe-container"
      :icon="'map'" />
  </div>
  <div class="roleplay-view little">
    <div little-separator />
    <Glyphe
      class="glyphe-container inversed-container little"
      :icon="'perso'" />
    <div class="title-container inversed-container">
      <h2>La création de personnage</h2>
      <p>
        Créez votre personnage, des caractéristiques aux compétences, en passant par leurs pouvoirs...
        Accédez dès maintenant à la naissance de votre personnage !
      </p>
      <router-link
        class="link-button"
        to="/roleplay/creation">
        Passer à la création !
      </router-link>
    </div>
  </div>
  <div class="roleplay-view">
    <div little-separator />
    <div class="title-container">
      <h2>Les règles du jeu</h2>
      <p>
        Trouvez ici tous les éléments permettant de comprendre la création de personnage en profondeur ainsi que le système de jeu et des propositions de pouvoirs.
      </p>
      <a
        class="link-button"
        href="./assets/files/Manuel_Joueur.pdf"
        download>
        Télécharger le Manuel du Joueur V2.1 (Pas à jour)
      </a>
      <p>
        Pour les Maitres du Jeu seulement : un guide sur la campagne et le premier scénario d'introduction.
      </p>
      <a
        class="link-button"
        href="./assets/files/Manuel_MaitreDuJeu.pdf"
        download>
        Télécharger le Manuel du MJ V2.1 (Pas à jour)
      </a>
    </div>
    <Glyphe
      class="glyphe-container"
      :icon="'book'" />
  </div>
</template>

<script lang="ts" src="./RoleplayView.ts"></script>
