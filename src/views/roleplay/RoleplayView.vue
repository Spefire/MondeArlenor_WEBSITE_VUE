<template>
  <div class="hide-on-mobile">
    <div class="roleplay-view background-roleplay glyphe-hover">
      <div class="title-container">
        <h2>1. La Carte du Monde,<br>et ses habitants</h2>
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
    <div class="roleplay-view background-roleplay-black glyphe-hover">
      <div class="glyphe-container">
        <Glyphe
          class="little"
          :icon="'book'" />
      </div>
      <div class="title-container inversed-container">
        <h2>2. Les règles du jeu</h2>
        <p>
          Trouvez ici tous les éléments permettant de comprendre la création de personnage en profondeur ainsi que le système de jeu et des propositions de pouvoirs.
        </p>
        <div>
          <router-link
            class="link-button"
            to="/roleplay/system">
            Comprendre le système de jeu
          </router-link>
        </div>
        <div class="margin-top-1">
          <router-link
            class="link-button"
            to="/roleplay/crystals?spe=PALADIN">
            Voir les cristaux évolutifs
          </router-link>
        </div>
      </div>
    </div>
    <div little-separator />
    <div class="roleplay-view background-roleplay glyphe-hover">
      <div class="title-container">
        <h2>3. La création de personnage</h2>
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
      <div class="glyphe-container">
        <Glyphe :icon="'perso'" />
      </div>
    </div>
  </div>

  <div class="layout-view background-roleplay show-on-mobile">
    <div class="show-on-mobile-alert layout-bloc">
      Cette page ne peut pas être parcourue sur un écran mobile.
    </div>
  </div>
</template>

<style lang="scss" scoped src="./RoleplayView.scss"></style>
<script lang="ts" src="./RoleplayView.ts"></script>
