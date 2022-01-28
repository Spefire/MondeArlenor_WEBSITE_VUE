import { ArlenorClass } from "./ArlenorClass";
import { ArlenorEnum } from "./ArlenorEnum";
import { ArlenorGroup } from "./ArlenorGroup";

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
      this.image = require("./../assets/icons/armes.png");
    }
    else if (this.typeSkill.Code === SkillsEnum.CompetenceArmure.Code) {
      this.image = require("./../assets/icons/armures.png");
    }
    else if (this.typeSkill.Code === SkillsEnum.TempsIncantation.Code) {
      this.image = require("./../assets/icons/incantation.png");
    }
    else if (this.typeSkill.Code === SkillsEnum.TempsRechargement.Code) {
      this.image = require("./../assets/icons/rechargement.png");
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
