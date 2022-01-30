<template>
  <HeadLayout
    :title="title"
    :image-left="imageLeft"
    :image-right="imageRight">
    <p>
      La magie du Monde d'Arlénor proviendraient des cristaux laissés par les anges et démons lors de la création du monde, des fragments de leurs pouvoirs.
      <br><br>Les premiers humains découvrirent leur pouvoir en l'An 0 du calendrier arlénien.
      Malgré que peu d'humains aient la capacité de les utiliser, le Monde d'Arlénor vit alors :
      une chasse aux cristaux, un développement d'outils, d'armes, et même une citée basée sur ces cristaux.
      <br><br>Les détenteurs de cristaux se lient à eux, et activent leur pouvoir en leur transférant de l'énergie vitale.
    </p>
  </HeadLayout>

  <div little-separator />

  <div class="magic-view layout-view background-universe-vertical">
    <div class="layout-center large magic-container">
      <div class="magic-left">
        <div class="magic-imgs">
          <img
            class="crystal-main"
            :src="currentMagic.image"
            alt="">
          <img
            v-if="currentMagic.image01"
            class="crystal-data01"
            :src="currentMagic.image01"
            alt="">
          <img
            v-if="currentMagic.image02"
            class="crystal-data02"
            :src="currentMagic.image02"
            alt="">
          <img
            v-if="currentMagic.image03"
            class="crystal-data03"
            :src="currentMagic.image03"
            alt="">
        </div>
      </div>
      <div class="magic-right">
        <div class="magic-header">
          <div
            class="select-button inverted"
            @click="previousSelection()">
            <i class="icon icon-arrow-right2" />
          </div>
          <div>
            <h3>Type de magie</h3>
            <h2>{{ currentMagic.name }}</h2>
            <p class="bloc-text">{{ currentMagic.description }}</p>
          </div>
          <div
            class="select-button"
            @click="nextSelection()">
            <i class="icon icon-arrow-right2" />
          </div>
        </div>
        
        <p class="magic-crystals bloc-text margin-top-1">
          Propriétés globales au cristaux :<br><br>
          - Ils mesurent entre 1 cm et 2 m.<br>
          - La couleur d'un cristal est liée à son effet, à son pouvoir.<br>
          - Un cristal est très solide, résistant.<br>
          - L'utilisateur se lie à un cristal évolutif à la fois.<br>
          - Plus l'utilisateur utilise ses cristaux, plus le lien entre eux s'intensifie.<br>
          - Plus l'utilisateur est loin de son cristal, plus il lui est difficile de l'utiliser.<br>
          - Les cristaux viennent principalement des mines de la cité désertique Jirakan.<br>
          - Seuls les cristalliens (métier complexe) peuvent les retravailler en leur donnant une forme précise.<br>
          - Les cristaux ne peuvent pas être séparés en plusieurs parties. Cassés, ils perdent leur pouvoir.<br>
          - Il existerait des cristaux uniques, dits 'légendaires', aux puissances incommensurables...
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./MagicView.ts"></script>
