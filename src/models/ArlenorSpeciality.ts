import { ArlenorRole } from "./ArlenorRole";
import { ArlenorSkill } from "./ArlenorSkill";

export class ArlenorSpeciality {
  public name: string;
  public code: string;
  public color: string;
  public role: ArlenorRole;
  public image: string;
  public otherImage: string;
  public description: string;
  public appearance: string;
  public archetypeName01: string;
  public archetypeDesc01: string;
  public archetypeSkill01: ArlenorSkill | null;
  public archetypeName02: string;
  public archetypeDesc02: string;
  public archetypeSkill02: ArlenorSkill | null;

  constructor(name: string, code: string, color: string, role: ArlenorRole) {
    this.name = name;
    this.code = code.toUpperCase();
    this.color = color;
    this.role = role;
    this.image = "";
    this.otherImage = "";
    this.description = "";
    this.appearance = "";
    this.archetypeName01 = "";
    this.archetypeDesc01 = "";
    this.archetypeSkill01 = null;
    this.archetypeName02 = "";
    this.archetypeDesc02 = "";
    this.archetypeSkill02 = null;
  }

  public setArchetype(name01: string, /*skill01: ArlenorSkill, */desc01: string,
    name02: string, /*skill02: ArlenorSkill, */desc02: string, appearance: string): void {
    this.archetypeName01 = name01;
    this.archetypeDesc01 = desc01;
    //this.archetypeSkill01= skill01;
    this.archetypeName02 = name02;
    this.archetypeDesc02 = desc02;
    //this.archetypeSkill02 = skill02;
    this.appearance = appearance;
  }
}
