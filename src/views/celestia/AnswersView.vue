<template>
  <div class="celestia-view layout-view background-celestia-black">
    <div class="layout-center large">
      <h2>Les réponses du quizz</h2>

      <div class="bloc-text creation-element zone-element zone-element-free">

        <span>Nombre de quizz : <b>{{ allQuizz.length }}</b></span><br>

        <div 
          v-for="(question, indexQuestion) in newQuizz.questions"
          :key="indexQuestion">
          <br v-if="indexQuestion !== 0">
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
    </div>
  </div>

  <div little-separator />
  
  <div class="celestia-view layout-view background-celestia-black">
    <div class="layout-center large">
      <h2>Les résultats possibles</h2>

      <div
        v-for="(result, indexResult) in allResults"
        class="bloc-text creation-element zone-element zone-element-free"
        :key="indexResult">
        <div class="zone-header">
          <img
            class="zone-icon"
            :src="result.image"
            alt="">
          <div class="text-center margin-left-1">
            <h2>{{ result.libelle }}</h2>
            <span>(<b>{{ getPourcentResult(result.code) }}%</b> des mages)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./AnswersView.ts"></script>
