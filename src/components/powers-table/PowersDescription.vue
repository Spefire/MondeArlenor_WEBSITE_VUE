<template>
  <tr class="table-line selected">
    <td colspan="5">
      <p>
        <i>
          <span title="Type de pouvoir">{{ power.type.Libelle }}</span>
          &nbsp;•&nbsp;
          <i
            class="icon icon-enlarge"
            title="Portée du pouvoir" />&nbsp;
          <span title="Portée du pouvoir">{{ power.range.Libelle }}</span>
          &nbsp;•&nbsp;
          <i
            class="icon icon-hour-glass"
            title="Durée du pouvoir" />&nbsp;
          <span title="Durée du pouvoir">{{ power.duration.Libelle }}</span>
          &nbsp;•&nbsp;
          <i
            class="icon icon-dice"
            title="Tests du pouvoir" />&nbsp;
          <span title="Tests du pouvoir">{{ power.tests.Libelle }}</span>
          &nbsp;•&nbsp;
          <i class="icon icon-spinner9" />&nbsp;
          <span>{{ power.chaneling ? "Avec" : "Sans" }} canalisation</span>
        </i>
        <br>
        {{ power.description ? power.description : "Aucune description disponible" }}
      </p>
    </td>
  </tr>
</template>

<script lang="ts" src="./PowersDescription.ts"></script>