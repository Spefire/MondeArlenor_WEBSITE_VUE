<template>
  <div class="hide-on-mobile">
    <div
      v-if="selection == 0"
      class="layout-view background-roleplay creation-view">

      <h2 class="text-center margin-top-0 margin-bottom-1">
        Introduction
      </h2>

      <div class="creation-content">
        <div class="creation-column">
          <img
            class="layout-bloc creation-img-perso"
            src="./../../../assets/images/creation/perso_left.png"
            alt="">
        </div>
        <div class="creation-column">
          <div class="layout-bloc text-justify">
            &emsp;
            Un personnage est défini par plusieurs choses : <b>ses caractéristiques</b> (et valeurs dérivées), <b>ses compétences principales</b>,
            <b>sa race</b> (parmi celles jouables), <b>son cristal évolutif</b> (ses pouvoirs), pour ensuite finir par quelques finitions.
            <br>
            <br>&emsp;
            Cependant, malgré toutes les valeurs notées sur la fiche de personnage,
            c'est VOUS qui le ferez vivre via ses actions : on choisit ce que l'on est par nos actes !
          </div>
          
          <div class="layout-row">
            <div class="layout-col-75 form-element">
              <span>Personnage <span required-libelle>*</span></span>
              <div class="dropdown">
                <select
                  class="dropdown-select"
                  v-model.trim.lazy="v$.form.id.$model"
                  @change="changeCharacter">
                  <option :value="null">Nouveau personnage</option>
                  <option
                    v-for="(charact, index) in characters"
                    :value="charact.id"
                    :key="index">
                    {{ charact.name }}
                    (Niveau {{ charact.level.numLevel }})
                    ({{ charact.date }} à {{ charact.hour }})
                  </option>
                </select>
              </div>
            </div>

            <div class="layout-col-25 form-element">
              <span>Niveau (1-20)<span required-libelle>*</span></span>
              <input
                type="number"
                class="text-center"
                min="1"
                max="20"
                placeholder="1-20"
                v-model.trim.lazy="v$.form.numLevel.$model">
            </div>
          </div>

          <div class="layout-row">
            <div class="layout-col-75 form-element">
              <button
                v-if="checkDelete"
                class="link-button alert-button"
                @click="openDeletePopup()">Supprimer le personnage</button>
            </div>
          </div>

          <div class="layout-bloc text-justify">
            &emsp;
            Note : Pour une meilleure expérience, n'hésitez pas à rétracter le bandeau de navigation en haut à gauche.
          </div>
        </div>
      </div>

      <div class="creation-content-nav">
        <button
          class="link-button"
          :disabled="v$.form.$invalid"
          @click="startCreation(true)">Commencer la création</button>
      </div>
    </div>

    <template v-if="selection != 0 && selection != 8">    
      <RaceForm
        v-if="selection == 1"
        @previousStep="decreaseSelection()"
        @nextStep="increaseSelection()" />
      <CaractsForm
        v-if="selection == 2"
        @previousStep="decreaseSelection()"
        @nextStep="increaseSelection()" />
      <CrystalForm
        v-if="selection == 3"
        :index-crystal="0"
        @previousStep="decreaseSelection()"
        @nextStep="increaseSelection()" />
      <CrystalForm
        v-if="selection == 4 && character.level.numLevel < 5"
        :index-crystal="1"
        @previousStep="decreaseSelection()"
        @nextStep="increaseSelection()" />
      <SkillsForm
        v-if="selection == 5"
        @previousStep="decreaseSelection()"
        @nextStep="increaseSelection()" />
      <!--StuffForm
        v-if="selection == 6"
        @previousStep="decreaseSelection()"
        @nextStep="increaseSelection()" /-->
      <IdentityForm
        v-if="selection == 7"
        @previousStep="decreaseSelection()"
        @nextStep="increaseSelection()" />
    </template>

    <div
      v-if="selection == 8"
      class="layout-view background-roleplay creation-view">

      <h2 class="text-center margin-top-0 margin-bottom-1">
        Récapitulatif
      </h2>

      <div class="creation-content">
        <div class="creation-column">
          <img
            class="layout-bloc creation-img-perso"
            src="./../../../assets/images/creation/perso_right.png"
            alt="">
        </div>

        <div class="creation-column">
          <div class="layout-bloc form-element zone-element zone-element-semifree margin-top-0 margin-bottom-0">
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
            <template v-if="!isSaved">
              <div>L'enregistrement de votre personnage se fera sur votre navigateur.</div>
              <button
                class="link-button margin-top-05"
                @click="openSavePopup()">Enregistrer le personnage</button>
            </template>

            <template v-if="isSaved">
              <div>Enregistrement effectué !</div>
            </template>
          </div>
        </div>
      </div>
      
      <div class="creation-content-nav">
        <button
          class="link-button"
          @click="restartCreation()">Créer un nouveau perso</button>
        <button
          class="link-button"
          @click="startCreation(false)">Modifier l'actuel</button>
      </div>
    </div>
  </div>

  <div class="layout-view background-roleplay show-on-mobile">
    <div class="show-on-mobile-alert layout-bloc">
      Cette page ne peut pas être parcourue sur un écran mobile.
    </div>
  </div>

  <PopupBloc
    v-if="showDeletePopup"
    :bloc-title="`Suppression du personnage`"
    :has-confirm-button="true"
    @close="closeDeletePopup">
    Souhaitez-vous vraiment supprimer <b>{{ character.name }} (Niveau {{ character.level.numLevel }})</b> ?
    <br> <br>
    Cette action est irréversible.
  </PopupBloc>
  
  <PopupBloc
    v-if="showSavePopup"
    :bloc-title="`Enregistrement du personnage`"
    :has-confirm-button="true"
    @close="closeSavePopup">
    Souhaitez-vous vraiment enregistrer <b>{{ character.name }} (Niveau {{ character.level.numLevel }})</b> ?
    <br><br>
    En cliquant, vous acceptez sa sauvegarde dans le localStorage votre navigateur.<br>
    Note : En effaçant l'historique de votre navigateur, vos personnages sauvegardés seront effacés.
  </PopupBloc>
</template>

<style lang="scss" src="./CreationView.scss"></style>
<script lang="ts" src="./CreationView.ts"></script>
