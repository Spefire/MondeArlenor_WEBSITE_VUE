import { ArlenorEnum } from "../ArlenorEnum";
import { ArlenorGroup } from "../ArlenorGroup";
import { ArlenorSkill, SkillsEnum } from "../ArlenorSkill";
import { ArlenorSpeciality } from "../ArlenorSpeciality";
import { ArlenorGroups } from "./ListGroups";
import { ArlenorSpecialities } from "./ListSpecialities";

export function getListSkills(): ArlenorSkill[] {
  let listSkills: ArlenorSkill[] = [];
  const groups = new ArlenorGroups();
  const specialities = new ArlenorSpecialities();

  // Compétences de classes
  listSkills = createSkill(listSkills, "Provocation", SkillsEnum.SortDivers, [groups.Gardien], []);

  // Compétences de spécialité
  listSkills = createSkill(listSkills, "Immortalité temporaire", SkillsEnum.SortDefensif, [], [specialities.Paladin]);

  return listSkills;
}

export function getGroupSkills(code: string): ArlenorSkill[] {
  return getListSkills().filter(skill => skill.group.code === code && skill.specialities.length === 0);
}

export function getSpecialitySkills(code: string): ArlenorSkill[] {
  return getListSkills().filter(skill => skill.specialities.find(spe => spe.code === code));
}

function createSkill(listSkills: ArlenorSkill[], name: string, typeSkill: ArlenorEnum, groups: ArlenorGroup[], specialities: ArlenorSpeciality[]): ArlenorSkill[] {
  if (groups.length > 0) {
    groups.forEach(grp => {
      listSkills.push(new ArlenorSkill(name, typeSkill, grp, []));
    });
  }
  if (specialities.length > 0) {
    const listGroupsCreated: string[] = [];
    specialities.forEach(cls => {
      if (!listGroupsCreated.includes(cls.group.code)) {
        const ListSpecialitiesToCreate = specialities.filter(clsToCreate => clsToCreate.group.code === cls.group.code);
        listSkills.push(new ArlenorSkill(name, typeSkill, cls.group, ListSpecialitiesToCreate));
        listGroupsCreated.push(cls.group.code);
      }
    });
  }
  return listSkills;
}