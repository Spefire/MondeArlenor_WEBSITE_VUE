<template>
  <div class="bloc-text creation-element">
    <b v-if="index < 10">Partie : "Dans le monde réel"<br></b>
    <b v-if="index >= 10">Partie : "Sur l'île de Célestia"<br></b>
    <span>
      {{ index+1 }} - {{ question }} <span required-libelle>*</span>
    </span>

    <div class="creation-radios">
      <div
        v-for="(answer, indexAnswer) in answers"
        class="creation-radio"
        :key="indexAnswer">
        <input
          type="radio"
          :id="'answer'+indexAnswer"
          :value="answer.value"
          v-model="form.response">
        <label :for="'answer'+indexAnswer">
          {{ answer.libelle }}
        </label>
      </div>
    </div>

    <button
      class="link-button"
      :disabled="v$.form.$invalid"
      @click="submitForm()">Valider</button>
  </div>
</template>

<script lang="ts" src="./QuizzForm.ts"></script>
