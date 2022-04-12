import { ArlenorSkill, ArlenorSkillJSON } from "../ArlenorSkill";
import skillsJSON from "../skills/skills.json";

export function getListSkills(grpCode = "", speCode = ""): ArlenorSkill[] {
  const listSkills = skillsJSON.map(skillJSON => ArlenorSkill.ConvertSkill(skillJSON as ArlenorSkillJSON));
  const listGrp = grpCode ? listSkills.filter(skill => skill.group.code === grpCode && !skill.speciality) : [];
  const listSpe = speCode ? listSkills.filter(skill => skill.speciality?.code === speCode) : [];
  const list = listGrp.concat(listSpe);
  list.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  console.warn("getListSkills", list);
  return list;
}
