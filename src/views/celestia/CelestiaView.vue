<template>
  <HeadLayout :title="title">
    <iframe
      src="https://www.youtube.com/embed/Plk1gRTv4jA"
      title="Trailer - Etincelles : Premières étincelles de Célestia"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen />
    <p class="bloc-text">
      On raconte que l’<b>Humanité</b> a commencé avec un millier d’humains, tenant entre leurs mains, les <b>tablettes de cristal</b>.
      Comme si Arlénor les avait créé en leur donnant une voie à suivre dans leur développement.<br>
      Ils n’avaient pas encore acquis le langage, qu’ils comprenaient déjà le sens des écritures de ces tablettes…
    </p>
  </HeadLayout>

  <div little-separator />

  <div class="celestia-view layout-view background-celestia-black">
    <div class="layout-center large">
      <div class="world-container">

        <div class="world-right">
          <div class="world-icons">
            <img
              class="world-map bloc-text"
              src="./../../assets/images/world/worldmap_climates.jpg"
              alt="Carte des Climats">
          </div>
        </div>
        
        <div class="world-left zone-element">
          <div class="zone-header">
            <div
              class="select-button inverted"
              @click="previousSelection()">
              <i class="icon icon-arrow-right2" />
            </div>
            <div class="text-center margin-bottom-1">
              <h2>Romain Divernn</h2>
              <h3>Mage de Glace</h3>
            </div>
            <div
              class="select-button"
              @click="nextSelection()">
              <i class="icon icon-arrow-right2" />
            </div>
          </div>
          <div class="zone-description">
            <p v-html="'Cest un tres bon mage'" />
          </div>
          <p
            class="zone-comment margin-top-1"
            title="Ceci est un commentairee">
            "Ceci est un commentaire"
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./CelestiaView.scss"></style>
<script lang="ts" src="./CelestiaView.ts"></script>
