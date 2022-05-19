<template>
  <div class="bloc-text creation-element">
    <span>{{ question }} <span required-libelle>*</span></span>

    <template
      v-for="(answer, indexAnswer) in answers"
      :key="indexAnswer">
      <br v-if="indexAnswer > 0">
      <input
        type="radio"
        :id="'answer'+indexAnswer"
        :value="answer.value"
        v-model="form.response"
        @change="submitForm()">
      <label :for="'answer'+indexAnswer">{{ answer.libelle }}</label>
    </template>
  </div>
</template>

<script lang="ts" src="./QuizzForm.ts"></script>
