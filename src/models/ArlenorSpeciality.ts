import { ArlenorGroup } from "./ArlenorGroup";
import { ArlenorSkill, SkillsEnum } from "./ArlenorSkill";
import { getSpeSkills } from "./data/ListDefaultSkills";

export class ArlenorSpeciality {
  public name: string;
  public code: string;
  public image: string;
  public description: string;
  public group: ArlenorGroup;
  public weaponSkill: ArlenorSkill | null;
  public armorSkill: ArlenorSkill | null;
  public chanelingProperty: ArlenorSkill | null;
  public durationProperty: ArlenorSkill | null;

  constructor(name: string, code: string, group: ArlenorGroup) {
    this.name = name;
    this.code = code.toUpperCase();
    this.image = "";
    this.description = "";
    this.group = group;
    this.weaponSkill = null;
    this.armorSkill = null;
    this.chanelingProperty = null;
    this.durationProperty = null;
  }

  public setSkills(): void {
    const list = getSpeSkills(this.group.code, this.code);
    this.weaponSkill = list.find(skill => skill.type === SkillsEnum.CompetenceArme) ?? null;
    this.armorSkill = list.find(skill => skill.type === SkillsEnum.CompetenceArmure) ?? null;
    this.chanelingProperty = list.find(skill => skill.type === SkillsEnum.ProprieteCanalisation) ?? null;
    this.durationProperty = list.find(skill => skill.type === SkillsEnum.ProprieteTemps) ?? null;
  }
}
