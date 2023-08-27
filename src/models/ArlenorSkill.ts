import { ArlenorAPI } from "./ArlenorAPI";
import { ArlenorEnum, getEnumByCode } from "./ArlenorEnum";
import { ArlenorRace } from "./ArlenorRace";

export class ArlenorSkill extends ArlenorAPI {

  // Variables à sauvegarder
  public name: string;
  public description: string;
  public urlImage: string | null;
  public codeType: string;
  public codesCaracts: string[];
  public codeRace: string | null;

  // Variables dérivées
  get image(): string | null {
    const url = (this.urlImage) ? "./" + this.urlImage : "./other.png";
    const images = require.context("./../assets/icons/skills/", false, /\.png$/);
    return images(url);
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

  constructor() {
    super();
    this.name = "";
    this.description = "";
    this.urlImage = null;

    this.codeType = SkillTypesEnum.Other.Code;
    this.codesCaracts = [];
    this.codeRace = null;
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
