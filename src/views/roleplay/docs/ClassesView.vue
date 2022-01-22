<template>
  <div class="layout-view creation">
    
    <div class="layout-center large">
      
      <h2>{{ currentClass?.name }}</h2>
      
      <p>{{ currentClass?.description }}</p>

      <SkillsTable :current-class="currentClass" />

    </div>
  </div>
</template>

<script lang="ts" src="./ClassesView.ts"></script>
