import { ArlenorSpeciality } from "../ArlenorSpeciality";
import { ArlenorRoles } from "./ListRoles";

export class ArlenorSpecialities {
  public Gardien: ArlenorSpeciality;
  public Moine: ArlenorSpeciality;
  public Assassin: ArlenorSpeciality; // Executeur
  public Bretteur: ArlenorSpeciality;
  public Sorcier: ArlenorSpeciality; // Elementaliste
  public Invocateur: ArlenorSpeciality;
  public Enchanteur: ArlenorSpeciality;
  public Druide: ArlenorSpeciality;
  public Pretre: ArlenorSpeciality;
  public Barde: ArlenorSpeciality;

  constructor() {
    const roles = new ArlenorRoles();

    this.Gardien = new ArlenorSpeciality("Gardien", "Gardien", "text-yellow", roles.Tank);
    this.Gardien.description = "Le Gardien est un mage qui est là pour encaisser les coups sur la durée et maintenir ses cibles concentrées sur lui.";
    this.Gardien.image = require("./../../assets/icons/specialities/gardien_spe.png");
    this.Gardien.otherImage = require("./../../assets/icons/specialities/gardien.png");
    this.Gardien.setArchetype(
      "Paladin", "Le Paladin utilise principalement de puissants sorts défensifs. Et à haut-niveau, le paladin devient une véritable forteresse.",
      "Chevalier", "Le Chevalier utilise des sorts de récupération pour résister longtemps. Cela lui permet de pouvoir attaquer en même temps de récupérer.",
      "Citrine, Topaze jaune"
    );

    this.Moine = new ArlenorSpeciality("Moine", "Moine", "text-cyan", roles.Tank);
    this.Moine.description = "Le Moine est un mage qui n'encaisse pas les coups mais les esquive pour en renvoyer. Il est là pour foncer directement en première ligne lors d'un combat.";
    this.Moine.image = require("./../../assets/icons/specialities/moine_spe.png");
    this.Moine.otherImage = require("./../../assets/icons/specialities/moine.png");
    this.Moine.setArchetype(
      "Danseur Martial", "Le Danseur martial utilise des sorts d'enchaînements d'attaques à mains nues, ne laissant pas de répit à sa cible.",
      "Derviche", "Le Derviche utilise sa faux pour contrôler la zone de combat : possédant une grande capacité de mouvement, il sait garder ses cibles sous le creux de sa lame.",
      "Amazonite, Aigue-marine"
    );

    //

    this.Assassin = new ArlenorSpeciality("Assassin", "Assassin", "text-red", roles.DPSPhysique);
    this.Assassin.description = "L'Assassin est un mage qui fait d'importants dégâts physiques très rapidement, sur une cible précise.";
    this.Assassin.image = require("./../../assets/icons/specialities/assassin_spe.png");
    this.Assassin.otherImage = require("./../../assets/icons/specialities/assassin.png");
    this.Assassin.setArchetype(
      "Lame de l'Ombre", "La Lame de l'Ombre utilise des pouvoirs pour se camoufler et augmenter ses dégâts avec des attaques surprises.",
      "Chasseur", "Le Chasseur utilise ses pouvoirs pour infliger des dégâts à distance et ne pas perdre sa cible de vue. A haut-niveau, c'est un véritable sniper.",
      "Grenat, Rubis"
    );

    this.Bretteur = new ArlenorSpeciality("Bretteur", "Bretteur", "text-orange", roles.DPSPhysique);
    this.Bretteur.description = "Le Bretteur est un mage qui aime battre le fer avec ses ennemis. Peu importe le nombre, il enchaine ses coups d'épée.";
    this.Bretteur.image = require("./../../assets/icons/specialities/bretteur_spe.png");
    this.Bretteur.otherImage = require("./../../assets/icons/specialities/bretteur.png");
    this.Bretteur.setArchetype(
      "Escrimeur", "L'Escrimeur utilise son épée comme une prolongation de son corps. Il préfère les duels équitables ce qui augmente son potentiel de dégâts.",
      "Double Lame", "La Double Lame utilise des capacités d'ambidextrie pour faire passer le plus ennemis sous son courroux. Et à haut-niveau, la Double Lame ressemble à une vraie tornade.",
      "Cornaline, Opale de feu"
    );
    
    ///

    this.Sorcier = new ArlenorSpeciality("Sorcier", "Sorcier", "text-ocean", roles.DPSMagique);
    this.Sorcier.description = "Le Sorcier est un mage qui fait des dégâts magiques sur plusieurs cibles.";
    this.Sorcier.image = require("./../../assets/icons/specialities/sorcier_spe.png");
    this.Sorcier.otherImage = require("./../../assets/icons/specialities/sorcier.png");
    this.Sorcier.setArchetype(
      "Météorologue", "Le Météorologue utilise des sorts liés aux éléments (Foudre, Eau et Glace).",
      "Créateur", "Le Créateur utilise des sorts liés aux éléments (Feu, Terre, Métaux).",
      "Saphir, Sodalite"
    );

    this.Invocateur = new ArlenorSpeciality("Invocateur", "Invocateur", "text-turquoise", roles.DPSMagique);
    this.Invocateur.description = "L'Invocateur est un mage qui invoque des entités afin de l'aider tant à combattre qu'en dehors des combats.";
    this.Invocateur.image = require("./../../assets/icons/specialities/invocateur_spe.png");
    this.Invocateur.otherImage = require("./../../assets/icons/specialities/invocateur.png");
    this.Invocateur.setArchetype(
      "Pèlerin", "Le Pèlerin utilise des sorts d'invocation d'entités divines liées à la Lumière et au Destin.",
      "Dompteur de bêtes", "Le Dompteur de Bêtes utilise des capacités de convocation d'animaux existants en tant que familiers. A haut-niveau, il peut même les posséder.",
      "Malachite, Jade"
    );

    this.Enchanteur = new ArlenorSpeciality("Enchanteur", "Enchanteur", "text-violet", roles.DPSMagique);
    this.Enchanteur.description = "L'Enchanteur est un mage aux sorts offensifs faibles, s'ils sont utilisés seuls. C'est plutôt un soutien qui joue avec ses cibles pour permettre à des alliés de leur faire des dégâts considérables.";
    this.Enchanteur.image = require("./../../assets/icons/specialities/enchanteur_spe.png");
    this.Enchanteur.otherImage = require("./../../assets/icons/specialities/enchanteur.png");
    this.Enchanteur.setArchetype(
      "Envoûteur", "L'Envoûteur utilise des sorts qui affectent ses cibles de divers troubles magiques. Et à haut-niveau, l'envoûtement peut aller jusqu'à la possession.",
      "Illusionniste", "L'Illusionniste utilise des sorts pour contrôler les sens de ses cibles. Et à haut-niveau l'illusion peut devenir réalité.",
      "Améthyste, Fluorite"
    );
    
    ///

    this.Druide = new ArlenorSpeciality("Druide", "Druide", "text-green", roles.Soutien);
    this.Druide.description = "Le Druide est un mage de soutien qui lie ses sorts à l'énergie de la nature, et pouvant se transformer partiellement ou complètement en un animal.";
    this.Druide.image = require("./../../assets/icons/specialities/druide_spe.png");
    this.Druide.otherImage = require("./../../assets/icons/specialities/druide.png");
    this.Druide.setArchetype(
      "Guérisseur", "Le Guérisseur utilise des sorts de soins et de récupération. Et à haut-niveau, il peut même réaliser des dopages sur ses alliés.",
      "Chaman", "Le Chaman utilise des sorts permettant d'interagir avec le monde de l'Au-Delà. A haut-niveau, le chaman peut utiliser les capacités d'un défunt.",
      "Émeraude, Péridot"
    );

    this.Pretre = new ArlenorSpeciality("Prêtre", "Pretre", "text-grey", roles.Soutien);
    this.Pretre.description = "Le Prêtre est un mage de soutien qui adresse des prières pour aider et soigner ses alliés.";
    this.Pretre.image = require("./../../assets/icons/specialities/pretre_spe.png");
    this.Pretre.otherImage = require("./../../assets/icons/specialities/pretre.png");
    this.Pretre.setArchetype(
      "Prêtre d'Arlénor", "Le Prêtre d'Arlénor utilise des prières pour aider les alliés afin de les purifier, d'augmenter leur chance ou même accéder à des connaissances.",
      "Nécromancien", "Le Nécromant utilise des sorts de sang infligeant des états négatifs à une cible, et des prières permettant d'utiliser les morts à ses propres fins.",
      "Pierre de lune, Obsidienne"
    );

    this.Barde = new ArlenorSpeciality("Barde", "Barde", "text-pink", roles.Soutien);
    this.Barde.description = "Le Barde est un mage de soutien qui se sert de la musique pour influencer le combat à l'avantage de ses alliés.";
    this.Barde.image = require("./../../assets/icons/specialities/barde_spe.png");
    this.Barde.otherImage = require("./../../assets/icons/specialities/barde.png");
    this.Barde.setArchetype(
      "Virtuose", "Le Virtuose utilise des musiques qui boostent les alliés sur le long terme. Il peut également, mais rarement utiliser des paroles ou des accords particuliers pour des boosts instantanés.",
      "Banshee", "La Banshee utilise des chants qui perturbent les cibles, leur annonçant une mort proche. Elle peut également mais rarement, infliger des dégâts via sa voix.",
      "Quartz rose, Rhodonite"
    );
  }

  public static getListSpecialities(): ArlenorSpeciality[] {
    const arlenorSpecialities = new ArlenorSpecialities();
    return Object.values(arlenorSpecialities);
  }

  public static getSpeciality(code: string): ArlenorSpeciality {
    const arlenorSpecialities = new ArlenorSpecialities();
    const listSpecialities = Object.values(arlenorSpecialities);
    const result = listSpecialities.find(spe => spe.code === code);
    if (!result) console.error("ERROR getSpeciality : ", code);
    return result || listSpecialities[0];
  }
}
