<template>
  <HeadLayout
    :title="title"
    :image-left="imageLeft"
    :image-right="imageRight">
    <p>
      Lors de la Création, seuls les humains étaient présents dans le Monde d'Arlénor.
      "Cependant, à l'An 0, les humains ont découvert ce qui allait changer radicalement leur vie : les cristaux.
      <br><br>La manipulation et la présence de ces derniers aux côtés des humains, ont altéré au fil du temps leur code génétique, donnant vie à de nouvelles races.
      Des relations se sont créées alors entre les différences races, certaines amicales, neutres, et d'autres... meurtrières.
      <br><br>Les elfes et les humains vivent en toute liberté alors que les nains et les mutants essayent de survivre du mieux qu'ils le peuvent.
      Les pans et les arléniens restent cachés, observant le monde de loin...
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
        <p>{{ currentRace.description }}</p>
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

<script lang="ts" src="./RacesView.ts"></script>
