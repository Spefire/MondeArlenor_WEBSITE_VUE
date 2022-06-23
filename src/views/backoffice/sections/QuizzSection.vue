<template>
  <div class="margin-top-1">
    <div>Nombre de quizz : <b>{{ allQuizz.length }}</b></div>

    <div 
      v-for="(question, indexQuestion) in newQuizz.questions"
      class="bloc-text margin-top-1"
      :key="indexQuestion">
      <span>{{ question.libelle }}</span><br>
      <span
        v-for="(answer, indexAnswer) in question.answers"
        :key="indexAnswer">
        <br v-if="indexAnswer !== 0">
        {{ answer.libelle }}
        <b :class="{'text-red': checkAlert(indexQuestion, answer.value)}">
          {{ getPourcentQuestion(indexQuestion, answer.value) }}%
        </b>
      </span>
    </div>
  </div>
</template>

<script lang="ts" src="./QuizzSection.ts"></script>
