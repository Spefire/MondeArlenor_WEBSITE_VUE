import { ArlenorClass } from "../ArlenorClass";
import { ArlenorGroups } from "./ListGroups";

export class ArlenorClasses {
  public Paladin: ArlenorClass;
  public Chevalier: ArlenorClass;
  public DanseurMartial: ArlenorClass;
  public Derviche: ArlenorClass;

  public LameOmbre: ArlenorClass;
  public Chasseur: ArlenorClass;
  public DanseurSabre: ArlenorClass;
  public DoubleLame: ArlenorClass;
  public Escrimeur: ArlenorClass;

  public Elementaliste: ArlenorClass;
  public Createur: ArlenorClass;
  public Pelerin: ArlenorClass;
  public Dompteur: ArlenorClass;
  public Illusionniste: ArlenorClass;
  public Envouteur: ArlenorClass;

  public Chaman: ArlenorClass;
  public Guerisseur: ArlenorClass;
  public ClercArmure: ArlenorClass;
  public PretreArlenor: ArlenorClass;
  public Exorciste: ArlenorClass;
  public Virtuose: ArlenorClass;
  public Banshee: ArlenorClass;

  constructor() {
    const groups = new ArlenorGroups();

    this.Paladin = new ArlenorClass("Paladin", groups.Gardien);
    this.Paladin.image = require("./../../assets/icons/classes/paladin.png");
    this.Paladin.description = "Le Paladin utilise principalement de puissants sorts défensifs. Et à haut-niveau, le paladin devient une véritable forteresse.";

    this.Chevalier = new ArlenorClass("Chevalier", groups.Gardien);
    this.Chevalier.image = require("./../../assets/icons/classes/chevalier.png");
    this.Chevalier.description = "Le Chevalier utilise des sorts de récupération pour résister longtemps. Cela lui permet de pouvoir attaquer en même temps de récupérer.";
    
    this.DanseurMartial = new ArlenorClass("Danseur Martial", groups.Moine);
    this.DanseurMartial.image = require("./../../assets/icons/classes/danseur_martial.png");
    this.DanseurMartial.description = "Le Danseur martial utilise des sorts d’enchaînements d'attaques à mains nues, ne laissant pas de répit à sa cible.";

    this.Derviche = new ArlenorClass("Derviche", groups.Moine);
    this.Derviche.image = require("./../../assets/icons/classes/derviche.png");
    this.Derviche.description = "Le Derviche utilise sa faux pour contrôler la zone de combat : possédant une grande capacité de mouvement, il sait garder ses cibles sous le creux de sa lame.";

    ///

    this.LameOmbre = new ArlenorClass("Lame de l'Ombre", groups.Assassin);
    this.LameOmbre.image = require("./../../assets/icons/classes/lame_ombre.png");
    this.LameOmbre.description = "La Lame de l'Ombre utilise des capacités pour se camoufler et augmenter ses dégâts avec des attaques surprises.";

    this.Chasseur = new ArlenorClass("Chasseur", groups.Assassin);
    this.Chasseur.image = require("./../../assets/icons/classes/chasseur.png");
    this.Chasseur.description = "Le Chasseur utilise ses compétences pour infliger des dégâts à distance et ne pas perdre sa cible de vue. A haut-niveau, c'est un véritable sniper.";

    this.DanseurSabre = new ArlenorClass("Danseur au Sabre", groups.Assassin);
    this.DanseurSabre.image = require("./../../assets/icons/classes/danseur_sabre.png");
    this.DanseurSabre.description = "Le Danseur au Sabre utilise son sabre comme une prolongation de son corps. Ses danses permettent d’enchaîner des coups tout en se protégeant.";

    this.DoubleLame = new ArlenorClass("Double Lame", groups.Bretteur);
    this.DoubleLame.image = require("./../../assets/icons/classes/double_lame.png");
    this.DoubleLame.description = "La Double Lame utilise des capacités d'ambidextrie pour faire passer le plus ennemis sous son courroux. Et à haut-niveau, la Double Lame ressemble à une vraie tornade.";

    this.Escrimeur = new ArlenorClass("Escrimeur", groups.Bretteur);
    this.Escrimeur.image = require("./../../assets/icons/classes/escrimeur.png");
    this.Escrimeur.description = "L'Escrimeur utilise des sorts pour renforcer ses coups en un contre un. Il préfère les duels équitables ce qui augmente son potentiel de dégâts.";

    ///

    this.Elementaliste = new ArlenorClass("Elémentaliste", groups.Sorcier);
    this.Elementaliste.image = require("./../../assets/icons/classes/elementaliste.png");
    this.Elementaliste.description = "L'Elementaliste utilise des sorts liés aux éléments suprêmes (Lumière, Ombre) et primordiaux (Feu, Air, Eau et Terre).";

    this.Createur = new ArlenorClass("Créateur", groups.Sorcier);
    this.Createur.image = require("./../../assets/icons/classes/createur.png");
    this.Createur.description = "Le Créateur utilise des sorts liés aux éléments dérivés (Gel, Métal, Foudre, Végétal, Sang...).";

    this.Pelerin = new ArlenorClass("Pèlerin", groups.Invocateur);
    this.Pelerin.image = require("./../../assets/icons/classes/pelerin.png");
    this.Pelerin.description = "Le Pèlerin utilise des sorts d'invocation d'entités divines liées à la Lumière et au Destin.";

    this.Dompteur = new ArlenorClass("Dompteur de bêtes", groups.Invocateur);
    this.Dompteur.image = require("./../../assets/icons/classes/dompteur.png");
    this.Dompteur.description = "Le Dompteur de Bêtes utilise des capacités de convocation d'animaux existants en tant que familiers. A haut-niveau, il peut même les posséder.";

    this.Illusionniste = new ArlenorClass("Illusionniste", groups.Enchanteur);
    this.Illusionniste.image = require("./../../assets/icons/classes/illusionniste.png");
    this.Illusionniste.description = "L'Illusionniste utilise des sorts pour contrôler les sens de ses cibles. Et à haut-niveau l'illusion peut devenir réalité.";

    this.Envouteur = new ArlenorClass("Envoûteur", groups.Enchanteur);
    this.Envouteur.image = require("./../../assets/icons/classes/envouteur.png");
    this.Envouteur.description = "L'Envoûteur utilise des sorts qui affectent ses cibles de divers troubles magiques. Et à haut-niveau, l’envoûtement peut aller jusqu'à la possession.";

    ///

    this.Chaman = new ArlenorClass("Chaman", groups.Druide);
    this.Chaman.image = require("./../../assets/icons/classes/chaman.png");
    this.Chaman.description = "Le Chaman utilise des sorts permettant d'interagir avec le monde de l'Au-Delà. A haut-niveau, le chaman peut utiliser les capacités d'un défunt.";

    this.Guerisseur = new ArlenorClass("Guérisseur", groups.Druide);
    this.Guerisseur.image = require("./../../assets/icons/classes/guerisseur.png");
    this.Guerisseur.description = "Le Guérisseur utilise des sorts de soins et de récupération. Et à haut-niveau, il peut même réaliser des dopages sur ses alliés.";

    this.ClercArmure = new ArlenorClass("Clerc d'armure", groups.Pretre);
    this.ClercArmure.image = require("./../../assets/icons/classes/clerc_armure.png");
    this.ClercArmure.description = "Le Clerc d'armure utilise des prières de renforcement. Il possède aussi quelques capacités offensives, surtout contre les créatures mortes-vivantes.";

    this.PretreArlenor = new ArlenorClass("Prêtre d'Arlénor", groups.Pretre);
    this.PretreArlenor.image = require("./../../assets/icons/classes/pretre_arlenor.png");
    this.PretreArlenor.description = "Le Prêtre d'Arlénor utilise des prières qui permet de faire appel à des entités divines pour aider les alliés afin de les purifier, d'augmenter leur chance ou même accéder à des connaissances.";

    this.Exorciste = new ArlenorClass("Exorciste", groups.Pretre);
    this.Exorciste.image = require("./../../assets/icons/classes/exorciste.png");
    this.Exorciste.description = "L'Exorciste utilise des prières infligeant des états négatifs à une cible, et des prières permettant d'utiliser les morts à ses propres fins.";

    this.Virtuose = new ArlenorClass("Virtuose", groups.Barde);
    this.Virtuose.image = require("./../../assets/icons/classes/virtuose.png");
    this.Virtuose.description = "Le Virtuose utilise des musiques qui boostent les alliés sur le long terme. Il peut également, mais rarement utiliser des paroles ou des accords particuliers pour des boosts instantanés.";

    this.Banshee = new ArlenorClass("Banshee", groups.Barde);
    this.Banshee.image = require("./../../assets/icons/classes/banshee.png");
    this.Banshee.description = "La Banshee utilise des chants qui perturbent les cibles, leur annonçant une mort proche. Elle peut également mais rarement, infliger des dégâts via sa voix.";
  }
}

export function getListClasses(): ArlenorClass[] {
  const arlenorClasses = new ArlenorClasses();
  return Object.values(arlenorClasses);
}
