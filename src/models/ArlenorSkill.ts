import { ArlenorAPI } from "./ArlenorAPI";
import { ArlenorEnum, getEnumByCode } from "./ArlenorEnum";
import { ArlenorRace } from "./ArlenorRace";
import { ArlenorSpeciality } from "./ArlenorSpeciality";
import { ArlenorSpecialities } from "./data/ListSpecialities";

export class ArlenorSkill extends ArlenorAPI {

  // Variables à sauvegarder
  public name: string;
  public description: string;
  public urlImage: string;
  public codeType: string;
  public codesCaracts: string[];
  public codeRace: string | null;
  public codeSpeciality: string | null;

  // Variables dérivées
  get image(): string | null {
    if (this.codeType === SkillTypesEnum.Weapon.Code) return require("./../assets/icons/skills/weapon.png");
    else if (this.codeType === SkillTypesEnum.Race.Code) {
      const images = require.context("./../assets/icons/skills/", false, /\.png$/);
      return images(this.urlImage);
    }
    else return require("./../assets/icons/skills/other.png");
  }

  get type(): ArlenorEnum {
    return getEnumByCode(this.codeType, SkillTypesEnum);
  }

  get nameCaracts(): string {
    let results = "";
    this.codesCaracts.forEach((codeCaracts, index) => {
      if (index) results += ", ";
      results += codeCaracts;
    });
    return results ? results : "Aucune caractéristique";
  }

  get race(): ArlenorRace | null {
    if (!this.codeRace) return null;
    return ArlenorRace.getRace(this.codeRace);
  }

  get speciality(): ArlenorSpeciality | null {
    if (!this.codeSpeciality) return null;
    return ArlenorSpecialities.getSpeciality(this.codeSpeciality);
  }

  get isEditable(): boolean {
    return (!this.codeRace && !this.codeSpeciality);
  }

  constructor() {
    super();
    this.name = "";
    this.description = "";
    this.urlImage = "";

    this.codeType = SkillTypesEnum.Other.Code;
    this.codesCaracts = [];
    this.codeRace = null;
    this.codeSpeciality = null;
  }

  public init(name: string, type: ArlenorEnum): void {
    this.name = name;
    this.codeType = type.Code;
  }
}

export class SkillTypesEnum {
  static Weapon: ArlenorEnum = { Code: "WEAPON", Libelle: "Compétence d'arme" };
  static Race: ArlenorEnum = { Code: "RACE", Libelle: "Compétence de race" };
  static Other: ArlenorEnum = { Code: "OTHER", Libelle: "Autre compétence" };
}
