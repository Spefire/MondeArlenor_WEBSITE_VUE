import { ArlenorEnum } from "./ArlenorEnum";

export class ArlenorCaracts {
  public for: number;
  public hab: number;
  public int: number;
  public ten: number;
  public cha: number;
  public mag: number;

  constructor() {
    this.for = 1;
    this.hab = 1;
    this.int = 1;
    this.ten = 1;
    this.cha = 1;
    this.mag = 1;
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
  A MODIFIER
  &emsp;
  Mélange de résistance physique et de puissance brute, la <b>Vigueur</b> évalue la forme physique de votre personnage.
  Cette caractéristique est importante pour les personnages combattants, les sportifs
  et tous ceux qui aiment se sortir de situations dangereuses.<br>
  Note : Une <b>Vigueur</b> à 1 retire un Point de Vie max.<br>
  Note : Une <b>Vigueur</b> à 5 donne un Point de Vie max.<br>
  <br>
  &emsp;1 : Fragile. Force et endurance limitées, vous vous fatiguez vite.<br>
  &emsp;2 : Moyen. Vous n’avez de problème qu’avec des tours de force inhabituels.<br>
  &emsp;3 : Costaud. Vous fatiguez rarement et réalisez des tours de force.<br>
  &emsp;4 : Fort comme un bœuf. Peu de choses ou de personnes peuvent vous résister.<br>
  &emsp;5 : Herculéen. Vous résistez à tout et rivalisez de puissance avec les ours.` };
  static Habilete: ArlenorEnum = { Code: "HAB", Libelle: `
  &emsp;
  L’<b>Habileté</b> représente la capacité du personnage à s’acquitter de tâches de précision, sa finesse,
  sa dextérité, son talent pour viser ainsi que sa rapidité de réaction.
  C’est une aptitude inestimable pour les artisans, les voleurs, les danseurs et les tireurs de tout calibre.<br>
  <br>
  &emsp;1 : Maladroit. Vous êtes un véritable éléphant dans un magasin de porcelaine.<br>
  &emsp;2 : Moyen. Au moins, vous ne provoquez que rarement des catastrophes.<br>
  &emsp;3 : Agile. Vous êtes doué de vos mains, et votre agilité vous sert dans bien des situations.<br>
  &emsp;4 : Félin. Vos réflexes et votre souplesse tiennent davantage de l’animal que de l’humain.<br>
  &emsp;5 : Gracieux. Vos mouvements sont tellement fluides qu’ils semblent irréels.` };
  static Intellect: ArlenorEnum = { Code: "INT", Libelle: `
  &emsp;
  Les capacités intellectuelles de votre personnage, sa capacité à analyser, retenir les informations
  et les réutiliser en temps utile. L'<b>Intellect</b> est utile aux tacticiens, aux érudits,
  aux scientifiques et aux enquêteurs.<br>
  <br>
  &emsp;1 : Simplet. Vous comprenez l’essentiel, mais toutes les subtilités vous échappent.<br>
  &emsp;2 : Moyen. Vous ne faites pas de miracles, mais vous vous en sortez honorablement.<br>
  &emsp;3 : Vif. Vous comprenez vite, analysez de manière pertinente et savez vous adapter.<br>
  &emsp;4 : Brillant. Vous comprenez rapidement ce que certains mettent des années à apprendre.<br>
  &emsp;5 : Génie. Vous maniez facilement des notions que la majorité des gens sont incapables d’appréhender.` };
  static Tenacite: ArlenorEnum = { Code: "TEN", Libelle: `
  A MODIFIER
  &emsp;
  Mélange de résistance physique et de puissance brute, la <b>Vigueur</b> évalue la forme physique de votre personnage.
  Cette caractéristique est importante pour les personnages combattants, les sportifs
  et tous ceux qui aiment se sortir de situations dangereuses.<br>
  Note : Une <b>Vigueur</b> à 1 retire un Point de Vie max.<br>
  Note : Une <b>Vigueur</b> à 5 donne un Point de Vie max.<br>
  <br>
  &emsp;1 : Fragile. Force et endurance limitées, vous vous fatiguez vite.<br>
  &emsp;2 : Moyen. Vous n’avez de problème qu’avec des tours de force inhabituels.<br>
  &emsp;3 : Costaud. Vous fatiguez rarement et réalisez des tours de force.<br>
  &emsp;4 : Fort comme un bœuf. Peu de choses ou de personnes peuvent vous résister.<br>
  &emsp;5 : Herculéen. Vous résistez à tout et rivalisez de puissance avec les ours.` };
  static Charisme: ArlenorEnum = { Code: "CHA", Libelle: `
  &emsp;
  La capacité à s’imposer aux autres, à leur inspirer de la confiance, du respect ou de la crainte,
  ainsi qu’à les manipuler. Le <b>Charisme</b> comprend bien plus que la beauté physique,
  et est l’atout principal des dirigeants, des séducteurs et de tous les menteurs invétérés.<br>
  <br>
  &emsp;1 : Fade. Vous n’inspirez pas les autres et semblez parfois transparent à leurs yeux.<br>
  &emsp;2 : Moyen. Vous vous faites des amis, comme tout le monde.<br>
  &emsp;3 : Intéressant. Vous ne laissez pas les gens indifférents, et beaucoup vous apprécient.<br>
  &emsp;4 : Captivant. Leader-né, votre personnalité attire les autres à vous.<br>
  &emsp;5 : Fascinant. Vous pourriez amener n’importe qui à faire n’importe quoi pour vous.` };
  static Magie: ArlenorEnum = { Code: "MAG", Libelle: `
  A MODIFIER
  &emsp;
  La <b>Magie</b> est la caractéristique déterminant le niveau de facilité à utiliser
  les pouvoirs des cristaux du Monde d'Arlénor et parfois à y résister.
  Les grands mages ont évidemment un bon niveau dans cette caractéristique.` };
}
