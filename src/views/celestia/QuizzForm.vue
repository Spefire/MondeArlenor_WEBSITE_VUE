<template>
  <div class="creation-element">
    <span>{{ question }} <span required-libelle>*</span></span>

    <template
      v-for="(answer, index) in answers"
      :key="index">
      <br v-if="index > 0">
      <input
        type="radio"
        :id="'answer'+index"
        :value="answer.value"
        v-model="form.response">
      <label :for="'answer'+index">{{ answer.libelle }}</label>
    </template>
  </div>
</template>

<script lang="ts" src="./QuizzForm.ts"></script>
