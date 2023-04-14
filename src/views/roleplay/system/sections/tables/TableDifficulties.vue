<template>
  <table class="layout-bloc margin-top-1">
    <thead>
      <tr>
        <th class="col text-bold">Difficulté</th>
        <th class="col">Échec critique</th>
        <th class="col">Échec à conséquence</th>
        <th class="col">Échec simple</th>
        <th class="col">Réussite à coût</th>
        <th class="col">Réussite simple</th>
        <th class="col">Réussite critique</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="col text-bold">Simple<br>(1 dé gagnant)</td>
        <td class="col">Score max à 1</td>
        <td class="col">Score max à 2</td>
        <td class="col">Score max à 3</td>
        <td class="col">Score max à 4</td>
        <td class="col">Score max à 5</td>
        <td class="col">Score max à 6</td>
      </tr>
      <tr>
        <td class="col text-bold">Standard<br>(2 dés gagnants)</td>
        <td class="col">Max 1-2</td>
        <td class="col">Max 3-4</td>
        <td class="col">Max 5-6</td>
        <td class="col">Max 4</td>
        <td class="col">Max 5</td>
        <td class="col">Max 6</td>
      </tr>
      <tr>
        <td class="col text-bold">Complexe<br>(3 dés gagnants)</td>
        <td class="col">Max 1-2</td>
        <td class="col">Max 3-4</td>
        <td class="col">Max 5-6</td>
        <td class="col">Max 4</td>
        <td class="col">Max 5</td>
        <td class="col">Max 6</td>
      </tr>
      <tr>
        <td class="col text-bold">Légendaire<br>(4 dés gagnants)</td>
        <td class="col">Max 1-2</td>
        <td class="col">Max 3-4</td>
        <td class="col">Max 5-6</td>
        <td class="col">Max 4</td>
        <td class="col">Max 5</td>
        <td class="col">Max 6</td>
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