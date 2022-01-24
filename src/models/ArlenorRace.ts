import { ArlenorEnum } from "./ArlenorEnum";

export class ArlenorRace {
  public name: string;
  public description: string;
  public difficulty: string;
  public image: string;
  public locations: string[];
  public avantages: string[];
  public disavantages: string[];

  constructor(name: string, difficulty: string) {
    this.name = name;
    this.description = "";
    this.difficulty = difficulty;
    this.image = "";
    this.locations = [];
    this.avantages = [];
    this.disavantages = [];
  }
}

export class DifficultyEnum {
  static Facile: ArlenorEnum = { Code: "FACILE", Libelle: "Facile" };
  static Normale: ArlenorEnum = { Code: "NORMALE", Libelle: "Normale" };
  static Difficile: ArlenorEnum = { Code: "DIFFICILE", Libelle: "Difficile" };
  static Impossible: ArlenorEnum = { Code: "IMPOSSIBLE", Libelle: "Impossible" };
}

export function getListRaces(): ArlenorRace[] {
  const listRaces: ArlenorRace[] = [];

  // Race des humains
  const humain = new ArlenorRace("Humain", DifficultyEnum.Facile.Code);
  humain.description = `Les Humains étaient les premiers à vivre sur le monde d'Arlénor.
  Les autres races sont des humains ayant subit des mutations au fil des générations, dû à l'exposition et utilisation quotidienne des cristaux.
  L'Humain aime construire autant que détruire, est aussi savant qu'ignorant...
  Les humains ne sont ni aimés, ni détestés des autres peuples : ils se sont concentrés dans les plaines de Terfil, et vivent principalement dans la cité de Faradel`;
  humain.image = require("./../assets/images/population/p_humain.png");
  humain.locations = ["L'Empire Faradélien", "Le Régime Jirakanien"];
  humain.avantages = ["Polyvalence et simplicité du personnage"];
  listRaces.push(humain);

  // Race des elfes
  const elfe = new ArlenorRace("Elfe", DifficultyEnum.Facile.Code);
  elfe.description = `Les Elfes sont les premiers humains à avoir muté dans le Monde d'Arlénor.
  Au fur et à mesure des siècles, ils ont vu leurs oreilles pousser, leurs poils disparaître...
  mais aussi leur affiliation aux cristaux s'agrandir, ce qui a fait d'eux une race dite 'supérieure' aux Humains.
  Les Elfes se sont habitués à ce statut, si bien que lorsque d'autres races sont apparues, une foule de discriminations envers ces dernières,
  ont commencé. De plus, leur affinité aux cristaux est devenue au fil des siècles un problème d'addiction...
  Ils sont eux aussi concentrés dans les plaines de Terfil, et vivent dans les hauts quartiers de la cité de Faradel.`;
  elfe.image = require("./../assets/images/population/p_elfe.png");
  elfe.locations = ["L'Empire Faradélien", "Le Régime Jirakanien"];
  elfe.avantages = ["Personnage très respecté globalement par les humains et les autres elfes"];
  elfe.disavantages = [
    "Niveau « gravement atteint » de blessure : 1 case",
    "Personnage craint et/ou haït globalement par les nains et les mutants",
    "Dû à son addiction, l'elfe ne pourra se lier qu'aux 3 premiers cristaux qu'il tentera de maîtriser dans toute sa vie",
  ];
  listRaces.push(elfe);

  // Race des nains
  const nain = new ArlenorRace("Nain", DifficultyEnum.Normale.Code);
  nain.description = `Les Nains furent les premiers à être discriminés, par leur taille, par leur pilosité abondante...
  Cependant, ils sont aussi craints car les nains peuvent très vite être dangereux. Ils possèdent en eux une force, une soif de sang, et une envie de...
  de manger de la viande crue, fraîchement découpée.
  Les Nains, rejetés et discriminés, se sont alors regroupés dans les hautes montagnes de Kazador.
  La rumeur dit qu'ils y cachent un grand secret...
  Il n'est pas rare de voir des Nains dans la cité de Jirakan, mais le plus souvent, les quelques Nains qui naissent en dehors des montagnes,
  les rejoignent souvent en étant adulte... et rares sont ceux qui souhaitent ensuite les quitter.`;
  nain.image = require("./../assets/images/population/p_nain.png");
  nain.locations = ["Le Régime Jirakanien", "Les Montagnes de Kazador"];
  nain.avantages = [
    "Niveau « gravement atteint » de blessure : 3 cases",
    "Sang très chaud, immunité au froid",
  ];
  nain.disavantages = ["Besoin quasi permanent de chasser, de tuer, et de manger de la viande crue."];
  listRaces.push(nain);

  // Race des mutants
  const mutant = new ArlenorRace("Mutant", DifficultyEnum.Normale.Code);
  mutant.description = `Le peuple des Mutants, lui, n’est pas reconnu officiellement.
  C’est le seul peuple où la mutation physique n’est pas clairement définie :
  une ou plusieurs parties de leur corps sont confondues avec celle d’un animal.
  Les Humains et les Elfes les considèrent comme des bêtes, des sauvages, et la loi même... condamnent leur existence.
  Les Mutants ont peu souvent confiance en eux, et finissent par vivre cachés, seuls, camouflant du mieux qu’ils le peuvent leur partie animale...
  Cependant un groupe de résistants a commencé à se fonder dans les souterrains de la cité de Faradel, ce qui leur redonne espoir.`;
  mutant.image = require("./../assets/images/population/p_mutant.png");
  mutant.locations = ["L'Empire Faradélien", "Le Régime Jirakanien", "La Forêt d'Imerys"];
  mutant.avantages = ["Le personnage possède une partie animale et ses propriétés"];
  mutant.disavantages = [
    "Menacé d'être exécuté si l'on découvre sa partie animale",
    "Le mutant possède un comportement de l'animal en question, selon le degré de la mutation",
  ];
  listRaces.push(mutant);

  // Race des pans
  const pan = new ArlenorRace("Pan", DifficultyEnum.Difficile.Code);
  pan.description = `Les Pans sont des enfants humains choisis et appelés dans la forêt de Miryden par une puissante entité magique nommée Nebulys.
  Contrairement aux autres peuples, ils subissent leur mutation génétique lorsqu'ils entrent dans cette forêt et deviennent des Pans à part entière.
  Par ce processus, Nebulys les a lié à la nuit : le soir leur peau prend la couleur du ciel, plus claire lors de pleines lunes et plus sombre lors de nouvelles lunes.
  Les Pans accordent respect et protection de la faune et de la flore.
  De plus, dans la forêt de Miryden, les Pans sont comme connectés entre eux via Nebulys : résultant une intelligence collective.
  Le fait de s'éloigner de la forêt, sans oublier la nature craintive et technophobe des Pans, les déconnecterait et rendrait certains vulnérables, déprimés, voire fous.`;
  pan.image = require("./../assets/images/population/p_pan.png");
  pan.locations = ["Inconnue"];
  pan.avantages = ["Peut manipuler l'énergie vitale végétale et animale de la forêt de Miryden"];
  pan.disavantages = [
    "Niveau « gravement atteint » de blessure : 1 case",
    "N'apprécie pas l'utilisation inutile des cristaux et protège la vie",
    "Anxiété sociale, peur des foules et des cités technologiques"
  ];
  listRaces.push(pan);

  // Race des arléniens
  const arlenien = new ArlenorRace("Arlénien", DifficultyEnum.Difficile.Code);
  arlenien.description = `Les Arléniens sont un autre peuple caché dans le Monde d'Arlénor.
  Ce sont des humains qui ont été choisis à une époque lointaine, par l'entité Nebulys.
  Mais contrairement aux Pans, les Arléniens peuvent se reproduire car ils grandissent.
  De ce fait, le peuple s'auto-suffit, et Nébulys n'en transforme plus.
  De leur côté, ils sont liés au Soleil : on dit que lors d'une éclipse solaire, leur utilisation de la magie en devient décuplée.
  Les Arléniens sont généralement grands et tatoués : ils n'arrivent pas à utiliser les cristaux dans leur état solide...
  Ils ont alors un rituel, sur une semaine au minimum, qui transforme un cristal en encre puis en tatouage.
  Et de leur côté, les Arléniens n'ont pas de liens mentaux entre eux, mais un lien direct avec Nebulys :
  ils ressentent le besoin et le devoir de rester dans la forêt pour protéger leur créateur.`;
  arlenien.image = require("./../assets/images/population/p_arlenien.png");
  arlenien.locations = ["Inconnue"];
  arlenien.avantages = [
    "Niveau « gravement atteint » de blessure : 3 cases",
    "Magie ne nécessitant pas de cristal",
  ];
  arlenien.disavantages = [
    "Ne peut pas porter plus de 3 tatouages et ne peut pas s'en défaire.",
    "Doit se faire passer pour un humain pour protéger le secret de son peuple",
  ];
  listRaces.push(arlenien);

  // Race des célestiens
  const celestien = new ArlenorRace("Célestien", DifficultyEnum.Impossible.Code);
  celestien.description = "";
  celestien.image = require("./../assets/images/population/p_humain.png");
  celestien.locations = ["L'Empire Faradélien", "Le Régime Jirakanien"];
  listRaces.push(celestien);

  return listRaces;
}
