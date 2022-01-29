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

  <div class="crystals-view layout-view background universe-vertical">
    <div class="layout-center large crystals-container">
      <div class="crystals-zone-imgs">
        <div class="crystal-imgs">
          <img
            class="crystal-main"
            src="./../../assets/images/crystals/crystal.png"
            alt="">
          <img
            class="crystal-data01"
            src="./../../assets/images/crystals/crystal_data01.png"
            alt="">
          <img
            class="crystal-data02"
            src="./../../assets/images/crystals/crystal_data02.png"
            alt="">
          <img
            class="crystal-data03"
            src="./../../assets/images/crystals/crystal_data03.png"
            alt="">
        </div>
      </div>
      <div class="crystals-zone-text">
        <h3>Le cristal arlénien</h3>
        <h2>Propriétés connues par tous</h2>
        <p>
          Ils mesurent entre 1 cm et 2 m.<br>
          La couleur d'un cristal est liée à son effet, à son pouvoir.<br>
          Un cristal est très solide, résistant.<br>
          L'utilisateur se lie à un cristal, avec une limite de 3 cristaux de rang (B ou supérieur) à la fois.<br>
          Le lien peut se briser, mais il ne pourra pas se reformer entièrement par la suite.<br>
          Plus l'utilisateur utilise ses cristaux, plus le lien entre eux s'intensifie.<br>
          Plus l'utilisateur est loin de son cristal, plus il lui est difficile de l'utiliser.<br>
          Les cristaux viennent principalement des mines de la cité désertique Jirakan.<br>
          Seuls les cristalliens (métier complexe) peuvent les retravailler en leur donnant une forme précise.<br>
          Les cristaux ne peuvent pas être séparés en plusieurs parties. Cassés, ils perdent leur pouvoir.<br>
          Il existerait des cristaux uniques, dits 'légendaires', aux puissances incommensurables..."
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./CrystalsView.ts"></script>
