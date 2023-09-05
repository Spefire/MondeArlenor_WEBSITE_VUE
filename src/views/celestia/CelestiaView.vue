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
    <div class="layout-bloc">
      Sur une île céleste, éloignée de tout le reste... sans la religion d'Arlénor, sans les cristaux habituels...
      Un petit peuple se développait tranquillement jusqu'à l'arrivée des <b>Wendigos</b> dans leur vie.
      Des célestiens sont devenus des mages en même temps que leur apparition, et entre eux se mène un combat de longue durée...
      <br><br>
      Un jeune groupe de mages s'entraine actuellement afin d'affronter leur <b>Destin</b>.<br>
      Et l'une d'entre eux, <b>Elisa Felnéris</b>, semble avoir la clé pour mettre fin à ces tueries.
    </div>
  </HeadLayout>

  <div little-separator />

  <div class="celestia-view layout-view background-celestia-black">
    <div class="celestia-container">

      <div class="celestia-left">
        <img
          class="celestia-character layout-bloc"
          :src="currentCelestia.image"
          alt="">
      </div>
        
      <div class="celestia-right">
        <div class="layout-bloc section">
          <div class="section-header-buttons">
            <div
              class="section-button inverted"
              @click="previousSelection()">
              <i class="icon icon-arrow-right2" />
            </div>
            <div class="text-center margin-bottom-1">
              <h2>{{ currentCelestia.firstname }} {{ currentCelestia.lastname }}</h2>
              <h3>{{ currentCelestia.grade }}</h3>
            </div>
            <div
              class="section-button"
              @click="nextSelection()">
              <i class="icon icon-arrow-right2" />
            </div>
          </div>
          <div class="section-description">
            <div class="section-description-bloc text-center">
              <span />
              <span>{{ currentCelestia.age }}ans - {{ currentCelestia.astro }} - {{ currentCelestia.mbti }}</span>
            </div>
            <div class="section-description-bloc">
              <span>Emotion dominante</span><br>
              <span>{{ currentCelestia.emotion }}</span>
            </div>
            <div class="section-description-bloc">
              <span>Grade - Familier</span><br>
              <span>{{ currentCelestia.grade }} - {{ currentCelestia.animal }}</span>
            </div>
            <div class="section-description-bloc">
              <span>Orientation - Relations</span><br>
              <span>{{ currentCelestia.orientation }} - {{ currentCelestia.situation }}</span>
              <span v-html="currentCelestia.relations" />
            </div>
            <div class="section-description-bloc">
              <span /><br>
              <span class="text-bold">Qualités : </span>
              <span>{{ getLibArray(currentCelestia.qualities) }}</span><br>
              <span class="text-bold">Défauts : </span>
              <span>{{ getLibArray(currentCelestia.defaults) }}</span>
            </div>
          </div>
          <p
            class="section-comment margin-top-1"
            :title="currentCelestia.comment">
            "{{ currentCelestia.comment }}"
          </p>
        </div>
      </div>
    </div>
  </div>

  <div little-separator />

  <div class="celestia-view layout-view background-celestia-vertical">
    <h2>Quel mage de Célestia êtes-vous ?</h2>

    <div
      v-if="currentQuestion == 100"
      class="layout-bloc text-center">
      <div class="margin-top-1">
        Le Cercle des Mages Evanell recrute ponctuellement des mages pour défendre les célestiens 
        contre les attaques des Wendigos (titans monstrueux venant de l'En-Bas).<br>
        Le Cercle comporte 9 types de mages élémentaires, qui suivent une formation avant de combattre.<br>
        Si vous étiez membre de ce cercle, quelle sorte de mage seriez-vous ?<br>
        <br>
        Le questionnaire commence par des questions sur vous dans la vie réelle,
        puis sur vous si vous étiez mage sur Célestia.
      </div>
      <button
        class="link-button margin-top-1 margin-bottom-1"
        @click="startQuestion()">Commencer le test</button>
    </div>

    <div
      v-if="currentQuestion == 200"
      class="layout-bloc section is-height-free">
      <div class="section-header">
        <img
          class="section-icon"
          :src="quizz.result.image"
          alt="">
        <div class="text-center margin-left-1">
          <h2>{{ quizz.result.libelle }}</h2>
          <span v-if="pourcent !== 100">(<b>{{ pourcent }}%</b> des mages)</span>
        </div>
      </div>
      <div class="section-description margin-top-1">
        <div class="section-description-bloc">
          <span>Axe : </span>
          <span>{{ quizz.result.axe }}</span>
        </div>
        <div class="section-description-bloc">
          <span>Symboles : </span>
          <span>{{ quizz.result.symboles }}</span>
        </div>
        <div class="section-description-bloc">
          <span />
          <span v-html="quizz.result.description" />
        </div>
      </div>
      <p class="section-comment margin-top-1">
        Feu : {{ quizz.fire }} - Eau : {{ quizz.water }}<br>
        Air : {{ quizz.wind }} - Terre : {{ quizz.earth }}<br>
        <br>
        Alliance Feu-Eau : {{ quizz.fire - quizz.water }} ({{ getLibFireWater() }})<br>
        Alliance Air-Terre : {{ quizz.wind - quizz.earth }} ({{ getLibWindEarth() }})
      </p>
    </div>

    <template 
      v-for="(question, index) in quizz.questions">
      <QuizzForm
        v-if="currentQuestion == index"
        :index="index"
        :key="index"
        @nextQuestion="nextQuestion()" />
    </template>
      
    <ul class="celestia-steps selection-container">
      <template
        v-for="(question, index) in quizz.questions"
        :key="index">
        <div class="dotline" />
        <li
          :class="{'active': currentQuestion == index }"
          class="dot" />
      </template>
      <div class="dotline" />
    </ul>
  </div>
</template>

<style lang="scss" src="./CelestiaView.scss"></style>
<script lang="ts" src="./CelestiaView.ts"></script>
