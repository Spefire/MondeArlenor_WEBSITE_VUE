import { ArlenorGroup } from "./ArlenorGroup";
import { ArlenorSkill, SkillsEnum } from "./ArlenorSkill";
import { getSpeSkills } from "./data/ListSkills";

export class ArlenorSpeciality {
  public name: string;
  public code: string;
  public image: string;
  public description: string;
  public group: ArlenorGroup;
  public weaponAbility: ArlenorSkill | null;
  public armorAbility: ArlenorSkill | null;
  public timeCastingAbility: ArlenorSkill | null;
  public numberUseAbility: ArlenorSkill | null;

  constructor(name: string, code: string, group: ArlenorGroup) {
    this.name = name;
    this.code = code.toUpperCase();
    this.image = "";
    this.description = "";
    this.group = group;
    this.weaponAbility = null;
    this.armorAbility = null;
    this.timeCastingAbility = null;
    this.numberUseAbility = null;
  }

  public setSkills(): void {
    const list = getSpeSkills(this.group.code, this.code);
    this.weaponAbility = list.find(skill => skill.type === SkillsEnum.CompetenceArme) ?? null;
    this.armorAbility = list.find(skill => skill.type === SkillsEnum.CompetenceArmure) ?? null;
    this.timeCastingAbility = list.find(skill => skill.type === SkillsEnum.TempsIncantation) ?? null;
    this.numberUseAbility = list.find(skill => skill.type === SkillsEnum.NombreUtilisation) ?? null;
  }
}
