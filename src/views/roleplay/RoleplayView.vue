<template>
  <div class="roleplay-view background roleplay-diagonal">
    <div class="title-container">
      <h2>La Carte du Monde,<br>et ses habitants</h2>
      <p>
        Avant de créer son personnage, ou même de lire les règles du jeu de rôles...
        découvrez l'univers du Monde d'Arlénor : la religion dominante, la magie omni-présente, les différents peuples y vivant et les conflits y règnant...
      </p>
      <div>
        <router-link
          class="link-button"
          to="/universe">
          Voir le Monde
        </router-link>
      </div>
    </div>
    <div class="glyphe-container">
      <Glyphe :icon="'map'" />
    </div>
  </div>
  <div little-separator />
  <div class="roleplay-view background base-diagonal">
    <div class="glyphe-container">
      <Glyphe
        class="little"
        :icon="'perso'" />
    </div>
    <div class="title-container inversed-container">
      <h2>La création de personnage</h2>
      <p>
        Créez votre personnage, des caractéristiques aux compétences, en passant par leurs pouvoirs...
        Accédez dès maintenant à la naissance de votre personnage !
      </p>
      <div>
        <router-link
          class="link-button"
          to="/roleplay/creation">
          Passer à la création !
        </router-link>
        <router-link
          class="margin-top-1 link-button"
          to="/roleplay/docs">
          Voir la documentation
        </router-link>
      </div>
    </div>
  </div>
  <div little-separator />
  <div class="roleplay-view background roleplay-diagonal">
    <div class="title-container">
      <h2>Les règles du jeu</h2>
      <p>
        Trouvez ici tous les éléments permettant de comprendre la création de personnage en profondeur ainsi que le système de jeu et des propositions de pouvoirs.
      </p>
      <div>
        <a
          class="link-button margin-bottom-1"
          href="./assets/files/Manuel_Joueur.pdf"
          download>
          Télécharger le Manuel du Joueur V2.1 (Pas à jour)
        </a>
      </div>
      <p>
        Pour les Maitres du Jeu seulement : un guide sur la campagne et le premier scénario d'introduction.
      </p>
      <div>
        <a
          class="link-button"
          href="./assets/files/Manuel_MaitreDuJeu.pdf"
          download>
          Télécharger le Manuel du MJ V2.1 (Pas à jour)
        </a>
      </div>
    </div>
    <div class="glyphe-container">
      <Glyphe :icon="'book'" />
    </div>
  </div>
</template>

<script lang="ts" src="./RoleplayView.ts"></script>
