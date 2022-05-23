<template>
  <div class="bloc-text creation-element">
    <span>{{ index+1 }} - {{ question }} <span required-libelle>*</span></span>

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
        <label
          class="pointer margin-left-1 margin-right-1"
          :for="'answer'+indexAnswer">{{ answer.libelle }}</label>
      </div>
    </div>

    <button
      class="link-button"
      :disabled="v$.form.$invalid"
      @click="submitForm()">Valider</button>
  </div>
</template>

<script lang="ts" src="./QuizzForm.ts"></script>
