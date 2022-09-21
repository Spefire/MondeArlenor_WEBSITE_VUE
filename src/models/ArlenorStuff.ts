import { ArlenorAPI } from "./ArlenorAPI";
import { ArlenorEnum, getEnumByCode } from "./ArlenorEnum";
import { ArlenorGroup } from "./ArlenorGroup";
import { ArlenorRace } from "./ArlenorRace";
import { ArlenorSpeciality } from "./ArlenorSpeciality";

export class ArlenorStuff extends ArlenorAPI {

  public name: string;
  public image: string;
  public codeType: string;

  // Pour les compétences de race
  public race: ArlenorRace | null;
  public description: string;

  // Pour les autres compétences
  public group: ArlenorGroup | null;
  public specialities: ArlenorSpeciality[];
  public caracts: ArlenorEnum[];

  get type(): ArlenorEnum {
    return getEnumByCode(this.codeType, StuffTypesEnum);
  }

  constructor() {
    super();
    this.name = "";
    this.codeType = StuffTypesEnum.CompetenceAutre.Code;
    this.description = "";
    this.image = "";
    this.race = null;
    this.group = null;
    this.specialities = [];
    this.caracts = [];

    this.setImage();
  }

  public init(name: string, type: ArlenorEnum): void {
    this.name = name;
    this.codeType = type.Code;
  }

  public initGrpSpe(group: ArlenorGroup | null, specialities: ArlenorSpeciality[]): void {
    this.group = (group ? group : specialities[0].group);
    this.specialities = specialities;
  }

  public setImage(): void {
    if (this.type.Code === StuffTypesEnum.CompetenceArme.Code) {
      this.image = require("./../assets/icons/skills/armes.png");
    }
    else if (this.type.Code === StuffTypesEnum.CompetenceArmure.Code) {
      this.image = require("./../assets/icons/skills/armures.png");
    }
    else if (this.type.Code === StuffTypesEnum.ProprieteCanalisation.Code) {
      this.image = require("./../assets/icons/skills/incantation.png");
    }
    else if (this.type.Code === StuffTypesEnum.ProprieteTemps.Code) {
      this.image = require("./../assets/icons/skills/rechargement.png");
    }
  }
}

export class StuffTypesEnum {
  // Compétences de race
  static CompetenceRace: ArlenorEnum = { Code: "ABL_RACE", Libelle: "Compétence de race" };
  // Compétences de groupe et de classe/spécialité
  static CompetenceArme: ArlenorEnum = { Code: "ABL_ARME", Libelle: "Compétence d'arme" };
  static CompetenceArmure: ArlenorEnum = { Code: "ABL_ARMURE", Libelle: "Compétence d'armure" };
  static ProprieteCanalisation: ArlenorEnum = { Code: "PROP_CAN", Libelle: "Canalisation" };
  static ProprieteTemps: ArlenorEnum = { Code: "PROP_TEMPS", Libelle: "Durée et recharge" };
  // Autres compétences
  static CompetenceAutre: ArlenorEnum = { Code: "ABL_OTHER", Libelle: "Autre compétence" };
}
