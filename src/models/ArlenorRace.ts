import { ArlenorEnum } from "./ArlenorEnum";
import { ArlenorSkill } from "./ArlenorSkill";
import { getListRaceSkills } from "./data/ListDefaultSkills";

export class ArlenorRace {
  public name: string;
  public description: string;
  public difficulty: string;
  public infoAge: string;
  public infoAppareance: string;
  public ratioWorld: number;
  public ratioMagic: number;
  public image: string;
  public locations: string[];

  get code(): string {
    let code = this.name;
    code = code.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    code = code.replace(/\s/g, "");
    return code.toUpperCase();
  }
 
  constructor(name: string, difficulty: string, ratioWorld: number, ratioMagic: number) {
    this.name = name;
    this.description = "";
    this.difficulty = difficulty;
    this.infoAge = "";
    this.infoAppareance = "";
    this.ratioWorld = ratioWorld;
    this.ratioMagic = ratioMagic;
    this.image = "";
    this.locations = [];
  }

  public getSkills(): ArlenorSkill[] {
    const allSkills = getListRaceSkills();
    return allSkills.filter(skill => skill.race && skill.race.code === this.code);
  }
}

export class DifficultyEnum {
  static Facile: ArlenorEnum = { Code: "FACILE", Libelle: "Facile" };
  static Normale: ArlenorEnum = { Code: "NORMALE", Libelle: "Normale" };
  static Difficile: ArlenorEnum = { Code: "DIFFICILE", Libelle: "Difficile" };
  static Impossible: ArlenorEnum = { Code: "IMPOSSIBLE", Libelle: "Impossible" };
}
