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

  //#region Gardien
  /*
  listSkills = createSkill(listSkills, "magique", SkillsEnum.SortDivers, [groups.Gardien], [],
    "Confère");
  */

  // Compétences de classes
  listSkills = createSkill(listSkills, "Appel du chevalier", SkillsEnum.SortDivers,
    [groups.Gardien], [], 1,
    "Oblige la cible à s'avancer vers le personnage et à le combattre");
  listSkills = createSkill(listSkills, "Arme magique", SkillsEnum.SortOffensif,
    [groups.Gardien], [], 2,
    "Confère un bonus de +1 à une arme");
  listSkills = createSkill(listSkills, "Barrière étourdissante", SkillsEnum.SortDefensif,
    [groups.Gardien], [], 1,
    "Champ magique qui étourdit une créature qui attaque le personnage");
  listSkills = createSkill(listSkills, "Hostilité forcée", SkillsEnum.CompetenceSpeMalus,
    [groups.Gardien], [], 2,
    "Oblige les adversaires à attaquer le personnage au lieu de ses alliés");
  listSkills = createSkill(listSkills, "Endurance aux énergies destructives", SkillsEnum.CompetenceSpeBonus,
    [groups.Gardien], [], 4,
    "Protège des environnements chauds ou froids");
  listSkills = createSkill(listSkills, "Bénédiction de l'eau", SkillsEnum.SortDivers,
    [groups.Gardien], [], 2,
    "Crée de l'eau bénite");
  listSkills = createSkill(listSkills, "Cœur incassable", SkillsEnum.CompetenceSpeBonus,
    [groups.Gardien], [], 3,
    "+4 aux jets de sauvegarde contre les effets qui se basent sur des émotions négatives");
  listSkills = createSkill(listSkills, "Sanctification de cadavre", SkillsEnum.SortDivers,
    [groups.Gardien], [], 4,
    "Empêche un cadavre de devenir mort-vivant");
  listSkills = createSkill(listSkills, "Stimulant", SkillsEnum.SortDefensif,
    [groups.Gardien], [], 1,
    "Confère 1 pv temporaire à la cible");
  listSkills = createSkill(listSkills, "Vérité du juge divin", SkillsEnum.SortDivers,
    [groups.Gardien], [], 2,
    "Force la cible à dire la vérité");

  // Compétences de spécialités
  //#region Paladin
  listSkills = createSkill(listSkills, "Immortalité temporaire", SkillsEnum.SortDefensif, [], [specialities.Paladin], 1);
  //#endregion Paladin
  //#endregion Gardien

  return listSkills;
}

export function getSpecialitySkills(grpCode: string, speCode: string): ArlenorSkill[] {
  const listGrp = getListSkills().filter(skill => skill.group.code === grpCode && skill.specialities.length === 0);
  const listSpe = getListSkills().filter(skill => skill.specialities.find(spe => spe.code === speCode));
  const list = listGrp.concat(listSpe);
  list.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return list;
}

function createSkill(listSkills: ArlenorSkill[], name: string, typeSkill: ArlenorEnum,
  groups: ArlenorGroup[], specialities: ArlenorSpeciality[], level: number,
  description = ""): ArlenorSkill[] {
  if (groups.length > 0) {
    groups.forEach(grp => {
      listSkills.push(new ArlenorSkill(name, typeSkill, grp, [], level, description));
    });
  }
  if (specialities.length > 0) {
    const listGroupsCreated: string[] = [];
    specialities.forEach(cls => {
      if (!listGroupsCreated.includes(cls.group.code)) {
        const ListSpecialitiesToCreate = specialities.filter(clsToCreate => clsToCreate.group.code === cls.group.code);
        listSkills.push(new ArlenorSkill(name, typeSkill, cls.group, ListSpecialitiesToCreate, level, description));
        listGroupsCreated.push(cls.group.code);
      }
    });
  }
  return listSkills;
}