import { ArlenorEnum } from "./ArlenorEnum";
import { ArlenorRace } from "./ArlenorRace";
import { getListRaces } from "./data/ListRaces";

class ArlenorCaracts {
  public vig: number;
  public hab: number;
  public int: number;
  public cha: number;
  public pou: number;

  constructor() {
    this.vig = 1;
    this.hab = 1;
    this.int = 1;
    this.cha = 1;
    this.pou = 1;
  }
}

export class CaractNomEnum {
  static Aucune: ArlenorEnum = { Code: "", Libelle: "Aucune" };
  static Vigueur: ArlenorEnum = { Code: "VIG", Libelle: "Vigueur" };
  static Habilete: ArlenorEnum = { Code: "HAB", Libelle: "Habileté" };
  static Intellect: ArlenorEnum = { Code: "INT", Libelle: "Intellect" };
  static Charisme: ArlenorEnum = { Code: "CHA", Libelle: "Charisme" };
  static Pouvoir: ArlenorEnum = { Code: "POU", Libelle: "Pouvoir" };
}

export class CaractDescriptionEnum {
  static Aucune: ArlenorEnum = { Code: "", Libelle: "Aucune" };
  static Vigueur: ArlenorEnum = { Code: "VIG", Libelle: `
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
  static Pouvoir: ArlenorEnum = { Code: "POU", Libelle: `
  &emsp;
  Le <b>Pouvoir</b> est la caractéristique déterminant le niveau de facilité à utiliser
  la magie des cristaux du Monde d'Arlénor et à y résister.
  Les mages ont généralement un bon niveau dans cette caractéristique.` };
}

export class ArlenorCharacter {
  public level: number | null;
  public avatar: string;
  public name: string;
  public age: number | null;
  public gender: string;
  public story: string;
  public description: string;
  public traits: string;
  public belives: string;
  public importances: string;
  public race: ArlenorRace | null;
  public caracts: ArlenorCaracts;

  get initiative(): number {
    return this.caracts.hab + this.caracts.int;
  }

  get totalCaracts(): number {
    return this.caracts.vig
      + this.caracts.hab
      + this.caracts.int
      + this.caracts.cha
      + this.caracts.pou;
  }

  get healthMax(): number {
    return 10;
  }

  constructor() {
    this.level = 1;
    this.avatar = "";
    this.name = "";
    this.age = null;
    this.gender = "";
    this.story = "";
    this.description = "";
    this.traits = "";
    this.belives = "";
    this.importances = "";
    this.race = null;
    this.caracts = new ArlenorCaracts();
  }

  init(): void {
    this.level = 1;
    this.avatar = "";
    this.name = "Jérémy Lécuyer (aka Spefire)";
    this.age = 22;
    this.gender = "Masculin (il)";
    this.story = "Jérémy est un garçon ayant une peur bleue de la mort."
    + " Il a perdu ses parents comme beaucoup de célestiens, lors d'une attaque de Wendigo :"
    + " il a vu la vie les quitter dans leurs yeux, et il espère ne jamais revoir ça."
    + " Quand il a découvert ses pouvoirs, il en a eu peur, peur de ce que cela devait impliquer..."
    + " devoir un jour se battre contre les Wendigos.";
    this.description = "Mince, Jeune, Débordant d'énergie, Souvent en feu";
    this.traits = "Amical, Empathique, Loyal, Coopératif, Protecteur";
    this.belives = "Croit au Destin, et cherche à protéger les plus faibles";
    this.importances = "Son amie Elisa et son copain Zachary";
    const races = getListRaces();
    this.race = races[0];
    this.caracts = new ArlenorCaracts();
    this.caracts.vig = 2;
    this.caracts.hab = 3;
    this.caracts.int = 3;
    this.caracts.cha = 2;
    this.caracts.pou = 5;
  }
}