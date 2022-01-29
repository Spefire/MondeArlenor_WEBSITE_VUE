<template>
  <HeadLayout
    :title="title"
    :image-left="imageLeft"
    :image-right="imageRight">
    <p>
      Selon la légende connue par tous, la Divinité de l'Existence et du Destin, Arlénor, a façonné le monde en y instaurant un équilibre entre le Bien et le Mal.
      Pour se faire, Arlénor enfanta 10 anges et 10 démons. Les anges forment la Sainte Cabale et les démons, la Cabale Inversée.
      <br><br>Ces entités de l'équilibre ont aidé Arlénor lors de la Création du Monde, et sont devenu un symbole dans leur domaine respectif...
      On dit qu'à la fin de leur travail, ils retournèrent tous auprès d'Arlénor, au cœur de son monde :
      un endroit où seules les âmes pures peuvent entrer à leur mort. Les âmes qui sont jugées encore impures, subissent la réincarnation.
      <br><br>Aujourd'hui, des temples d'Arlénor existent un peu partout.
      Les peuples vénèrent dans chaque temple : Arlénor et l'un de ses enfants.
      La religion se base sur le maintien d'un équilibre entre le Bien et le Mal, et appuie sur le fait qu'il faut autant vénérer les anges que les démons.
    </p>
  </HeadLayout>

  <div little-separator />

  <div class="religion-view layout-view background universe-vertical">
    <div class="layout-center large">
      <div class="religion-list">
        <img
          v-for="(angel, index) in allAngels"
          :key="index"
          :src="(currentDivinity.name === angel.name) ? angel.imageSelected : angel.image"
          :alt="angel.name"
          @click="changeSelection(angel)">
      </div>
      <div class="religion-description bloc-text margin-top-1 margin-bottom-1">
        <h3 class="margin-top-1">{{ currentDivinity.isInversed ? "La Cabale Inversée" : "La Sainte Cabale" }}</h3>
        <h2>
          {{ currentDivinity.libNum }}<span class="text-lower">{{ currentDivinity.isInversed ? "i" : "" }}</span>
          - {{ currentDivinity.name }}, {{ currentDivinity.title }}
        </h2>
        <h3>{{ currentDivinity.symbols }}</h3>
        <p>"{{ currentDivinity.comment }}"<br>- {{ currentDivinity.commentName }}</p>
      </div>
      <div class="religion-list">
        <img
          v-for="(demon, index) in allDemons"
          :key="index"
          :src="(currentDivinity.name === demon.name) ? demon.imageSelected : demon.image"
          :alt="demon.name"
          @click="changeSelection(demon)">
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./ReligionView.ts"></script>
