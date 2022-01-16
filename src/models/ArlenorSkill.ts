import { ArlenorClass, ArlenorListClasses } from "./ArlenorClass";
import { ArlenorEnum } from "./ArlenorEnum";
import { ArlenorGroup, ArlenorListGroups } from "./ArlenorGroup";
import { CaractEnum } from "./Character";

export class ArlenorSkill {
  public name: string;
  public description: string;
  public image: string;
  public typeSkill: ArlenorEnum;
  public arlenorGroups: ArlenorGroup[];
  public arlenorClasses: ArlenorClass[];
  public caracts: ArlenorEnum[];
  public effect: string;

  constructor(name: string, typeSkill: ArlenorEnum, arlenorGroups: ArlenorGroup[], arlenorClasses: ArlenorClass[]) {
    this.name = name;
    this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies nisi non erat faucibus auctor. Aenean pellentesque commodo eros nec egestas. Pellentesque tincidunt vehicula quam ac interdum. Aenean tristique ac diam nec pretium. Mauris tellus lacus, tincidunt ac porttitor vitae, pulvinar eget quam.";
    this.image = "";
    this.typeSkill = typeSkill;
    this.arlenorGroups = arlenorGroups;
    this.arlenorClasses = arlenorClasses;
    this.caracts = [];
    this.effect = "";
  }
}

export class SkillsEnum {
  static CompetenceArme: ArlenorEnum = { Code: "COMP_ARME", Libelle: "Compétence d'arme" };
  static CompetenceArmure: ArlenorEnum = { Code: "COMP_ARMURE", Libelle: "Compétence d'armure" };
  static TempsRechargement: ArlenorEnum = { Code: "TEMPS_RECH", Libelle: "Temps de rechargement" };
  static TempsIncantation: ArlenorEnum = { Code: "TEMPS_INC", Libelle: "Temps d'incantation" };
  static CompetenceSpeBonus: ArlenorEnum = { Code: "SPE_BONUS", Libelle: "Compétence spéciale Bonus sur soi" };
  static CompetenceSpeMalus: ArlenorEnum = { Code: "SPE_MALUS", Libelle: "Compétence spéciale Malus sur soi" };
  static CompetenceSpeAttaque: ArlenorEnum = { Code: "SPE_ATK", Libelle: "Compétence spéciale d'Attaque" };
  static SortOffensif: ArlenorEnum = { Code: "SORT_OFF", Libelle: "Sort offensif" };
  static SortDefensif: ArlenorEnum = { Code: "SORT_DEF", Libelle: "Sort défensif" };
  static SortDivers: ArlenorEnum = { Code: "SORT_DIVERS", Libelle: "Sort divers" };
}

export function getListSkills(): ArlenorSkill[] {
  const listSkills: ArlenorSkill[] = [];
  const groups = new ArlenorListGroups();
  const classes = new ArlenorListClasses();

  // Temps de rechargement
  listSkills.push(new ArlenorSkill(
    "Pas de temps de rechargement",
    SkillsEnum.TempsRechargement,
    [],
    [classes.DanseurMartial],
  ));
  listSkills.push(new ArlenorSkill(
    "Temps de rechargement rapide",
    SkillsEnum.TempsRechargement,
    [],
    [classes.Derviche],
  ));
  listSkills.push(new ArlenorSkill(
    "Temps de rechargement normal",
    SkillsEnum.TempsRechargement,
    [groups.Gardien, groups.Bretteur],
    [],
  ));
  listSkills.push(new ArlenorSkill(
    "Temps de rechargement long",
    SkillsEnum.TempsRechargement,
    [groups.Assassin],
    [],
  ));

  // Temps d'incantation
  listSkills.push(new ArlenorSkill(
    "Pas de temps d'incantation",
    SkillsEnum.TempsIncantation,
    [groups.Gardien, groups.Moine, groups.Assassin, groups.Bretteur],
    [],
  ));
  listSkills.push(new ArlenorSkill(
    "Temps d'incantation rapide",
    SkillsEnum.TempsIncantation,
    [],
    [],
  ));
  listSkills.push(new ArlenorSkill(
    "Temps d'incantation normal",
    SkillsEnum.TempsIncantation,
    [groups.Gardien],
    [],
  ));
  listSkills.push(new ArlenorSkill(
    "Temps d'incantation long",
    SkillsEnum.TempsIncantation,
    [],
    [],
  ));

  // Armes
  const arme01 = new ArlenorSkill(getLibArme("à une main, avec bouclier"), SkillsEnum.CompetenceArme, [], [classes.Paladin]);
  arme01.caracts = [CaractEnum.Vigueur];
  listSkills.push(arme01);
  
  const arme02 = new ArlenorSkill(getLibArme("épées à deux mains"), SkillsEnum.CompetenceArme, [], [classes.Chevalier]);
  arme02.caracts = [CaractEnum.Vigueur];
  listSkills.push(arme02);

  const arme03 = new ArlenorSkill(getLibArme("mains nues"), SkillsEnum.CompetenceArme, [], [classes.DanseurMartial]);
  arme03.caracts = [CaractEnum.Vigueur];
  listSkills.push(arme03);

  const arme04 = new ArlenorSkill(getLibArme("d'hast"), SkillsEnum.CompetenceArme, [], [classes.Derviche]);
  arme04.caracts = [CaractEnum.Habilete];
  listSkills.push(arme04);

  const arme05 = new ArlenorSkill(getLibArme("dagues / armes de jets"), SkillsEnum.CompetenceArme, [], [classes.LameOmbre]);
  arme05.caracts = [CaractEnum.Habilete];
  listSkills.push(arme05);

  const arme06 = new ArlenorSkill(getLibArme("arcs / arbalètes"), SkillsEnum.CompetenceArme, [], [classes.Chasseur]);
  arme06.caracts = [CaractEnum.Habilete];
  listSkills.push(arme06);

  const arme07 = new ArlenorSkill(getLibArme("sabres"), SkillsEnum.CompetenceArme, [], [classes.DanseurSabre]);
  arme07.caracts = [CaractEnum.Habilete];
  listSkills.push(arme07);

  const arme08 = new ArlenorSkill(getLibArme("ambidextrie"), SkillsEnum.CompetenceArme, [], [classes.DoubleLame]);
  arme08.caracts = [CaractEnum.Vigueur];
  listSkills.push(arme08);

  const arme09 = new ArlenorSkill(getLibArme("épées à une main"), SkillsEnum.CompetenceArme, [], [classes.Escrimeur]);
  arme09.caracts = [CaractEnum.Vigueur];
  listSkills.push(arme09);

  return listSkills;
}

function getLibArme(lib: string) {
  return "Armes (" + lib + ")";
}