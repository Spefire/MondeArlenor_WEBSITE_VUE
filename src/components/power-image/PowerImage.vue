<template>
  <div
    class="power-img-layout"
    :class="{ before: power.codeRank === powerRanksEnum.Rare.Code
                || power.codeRank === powerRanksEnum.TresRare.Code,
              after: power.codeRank === powerRanksEnum.TresRare.Code }"
    :title="power.type.Libelle">
    <img
      v-if="power.image"
      class="power-img"
      :src="power.image"
      :alt="power.type.Libelle">
    <img
      v-if="power.isVerified"
      class="power-img-ok"
      src="./../../assets/icons/powers/ok.png">
  </div>
</template>

<script lang="ts" src="./PowerImage.ts"></script>