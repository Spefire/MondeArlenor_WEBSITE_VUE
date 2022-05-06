<template>
  <div class="expand-bloc margin-top-1 text-justify">
    <div
      class="expand-bloc-title"
      :class="{ selected : blocState }"
      @click="toggleState()">
      {{ blocTitle }}
    </div>
    <div
      class="expand-bloc-content"
      :class="{ selected : blocState }">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped src="./ExpandBloc.scss"></style>
<script lang="ts" src="./ExpandBloc.ts"></script>
