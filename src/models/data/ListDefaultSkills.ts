import { CaractNomEnum } from "../ArlenorCaracts";
import { ArlenorSkill, SkillTypesEnum } from "../ArlenorSkill";

export function getListDefaultSkills(): ArlenorSkill[] {
  let listSkills: ArlenorSkill[] = [];

  // Armures
  listSkills = createSkill(false, listSkills, getLibArmure("légères / très mobiles"));
  listSkills = createSkill(false, listSkills, getLibArmure("normales / mobiles"));
  listSkills = createSkill(false, listSkills, getLibArmure("lourdes / peu mobiles"));

  // Armes
  listSkills = createSkill(true, listSkills, getLibArme("bouclier"), [CaractNomEnum.Force.Code]);
  listSkills = createSkill(true, listSkills, getLibArme("armes à deux mains"), [CaractNomEnum.Force.Code]);
  listSkills = createSkill(true, listSkills, getLibArme("mains nues"), [CaractNomEnum.Force.Code]);
  listSkills = createSkill(true, listSkills, getLibArme("armes d'hast"), [CaractNomEnum.Habilete.Code]);
  listSkills = createSkill(true, listSkills, getLibArme("dagues / armes de jets"), [CaractNomEnum.Habilete.Code]);
  listSkills = createSkill(true, listSkills, getLibArme("arcs / arbalètes"), [CaractNomEnum.Habilete.Code]);
  listSkills = createSkill(true, listSkills, getLibArme("sabres"), [CaractNomEnum.Habilete.Code]);
  listSkills = createSkill(true, listSkills, getLibArme("ambidextrie"), [CaractNomEnum.Force.Code]);
  listSkills = createSkill(true, listSkills, getLibArme("épées à une main"), [CaractNomEnum.Force.Code]);
  listSkills = createSkill(true, listSkills, getLibArme("catalyseurs"), [CaractNomEnum.Intellect.Code]);
  listSkills = createSkill(true, listSkills, getLibArme("bâtons / sceptres"), [CaractNomEnum.Habilete.Code]);
  listSkills = createSkill(true, listSkills, getLibArme("instruments de musique"), [CaractNomEnum.Intellect.Code]);

  return listSkills;
}

export function getSpeSkills(speCode: string): ArlenorSkill[] {
  return getListDefaultSkills().filter(skill => skill.speciality && skill.speciality.code === speCode);
}

function getLibArme(lib: string): string {
  return "Maîtrise (" + lib + ")";
}

function getLibArmure(lib: string): string {
  return "Port d'armure (" + lib + ")";
}

function createSkill(isWeapon: boolean, listSkills: ArlenorSkill[], name: string, codesCaracts: string[] = []): ArlenorSkill[] {
  const newSkill= new ArlenorSkill();
  if (isWeapon) newSkill.init(name, SkillTypesEnum.CompetenceArme);
  else newSkill.init(name, SkillTypesEnum.CompetenceArmure);
  newSkill.id = "0_skill_" + newSkill.code.toLowerCase();
  newSkill.description = "Bonus +4 pour toute action avec.";
  newSkill.codesCaracts = codesCaracts;
  listSkills.push(newSkill);
  return listSkills;
}
