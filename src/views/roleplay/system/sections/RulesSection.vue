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
      2) Les réussites et les échecs
    </span>
    <span
      class="onglets-nav-item"
      :class="{ selected : systemChoice === 3 }"
      @click="changeSystemChoice(3)">
      3) Le combat et les actions possibles
    </span>
    <span
      class="onglets-nav-item"
      :class="{ selected : systemChoice === 4 }"
      @click="changeSystemChoice(4)">
      4) Les soins et guérison
    </span>
    <span
      class="onglets-nav-item"
      :class="{ selected : systemChoice === 5 }"
      @click="changeSystemChoice(5)">
      5) Les altérations d'états
    </span>
    <span
      class="onglets-nav-item"
      :class="{ selected : systemChoice === 6 }"
      @click="changeSystemChoice(6)">
      6) L'expérience et les niveaux
    </span>
  </div>
  <template v-if="systemChoice === 1">
    <div class="layout-bloc margin-top-1 text-justify">
      &emsp;
      Le <b>test classique</b> qui détermine si un personnage réussit ou non une action se réalise de la façon suivante :
      le Maitre du Jeu <b>détermine quelle caractéristique de base du personnage est concernée</b>
      (Force, Habileté, Intellect, Ténacité, Charisme, Magie)
      ensuite le joueur prépare autant de dés à 6 faces qu’il a de points dans la caractéristique,
      en ajoutant / enlèvant autant de dés bonus / malus qu'il pourrait avoir à côté
      (dûs aux compétences, aux équipements ou aux effets appliqués sur le personnage).
      <br>&emsp;
      Le MJ annonce aussi la difficulté rencontrée (Simple, Standard, Complexe, Légendaire).
      Cela déterminera le nombre de dés gagnants que le joueur doit réaliser pour espérer la réussite de son action.
      <br>
      <br>&emsp;
      Note : Un <b>dé gagnant</b>, c'est quand un dé affiche un 4, un 5 ou un 6.
      <br>&emsp;
      Note : Un <b>dé perdant</b>, c'est quand un dé affiche un 1, un 2 ou un 3.
    </div>
          
    <div class="layout-bloc margin-top-1 text-center">
      <div class="margin-bottom-1">
        <b>Difficulté simple : 1 dé gagnant</b><br>
        La majorité des personnages peut le faire rapidement, et un spécialiste n’éprouve aucune difficulté.<br>
        <i>Exemple : Obtenir des informations sur une légende urbaine bien connue.</i>
      </div>
      <div class="text-center margin-bottom-1">
        <b>Difficulté standard : 2 dés gagnants</b><br>
        Ce genre d’action pose de sérieux problèmes aux profanes, mais les personnes entraînées ou naturellement douées les réussissent rapidement.<br>
        <i>Exemple : Conduire un attelage de nuit sur une route cahoteuse.</i>
      </div>
      <div class="text-center margin-bottom-1">
        <b>Difficulté complexe : 3 dés gagnants</b><br>
        Quasi impossible sans formation à moins de circonstances favorables ou d’un don particulièrement marqué,
        ces actions n’ont de bonne chance d’être réussies que par les spécialistes.<br>
        <i>Exemple : Trouver de quoi se nourrir en hiver pendant plusieurs semaines dans un bois profond.</i>
      </div>
      <div class="text-center">
        <b>Difficulté légendaire : 4 dés gagnants</b><br>
        Seule une poignée de personnes peuvent espérer réussir un tel défi, qui demande des aptitudes quasi surnaturelles.<br>
        <i>Exemple : Au cours d’une réception, voler la couronne de la Reine, qu’elle porte sur la tête, au vu de tous et sans se faire remarquer.</i>
      </div>
    </div>

    <ExpandBloc
      :bloc-title="'Exemple n°1'"
      :bloc-state="exampleChoice === 1"
      @toggle="changeExampleChoice(1)">
      <b>Hélios</b> cherche dans une bibliothèque une information sur une plante inconnue.<br>
      <br>
      Si le livre peut donner l'information, le MJ demandera un lancé en <b>Intellect</b> pour une difficulté <b>Simple</b>.<br>
      Hélios a <b>3 en Intellect</b>, possède une <b>compétence "Rat de bibliothèque"</b>
      qui lui donne <b>1 dé bonus</b> dans la réalisation de cette action.<br>
      En dehors de ça, Hélios ne possède pas d'effet magique, ni d'équipement qui lui donnerait un autre avantage ou désavantage pour cette action.<br>
      <br>
      Il lance alors <b>(3+1)D6 soit 4D6</b> et fait... <b>3,4,5,2 soit 2 dés gagnants</b>.<br>
      <b>Hélios réussit !</b><br>
      Comme son score maximum est à 5, sa réussite est une réussite simple : pas de complication.<br>
      Hélios trouve alors que la plante inconnue est un Hibicus moscheutos.
    </ExpandBloc>

    <ExpandBloc
      :bloc-title="'Exemple n°2'"
      :bloc-state="exampleChoice === 2"
      @toggle="changeExampleChoice(2)">
      <b>Ophéliz</b> cherche à trancher les chaînes d'un prisonnier avec son épée.<br>
      <br>
      C'est une épée longue (donc lourde), le MJ demandera un lancé de <b>Force</b> et détermine la difficulté à <b>Complexe</b>.<br>
      Ophéliz possède une <b>compétence "Armes à une main (épées)"</b> qui lui donne <b>1 dé bonus</b> dans la réalisation de cette action.<br>
      Elle possède en plus un <b>effet magique</b> sur son arme (qui donne <b>1 dé bonus</b> sans condition).<br>
      Et malheureusement pour Ophéliz, dans la prison, il fait nuit et il n'y a pas d'éclairage : le MJ décide alors qu'elle a <b>1 dé malus</b> pour cette action.<br>
      <br>
      Ophéliz a <b>2 en Force</b>, elle alors lance <b>(2+1+1-1)D6 soit 3D6</b> et fait... <b>1,4,3</b> soit 1 dé gagnant.<br>
      <b>Ophéliz échoue...</b><br>
      Comme son score maximum est à 4, son échec est un échec à conséquence.<br>
      Le MJ décide que dans sa tentative, Ophéliz blesse légèrement le prisonnier.<br>
    </ExpandBloc>
  </template>
  <template v-if="systemChoice === 2">
    <div class="layout-bloc margin-top-1 text-justify">
      &emsp;
      Pour les <b>tests de difficulté</b>, on utilisera cette grille de réussites et d'échec comme référence :
      ces tests concernent généralement le personnage lui-même, ou des actions sur des cibles alliées (qui n'opposent pas de résistance).
      <br>&emsp;
      Pour les <b>tests d'opposition</b>, on utilisera la même grille : le MJ jugera simplement de la difficulté de l'opposant.<br>
      <i>
        Exemple : Pour un type d'ennemi, l'esquiver sera une difficulté Complexe, mais l'attaquer sera une difficulté Simple.<br>
        Autre exemple : Forcer cette porte sera une difficulté Standard.
      </i>
      <TableDifficulties />
      <br>
      &emsp;<b>Réussite critique</b> : L'action est réussie de manière exceptionnelle, obtenant un résultat au-delà des attentes.<br>
      &emsp;<b>Réussite simple</b> : L'action est réussie sans complication ni coût supplémentaire.<br>
      &emsp;<b>Réussite à coût</b> : L'action est réussie, mais avec des complications mineures ou des coûts supplémentaires.<br>
      &emsp;<b>Échec simple</b> : L'action échoue, mais sans conséquence.<br>
      &emsp;<b>Échec à conséquence</b> : L'action échoue, mais avec des conséquences mineures.<br>
      &emsp;<b>Échec critique</b> : L'action est un échec total, avec des conséquences graves.
    </div>
  </template>
  <template v-if="systemChoice === 3">
    <div class="layout-bloc margin-top-1 text-justify">
      En cours d'écriture...
    </div>

    <ExpandBloc
      :bloc-title="'Les actions courtes'"
      :bloc-state="fightChoice === 1"
      @toggle="changeFightChoice(1)">
      <span>Les actions courtes</span>
    </ExpandBloc>
        
    <ExpandBloc
      :bloc-title="'Les actions longues'"
      :bloc-state="fightChoice === 2"
      @toggle="changeFightChoice(2)">
      <span>Les actions longues</span>
    </ExpandBloc>
  </template>
  <template v-if="systemChoice === 4">
    <div class="layout-bloc margin-top-1 text-justify">
      En cours d'écriture...
    </div>
  </template>
  <template v-if="systemChoice === 5">
    <div class="layout-bloc margin-top-1 text-justify">
      &emsp;
      Voici la liste des différents états possibles.
      <b>Par défaut, les états ne dure qu'un seul tour.</b>
      Sinon la durée de leur effet est définie par l'action ou le pouvoir qui l'a engendré.
      Exception pour le Renversement qui ne dure forcément qu'un tour de combat, et la Pétrification qui dure indéfiniement.
      <TableEffects />
    </div>
  </template>
  <template v-if="systemChoice === 6">
    <div class="layout-bloc margin-top-1 text-justify">
      &emsp;
      L'expérience d'un personnage du Monde d'Arlénor, ne se définit pas au nombre d'ennemis tués,
      ni au nombre de kilomètres parcourus...<br>
      <b>Un personnage gagne de l'expérience à chaque aventure vécue :</b> en général, il gagne 1 niveau par scénario terminé.<br>    
      <TableLevels />
    </div>
  </template>
</template>

<script lang="ts" src="./RulesSection.ts"></script>
