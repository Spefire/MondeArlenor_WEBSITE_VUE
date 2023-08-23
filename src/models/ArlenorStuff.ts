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
    if (this.codeType === StuffTypesEnum.Weapon.Code) return require("./../assets/icons/skills/weapon.png");
    else if (this.type.Code === StuffTypesEnum.Armor.Code) return require("./../assets/icons/skills/armor.png");
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

    this.codeType = StuffTypesEnum.Weapon.Code;
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
  static Weapon: ArlenorEnum = { Code: "WEAPON", Libelle: "Arme" };
  static Armor: ArlenorEnum = { Code: "ARMOR", Libelle: "Armure" };
}
