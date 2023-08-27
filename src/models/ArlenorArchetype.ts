import { ArlenorAPI } from "./ArlenorAPI";
import { ArlenorSkill } from "./ArlenorSkill";

export class ArlenorArchetype extends ArlenorAPI {

  // Variables à sauvegarder
  public name: string;
  public description: string;
  public codeSpeciality: string | null;
  public idSkill: number | null;

  // Variables du front
  public skill: ArlenorSkill | null;

  constructor() {
    super();
    this.name = "";
    this.description = "";
    this.codeSpeciality = null;
    this.idSkill = null;
    this.skill = null;
  }
}
