<template>
  <div class="layout-view system-view background-roleplay">
    <div class="layout-center large">
      <h2>Les composantes d'un personnage</h2>
      <p class="bloc-text margin-top-1 text-justify">
        &emsp;
        Un personnage est défini par deux choses : <b>ses caractéristiques</b> et <b>ses compétences</b> (spéciales ou sorts).
        Les caractéristiques définissent ce qu’est le personnage, et les compétences ce qu’il sait.
        Votre personnage sera plus ou moins fort, plus ou moins intelligent, plus ou moins adroit.
        Et c’est vous qui choisirez si, au cours de sa vie, il a appris à se battre, choisit un certain type de magie,
        ou s'il a préféré se tourner vers l'érudition, la médecine...
      </p>
      <div class="bloc-text system-nav margin-top-1">
        <span
          class="system-nav-item"
          :class="{ selected : persoChoice === 1 }"
          @click="changePersoChoice(1)">
          Les caractéristiques
        </span>
        <span
          class="system-nav-item"
          :class="{ selected : persoChoice === 2 }"
          @click="changePersoChoice(2)">
          Les valeurs dérivées
        </span>
        <span
          class="system-nav-item"
          :class="{ selected : persoChoice === 3 }"
          @click="changePersoChoice(3)">
          Les races jouables
        </span>
        <span
          class="system-nav-item"
          :class="{ selected : persoChoice === 4 }"
          @click="changePersoChoice(4)">
          Les compétences
        </span>
        <span
          class="system-nav-item"
          :class="{ selected : persoChoice === 5 }"
          @click="changePersoChoice(5)">
          Les cristaux évolutifs
        </span>
        <span
          class="system-nav-item"
          :class="{ selected : persoChoice === 6 }"
          @click="changePersoChoice(6)">
          Les finitions
        </span>
      </div>
      <template v-if="persoChoice === 1">
        <p class="bloc-text margin-top-1 text-justify">
          &emsp;
          Toute personne est dotée de capacités de base qui lui sont inhérentes et qu’il peut utiliser de bien des manières.
          Ces aptitudes naturelles sont définies par cinq caractéristiques distinctes, chacune évaluée sur une échelle allant de 1 à 5.
          <br>&emsp;
          Un score de 1 dans une caractéristique indique une vraie faiblesse dans le domaine concerné,
          tandis qu’un 2 place le personnage dans la moyenne, ni plus ni moins.
          A partir de 3, la personne dispose d’une facilité particulière dans la caractéristique concernée,
          et un 4 indique des facultés exceptionnelles. Enfin, un score de 5 représente le maximum des capacités :
          seuls quelques très rares individus atteignent ce score.
          <br>&emsp;
          A la création de votre personnage, <b>chaque caractéristique est déjà à 1 et ne peut dépasser 5</b>.
          Vous pouvez ensuite répartir 8 points supplémentaires, pour un total donc de 13 points.
        </p>
        <p class="bloc-text margin-top-1 text-justify">
          1) Vigueur<br>
          <br>
          Mélange de résistance physique et de puissance brute, la Vigueur évalue la forme physique de votre personnage.
          Cette caractéristique est importante pour les personnages combattants, les sportifs
          et tous ceux qui aiment se sortir de situations dangereuses.<br>
          Note : Une Vigueur à 1 donne 1 case de blessure à l'état « Indemne ».<br>
          Note : Une Vigueur à 5 donne 3 cases de blessure à l'état « Indemne ».<br>
          <br>
          1 : Fragile. Force et endurance limitées, vous vous fatiguez vite.<br>
          2 : Moyen. Vous n’avez de problème qu’avec des tours de force inhabituels.<br>
          3 : Costaud. Vous fatiguez rarement et réalisez des tours de force.<br>
          4 : Fort comme un bœuf. Peu de choses ou de personnes peuvent vous résister.<br>
          5 : Herculéen. Vous résistez à tout et rivalisez de puissance avec les ours.
        </p>
        <p class="bloc-text margin-top-1 text-justify">
          2) Habileté<br>
          <br>
          L’Habileté représente la capacité du personnage à s’acquitter de tâches de précision, sa finesse,
          sa dextérité, son talent pour viser ainsi que sa rapidité de réaction.
          C’est une aptitude inestimable pour les artisans, les voleurs, les danseurs et les tireurs de tout calibre.<br>
          <br>
          1 : Maladroit. Vous êtes un véritable éléphant dans un magasin de porcelaine.<br>
          2 : Moyen. Au moins, vous ne provoquez que rarement des catastrophes.<br>
          3 : Agile. Vous êtes doué de vos mains, et votre agilité vous sert dans bien des situations.<br>
          4 : Félin. Vos réflexes et votre souplesse tiennent davantage de l’animal que de l’humain.<br>
          5 : Gracieux. Vos mouvements sont tellement fluides qu’ils semblent irréels.
        </p>
        <p class="bloc-text margin-top-1 text-justify">
          3) Intellect<br>
          <br>
          Les capacités intellectuelles de votre personnage, sa capacité à analyser, retenir les informations
          et les réutiliser en temps utile. L'Intellect est utile aux tacticiens, aux érudits,
          aux scientifiques et aux enquêteurs.<br>
          <br>
          1 : Simplet. Vous comprenez l’essentiel, mais toutes les subtilités vous échappent.<br>
          2 : Moyen. Vous ne faites pas de miracles, mais vous vous en sortez honorablement.<br>
          3 : Vif. Vous comprenez vite, analysez de manière pertinente et savez vous adapter.<br>
          4 : Brillant. Vous comprenez rapidement ce que certains mettent des années à apprendre.<br>
          5 : Génie. Vous maniez facilement des notions que la majorité des gens sont incapables d’appréhender.
        </p>
        <p class="bloc-text margin-top-1 text-justify">
          4) Charisme<br>
          <br>
          La capacité à s’imposer aux autres, à leur inspirer de la confiance, du respect ou de la crainte,
          ainsi qu’à les manipuler. Le Charisme comprend bien plus que la beauté physique,
          et est l’atout principal des dirigeants, des séducteurs et de tous les menteurs invétérés.<br>
          <br>
          1 : Fade. Vous n’inspirez pas les autres et semblez parfois transparent à leurs yeux.<br>
          2 : Moyen. Vous vous faites des amis, comme tout le monde.<br>
          3 : Intéressant. Vous ne laissez pas les gens indifférents, et beaucoup vous apprécient.<br>
          4 : Captivant. Leader-né, votre personnalité attire les autres à vous.<br>
          5 : Fascinant. Vous pourriez amener n’importe qui à faire n’importe quoi pour vous. 
        </p>
        <p class="bloc-text margin-top-1 text-justify">
          5) Pouvoir<br>
          <br>
          Le Pouvoir est la caractéristique déterminant le niveau de facilité à utiliser
          la magie des cristaux du Monde d'Arlénor et à y résister.
          Les mages ont généralement un bon niveau dans cette caractéristique.
        </p>
      </template>
      <template v-if="persoChoice === 2">
        <p class="bloc-text margin-top-1 text-justify">
          &emsp;
          La santé d’un personnage détermine sa résistance aux coups et aux événements qui pourraient le blesser.
          Elle est indiquée par ses Points de Vie, ou PV.<br>
          <br>
          Indemne (+ de 6 PV) : Aucun malus<br>
          Blessé (2-5 PV) : - 1D6 aux jets<br>
          Au seuil de la mort (1 PV) : - 2D6 aux jets<br>
          <br>
          Note : Le nombre de PV max peut varier avec la Vigueur.<br>
          <br>&emsp;
          Lors de jets de combat ou de situations pouvant occasionner des blessures,
          le Maitre du Jeu interprétera le nombre de PV à enlever.
          Et lorsque les blessures s’accumulent, le personnage s’affaiblit petit à petit, ajoutant des malus à ses actions.
          <br>&emsp;
          Dans les cas extrêmes, certaines attaques n’ont pas besoin d’en passer par des tests quelconques.
          Un personnage armé d’une épée qui veut tuer un adversaire ligoté y parviendra directement,
          de même qu’un autre qui sera sous le point de chute d’un tir de catapulte n’a aucune chance de s’en tirer.
          Il faut faire preuve de logique.
        </p>
      </template>
      <template v-if="persoChoice === 3">
        <p class="bloc-text margin-top-1 text-justify">
          &emsp;
          Chaque race possède ses avantages et ses inconvénients, ainsi qu'une certaine difficulté
          ou facilité à être jouée dans le Monde d'Arlénor.
          Mieux vaut privilégier les races les plus simples pour les nouveaux joueurs,
          et les plus complexes pour les amateurs de risques.
          Les races sont présentées ici dans l'ordre de difficulté croissante.
        </p>
        <div class="docs-grid-list">
          <div
            v-for="(race, index) in allRaces"
            class="docs-grid-element"
            :key="index">
            <img
              class="img-rounded"
              :src="race.image"
              :alt="race.name">
            <div class="docs-grid-infos">
              <div class="docs-grid-header">
                <span class="text-bold">{{ race.name }}</span>
                <span
                  class="text-bold margin-left-05"
                  :class="getDifficultyColor(race)"
                  :title="getDifficultyLibelle(race)">•</span>
              </div>
              <p
                class="docs-grid-body"
                v-html="getDescription(race.description, 200)" />
            </div>
          </div>
        </div>
      </template>
      <template v-if="persoChoice === 4">
        <p class="bloc-text margin-top-1 text-justify">
          &emsp;
          Survivre en milieu hostile. Mentir. Utiliser un pouvoir élémentaire.
          Autant de savoir-faire qu’un personnage peut, ou non, développer au cours de sa vie.
          Cette section s’intéresse à ces compétences que les personnages apprennent ou non à utiliser
          et qui les différencient les uns des autres.
        </p>
        <SkillsTable />
      </template>
      <template v-if="persoChoice === 5">
        <div class="docs-grid-list">
          <div
            v-for="(grp, index) in allGroups"
            class="docs-grid-element"
            :key="index">
            <img
              class="img-rounded"
              :src="grp.image"
              :alt="grp.name">
            <div class="docs-grid-infos">
              <div class="docs-grid-header">
                <span
                  class="text-bold"
                  @click="changeGrp(grp.code)">
                  {{ grp.name }}
                </span>
                <i
                  class="margin-left-05"
                  :class="grp.role.icon + ' ' + grp.color"
                  :title="grp.role.name" />
              </div>
              <p class="docs-grid-body">{{ getDescription(grp.description) }}</p>
            </div>
          </div>
        </div>
        <div class="docs-grid-list">
          <div
            v-for="(spe, index) in allSpecialities"
            class="docs-grid-element"
            :key="index">
            <img
              :src="spe.image"
              :alt="spe.name">
            <div>
              <div class="docs-grid-header">
                <span
                  class="text-bold"
                  @click="changeSpe(spe.code)">
                  {{ spe.name }}
                </span>
                -
                <span class="text-italic">{{ spe.group.name }}</span>
                <i
                  class="margin-left-05"
                  :class="spe.group.role.icon + ' ' + spe.group.color"
                  :title="spe.group.role.name" />
              </div>
              <p class="docs-grid-body">{{ getDescription(spe.description) }}</p>
              <div class="margin-top-05 margin-bottom-05 hide-on-mobile">
                <ArrowButton
                  :link-path="'speciality'"
                  :link-query="{ spe: spe.code }" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>

  <div little-separator />

  <div class="layout-view background-roleplay">
    <div class="layout-center large">
      <h2>Les difficultés et les tests</h2>
    </div>
  </div>

  <div little-separator />

  <div class="layout-view background-roleplay">
    <div class="layout-center large">
      <h2>Le mode de combat</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./SystemView.scss"></style>
<script lang="ts" src="./SystemView.ts"></script>
