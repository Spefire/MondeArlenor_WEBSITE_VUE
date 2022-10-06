<template>
  <table class="layout-bloc margin-top-1">
    <thead>
      <tr>
        <th class="col text-bold">Marge</th>
        <th class="col">Dégâts</th>
        <th class="col">Durée de l'effet</th>
        <th class="col">Malus (caract)</th>
        <th class="col">Malus (total)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="col text-bold">0-3</td>
        <td class="col">1</td>
        <td class="col">1 tour</td>
        <td class="col">0</td>
        <td class="col">-2</td>
      </tr>
      <tr>
        <td class="col text-bold">4-8</td>
        <td class="col">2</td>
        <td class="col">2 tours</td>
        <td class="col">-1</td>
        <td class="col">-4</td>
      </tr>
      <tr>
        <td class="col text-bold">9-13</td>
        <td class="col">3</td>
        <td class="col">3 tours</td>
        <td class="col">-2</td>
        <td class="col">-6</td>
      </tr>
      <tr>
        <td class="col text-bold">14-18</td>
        <td class="col">5</td>
        <td class="col">5 tours</td>
        <td class="col">-3</td>
        <td class="col">-10</td>
      </tr>
      <tr>
        <td class="col text-bold">19-25</td>
        <td class="col">8</td>
        <td class="col">8 tours</td>
        <td class="col">-5</td>
        <td class="col">-16</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TableMarges",
});
</script>