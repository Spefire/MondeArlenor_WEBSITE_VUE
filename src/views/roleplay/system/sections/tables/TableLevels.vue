<template>
  <table class="layout-bloc margin-top-1">
    <thead>
      <tr>
        <th class="col text-bold">Niveau</th>
        <th class="col">Vie max</th>
        <th class="col">Caractéristiques</th>
        <th class="col">Compétences</th>
        <th class="col">Pouvoirs</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="col text-bold">1</td><td class="col">-</td><td class="col">-</td><td class="col">-</td><td class="col">-</td>
      </tr>
      <tr>
        <td class="col text-bold">2</td><td class="col">+1</td><td class="col">-</td><td class="col">-</td><td class="col">-</td>
      </tr>
      <tr>
        <td class="col text-bold">3</td><td class="col">-</td><td class="col">-</td><td class="col">+1</td><td class="col">-</td>
      </tr>
      <tr>
        <td class="col text-bold">4</td><td class="col">+1</td><td class="col">-</td><td class="col">-</td><td class="col">-</td>
      </tr>
      <tr>
        <td class="col text-bold">5</td><td class="col">-</td><td class="col">+1</td><td class="col">-</td><td class="col">+2 (2ème classe)</td>
      </tr>
      <tr>
        <td class="col text-bold">6</td><td class="col">+1</td><td class="col">-</td><td class="col">-</td><td class="col">-</td>
      </tr>
      <tr>
        <td class="col text-bold">7</td><td class="col">-</td><td class="col">-</td><td class="col">-</td><td class="col">+1</td>
      </tr>
      <tr>
        <td class="col text-bold">8</td><td class="col">+1</td><td class="col">-</td><td class="col">-</td><td class="col">-</td>
      </tr>
      <tr>
        <td class="col text-bold">9</td><td class="col">-</td><td class="col">-</td><td class="col">+1</td><td class="col">-</td>
      </tr>
      <tr>
        <td class="col text-bold">10</td><td class="col">+1</td><td class="col">+1</td><td class="col">+1</td><td class="col">+1</td>
      </tr>
    </tbody>
  </table>

  <table class="layout-bloc margin-top-1">
    <thead>
      <tr>
        <th class="col text-bold">Niveau</th>
        <th class="col">Vie max</th>
        <th class="col">Caractéristiques</th>
        <th class="col">Compétences</th>
        <th class="col">Pouvoirs</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="col text-bold">11</td><td class="col">-</td><td class="col">-</td><td class="col">-</td><td class="col">+1</td>
      </tr>
      <tr>
        <td class="col text-bold">12</td><td class="col">+1</td><td class="col">-</td><td class="col">-</td><td class="col">-</td>
      </tr>
      <tr>
        <td class="col text-bold">13</td><td class="col">-</td><td class="col">-</td><td class="col">+1</td><td class="col">-</td>
      </tr>
      <tr>
        <td class="col text-bold">14</td><td class="col">+1</td><td class="col">-</td><td class="col">-</td><td class="col">-</td>
      </tr>
      <tr>
        <td class="col text-bold">15</td><td class="col">-</td><td class="col">+1</td><td class="col">-</td><td class="col">+1</td>
      </tr>
      <tr>
        <td class="col text-bold">16</td><td class="col">+1</td><td class="col">-</td><td class="col">-</td><td class="col">-</td>
      </tr>
      <tr>
        <td class="col text-bold">17</td><td class="col">-</td><td class="col">-</td><td class="col">-</td><td class="col">+1</td>
      </tr>
      <tr>
        <td class="col text-bold">18</td><td class="col">+1</td><td class="col">-</td><td class="col">-</td><td class="col">-</td>
      </tr>
      <tr>
        <td class="col text-bold">19</td><td class="col">-</td><td class="col">-</td><td class="col">+1</td><td class="col">-</td>
      </tr>
      <tr>
        <td class="col text-bold">20</td><td class="col">+1</td><td class="col">+1</td><td class="col">-</td><td class="col">+1</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TableLevels",
});
</script>