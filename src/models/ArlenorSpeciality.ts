import { ArlenorGroup } from "./ArlenorGroup";
import { ArlenorSkill, SkillTypesEnum } from "./ArlenorSkill";
import { getSpeSkills } from "./data/ListDefaultSkills";

export class ArlenorSpeciality {
  public name: string;
  public code: string;
  public image: string;
  public description: string;
  public crystalName: string;
  public group: ArlenorGroup;
  public weaponSkill: ArlenorSkill | null;
  public armorSkill: ArlenorSkill | null;

  constructor(name: string, code: string, group: ArlenorGroup) {
    this.name = name;
    this.code = code.toUpperCase();
    this.image = "";
    this.description = "";
    this.crystalName = "";
    this.group = group;
    this.weaponSkill = null;
    this.armorSkill = null;
  }

  public setSkills(): void {
    const list = getSpeSkills(this.code);
    this.weaponSkill = list.find(skill => skill.type === SkillTypesEnum.CompetenceArme) ?? null;
    this.armorSkill = list.find(skill => skill.type === SkillTypesEnum.CompetenceArmure) ?? null;
  }
}
