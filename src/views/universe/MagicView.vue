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
            src="./../../assets/images/magic/crystal.png"
            alt="">
          <img
            class="crystal-data01"
            src="./../../assets/images/magic/crystal_data01.png"
            alt="">
          <img
            class="crystal-data02"
            src="./../../assets/images/magic/crystal_data02.png"
            alt="">
          <img
            class="crystal-data03"
            src="./../../assets/images/magic/crystal_data03.png"
            alt="">
        </div>
      </div>
      <div class="magic-right">
        <div class="magic-header">
          <h2>Propriétés globales aux cristaux</h2>
          <p class="bloc-text">
            Ces propriétés s'appliquent pour les cristaux :<br>
            énergétiques, instantannés et évolutifs.
          </p>
        </div>
        <p class="magic-crystals bloc-text">
          - Ils mesurent entre 1 cm et 2 m.<br>
          - La couleur d'un cristal est liée à son effet, à son pouvoir.<br>
          - Un cristal est très solide, résistant.<br>
          - L'utilisateur se lie à un cristal évolutif à la fois.<br>
          - Plus l'utilisateur utilise ses cristaux, plus le lien entre eux s'intensifie.<br>
          - Plus l'utilisateur est loin de son cristal, plus il lui est difficile de l'utiliser.<br>
          - Les cristaux viennent principalement des mines de la cité désertique Jirakan.<br>
          - Seuls les cristalliens (métier rare et complexe) peuvent les retravailler en leur donnant une forme précise.<br>
          - Les cristaux ne peuvent pas être séparés en plusieurs parties. Cassés, ils perdent totalement leur pouvoir.<br>
          - Il existerait des cristaux uniques, dits 'légendaires', aux puissances incommensurables...
        </p>
      </div>
      <div class="magic-top">
        <div class="magic-grid docs-grid-list">
          <div
            v-for="(magic, index) in allMagics"
            class="docs-grid-element"
            :key="index">
            <img
              :src="magic.image"
              :alt="magic.name">
            <div class="docs-grid-infos">
              <div class="margin-bottom-1">
                <span class="text-bold">{{ magic.name }}</span>
              </div>
              <p v-html="magic.description" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./MagicView.ts"></script>
