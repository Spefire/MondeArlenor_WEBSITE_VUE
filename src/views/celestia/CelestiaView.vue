<template>
  <HeadLayout
    :title="title"
    :use-class="'background-celestia-maxblack'">
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
              :src="currentCelestia.image"
              alt="">
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
              <h2>{{ currentCelestia.firstname }} {{ currentCelestia.lastname }}</h2>
              <h3>{{ currentCelestia.grade }}</h3>
            </div>
            <div
              class="select-button"
              @click="nextSelection()">
              <i class="icon icon-arrow-right2" />
            </div>
          </div>
          <div class="zone-description">
            <div class="zone-description-bloc text-center">
              <span />
              <span>{{ currentCelestia.age }}ans - {{ currentCelestia.astro }} - {{ currentCelestia.mbti }}</span>
            </div>
            <div class="zone-description-bloc">
              <span>Emotion dominante</span><br>
              <span>{{ currentCelestia.emotion }}</span>
            </div>
            <div class="zone-description-bloc">
              <span>Grade - Familier</span><br>
              <span>{{ currentCelestia.grade }} - {{ currentCelestia.animal }}</span>
            </div>
            <div class="zone-description-bloc">
              <span>Situation amoureuse</span><br>
              <span>{{ currentCelestia.orientation }} - {{ currentCelestia.situation }}</span>
            </div>
            <div class="zone-description-bloc">
              <span /><br>
              <span class="text-bold">Qualités : </span>
              <span>{{ getLibArray(currentCelestia.qualities) }}</span><br>
              <span class="text-bold">Défauts : </span>
              <span>{{ getLibArray(currentCelestia.defaults) }}</span>
            </div>
          </div>
          <p
            class="zone-comment margin-top-1"
            :title="currentCelestia.comment">
            "{{ currentCelestia.comment }}"
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./CelestiaView.scss"></style>
<script lang="ts" src="./CelestiaView.ts"></script>
