import { ArlenorSpeciality } from "../ArlenorSpeciality";
import { ArlenorRoles } from "./ListRoles";

export class ArlenorSpecialities {
  public Gardien: ArlenorSpeciality;
  public Moine: ArlenorSpeciality;
  public Assassin: ArlenorSpeciality;
  public Bretteur: ArlenorSpeciality;
  public Sorcier: ArlenorSpeciality;
  public Invocateur: ArlenorSpeciality;
  public Enchanteur: ArlenorSpeciality;
  public Druide: ArlenorSpeciality;
  public Pretre: ArlenorSpeciality;
  public Barde: ArlenorSpeciality;

  constructor() {
    const roles = new ArlenorRoles();

    this.Gardien = new ArlenorSpeciality("Gardien", "text-yellow", roles.Tank);
    this.Gardien.description = "Le Gardien est un mage qui est là pour encaisser les coups sur la durée et maintenir ses cibles concentrées sur lui.";
    this.Gardien.urlImage = "gardien.png";
    this.Gardien.appearance = "Citrine, Topaze jaune";

    this.Moine = new ArlenorSpeciality("Moine", "text-cyan", roles.Tank);
    this.Moine.description = "Le Moine est un mage qui n'encaisse pas les coups mais les esquive pour en renvoyer. Il est là pour foncer directement en première ligne lors d'un combat.";
    this.Moine.urlImage = "moine.png";
    this.Moine.appearance = "Amazonite, Aigue-marine";

    //

    this.Assassin = new ArlenorSpeciality("Assassin", "text-red", roles.DPSPhysique);
    this.Assassin.description = "L'Assassin est un mage qui fait d'importants dégâts physiques très rapidement, sur une cible précise.";
    this.Assassin.urlImage = "assassin.png";
    this.Assassin.appearance = "Grenat, Rubis";

    this.Bretteur = new ArlenorSpeciality("Bretteur", "text-orange", roles.DPSPhysique);
    this.Bretteur.description = "Le Bretteur est un mage qui aime battre le fer avec ses ennemis. Peu importe le nombre, il enchaine ses coups d'épée.";
    this.Bretteur.urlImage = "bretteur.png";
    this.Bretteur.appearance = "Cornaline, Opale de feu";
    
    ///

    this.Sorcier = new ArlenorSpeciality("Sorcier", "text-ocean", roles.DPSMagique);
    this.Sorcier.description = "Le Sorcier est un mage qui fait des dégâts magiques sur plusieurs cibles.";
    this.Sorcier.urlImage = "sorcier.png";
    this.Sorcier.appearance = "Saphir, Sodalite";

    this.Invocateur = new ArlenorSpeciality("Invocateur", "text-turquoise", roles.DPSMagique);
    this.Invocateur.description = "L'Invocateur est un mage qui invoque des entités afin de l'aider tant à combattre qu'en dehors des combats.";
    this.Invocateur.urlImage = "invocateur.png";
    this.Invocateur.appearance = "Malachite, Jade";

    this.Enchanteur = new ArlenorSpeciality("Enchanteur", "text-violet", roles.DPSMagique);
    this.Enchanteur.description = "L'Enchanteur est un mage aux sorts offensifs faibles, s'ils sont utilisés seuls. C'est plutôt un soutien qui joue avec ses cibles pour permettre à des alliés de leur faire des dégâts considérables.";
    this.Enchanteur.urlImage = "enchanteur.png";
    this.Enchanteur.appearance = "Améthyste, Fluorite";
    
    ///

    this.Druide = new ArlenorSpeciality("Druide", "text-green", roles.Soutien);
    this.Druide.description = "Le Druide est un mage de soutien qui lie ses sorts à l'énergie de la nature, et pouvant se transformer partiellement ou complètement en un animal.";
    this.Druide.urlImage = "druide.png";
    this.Druide.appearance = "Émeraude, Péridot";

    this.Pretre = new ArlenorSpeciality("Prêtre", "text-grey", roles.Soutien);
    this.Pretre.description = "Le Prêtre est un mage de soutien qui adresse des prières pour aider et soigner ses alliés.";
    this.Pretre.urlImage = "pretre.png";
    this.Pretre.appearance = "Pierre de lune, Obsidienne";

    this.Barde = new ArlenorSpeciality("Barde", "text-pink", roles.Soutien);
    this.Barde.description = "Le Barde est un mage de soutien qui se sert de la musique pour influencer le combat à l'avantage de ses alliés.";
    this.Barde.urlImage = "barde.png";
    this.Barde.appearance = "Quartz rose, Rhodonite";
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
