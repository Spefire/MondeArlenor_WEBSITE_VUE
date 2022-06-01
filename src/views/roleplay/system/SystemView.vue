<template>
  <div class="layout-view system-view background-roleplay">
    <div class="layout-center large">
      <h2>Les composantes d'un personnage</h2>
      <div class="bloc-text margin-top-1 text-justify">
        &emsp;
        Un personnage est défini par plusieurs choses : <b>ses caractéristiques</b> (et valeurs dérivées), <b>ses compétences principales</b>,
        <b>sa race</b> (parmi celles jouables), <b>son cristal évolutif</b> (compétences spéciales ou sorts), pour ensuite finir par quelques finitions.
        <br>&emsp;
        Les caractéristiques définissent ce qu’est le personnage, et les compétences ce qu’il sait.
        Votre personnage sera plus ou moins fort, plus ou moins intelligent, plus ou moins adroit.
        Et c’est vous qui choisirez si, au cours de sa vie, il a appris à se battre ou s'il a préféré se tourner vers l'érudition,
        ou encore, vers quel type de magie il s'est tourné...
      </div>
      <div class="bloc-text system-nav margin-top-1">
        <span
          class="system-nav-item"
          :class="{ selected : persoChoice === 1 }"
          @click="changePersoChoice(1)">
          1) Les caractéristiques
        </span>
        <span
          class="system-nav-item"
          :class="{ selected : persoChoice === 2 }"
          @click="changePersoChoice(2)">
          2) Les valeurs dérivées
        </span>
        <span
          class="system-nav-item"
          :class="{ selected : persoChoice === 3 }"
          @click="changePersoChoice(3)">
          3) Les races jouables
        </span>
        <span
          class="system-nav-item"
          :class="{ selected : persoChoice === 4 }"
          @click="changePersoChoice(4)">
          4) Les compétences principales
        </span>
        <span
          class="system-nav-item"
          :class="{ selected : persoChoice === 5 }"
          @click="changePersoChoice(5)">
          5) Les cristaux évolutifs
        </span>
        <span
          class="system-nav-item"
          :class="{ selected : persoChoice === 6 }"
          @click="changePersoChoice(6)">
          6) Les finitions
        </span>
      </div>
      <template v-if="persoChoice === 1">
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
          :bloc-title="'La Vigueur'"
          :bloc-state="caractChoice === 1"
          @toggle="changeCaractChoice(1)">
          <span
            v-html="caractDescriptionEnum.Vigueur.Libelle" />
        </ExpandBloc>
        
        <ExpandBloc
          :bloc-title="
            'L\'Habileté'"
          :bloc-state="caractChoice === 2"
          @toggle="changeCaractChoice(2)">
          <span
            v-html="caractDescriptionEnum.Habilete.Libelle" />
        </ExpandBloc>
        
        <ExpandBloc
          :bloc-title="
            'L\'Intellect'"
          :bloc-state="caractChoice === 3"
          @toggle="changeCaractChoice(3)">
          <span
            v-html="caractDescriptionEnum.Intellect.Libelle" />
        </ExpandBloc>

        <ExpandBloc
          :bloc-title="'Le Charisme'"
          :bloc-state="caractChoice === 4"
          @toggle="changeCaractChoice(4)">
          <span
            v-html="caractDescriptionEnum.Charisme.Libelle" />
        </ExpandBloc>

        <ExpandBloc
          :bloc-title="'Le Pouvoir'"
          :bloc-state="caractChoice === 5"
          @toggle="changeCaractChoice(5)">
          <span
            v-html="caractDescriptionEnum.Pouvoir.Libelle" />
        </ExpandBloc>
      </template>
      <template v-if="persoChoice === 2">
        <div class="bloc-text margin-top-1 text-justify">
          &emsp;
          La santé d’un personnage détermine sa résistance aux coups et aux événements qui pourraient le blesser.
          Elle est indiquée par ses <b>Points de Vie</b>, ou PV.<br>
          <br>
          <div class="text-center">
            <b>Indemne</b> (+ de 6 PV) : Aucun malus<br>
            <b>Blessé</b> (2-5 PV) : - 1D6 aux jets<br>
            <b>Au seuil de la mort</b> (1 PV) : - 2D6 aux jets<br>
          </div>
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
        </div>
      </template>
      <template v-if="persoChoice === 3">
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
        <div class="docs-grid-list grid-2">
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
              <div class="margin-top-05 margin-bottom-05">
                <ArrowButton
                  :link-name="'races'"
                  :link-query="{ selection: index }" />
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-if="persoChoice === 4">
        <div class="bloc-text margin-top-1 text-justify">
          &emsp;
          Survivre en milieu hostile. Mentir. Utiliser un pouvoir élémentaire.
          Autant de savoir-faire qu’un personnage peut, ou non, développer au cours de sa vie.
          Cette section s’intéresse à ces <b>compétences</b> que les personnages apprennent ou non à utiliser
          et qui les différencient les uns des autres.
        </div>
      </template>
      <template v-if="persoChoice === 5">
        <div class="bloc-text margin-top-1 text-justify">
          &emsp;
          Dans le Monde d'Arlénor, certaines personnes ont des capacités magiques,
          et utilisent un <b>cristal évolutif</b> dans leur vie quotidienne.<br>
          <br>&emsp;
          En étant à leur contact, ces cristaux permettent d'utiliser certains pouvoirs en échange d'un peu d’énergie vitale.
          <b>Ces cristaux évoluent avec leur détenteur</b>, et les cristologues ont pu déterminer plusieurs branches (classes) de pouvoirs
          dans lesquelles chaque personne peut progresser. Le nombre de cristaux évolutif qu'un détenteur peut avoir est de l'ordre de 1,
          et le nombre de classes qu'un détenteur peut avoir accès est de l'ordre de 2.<br>
          <br>&emsp;
          Les classes suivantes sont regroupées par rôles, puis par groupe de classe.
        </div>
        <ExpandBloc
          v-for="(role, indexRole) in allRoles"
          :bloc-title="'Les ' + role.name + 's'"
          :bloc-state="groupChoice === role.code"
          @toggle="changeGroupChoice(role.code)"
          :key="indexRole">
          <div class="docs-grid-list grid-2">
            <div
              v-for="(spe, index) in getSpecialities(role.code)"
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
                    :link-name="'crystals'"
                    :link-query="{ spe: spe.code }" />
                </div>
              </div>
            </div>
          </div>
        </ExpandBloc>
      </template>
      <template v-if="persoChoice === 6">
        <div class="bloc-text margin-top-1 text-justify">
          &emsp;
          Le jeu de rôle est un moyen de raconter des histoires, comme les romans ou le cinéma,
          et les histoires sont toujours meilleures lorsqu'elles ont des héros crédibles.
          Pour l'instant, votre personnage est un tas de chiffres gribouillés au crayon sur un formulaire.
          <br>&emsp;
          Pour lui insuffler un peu de vie, la première chose à faire est de remplir son "état civil".
          Comment s'appelle votre personnage ? Le choix d'un nom est toujours un moment délicat.
          Évitez les noms ridicules ou connotés, car au bout de quelques parties, cela ne fera plus rire personne.
          Une fois baptisé, il reste à lui donner un peu de relief. Si le coeur vous en dit, prenez quelques minutes pour réfléchir aux points suivants...
        </div>
        <ExpandBloc
          :bloc-title="'La description'"
          :bloc-state="finitionChoice === 1"
          @toggle="changeFinitionChoice(1)">
          &emsp;
          Il existe une foule de détails qu'aucun jet de dés ne définira à votre place.
          Quelle est la couleur des yeux de votre personnage ? Celle de ses cheveux ?
          Est-il droitier ou gaucher ? Comment s'habille-t-il ? A-t- il des expressions favorites ?
          Un accent ? Prenez aussi un moment pour regarder comment ses caractéristiques interagissent.
        </ExpandBloc>
        <ExpandBloc
          :bloc-title="'Le comportement'"
          :bloc-state="finitionChoice === 2"
          @toggle="changeFinitionChoice(2)">
          &emsp;
          Pensez à votre personnage comme à une vraie personne.
          A-t-il des goûts particuliers ? Des choses dont il a horreur ? Une passion pour les rousses ?
          L'habitude de commander un poulet rôti et de la tarte au citron dans toutes les auberges où il déjeune ?
          Essayez de trouver un ou deux détails qui le caractériseront, mais limitez-vous à cela.
          Sinon votre personnage risque d'être une collection de tics.
        </ExpandBloc>
        <ExpandBloc
          :bloc-title="'L\'histoire personnelle'"
          :bloc-state="finitionChoice === 3"
          @toggle="changeFinitionChoice(3)">
          &emsp;
          Maintenant que vous avez une assez bonne image de lui dans le présent,
          remontez un peu dans son passé (vous pouvez aussi partir de son passé et construire son apparence présente à partir de là.
          Les deux méthodes marchent aussi bien l'une que l'autre,
          l'essentiel est que vous vous sentiez à l'aise avec celle que vous choisirez).
          Où a-t-il grandi ? A-t-il des amis ? De la famille ? Quelles sont ses relations avec eux ?
          Pourquoi ? Dans la campagne principale du Monde d'Arlénor, les personnages joueurs, seront obligatoirement
          des enfants adoptés par une famille, et ne connaissent pas leurs véritables parents, ni même ce qu'il s'est passé avant leur adoption. 
        </ExpandBloc>
      </template>
    </div>
  </div>

  <div little-separator />

  <div class="layout-view system-view background-roleplay">
    <div class="layout-center large">
      <h2>Les règles du système</h2>
      <div class="bloc-text margin-top-1 text-justify">
        &emsp;
        Le système de jeu est une partie importante du jeu de rôles, puisque c’est grâce à lui que vous savez si votre personnage,
        au cours du jeu, réussit ou non les actions qu’il entreprend.
      </div>
      <div class="bloc-text system-nav margin-top-1">
        <span
          class="system-nav-item"
          :class="{ selected : systemChoice === 1 }"
          @click="changeSystemChoice(1)">
          1) Les tests et difficultés
        </span>
        <span
          class="system-nav-item"
          :class="{ selected : systemChoice === 2 }"
          @click="changeSystemChoice(2)">
          2) Le combat et les actions possibles
        </span>
        <span
          class="system-nav-item"
          :class="{ selected : systemChoice === 3 }"
          @click="changeSystemChoice(3)">
          3) L'expérience et les niveaux
        </span>
      </div>
      <template v-if="systemChoice === 1">
        <div class="bloc-text margin-top-1 text-justify">
          &emsp;
          Le <b>test classique</b> qui détermine si un personnage réussit ou non une action se réalise de la façon suivante :
          le Maitre du Jeu <b>détermine quelle caractéristique de base du personnage est concernée</b> (Vigueur, Habileté, Intellect, Présence, Pouvoir)
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

        <div class="bloc-text margin-top-1 text-justify">
          <div class="text-center"><i>Exemple n°1</i></div>
          <b>Hélios</b> cherche dans une bibliothèque une information sur une plante inconnue.<br>
          Si le livre peut donner l'information, le MJ demandera un test d'<b>Intellect</b>.<br>
          Hélios a <b>3 en Intellect</b>, il lance <b>3D6</b> et fait... <b>4,5,2 pour un résultat de 11</b>.<br>
          Hélios possède une <b>compétence "Rat de bibliothèque"</b> qui lui donne un <b>bonus +4</b> dans la réalisation de cette action.<br>
          En dehors de ça, Hélios ne possède pas d'effet magique, ni d'équipement qui lui donnerait un autre bonus ou un malus pour cette action.<br>
          <b>Le total est donc 11 + 4 = 15.</b><br>
          Le MJ avait décidé que pour trouver cette information, c'était une <b>action complexe (difficulté à 14)</b>.<br>
          <b>Hélios a réussi</b>, il trouve que la plante inconnue est un Hibicus moscheutos.
        </div>

        <div class="bloc-text margin-top-1 text-justify">
          <div class="text-center"><i>Exemple n°2</i></div>
          <b>Ophéliz</b> cherche à trancher les chaînes d'un prisonnier avec son épée.<br>
          C'est une épée longue (donc lourde), le MJ demandera un test de <b>Vigueur</b>.<br>
          Ophéliz a <b>2 en Vigueur</b>, elle lance <b>2D6</b> et fait... <b>6 et 6</b> ! C'est une <b>réussite critique</b> !
          Elle a le droit de relancer un dé pour augmenter son score, et fait... <b>5, pour un résultat de 17</b>.<br>
          Ophéliz possède une <b>compétence "Armes à une main (épées)"</b> qui lui donne un <b>bonus +4</b> dans la réalisation de cette action.<br>
          Elle possède en plus un <b>effet magique</b> sur son arme (qui donne un <b>bonus +2</b> sans condition).<br>
          Et malheureusement pour Ophéliz, dans la prison, il fait nuit et il n'y a pas d'éclairage : le MJ décide alors qu'elle a un <b>malus -4</b> pour cette action.<br>
          <b>Le total est donc 17 + 4 + 2 - 4 = 19.</b><br>
          Le MJ avait décidé que pour trancher cette chaîne d'un seul coup, c'était une <b>action épique (difficulté à 30)</b>.<br>
          <b>Ophéliz n'a pas réussi</b>, mais la chaîne s'est un peu abîmée. Le MJ peut lui dire qu'à force la chaîne cédera peut-être...
        </div>
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
            v-html="caractDescriptionEnum.Vigueur.Libelle" />
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
    </div>
  </div>
</template>

<style lang="scss" scoped src="./SystemView.scss"></style>
<script lang="ts" src="./SystemView.ts"></script>
