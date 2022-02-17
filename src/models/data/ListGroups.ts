import { ArlenorGroup } from "../ArlenorGroup";
import { ArlenorRoles } from "./ListRoles";

export class ArlenorGroups {
  public Gardien: ArlenorGroup;
  public Moine: ArlenorGroup;
  public Assassin: ArlenorGroup;
  public Bretteur: ArlenorGroup;
  public Sorcier: ArlenorGroup;
  public Invocateur: ArlenorGroup;
  public Enchanteur: ArlenorGroup;
  public Druide: ArlenorGroup;
  public Pretre: ArlenorGroup;
  public Barde: ArlenorGroup;

  constructor() {
    const roles = new ArlenorRoles();

    this.Gardien = new ArlenorGroup("Gardien", roles.Tank, "text-yellow");
    this.Gardien.description = "Le Gardien est un mage qui est là pour encaisser les coups sur la durée et maintenir ses cibles concentrées sur lui.";
    this.Gardien.image = require("./../../assets/icons/groups/gardien.png");

    this.Moine = new ArlenorGroup("Moine", roles.Tank, "text-cyan");
    this.Moine.description = "Le Moine est un mage qui n'encaisse pas les coups mais les esquive pour en renvoyer. Il est là pour foncer directement en première ligne lors d'un combat.";
    this.Moine.image = require("./../../assets/icons/groups/moine.png");

    //

    this.Assassin = new ArlenorGroup("Assassin", roles.DPSPhysique, "text-red");
    this.Assassin.description = "L'Assassin est un mage qui fait d'importants dégâts physiques très rapidement, sur une cible précise.";
    this.Assassin.image = require("./../../assets/icons/groups/assassin.png");

    this.Bretteur = new ArlenorGroup("Bretteur", roles.DPSPhysique, "text-orange");
    this.Bretteur.description = "Le Bretteur est un mage qui aime battre le fer avec ses ennemis. Peu importe le nombre, il enchaine ses coups d'épée.";
    this.Bretteur.image = require("./../../assets/icons/groups/bretteur.png");
    
    ///

    this.Sorcier = new ArlenorGroup("Sorcier", roles.DPSMagique, "text-ocean");
    this.Sorcier.description = "Le Sorcier est un mage qui fait des dégâts magiques sur plusieurs cibles.";
    this.Sorcier.image = require("./../../assets/icons/groups/sorcier.png");

    this.Invocateur = new ArlenorGroup("Invocateur", roles.DPSMagique, "text-turquoise");
    this.Invocateur.description = "L'Invocateur est un mage qui invoque des entités afin de l'aider tant à combattre qu'en dehors des combats.";
    this.Invocateur.image = require("./../../assets/icons/groups/invocateur.png");

    this.Enchanteur = new ArlenorGroup("Enchanteur", roles.DPSMagique, "text-violet");
    this.Enchanteur.description = "L'Enchanteur est un mage aux sorts offensifs faibles, s'ils sont utilisés seuls. C'est plutôt un soutien qui joue avec ses cibles pour permettre à des alliés de leur faire des dégâts considérables.";
    this.Enchanteur.image = require("./../../assets/icons/groups/enchanteur.png");
    
    ///

    this.Druide = new ArlenorGroup("Druide", roles.Soutien, "text-green");
    this.Druide.description = "Le Druide est un mage de soutien qui lie ses sorts à l'énergie de la nature, et pouvant se transformer partiellement ou complètement en un animal.";
    this.Druide.image = require("./../../assets/icons/groups/druide.png");

    this.Pretre = new ArlenorGroup("Prêtre", roles.Soutien, "text-grey");
    this.Pretre.description = "Le Prêtre est un mage de soutien qui adresse des prières pour aider et soigner ses alliés.";
    this.Pretre.image = require("./../../assets/icons/groups/pretre.png");

    this.Barde = new ArlenorGroup("Barde", roles.Soutien, "text-pink");
    this.Barde.description = "Le Barde est un mage de soutien qui se sert de la musique pour influencer le combat à l'avantage de ses alliés.";
    this.Barde.image = require("./../../assets/icons/groups/barde.png");
  }
}

export function getListGroups(): ArlenorGroup[] {
  const arlenorGroups = new ArlenorGroups();
  return Object.values(arlenorGroups);
}
