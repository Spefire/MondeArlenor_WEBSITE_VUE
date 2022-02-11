<template>
  <HeadLayout
    :title="title"
    :image-left="imageLeft"
    :image-right="imageRight">
    <p class="bloc-text">
      Après avoir bâti une base solide dans les plaines, tout en se familiarisant avec les cristaux, les humains se sont alors mis en quête d’aventure&nbsp;:&nbsp;
      explorer le monde qui leur avait été donné, tout en recherchant de nouvelles sources d’énergies ou de pouvoirs…<br>
      <br>
      Très attachés aux préceptes d’Arlénor, les explorateurs et nouveaux colons, partirent chacun avec <b>une retranscription des tablettes de cristal</b>.
      Ils furent 19 groupes à s’élancer dans cette <b>quête de l’Expansion</b>...
      à l'<b>An 0 du calendrier Arlénien</b>.<br>
      <br>
      La manipulation et la présence des cristaux aux côtés des humains, ont au fil du temps <b>altéré leur code génétique</b>, donnant vie à de nouvelles races.
      Des relations se sont créées alors entre les différences races, certaines amicales, neutres, et d'autres... meurtrières.<br>
      <br>
      Les <b>humains</b> et les <b>elfes</b> vivent en toute liberté alors que les <b>nains</b> et les <b>mutants</b> essayent de survivre du mieux qu'ils le peuvent.
      Les <b>pans</b> et les <b>arléniens</b>, eux, restent cachés, observant le monde de loin.<br>
      Et les <b>célestiens</b>, coupés de tout, vivent leur propre aventure...
    </p>
  </HeadLayout>

  <div little-separator />

  <div class="races-view layout-view background-universe-vertical">
    <div class="layout-center large">
      <div class="races-imgs">
        <div
          class="select-button inverted"
          @click="previousSelection()">
          <i class="icon icon-arrow-right2" />
        </div>

        <img
          @click="previousSelection()"
          class="races-img"
          :src="previousImage"
          alt="">
        <img
          class="races-img main"
          :src="currentImage"
          alt="">
        <img
          @click="nextSelection()"
          class="races-img"
          :src="nextImage"
          alt="">

        <div
          class="select-button"
          @click="nextSelection()">
          <i class="icon icon-arrow-right2" />
        </div>
      </div>
      <div class="races-description bloc-text">
        <h2>{{ currentRace.name }}</h2>
        <p class="text-italic">
          {{ currentRace.infoAge }}
          <br>
          Apparence : {{ currentRace.infoAppareance }}
        </p>
        <p
          class="text-justify"
          v-html="currentRace.description" />
        <div class="races-moreinfos">
          <p>
            <span class="text-bold">{{ currentRace.ratioWorld }}%</span> du monde sont des {{ currentRace.name.toLowerCase() }}s
          </p>
          <p>
            <span>Localisations</span>
            <br>
            <span
              v-for="(location, index) in currentRace.locations"
              :key="index">
              - {{ location }}<br>
            </span>
          </p>
          <p>
            <span class="text-bold">{{ currentRace.ratioMagic }}%</span> des {{ currentRace.name.toLowerCase() }}s peuvent utiliser la magie
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./RacesView.scss"></style>
<script lang="ts" src="./RacesView.ts"></script>
