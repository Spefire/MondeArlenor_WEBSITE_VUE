<template>
  <div class="layout-view background-roleplay creation-view hide-on-mobile">

    <h2 class="text-center margin-top-0">
      Création de personnage
    </h2>
    <h3 class="text-center margin-bottom-1">
      <template v-if="selection == 0">Introduction</template>
      <template v-if="selection == 1">Choix de la race</template>
      <template v-if="selection == 2">Choix des caractéristiques</template>
      <template v-if="selection == 3">Choix du cristal primaire</template>
      <template v-if="selection == 4">Choix du cristal secondaire</template>
      <template v-if="selection == 5">Choix des compétences</template>
      <template v-if="selection == 6">Choix de l'identité</template>
      <template v-if="selection == 7">Choix de l'équipement</template>
      <template v-if="selection == 8">Récapitulatif</template>
      <span
        v-if="hasModification"
        title="A des modifications en cours">&nbsp;*</span>
    </h3>

    <template v-if="selection == 0">
      <div class="creation-content">
        <div class="creation-form">
          <img
            class="layout-bloc creation-img-perso"
            src="./../../../assets/images/creation/perso_left.png"
            alt="">
        </div>
        <div class="creation-form">
          <div class="layout-bloc text-justify">
            &emsp;
            Un personnage est défini par plusieurs choses : <b>ses caractéristiques</b> (et valeurs dérivées), <b>ses compétences principales</b>,
            <b>sa race</b> (parmi celles jouables), <b>son cristal évolutif</b> (ses pouvoirs), pour ensuite finir par quelques finitions.
            <br>&emsp;
            Les caractéristiques définissent ce qu’est le personnage, et les compétences ce qu’il sait.
            Votre personnage sera plus ou moins fort, plus ou moins intelligent, plus ou moins adroit.
            Et c’est vous qui choisirez si, au cours de sa vie, il a appris à se battre ou s'il a préféré se tourner vers l'érudition,
            ou encore, vers quel type de magie il s'est tourné...
            <br>
            <br>&emsp;
            Cependant, malgré toutes les valeurs notées sur la fiche de personnage,
            c'est VOUS qui le ferez vivre via ses actions : on choisit ce que l'on est par nos actes !
            <br>&emsp;
            Créez alors ici un nouveau personnage du Monde d'Arlénor...
          </div>
        </div>
      </div>
      <div class="creation-content-nav">
        <button
          class="link-button"
          @click="startCreation()">Commencer la création</button>
        <button
          class="link-button"
          @click="passCreation()">Passer la création</button>
      </div>
    </template>

    <RaceForm
      v-if="selection == 1"
      @changeStep="changeModifs()"
      @nextStep="increaseSelection()" />
    <CaractsForm
      v-if="selection == 2"
      @changeStep="changeModifs()"
      @previousStep="decreaseSelection()"
      @nextStep="increaseSelection()" />
    <CrystalForm
      v-if="selection == 3"
      :index-crystal="0"
      @changeStep="changeModifs()"
      @previousStep="decreaseSelection()"
      @nextStep="increaseSelection()" />
    <CrystalForm
      v-if="selection == 4"
      :index-crystal="1"
      @changeStep="changeModifs()"
      @previousStep="decreaseSelection()"
      @nextStep="increaseSelection()" />
    <SkillsForm
      v-if="selection == 5"
      @changeStep="changeModifs()"
      @previousStep="decreaseSelection()"
      @nextStep="increaseSelection()" />
    <StuffForm
      v-if="selection == 6"
      @changeStep="changeModifs()"
      @previousStep="decreaseSelection()"
      @nextStep="increaseSelection()" />
    <IdentityForm
      v-if="selection == 7"
      @previousStep="decreaseSelection()"
      @changeStep="changeModifs()"
      @nextStep="increaseSelection()" />

    <template v-if="selection == 8">
      <div class="creation-content">
        <div class="creation-form">
          <img
            class="layout-bloc creation-img-perso"
            src="./../../../assets/images/creation/perso_right.png"
            alt="">
        </div>

        <div class="creation-form">
          <div class="layout-bloc form-element zone-element zone-element-semifree">
            <div
              v-if="character"
              class="zone-header">
              <img
                v-if="character.avatar"
                class="zone-icon img-rounded"
                :src="character.avatar"
                alt="">
              <div class="text-center margin-left-1">
                <h2>{{ character.name }}</h2>
                <span>{{ character.age }} ans - {{ character.race.name }} - Niveau {{ character.level.numLevel }}</span>
              </div>
            </div>
            <div class="zone-description margin-top-1 text-center">
              Votre personnage est désormais fini, il ne reste plus qu'à lui donner vie !<br>
              Vous pouvez télécharger alors sa fiche perso, en PDF, et la présenter à votre Maître du Jeu.<br>
              <br><b>Bienvenue dans le Monde d'Arlénor !</b>
            </div>
            <button
              class="link-button margin-top-1"
              @click="downloadCharacter()">Télécharger la fiche perso</button>
          </div>

          <div class="layout-bloc margin-top-1 text-center">
            Vous pouvez aussi recommencer un nouveau personnage, ou faire des ajustements sur l'actuel.
          </div>
        </div>
      </div>
      
      <div class="creation-content-nav">
        <button
          class="link-button"
          @click="restartCreation()">Créer un nouveau perso</button>
        <button
          class="link-button"
          @click="startCreation()">Modifier l'actuel</button>
      </div>
    </template>

    <ul class="selection-container celestia-selection-steps">
      <div class="dotline" />
      <li
        :class="{'active': selection == 0 }"
        class="dot" />
      <div class="dotline" />
      <li
        :class="{'active': selection == 1 }"
        class="dot" />
      <div class="dotline" />
      <li
        :class="{'active': selection == 2 }"
        class="dot" />
      <div class="dotline" />
      <li
        :class="{'active': selection == 3 }"
        class="dot" />
      <div class="dotline" />
      <li
        :class="{'active': selection == 4 }"
        class="dot" />
      <div class="dotline" />
      <li
        :class="{'active': selection == 5 }"
        class="dot" />
      <div class="dotline" />
      <li
        :class="{'active': selection == 6 }"
        class="dot" />
      <div class="dotline" />
      <li
        :class="{'active': selection == 7 }"
        class="dot" />
      <div class="dotline" />
      <li
        :class="{'active': selection == 8 }"
        class="dot" />
      <div class="dotline" />
    </ul>
  </div>

  <div class="layout-view background-roleplay show-on-mobile">
    <div class="show-on-mobile-alert layout-bloc">
      Cette page ne peut pas être parcourue sur un écran mobile.
    </div>
  </div>
</template>

<style lang="scss" scoped src="./CreationView.scss"></style>
<script lang="ts" src="./CreationView.ts"></script>
