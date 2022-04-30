<template>
  <HeadLayout
    :title="title"
    :image-left="imageLeft"
    :image-right="imageRight">
    <p class="bloc-text">
      Avant, il n'existait Rien. Seul le <b>Rien</b> était présent.<br>
      Il se refermait sur lui-même, en boule, en boucle...<br>
      Un jour, pour alors le combler, le <b>Tout</b> exista.<br>
      <br>
      Le Tout et le Rien s’entremêlèrent ensuite pour former une nouvelle entité se suffisant à iel-même&nbsp;:&nbsp;<br>
      <b>Arlénor, la Divinité de l'Existence</b>.<br>
      Arlénor voyant le vaste univers du Tout et du Rien, se décida à le remplir de mondes.
      C'est alors qu'iel créa son tout premier monde, nommé aujourd'hui&nbsp;:&nbsp;Le Monde d'Arlénor.<br>
      <br>
      Lors de la <b>Création</b>, Arlénor donna naissance à dix Anges et dix Démons afin de l'aider dans sa quête&nbsp;:&nbsp;
      les anges formèrent alors la <b>Sainte Cabale</b>, et les démons, la <b>Cabale Inversée</b>.
      Les deux Cabales avaient pour but de concevoir certains éléments du Monde tout en veillant sur son <b>Équilibre</b>&nbsp;:&nbsp;
      chaque entité des Cabales devint ainsi maître dans leur domaine respectif.<br>
      Une fois la Création terminée (dont la naissance des humains et d’autres créatures...),
      Arlénor rappela ses anges et démons auprès d'iel, en vue de réaliser d'autres mondes.<br>
      <br>
      Aujourd'hui, après des années, voire des milliers d'années, Arlénor contemple ses œuvres et les supervise depuis son dernier monde créé&nbsp;:&nbsp;le <b>Paradis</b>.
      Chacun espère l'y retrouver, après sa vie passée...
    </p>
  </HeadLayout>

  <div little-separator />

  <div class="religion-view layout-view background-universe-vertical">
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
        <h3>Pouvoir divin : {{ currentDivinity.powerName }}</h3>
        <p>{{ currentDivinity.power }}</p>
      </div>
      <div class="religion-list">
        <img
          v-for="(demon, index) in allDemons"
          :key="index"
          :src="(currentDivinity.name === demon.name) ? demon.imageSelected : demon.image"
          :alt="demon.name"
          @click="changeSelection(demon)">
      </div>
      <p class="bloc-text margin-top-1 margin-bottom-0">
        Les informations sur Arlénor, ses divinités et leurs domaines sont tirées des retranscriptions réalisées des tablettes de cristal.<br>
        <b>Leur existence même, n’est pas considérée comme un mythe.</b><br>
        <br>
        Cependant, leur psychologie et leurs caractéristiques physiques peuvent être remises en question ou soumises à interprétation
        (n’étant pas décrites dans les tablettes).
        Chaque ange et chaque démon possède un titre lié à sa place dans la Cabale (lié à leur personnalité) et des domaines dans lesquels ils sont maîtres.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./ReligionView.scss"></style>
<script lang="ts" src="./ReligionView.ts"></script>
