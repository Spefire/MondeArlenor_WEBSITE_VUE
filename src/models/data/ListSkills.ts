import { ArlenorSkill, ArlenorSkillJSON } from "../ArlenorSkill";
import skillsJSON from "./skills.json";

export function getListSkills(): ArlenorSkill[] {
  const listSkills = skillsJSON.map(skillJSON => ArlenorSkill.ConvertSkill(skillJSON as ArlenorSkillJSON));
  console.log("listSkills", listSkills);
  return listSkills;
}

export function getSpecialitySkills(grpCode: string, speCode: string): ArlenorSkill[] {
  const listSkills = getListSkills();
  const listGrp = listSkills.filter(skill => skill.group.code === grpCode && skill.specialities.length === 0);
  const listSpe = listSkills.filter(skill => skill.specialities.find(spe => spe.code === speCode));
  const list = listGrp.concat(listSpe);
  list.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return list;
}

/*function createSkill(listSkills: ArlenorSkill[], name: string, typeSkill: ArlenorEnum,
  groups: ArlenorGroup[], specialities: ArlenorSpeciality[], level: number,
  timeCasting: number,  timeReloading: number, description = ""): ArlenorSkill[] {
  if (groups.length > 0) {
    groups.forEach(grp => {
      listSkills.push(ArlenorSkill.CreateSkill(name, typeSkill, grp, [], level, timeCasting, timeReloading, description));
    });
  }
  if (specialities.length > 0) {
    const listGroupsCreated: string[] = [];
    specialities.forEach(cls => {
      if (!listGroupsCreated.includes(cls.group.code)) {
        const ListSpecialitiesToCreate = specialities.filter(clsToCreate => clsToCreate.group.code === cls.group.code);
        listSkills.push(ArlenorSkill.CreateSkill(name, typeSkill, cls.group, ListSpecialitiesToCreate, level, timeCasting, timeReloading, description));
        listGroupsCreated.push(cls.group.code);
      }
    });
  }
  return listSkills;
}*/