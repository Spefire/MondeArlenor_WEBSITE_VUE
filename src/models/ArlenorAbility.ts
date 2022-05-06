import { ArlenorEnum } from "./ArlenorEnum";
import { ArlenorGroup } from "./ArlenorGroup";
import { ArlenorSpeciality } from "./ArlenorSpeciality";

export class ArlenorAbility {
  public name: string;
  public image: string;
  public typeSkill: ArlenorEnum;
  public group: ArlenorGroup;
  public specialities: ArlenorSpeciality[];
  public caracts: ArlenorEnum[];

  constructor(name: string, typeSkill: ArlenorEnum, group: ArlenorGroup | null, specialities: ArlenorSpeciality[]) {
    this.name = name;
    this.image = "";
    this.typeSkill = typeSkill;
    this.group = (group ? group : specialities[0].group);
    this.specialities = specialities;
    this.caracts = [];

    this.setImage();
  }

  public setImage(): void {
    if (this.typeSkill.Code === AbilitiesEnum.CompetenceArme.Code) {
      this.image = require("./../assets/icons/armes.png");
    }
    else if (this.typeSkill.Code === AbilitiesEnum.CompetenceArmure.Code) {
      this.image = require("./../assets/icons/armures.png");
    }
    else if (this.typeSkill.Code === AbilitiesEnum.TempsIncantation.Code) {
      this.image = require("./../assets/icons/incantation.png");
    }
    else if (this.typeSkill.Code === AbilitiesEnum.TempsRechargement.Code) {
      this.image = require("./../assets/icons/rechargement.png");
    }
  }
}

export class AbilitiesEnum {
  // Compétences de groupe et de classe/spécialité
  static CompetenceArme: ArlenorEnum = { Code: "COMP_ARME", Libelle: "Compétence d'arme" };
  static CompetenceArmure: ArlenorEnum = { Code: "COMP_ARMURE", Libelle: "Compétence d'armure" };
  static TempsRechargement: ArlenorEnum = { Code: "TEMPS_RECH", Libelle: "Temps de rechargement" };
  static TempsIncantation: ArlenorEnum = { Code: "TEMPS_INC", Libelle: "Temps d'incantation" };
}
