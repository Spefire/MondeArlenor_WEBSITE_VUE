<template>
  <div
    v-if="!isOpen"
    class="layout-view background hide-on-mobile">
    <div class="creation-form">
      <div class="form-element">
        <span>Clé du backoffice <span required-libelle>*</span></span>
        <input
          type="password"
          class="text-center"
          v-model.trim.lazy="v$.form.key.$model">
      </div>
      <div class="form-element">
        <button
          class="link-button"
          :disabled="v$.form.$invalid"
          @click="submitForm()">
          Valider
        </button>
      </div>
    </div>
  </div>

  <div
    v-if="isOpen"
    class="layout-view background hide-on-mobile">
    <div class="onglets-nav margin-top-1">
      <span
        class="onglets-nav-item"
        :class="{ selected : backChoice === 1 }"
        @click="changeBackChoice(1)">
        Les personnages
      </span>
      <span
        class="onglets-nav-item"
        :class="{ selected : backChoice === 2 }"
        @click="changeBackChoice(2)">
        Les compétences
      </span>
      <span
        class="onglets-nav-item"
        :class="{ selected : backChoice === 3 }"
        @click="changeBackChoice(3)">
        Les pouvoirs
      </span>
      <span
        class="onglets-nav-item"
        :class="{ selected : backChoice === 4 }"
        @click="changeBackChoice(4)">
        L'équipement
      </span>
      <span
        class="onglets-nav-item"
        :class="{ selected : backChoice === 5 }"
        @click="changeBackChoice(5)">
        Le quizz en détails
      </span>
      <span
        class="onglets-nav-item"
        :class="{ selected : backChoice === 6 }"
        @click="changeBackChoice(6)">
        Les résultats finaux
      </span>
    </div>

    <template v-if="backChoice === 1">
      <CharactersSection />
    </template>
    <template v-if="backChoice === 2">
      <SkillsSection />
    </template>
    <template v-if="backChoice === 3">
      <PowersSection />
    </template>
    <template v-if="backChoice === 4">
      <StuffsSection />
    </template>
    <template v-if="backChoice === 5">
      <QuizzSection />
    </template>
    <template v-if="backChoice === 6">
      <ResultsSection />
    </template>
  </div>

  <div class="layout-view background show-on-mobile">
    <div class="show-on-mobile-alert layout-bloc">
      Cette page ne peut pas être parcourue sur un écran mobile.
    </div>
  </div>
</template>

<script lang="ts" src="./BackofficeView.ts"></script>