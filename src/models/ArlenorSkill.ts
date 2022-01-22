import { ArlenorClass, ArlenorClasses } from "./ArlenorClass";
import { ArlenorEnum } from "./ArlenorEnum";
import { ArlenorGroup, ArlenorGroups } from "./ArlenorGroup";
import { CaractEnum } from "./Character";

export class ArlenorSkill {
  public name: string;
  public description: string;
  public image: string;
  public typeSkill: ArlenorEnum;
  public group: ArlenorGroup;
  public classes: ArlenorClass[];
  public caracts: ArlenorEnum[];
  public effect: string;

  constructor(name: string, typeSkill: ArlenorEnum, group: ArlenorGroup | null, classes: ArlenorClass[]) {
    this.name = name;
    this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar justo a facilisis aliquet. In justo libero, tempor a ipsum id, pellentesque semper est. Nam elit ex, pulvinar eu libero nec, sagittis fringilla lorem. Curabitur consequat nulla elit, nec tincidunt risus rhoncus vitae. In hac habitasse platea dictumst.";
    this.image = "";
    this.typeSkill = typeSkill;
    this.classes = classes;
    this.group = (group ? group : classes[0].group);
    this.caracts = [];
    this.effect = "";

    this.setImage();
  }

  public setImage(): void {
    if (this.typeSkill.Code === SkillsEnum.CompetenceArme.Code) {
      this.image = require("./../assets/icons-skills/armes.png");
    }
    else if (this.typeSkill.Code === SkillsEnum.CompetenceArmure.Code) {
      this.image = require("./../assets/icons-skills/armures.png");
    }
    else if (this.typeSkill.Code === SkillsEnum.TempsIncantation.Code) {
      this.image = require("./../assets/icons-skills/incantation.png");
    }
    else if (this.typeSkill.Code === SkillsEnum.TempsRechargement.Code) {
      this.image = require("./../assets/icons-skills/rechargement.png");
    }
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
  let listSkills: ArlenorSkill[] = [];
  const groups = new ArlenorGroups();
  const classes = new ArlenorClasses();

  // Temps de rechargement
  listSkills = createSkill(listSkills,
    "Pas de temps de rechargement",
    SkillsEnum.TempsRechargement,
    [], [classes.DanseurMartial]
  );
  listSkills = createSkill(listSkills,
    "Temps de rechargement rapide",
    SkillsEnum.TempsRechargement,
    [], [classes.Derviche]
  );
  listSkills = createSkill(listSkills,
    "Temps de rechargement normal",
    SkillsEnum.TempsRechargement,
    [groups.Gardien, groups.Bretteur], [],
  );
  listSkills = createSkill(listSkills,
    "Temps de rechargement long",
    SkillsEnum.TempsRechargement,
    [groups.Assassin], [],
  );

  // Temps d'incantation
  listSkills = createSkill(listSkills,
    "Pas de temps d'incantation",
    SkillsEnum.TempsIncantation,
    [groups.Gardien, groups.Moine, groups.Assassin, groups.Bretteur], [],
  );
  listSkills = createSkill(listSkills,
    "Temps d'incantation rapide",
    SkillsEnum.TempsIncantation,
    [], [],
  );
  listSkills = createSkill(listSkills,
    "Temps d'incantation normal",
    SkillsEnum.TempsIncantation,
    [groups.Gardien], [],
  );
  listSkills = createSkill(listSkills,
    "Temps d'incantation long",
    SkillsEnum.TempsIncantation,
    [], [],
  );

  // Armes
  const arme01 = new ArlenorSkill(getLibArme("à une main, avec bouclier"), SkillsEnum.CompetenceArme, null, [classes.Paladin]);
  arme01.caracts = [CaractEnum.Vigueur];
  listSkills.push(arme01);
  
  const arme02 = new ArlenorSkill(getLibArme("épées à deux mains"), SkillsEnum.CompetenceArme, null, [classes.Chevalier]);
  arme02.caracts = [CaractEnum.Vigueur];
  listSkills.push(arme02);

  const arme03 = new ArlenorSkill(getLibArme("mains nues"), SkillsEnum.CompetenceArme, null, [classes.DanseurMartial]);
  arme03.caracts = [CaractEnum.Vigueur];
  listSkills.push(arme03);

  const arme04 = new ArlenorSkill(getLibArme("d'hast"), SkillsEnum.CompetenceArme, null, [classes.Derviche]);
  arme04.caracts = [CaractEnum.Habilete];
  listSkills.push(arme04);

  const arme05 = new ArlenorSkill(getLibArme("dagues / armes de jets"), SkillsEnum.CompetenceArme, null, [classes.LameOmbre]);
  arme05.caracts = [CaractEnum.Habilete];
  listSkills.push(arme05);

  const arme06 = new ArlenorSkill(getLibArme("arcs / arbalètes"), SkillsEnum.CompetenceArme, null, [classes.Chasseur]);
  arme06.caracts = [CaractEnum.Habilete];
  listSkills.push(arme06);

  const arme07 = new ArlenorSkill(getLibArme("sabres"), SkillsEnum.CompetenceArme, null, [classes.DanseurSabre]);
  arme07.caracts = [CaractEnum.Habilete];
  listSkills.push(arme07);

  const arme08 = new ArlenorSkill(getLibArme("ambidextrie"), SkillsEnum.CompetenceArme, null, [classes.DoubleLame]);
  arme08.caracts = [CaractEnum.Vigueur];
  listSkills.push(arme08);

  const arme09 = new ArlenorSkill(getLibArme("épées à une main"), SkillsEnum.CompetenceArme, null, [classes.Escrimeur]);
  arme09.caracts = [CaractEnum.Vigueur];
  listSkills.push(arme09);

  return listSkills;
}

function getLibArme(lib: string): string {
  return "Armes (" + lib + ")";
}

function createSkill(listSkills: ArlenorSkill[], name: string, typeSkill: ArlenorEnum, groups: ArlenorGroup[], classes: ArlenorClass[]): ArlenorSkill[] {
  if (groups.length > 0) {
    groups.forEach(grp => {
      listSkills.push(new ArlenorSkill(name, typeSkill, grp, classes));
    });
  } else if (classes[0]) {
    listSkills.push(new ArlenorSkill(name, typeSkill, classes[0].group, classes));
  }
  return listSkills;
}
