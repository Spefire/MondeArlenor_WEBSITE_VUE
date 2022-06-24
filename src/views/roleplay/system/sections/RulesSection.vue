<template>
  <div class="bloc-text margin-top-1 text-justify">
    &emsp;
    Le système de jeu est une partie importante du jeu de rôles, puisque c’est grâce à lui que vous savez si votre personnage,
    au cours du jeu, réussit ou non les actions qu’il entreprend.
  </div>
  <div class="bloc-text onglets-nav margin-top-1">
    <span
      class="onglets-nav-item"
      :class="{ selected : systemChoice === 1 }"
      @click="changeSystemChoice(1)">
      1) Les tests et difficultés
    </span>
    <span
      class="onglets-nav-item"
      :class="{ selected : systemChoice === 2 }"
      @click="changeSystemChoice(2)">
      2) Le combat et les actions possibles
    </span>
    <span
      class="onglets-nav-item"
      :class="{ selected : systemChoice === 3 }"
      @click="changeSystemChoice(3)">
      3) L'expérience et les niveaux
    </span>
  </div>
  <template v-if="systemChoice === 1">
    <div class="bloc-text margin-top-1 text-justify">
      &emsp;
      Le <b>test classique</b> qui détermine si un personnage réussit ou non une action se réalise de la façon suivante :
      le Maitre du Jeu <b>détermine quelle caractéristique de base du personnage est concernée</b>
      (Force, Habileté, Intellect, Ténacité, Charisme, Magie)
      ensuite le joueur lance autant de dés à 6 faces qu’il a de points dans la caractéristique,
      additionne les résultats, puis rajoute à la fin tous les points bonus ou malus
      (dûs aux compétences, aux équipements ou aux effets appliqués sur le personnage).
      <br>&emsp;
      Le MJ compare ensuite le total à la difficulté nécessaire pour la résolution du test.
      Si le total est supérieur ou égal à cette difficulté, le joueur réussit son action.
      <br>
      <br>&emsp;
      Note : Une <b>réussite critique</b>, c'est quand tous les dés lancés <b>affichent un 6</b>.
      Le joueur peut alors <b>lancer un dé supplémentaire</b> afin d'améliorer son score.
      <br>&emsp;
      Note : Un <b>échec critique</b>, c'est quand tous les dés lancés <b>affichent un 1</b>.
      Le joueur <b>rate alors automatiquement son test</b>, et le MJ peut décider d'y <b>ajouter une catastrophe</b> en plus de son échec.
    </div>
          
    <div class="bloc-text margin-top-1 text-center">
      <div class="margin-bottom-1">
        <b>Action simple : Difficulté 6</b><br>
        La majorité des personnages peut le faire rapidement, et un spécialiste n’éprouve aucune difficulté.<br>
        <i>Exemple : Obtenir des informations sur une légende urbaine bien connue.</i>
      </div>
      <div class="text-center margin-bottom-1">
        <b>Action complexe : Difficulté 14</b><br>
        Ce genre d’action pose de sérieux problèmes aux profanes, mais les personnes entraînées ou naturellement douées les réussissent rapidement.<br>
        <i>Exemple : Conduire un attelage de nuit sur une route cahoteuse.</i>
      </div>
      <div class="text-center margin-bottom-1">
        <b>Action difficile : Difficulté 20</b><br>
        Quasi impossible sans formation à moins de circonstances favorables ou d’un don particulièrement marqué,
        ces actions n’ont de bonne chance d’être réussies que par les spécialistes.<br>
        <i>Exemple : Trouver de quoi se nourrir en hiver pendant plusieurs semaines dans un bois profond.</i>
      </div>
      <div class="text-center">
        <b>Action épique : Difficulté 30 et plus</b><br>
        Seule une poignée de personnes peuvent espérer réussir un tel défi, qui demande des aptitudes quasi surnaturelles.<br>
        <i>Exemple : Au cours d’une réception, voler la couronne de la Reine, qu’elle porte sur la tête, au vu de tous et sans se faire remarquer.</i>
      </div>
    </div>

    <ExpandBloc
      :bloc-title="'Exemple n°1'"
      :bloc-state="exampleChoice === 1"
      @toggle="changeExampleChoice(1)">
      <b>Hélios</b> cherche dans une bibliothèque une information sur une plante inconnue.<br>
      Si le livre peut donner l'information, le MJ demandera un test d'<b>Intellect</b>.<br>
      Hélios a <b>3 en Intellect</b>, il lance <b>3D6</b> et fait... <b>4,5,2 pour un résultat de 11</b>.<br>
      Hélios possède une <b>compétence "Rat de bibliothèque"</b> qui lui donne un <b>bonus +4</b> dans la réalisation de cette action.<br>
      En dehors de ça, Hélios ne possède pas d'effet magique, ni d'équipement qui lui donnerait un autre bonus ou un malus pour cette action.<br>
      <b>Le total est donc 11 + 4 = 15.</b><br>
      Le MJ avait décidé que pour trouver cette information, c'était une <b>action complexe (difficulté à 14)</b>.<br>
      <b>Hélios a réussi</b>, il trouve que la plante inconnue est un Hibicus moscheutos.
    </ExpandBloc>

    <ExpandBloc
      :bloc-title="'Exemple n°2'"
      :bloc-state="exampleChoice === 2"
      @toggle="changeExampleChoice(2)">
      <b>Ophéliz</b> cherche à trancher les chaînes d'un prisonnier avec son épée.<br>
      C'est une épée longue (donc lourde), le MJ demandera un test de <b>Force</b>.<br>
      Ophéliz a <b>2 en Force</b>, elle lance <b>2D6</b> et fait... <b>6 et 6</b> ! C'est une <b>réussite critique</b> !
      Elle a le droit de relancer un dé pour augmenter son score, et fait... <b>5, pour un résultat de 17</b>.<br>
      Ophéliz possède une <b>compétence "Armes à une main (épées)"</b> qui lui donne un <b>bonus +4</b> dans la réalisation de cette action.<br>
      Elle possède en plus un <b>effet magique</b> sur son arme (qui donne un <b>bonus +2</b> sans condition).<br>
      Et malheureusement pour Ophéliz, dans la prison, il fait nuit et il n'y a pas d'éclairage : le MJ décide alors qu'elle a un <b>malus -4</b> pour cette action.<br>
      <b>Le total est donc 17 + 4 + 2 - 4 = 19.</b><br>
      Le MJ avait décidé que pour trancher cette chaîne d'un seul coup, c'était une <b>action épique (difficulté à 30)</b>.<br>
      <b>Ophéliz n'a pas réussi</b>, mais la chaîne s'est un peu abîmée. Le MJ peut lui dire qu'à force la chaîne cédera peut-être...
    </ExpandBloc>
  </template>
  <template v-if="systemChoice === 2">
    <div class="bloc-text margin-top-1 text-justify">
      &emsp;
      Toute personne est dotée de capacités de base qui lui sont inhérentes et qu’il peut utiliser de bien des manières.
      Ces aptitudes naturelles sont définies par cinq <b>caractéristiques</b> distinctes, chacune évaluée sur une échelle allant de 1 à 5.
      <br>&emsp;
      Un score de 1 dans une caractéristique indique une vraie faiblesse dans le domaine concerné,
      tandis qu’un 2 place le personnage dans la moyenne, ni plus ni moins.
      A partir de 3, la personne dispose d’une facilité particulière dans la caractéristique concernée,
      et un 4 indique des facultés exceptionnelles. Enfin, un score de 5 représente le maximum des capacités :
      seuls quelques très rares individus atteignent ce score.
      <br>&emsp;
      A la création de votre personnage, <b>chaque caractéristique est déjà à 1 et ne peut dépasser 5</b>.
      Vous pouvez ensuite répartir 8 points supplémentaires, pour un total donc de 13 points.
    </div>

    <ExpandBloc
      :bloc-title="'L\'Initiative'"
      :bloc-state="fightChoice === 1"
      @toggle="changeFightChoice(1)">
      <span
        v-html="caractDescriptionEnum.Force.Libelle" />
    </ExpandBloc>
        
    <ExpandBloc
      :bloc-title="
        'Les actions courtes'"
      :bloc-state="fightChoice === 2"
      @toggle="changeFightChoice(2)">
      <span
        v-html="caractDescriptionEnum.Habilete.Libelle" />
    </ExpandBloc>
        
    <ExpandBloc
      :bloc-title="
        'Les actions longues'"
      :bloc-state="fightChoice === 3"
      @toggle="changeFightChoice(3)">
      <span
        v-html="caractDescriptionEnum.Intellect.Libelle" />
    </ExpandBloc>

    <ExpandBloc
      :bloc-title="'Les états et affections diverses'"
      :bloc-state="fightChoice === 4"
      @toggle="changeFightChoice(4)">
      <span
        v-html="caractDescriptionEnum.Charisme.Libelle" />
    </ExpandBloc>
  </template>
  <template v-if="systemChoice === 3">
    <div class="bloc-text margin-top-1 text-justify">
      &emsp;
      Chaque <b>race</b> possède ses avantages et ses inconvénients, ainsi qu'une certaine difficulté
      ou facilité à être jouée dans le Monde d'Arlénor.
      Mieux vaut privilégier les races les plus simples pour les nouveaux joueurs,
      et les plus complexes pour les amateurs de risques.
      Les <b>races</b> sont présentées ici dans l'ordre de difficulté croissante.<br>
      <br>
      Note : Les Célestiens ne sont pas une race jouable vu la différence de magie qu'ils utilisent
      et le lieu où ils se trouvent.
    </div>
  </template>
</template>

<script lang="ts" src="./RulesSection.ts"></script>
