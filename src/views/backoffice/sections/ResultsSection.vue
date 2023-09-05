<template>
  <div class="layout-row flex-wrap margin-top-1">
    <div
      v-for="(result, indexResult) in allResults"
      class="layout-bloc layout-col-45 margin-top-1 section is-height-free"
      :key="indexResult">
      <div class="section-header">
        <img
          class="section-icon img-rounded"
          :src="result.image"
          alt="">
        <div class="text-center margin-left-1">
          <h2 class="margin-top-0">{{ result.libelle }}</h2>
          <span>(<b>{{ getPourcentResult(result.code) }}%</b> des mages)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./ResultsSection.ts"></script>
