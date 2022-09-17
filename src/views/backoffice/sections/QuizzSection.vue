<template>
  <div class="margin-top-1">
    <div>Nombre de quizz : <b>{{ allQuizz.length }}</b></div>

    <div class="layout-row flex-wrap margin-top-1">
      <div 
        v-for="(question, indexQuestion) in newQuizz.questions"
        class="layout-col-45 layout-bloc margin-top-1 zone-element zone-element-free"
        :key="indexQuestion">
        <span>{{ indexQuestion+1 }}) {{ question.libelle }}</span>
        <br><br>
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
  </div>
</template>

<script lang="ts" src="./QuizzSection.ts"></script>
