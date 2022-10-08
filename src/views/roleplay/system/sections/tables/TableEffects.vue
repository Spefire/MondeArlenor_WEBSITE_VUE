<template>
  <table class="layout-bloc margin-top-1">
    <thead>
      <tr>
        <th class="col-20 text-bold">Altérations d’actions</th>
        <th class="col-50">Description</th>
        <th class="col-30">Effet</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="col-20 text-bold">Atrophie</td>
        <td class="col-50">Empêche le personnage affligé d'attaquer, d'utiliser ses mains.</td>
        <td class="col-30">-</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Enchevêtrement / Handicap</td>
        <td class="col-50">Empêche le personnage de se déplacer et donne un malus.</td>
        <td class="col-30">Malus -4 aux esquives</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Plan étheré</td>
        <td class="col-50">Le personnage est dans un autre plan, ne pouvant pas interagir avec le réel et inversement.</td>
        <td class="col-30">-</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Renversement</td>
        <td class="col-50">Le personnage est à terre et incapable de se déplacer. Se relever prend un tour au combat.</td>
        <td class="col-30">-</td>
      </tr>
    </tbody>
  </table>

  <table class="layout-bloc margin-top-1">
    <thead>
      <tr>
        <th class="col-20 text-bold">Altérations mentales</th>
        <th class="col-50">Description</th>
        <th class="col-30">Effet</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="col-20 text-bold">Cécité</td>
        <td class="col-50">Réduit la portée et donne un malus.</td>
        <td class="col-30">Malus -4 aux actions de précision</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Charme</td>
        <td class="col-50">Retourne temporairement un personnage contre ses alliés.</td>
        <td class="col-30">-</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Folie / Démence</td>
        <td class="col-50">Le personnage est fou de rage et attaque l'ami ou ennemi le plus proche, sans distinction.</td>
        <td class="col-30">-</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Provocation</td>
        <td class="col-50">La cible est obligée d'attaquer le lanceur.</td>
        <td class="col-30">-</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Silence</td>
        <td class="col-50">Empêche le personnage d'utiliser ses cristaux.</td>
        <td class="col-30">-</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Sommeil</td>
        <td class="col-50">La cible endormie est incapable d'agir ou de se déplacer.</td>
        <td class="col-30">-</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Terreur</td>
        <td class="col-50">Le personnage s'enfuit de terreur et donne un malus.</td>
        <td class="col-30">Malus -2 aux actions</td>
      </tr>
    </tbody>
  </table>

  <table class="layout-bloc margin-top-1">
    <thead>
      <tr>
        <th class="col-20 text-bold">Altérations diverses</th>
        <th class="col-50">Description</th>
        <th class="col-30">Effet</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="col-20 text-bold">Bénédiction</td>
        <td class="col-50">Le personnage voit toutes ses caractéristiques augmenter de 1.</td>
        <td class="col-30">Bonus +1 aux caractéristiques</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Empoisonnement / Hémorragie</td>
        <td class="col-50">Inflige des dégâts bruts à chaque tour.</td>
        <td class="col-30">1 PV chaque tour</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Infection</td>
        <td class="col-50">Le personnage est contagieux et donne un malus.</td>
        <td class="col-30">Malus -2 pour toute action</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Maladie</td>
        <td class="col-50">Donne un malus.</td>
        <td class="col-30">Malus -2 pour toute action</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Putréfaction</td>
        <td class="col-50">Le personnage subit des dégâts à la place des soins.</td>
        <td class="col-30">-</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Maudit</td>
        <td class="col-50">Le personnage voit toutes ses caractéristiques baisser de 1.</td>
        <td class="col-30">Malus -1 aux caractéristiques</td>
      </tr>
    </tbody>
  </table>

  <table class="layout-bloc margin-top-1">
    <thead>
      <tr>
        <th class="col-20 text-bold">Altérations élémentaires</th>
        <th class="col-50">Description</th>
        <th class="col-30">Effet</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="col-20 text-bold">Brûlure</td>
        <td class="col-50">Inflige des dégâts bruts à chaque tour.</td>
        <td class="col-30">1 PV chaque tour</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Etat de choc</td>
        <td class="col-50">Le personnage est choqué par l'électricité et donne un malus. Subir Humidité provoque Etourdissement.</td>
        <td class="col-30">Malus -2 aux actions</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Etourdissement</td>
        <td class="col-50">Paralysé par l'électricité. Incapacité d'agir.</td>
        <td class="col-30">-</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Coup de froid</td>
        <td class="col-50">Le personnage est refroidi et donne un malus. Subir Humidité provoque Gel.</td>
        <td class="col-30">Malus -2 aux actions</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Gel</td>
        <td class="col-50">Paralysé par le gel. Incapacité d'agir.</td>
        <td class="col-30">-</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Humidité</td>
        <td class="col-50">Subir Etat de choc après Humidité provoque Etourdissement. Subir Coup de froid provoque Gel.</td>
        <td class="col-30">-</td>
      </tr>
      <tr>
        <td class="col-20 text-bold">Pétrification</td>
        <td class="col-50">La cible est incapable de bouger et d'agir de manière permanente.</td>
        <td class="col-30">-</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TableEffects",
});
</script>