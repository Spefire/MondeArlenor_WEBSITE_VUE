<template>
  <CreationForm
    form-title="Choix de la race"
    :is-disabled="isDisabled"
    :is-modified="isModified"
    :is-invalid="v$.form.$invalid"
    @outCancel="cancelForm()"
    @outSubmit="submitForm()">
    <!-- Description de la race sélectionnée -->
    <div class="creation-column">
      <div
        v-if="!currentRace"
        class="creation-description layout-bloc">
        Pas de race sélectionnée.
      </div>
      <div
        v-if="currentRace"
        class="creation-description layout-bloc">
        <img
          class="creation-img"
          :src="currentRace.image"
          alt="">
        <h2>{{ currentRace.name }}</h2>
        <p class="text-italic">
          {{ currentRace.infoAge }}
          <br>
          Apparence : {{ currentRace.infoAppareance }}
        </p>
        <p
          class="text-justify"
          v-html="currentRace.description" />
        <div class="section-moreinfos">
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

    <!-- Sélection de la race -->
    <div class="creation-column">
      <div class="form-element">
        <span>Race du personnage <span required-libelle>*</span></span>
        <div class="dropdown">
          <select
            class="dropdown-select"
            v-model.trim.lazy="v$.form.raceCode.$model"
            @change="updateForm()">
            <option
              v-for="(race, index) in allRaces"
              :value="race.code"
              :key="index">{{ race.name }}</option>
          </select>
        </div>
      </div>

      <div
        v-if="currentRace"
        class="grid-list grid-1">
        <div
          v-for="(skill, index) in getSkills(currentRace.code)"
          class="grid-element"
          :key="index">
          <img
            :src="skill.image"
            :alt="skill.name">
          <div>
            <div class="grid-header">
              <span class="text-bold">{{ skill.name }}</span>
            </div>
            <p
              class="grid-body"
              v-html="skill.description" />
          </div>
        </div>
      </div>
    </div>
  </CreationForm>
</template>

<style lang="scss" scoped src="./../CreationView.scss"></style>
<script lang="ts" src="./RaceForm.ts"></script>
