<template>
  <table class="layout-bloc margin-top-1">
    <thead>
      <tr>
        <th class="col text-bold">Difficulté</th>
        <th class="col">Soin</th>
        <th class="col">Durée de l'effet</th>
        <th class="col">Taille</th>
        <th class="col">Bonus (caract)</th>
        <th class="col">Bonus (total)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="col text-bold">Simple 6</td>
        <td class="col">1</td>
        <td class="col">0 tour</td>
        <td class="col">Petite</td>
        <td class="col">0</td>
        <td class="col">+2</td>
      </tr>
      <tr>
        <td class="col text-bold">Complexe 14</td>
        <td class="col">3</td>
        <td class="col">1 tour</td>
        <td class="col">Normale</td>
        <td class="col">+1</td>
        <td class="col">+4</td>
      </tr>
      <tr>
        <td class="col text-bold">Difficile 20</td>
        <td class="col">5</td>
        <td class="col">2 tours</td>
        <td class="col">Grande</td>
        <td class="col">+2</td>
        <td class="col">+6</td>
      </tr>
      <tr>
        <td class="col text-bold">Epique 30</td>
        <td class="col">8</td>
        <td class="col">4 tours</td>
        <td class="col">Immense</td>
        <td class="col">+4</td>
        <td class="col">+10</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TableDifficulties",
});
</script>