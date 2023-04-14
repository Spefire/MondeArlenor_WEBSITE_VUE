import { ArlenorEnum } from "./ArlenorEnum";

export class ArlenorCaracts {
  public for: number;
  public hab: number;
  public int: number;
  public ten: number;
  public cha: number;
  public mag: number;

  constructor() {
    this.for = 0;
    this.hab = 0;
    this.int = 0;
    this.ten = 0;
    this.cha = 0;
    this.mag = 0;
  }
}

export class CaractNomEnum {
  static Aucune: ArlenorEnum = { Code: "", Libelle: "Aucune" };
  static Force: ArlenorEnum = { Code: "FOR", Libelle: "Force" };
  static Habilete: ArlenorEnum = { Code: "HAB", Libelle: "Habileté" };
  static Intellect: ArlenorEnum = { Code: "INT", Libelle: "Intellect" };
  static Tenacite: ArlenorEnum = { Code: "TEN", Libelle: "Ténacité" };
  static Charisme: ArlenorEnum = { Code: "CHA", Libelle: "Charisme" };
  static Magie: ArlenorEnum = { Code: "MAG", Libelle: "Magie" };
}

export class CaractDescriptionEnum {
  static Aucune: ArlenorEnum = { Code: "", Libelle: "Aucune" };
  static Force: ArlenorEnum = { Code: "FOR", Libelle: `
  &emsp;
  La <b>Force</b>, évalue la puissance brute de votre personnage.
  Cette caractéristique est importante pour les personnages combattants, les sportifs
  et tous ceux qui aiment se sortir de situations dangereuses.<br>
  <br>
  &emsp;0 : Fragile. Force et endurance limitées, vous vous fatiguez vite.<br>
  &emsp;1 : Moyen. Vous n’avez de problème qu’avec des tours de force inhabituels.<br>
  &emsp;2 : Costaud. Vous réalisez des tours de force.<br>
  &emsp;3 : Fort comme un bœuf. Peu de choses ou de personnes peuvent vous résister.<br>
  &emsp;4 : Herculéen. Vous rivalisez de puissance avec les ours.` };
  static Habilete: ArlenorEnum = { Code: "HAB", Libelle: `
  &emsp;
  L’<b>Habileté</b> représente la capacité du personnage à s’acquitter de tâches de précision, sa finesse,
  sa dextérité, son talent pour viser ainsi que sa rapidité de réaction.
  C’est une aptitude inestimable pour les artisans, les voleurs, les danseurs et les tireurs de tout calibre.<br>
  <br>
  &emsp;0 : Maladroit. Vous êtes un véritable éléphant dans un magasin de porcelaine.<br>
  &emsp;1 : Moyen. Au moins, vous ne provoquez que rarement des catastrophes.<br>
  &emsp;2 : Agile. Vous êtes doué de vos mains, et votre agilité vous sert dans bien des situations.<br>
  &emsp;3 : Félin. Vos réflexes et votre souplesse tiennent davantage de l’animal que de l’humain.<br>
  &emsp;4 : Gracieux. Vos mouvements sont tellement fluides qu’ils semblent irréels.` };
  static Intellect: ArlenorEnum = { Code: "INT", Libelle: `
  &emsp;
  Les capacités intellectuelles de votre personnage, sa capacité à analyser, retenir les informations
  et les réutiliser en temps utile. L'<b>Intellect</b> est utile aux tacticiens, aux érudits,
  aux scientifiques et aux enquêteurs.<br>
  <br>
  &emsp;0 : Simplet. Vous comprenez l’essentiel, mais toutes les subtilités vous échappent.<br>
  &emsp;1 : Moyen. Vous ne faites pas de miracles, mais vous vous en sortez honorablement.<br>
  &emsp;2 : Vif. Vous comprenez vite, analysez de manière pertinente et savez vous adapter.<br>
  &emsp;3 : Brillant. Vous comprenez rapidement ce que certains mettent des années à apprendre.<br>
  &emsp;4 : Génie. Vous maniez facilement des notions que la majorité des gens sont incapables d’appréhender.` };
  static Tenacite: ArlenorEnum = { Code: "TEN", Libelle: `
  &emsp;
  Définition de la résistance physique, la <b>Ténacité</b> évalue la constitution de votre personnage.
  Cette caractéristique est importante pour les personnages qui veulent encaisser, ou juste vivre plus longtemps.<br>
  Note : Une <b>Ténacité</b> égale à 0 retire un Point de Vie max.<br>
  Note : Une <b>Ténacité</b> supérieure à 2 donne un Point de Vie max.<br>
  <br>
  &emsp;0 : Fragile. Résistance limitée, vous tombez malade facilement.<br>
  &emsp;1 : Moyen. Votre corps vit sa vie, tranquillement, sans plus.<br>
  &emsp;2 : Résistant. Vous résistez à quelques coups sans problème.<br>
  &emsp;3 : Rempart. Peu de choses ou de personnes peuvent vous blesser.<br>
  &emsp;4 : Intuable. Vous résistez à tout, presque tout.` };
  static Charisme: ArlenorEnum = { Code: "CHA", Libelle: `
  &emsp;
  La capacité à s’imposer aux autres, à leur inspirer de la confiance, du respect ou de la crainte,
  ainsi qu’à les manipuler. Le <b>Charisme</b> comprend bien plus que la beauté physique,
  et est l’atout principal des dirigeants, des séducteurs et de tous les menteurs invétérés.<br>
  <br>
  &emsp;0 : Fade. Vous n’inspirez pas les autres et semblez parfois transparent à leurs yeux.<br>
  &emsp;1 : Moyen. Vous vous faites des amis, comme tout le monde.<br>
  &emsp;2 : Intéressant. Vous ne laissez pas les gens indifférents, et beaucoup vous apprécient.<br>
  &emsp;3 : Captivant. Leader-né, votre personnalité attire les autres à vous.<br>
  &emsp;4 : Fascinant. Vous pourriez amener n’importe qui à faire n’importe quoi pour vous.` };
  static Magie: ArlenorEnum = { Code: "MAG", Libelle: `
  &emsp;
  La <b>Magie</b> est la caractéristique déterminant le niveau de facilité à utiliser
  les pouvoirs des cristaux du Monde d'Arlénor et parfois à y résister.
  Les grands mages ont évidemment un bon niveau dans cette caractéristique.<br>
  <br>
  &emsp;0 : Initié. La magie et vous, c'est le feu et la glace, parfois ça peut faire un bon combo... parfois.<br>
  &emsp;4 : Archimage. Vos cristaux n'ont aucun secret pour vous, vous les exploitez à pleine puissance.` };
}
