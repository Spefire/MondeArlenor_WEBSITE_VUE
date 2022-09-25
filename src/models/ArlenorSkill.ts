import { ArlenorAPI } from "./ArlenorAPI";
import { CaractNomEnum } from "./ArlenorCaracts";
import { ArlenorEnum, getEnumByCode } from "./ArlenorEnum";
import { ArlenorRace } from "./ArlenorRace";
import { ArlenorSpeciality } from "./ArlenorSpeciality";
import { ArlenorSpecialities } from "./data/ListSpecialities";

export class ArlenorSkill extends ArlenorAPI {

  public name: string;
  public description: string;
  public urlImage: string;

  get code(): string {
    let code = this.name;
    code = code.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    code = code.replace(/\s/g, "");
    return code.toUpperCase();
  }
  
  get image(): string | null {
    if (this.urlImage) {
      const images = require.context("./../assets/icons/capacities/", false, /\.png$/);
      return images(this.urlImage);
    }
    if (this.codeType === SkillTypesEnum.CompetenceArme.Code) return require("./../assets/icons/skills/armes.png");
    else if (this.type.Code === SkillTypesEnum.CompetenceArmure.Code) return require("./../assets/icons/skills/armures.png");
    else if (this.type.Code === SkillTypesEnum.ProprieteCanalisation.Code) return require("./../assets/icons/skills/incantation.png");
    else if (this.type.Code === SkillTypesEnum.ProprieteTemps.Code) return require("./../assets/icons/skills/rechargement.png");
    return null;
  }

  // Pour toutes les compétences
  public codeType: string;
  get type(): ArlenorEnum {
    return getEnumByCode(this.codeType, SkillTypesEnum);
  }

  public codesCaracts: string[];
  get caracts(): ArlenorEnum[] {
    const results: ArlenorEnum[] = [];
    this.codesCaracts.forEach(codeCaracts => {
      results.push(getEnumByCode(codeCaracts, CaractNomEnum));
    });
    return results;
  }

  // Pour les compétences de race
  public codeRace: string | null;
  get race(): ArlenorRace | null {
    if (!this.codeRace) return null;
    return ArlenorRace.getRace(this.codeRace);
  }

  // Pour les autres compétences
  public codeSpeciality: string | null;
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

    this.codeType = SkillTypesEnum.CompetenceAutre.Code;
    this.codesCaracts = [];
    this.codeRace = null;
    this.codeSpeciality = null;
  }

  public initByJSON(value: string): void {
    const powerDB = JSON.parse(value);
    this.date = powerDB.date;
    this.hour = powerDB.hour;

    this.name = powerDB.name;
    this.description = powerDB.description;
    this.urlImage = powerDB.urlImage;

    this.codeType = powerDB.codeType;
    this.codesCaracts = powerDB.codesCaracts;
    this.codeRace = powerDB.codeRace;
    this.codeSpeciality = powerDB.codeSpeciality;
  }

  public init(name: string, type: ArlenorEnum): void {
    this.name = name;
    this.codeType = type.Code;
  }
}

export class SkillTypesEnum {
  // Compétences de groupe et de classe/spécialité
  static CompetenceArme: ArlenorEnum = { Code: "ABL_ARME", Libelle: "Compétence d'arme" };
  static CompetenceArmure: ArlenorEnum = { Code: "ABL_ARMURE", Libelle: "Compétence d'armure" };
  static ProprieteCanalisation: ArlenorEnum = { Code: "PROP_CAN", Libelle: "Canalisation" };
  static ProprieteTemps: ArlenorEnum = { Code: "PROP_TEMPS", Libelle: "Durée et recharge" };
  // Compétences de race et autres compétences
  static CompetenceAutre: ArlenorEnum = { Code: "ABL_OTHER", Libelle: "Autre compétence" };
}
