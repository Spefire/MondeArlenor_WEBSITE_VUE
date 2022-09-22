import { ArlenorAPI } from "./ArlenorAPI";
import { CaractNomEnum } from "./ArlenorCaracts";
import { ArlenorEnum, getEnumByCode } from "./ArlenorEnum";
import { ArlenorRace } from "./ArlenorRace";
import { ArlenorSpeciality } from "./ArlenorSpeciality";
import { ArlenorSpecialities } from "./data/ListSpecialities";

export class ArlenorStuff extends ArlenorAPI {

  public name: string;
  public description: string;
  public urlImage: string;
  
  get image(): string | null {
    if (this.urlImage) {
      const images = require.context("./../assets/icons/capacities/", false, /\.png$/);
      return images(this.urlImage);
    }
    if (this.codeType === StuffTypesEnum.CompetenceArme.Code) return require("./../assets/icons/skills/armes.png");
    else if (this.type.Code === StuffTypesEnum.CompetenceArmure.Code) return require("./../assets/icons/skills/armures.png");
    else if (this.type.Code === StuffTypesEnum.ProprieteCanalisation.Code) return require("./../assets/icons/skills/incantation.png");
    else if (this.type.Code === StuffTypesEnum.ProprieteTemps.Code) return require("./../assets/icons/skills/rechargement.png");
    return null;
  }

  // Pour toutes les compétences
  public codeType: string;
  get type(): ArlenorEnum {
    return getEnumByCode(this.codeType, StuffTypesEnum);
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

  constructor() {
    super();
    this.name = "";
    this.description = "";
    this.urlImage = "";

    this.codeType = StuffTypesEnum.CompetenceAutre.Code;
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
