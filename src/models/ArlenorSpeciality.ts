import { AbilitiesEnum, ArlenorAbility } from "./ArlenorAbility";
import { ArlenorGroup } from "./ArlenorGroup";
import { getSpeAbilities } from "./data/ListAbilities";

export class ArlenorSpeciality {
  public name: string;
  public code: string;
  public image: string;
  public description: string;
  public group: ArlenorGroup;
  public weaponAbility: ArlenorAbility | null;
  public armorAbility: ArlenorAbility | null;
  public timeCastingAbility: ArlenorAbility | null;
  public numberUseAbility: ArlenorAbility | null;

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

  public setAbilities(): void {
    const list = getSpeAbilities(this.group.code, this.code);
    this.weaponAbility = list.find(ability => ability.typeSkill === AbilitiesEnum.CompetenceArme) ?? null;
    this.armorAbility = list.find(ability => ability.typeSkill === AbilitiesEnum.CompetenceArmure) ?? null;
    this.timeCastingAbility = list.find(ability => ability.typeSkill === AbilitiesEnum.TempsIncantation) ?? null;
    this.numberUseAbility = list.find(ability => ability.typeSkill === AbilitiesEnum.NombreUtilisation) ?? null;
  }
}
