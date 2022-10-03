<template>
  <tr class="table-line selected">
    <td colspan="4">
      <p>
        <i>
          <span title="Type de compétence">{{ skill.type.Libelle }}</span>
          &nbsp;•&nbsp;
          <i
            class="icon icon-dice"
            title="Caractéristiques concernées" />&nbsp;
          <span title="Caractéristiques concernées">{{ skill.nameCaracts }}</span>
        </i>
        <br>
        {{ skill.description ? skill.description : "Aucune description disponible" }}
      </p>
    </td>
  </tr>
</template>

<script lang="ts" src="./SkillsDescription.ts"></script>