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

  <div class="population-view layout-view background universe-vertical">
    <div class="layout-center large" />
  </div>
</template>

<script lang="ts" src="./CrystalsView.ts"></script>
