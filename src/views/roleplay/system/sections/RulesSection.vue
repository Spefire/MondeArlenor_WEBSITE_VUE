<template>
  <div class="layout-bloc margin-top-1 text-justify">
    &emsp;
    Le système de jeu est une partie importante du jeu de rôles, puisque c’est grâce à lui que vous savez si votre personnage,
    au cours du jeu, réussit ou non les actions qu’il entreprend.
  </div>
  <div class="onglets-nav margin-top-1">
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
    <div class="layout-bloc margin-top-1 text-justify">
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
          
    <div class="layout-bloc margin-top-1 text-center">
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
    <div class="layout-bloc margin-top-1 text-justify">
      &emsp;
      Pour les actions aux <b>tests de difficulté</b>, on utilisera cette grille comme référence.
      Ces tests concernent généralement le personnage lui-même, ou des actions sur des cibles alliées (qui n'opposent pas de résistance).
      <br>&emsp;
      <b>Note: les Soins ne sont applicables qu'une seule fois par blessure.</b>
      <TableDifficulties />
      <br>&emsp;
      Pour les actions aux <b>tests d'opposition</b>, on utilisera cette grille comme référence.
      Les différentes parties de l'action lancent leur dés, et la marge sera la différence entre les résultats.
      <TableMarges />
    </div>

    <ExpandBloc
      :bloc-title="`L'Initiative`"
      :bloc-state="fightChoice === 1"
      @toggle="changeFightChoice(1)">
      <span>L'Initiative</span>
    </ExpandBloc>
        
    <ExpandBloc
      :bloc-title="'Les actions courtes'"
      :bloc-state="fightChoice === 2"
      @toggle="changeFightChoice(2)">
      <span>Les actions courtes</span>
    </ExpandBloc>
        
    <ExpandBloc
      :bloc-title="'Les actions longues'"
      :bloc-state="fightChoice === 3"
      @toggle="changeFightChoice(3)">
      <span>Les actions longues</span>
    </ExpandBloc>

    <ExpandBloc
      :bloc-title="'Les états et affections diverses'"
      :bloc-state="fightChoice === 4"
      @toggle="changeFightChoice(4)">
      <span>Les états et affections diverses</span>
      <TableEffects />
    </ExpandBloc>
  </template>
  <template v-if="systemChoice === 3">
    <div class="layout-bloc margin-top-1 text-justify">
      &emsp;
      L'expérience d'un personnage du Monde d'Arlénor, ne se définit pas au nombre d'ennemis tués,
      ni au nombre de kilomètres parcourus...<br>
      <b>Un personnage gagne de l'expérience à chaque aventure vécue :</b> en général, il gagne 1 niveau par scénario terminé.<br>
      <br>
      Et à chaque niveau, voici comment le personnage évolue :<br>     
      <TableLevels />
    </div>
  </template>
</template>

<script lang="ts" src="./RulesSection.ts"></script>
