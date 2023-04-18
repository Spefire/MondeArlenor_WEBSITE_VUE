import { CaractNomEnum } from "../ArlenorCaracts";
import { ArlenorEnum } from "../ArlenorEnum";
import { ArlenorGroup } from "../ArlenorGroup";
import { ArlenorSkill, SkillTypesEnum } from "../ArlenorSkill";
import { ArlenorSpeciality } from "../ArlenorSpeciality";
import { ArlenorGroups } from "./ListGroups";
import { ArlenorSpecialities } from "./ListSpecialities";

export function getListDefaultSkills(): ArlenorSkill[] {
  let listSkills: ArlenorSkill[] = [];
  const groups = new ArlenorGroups();
  const specialities = new ArlenorSpecialities();

  // Armures
  listSkills = createSkill(listSkills,
    getLibArmure("légères / très mobiles"),
    SkillTypesEnum.CompetenceArmure,
    [groups.Assassin, groups.Sorcier, groups.Enchanteur],
    [specialities.Derviche, specialities.Escrimeur, specialities.Pelerin, specialities.Guerisseur, specialities.PretreArlenor, specialities.Necromancien],
  );
  
  listSkills = createSkill(listSkills,
    getLibArmure("normales / mobiles"),
    SkillTypesEnum.CompetenceArmure,
    [groups.Barde],
    [specialities.DanseurMartial, specialities.DoubleLame, specialities.Dompteur, specialities.Chaman],
  );
  
  listSkills = createSkill(listSkills,
    getLibArmure("lourdes / peu mobiles"),
    SkillTypesEnum.CompetenceArmure,
    [groups.Gardien], [],
  );

  // Armes
  listSkills = createWeapon(listSkills,
    getLibArme("bouclier"),
    [], [specialities.Paladin],
    [CaractNomEnum.Force.Code]
  );
  
  listSkills = createWeapon(listSkills,
    getLibArme("armes à deux mains"),
    [], [specialities.Chevalier],
    [CaractNomEnum.Force.Code]
  );

  listSkills = createWeapon(listSkills,
    getLibArme("mains nues"),
    [], [specialities.DanseurMartial, specialities.Chaman],
    [CaractNomEnum.Force.Code]
  );

  listSkills = createWeapon(listSkills,
    getLibArme("armes d'hast"),
    [], [specialities.Derviche],
    [CaractNomEnum.Habilete.Code]
  );

  listSkills = createWeapon(listSkills,
    getLibArme("dagues / armes de jets"),
    [], [specialities.LameOmbre],
    [CaractNomEnum.Habilete.Code]
  );

  listSkills = createWeapon(listSkills,
    getLibArme("arcs / arbalètes"),
    [], [specialities.Chasseur],
    [CaractNomEnum.Habilete.Code]
  );

  listSkills = createWeapon(listSkills,
    getLibArme("sabres"),
    [], [specialities.DanseurSabre],
    [CaractNomEnum.Habilete.Code]
  );

  listSkills = createWeapon(listSkills,
    getLibArme("ambidextrie"),
    [], [specialities.DoubleLame],
    [CaractNomEnum.Force.Code]
  );

  listSkills = createWeapon(listSkills,
    getLibArme("épées à une main"),
    [], [specialities.Escrimeur],
    [CaractNomEnum.Force.Code]
  );

  listSkills = createWeapon(listSkills,
    getLibArme("catalyseurs"),
    [groups.Sorcier, groups.Invocateur], [],
    [CaractNomEnum.Intellect.Code]
  );

  listSkills = createWeapon(listSkills,
    getLibArme("bâtons / sceptres"),
    [groups.Enchanteur, groups.Pretre], [specialities.Guerisseur],
    [CaractNomEnum.Habilete.Code]
  );

  listSkills = createWeapon(listSkills,
    getLibArme("instruments de musique"),
    [groups.Barde], [],
    [CaractNomEnum.Intellect.Code]
  );

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

function createWeapon(listSkills: ArlenorSkill[], name: string, 
  groups: ArlenorGroup[], specialities: ArlenorSpeciality[], codesCaracts: string[] = []): ArlenorSkill[] {

  // On généralise les armes
  const newSkill= new ArlenorSkill();
  newSkill.init(name, SkillTypesEnum.CompetenceArme);
  newSkill.id = "0_weapon_skill_" + newSkill.code.toLowerCase();
  newSkill.description = "Bonus +4 pour toute action avec.";
  newSkill.codesCaracts = codesCaracts;
  listSkills.push(newSkill);

  // Puis on ajoute ceux des groupes/spécialités
  listSkills = createSkill(listSkills, name, SkillTypesEnum.CompetenceArme, groups, specialities, codesCaracts);

  return listSkills;
}

function createSkill(listSkills: ArlenorSkill[], name: string, type: ArlenorEnum,
  groups: ArlenorGroup[], specialities: ArlenorSpeciality[], codesCaracts: string[] = []): ArlenorSkill[] {
  
  // On crée les skills par groupe
  if (groups.length > 0) {
    groups.forEach(grp => {
      const allSpecialities = ArlenorSpecialities.getSpecialitiesByGroup(grp.code);
      allSpecialities.forEach(spe => {
        const newSkill= new ArlenorSkill();
        newSkill.init(name, type);
        newSkill.id = "0_grp_skill_" + newSkill.code.toLowerCase();
        newSkill.codeSpeciality = spe.code;
        newSkill.codesCaracts = codesCaracts;
        listSkills.push(newSkill);
      });
    });
  }

  // On crée les skills par classe
  if (specialities.length > 0) {
    specialities.forEach(spe => {
      const newSkill = new ArlenorSkill();
      newSkill.init(name, type);
      newSkill.id = "0_spe_skill_" + newSkill.code.toLowerCase();
      newSkill.codeSpeciality = spe.code;
      newSkill.codesCaracts = codesCaracts;
      listSkills.push(newSkill);
    });
  }
  return listSkills;
}

