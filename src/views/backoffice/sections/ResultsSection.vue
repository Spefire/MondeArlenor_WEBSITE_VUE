<template>
  <div
    v-for="(result, indexResult) in allResults"
    class="bloc-text margin-top-1 creation-element zone-element zone-element-free"
    :key="indexResult">
    <div class="zone-header">
      <img
        class="zone-icon img-rounded"
        :src="result.image"
        alt="">
      <div class="text-center margin-left-1">
        <h2>{{ result.libelle }}</h2>
        <span>(<b>{{ getPourcentResult(result.code) }}%</b> des mages)</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./ResultsSection.ts"></script>
