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

  // Durée et rechargement
  listSkills = createSkill(listSkills,
    "Courte durée / rechargement",
    SkillTypesEnum.ProprieteTemps,
    [], [specialities.DanseurMartial, specialities.Derviche, specialities.Meteorologue]
  );
  listSkills = createSkill(listSkills,
    "Durée / rechargement normal",
    SkillTypesEnum.ProprieteTemps,
    [groups.Bretteur, groups.Enchanteur, groups.Druide, groups.Pretre], [specialities.Createur],
  );
  listSkills = createSkill(listSkills,
    "Longue durée / rechargement",
    SkillTypesEnum.ProprieteTemps,
    [groups.Gardien, groups.Assassin, groups.Invocateur, groups.Barde], [],
  );

  // Canalisation
  listSkills = createSkill(listSkills,
    "Pas ou peu de pouvoirs à canaliser",
    SkillTypesEnum.ProprieteCanalisation,
    [groups.Gardien, groups.Moine, groups.Assassin, groups.Bretteur, groups.Sorcier],
    [specialities.Chaman, specialities.Dompteur, specialities.Guerisseur, specialities.PretreArlenor],
  );
  listSkills = createSkill(listSkills,
    "Quelques pouvoirs à canaliser",
    SkillTypesEnum.ProprieteCanalisation,
    [groups.Enchanteur], [specialities.Necromancien],
  );
  listSkills = createSkill(listSkills,
    "Beaucoup de pouvoirs à canaliser",
    SkillTypesEnum.ProprieteCanalisation,
    [groups.Barde], [specialities.Pelerin],
  );

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
  listSkills = createSkill(listSkills,
    getLibArme("à une main, avec bouclier"),
    SkillTypesEnum.CompetenceArme,
    [], [specialities.Paladin],
    [CaractNomEnum.Force.Code]
  );
  
  listSkills = createSkill(listSkills,
    getLibArme("épées à deux mains"),
    SkillTypesEnum.CompetenceArme,
    [], [specialities.Chevalier],
    [CaractNomEnum.Force.Code]
  );

  listSkills = createSkill(listSkills,
    getLibArme("mains nues"),
    SkillTypesEnum.CompetenceArme,
    [], [specialities.DanseurMartial],
    [CaractNomEnum.Force.Code]
  );

  listSkills = createSkill(listSkills,
    getLibArme("d'hast"),
    SkillTypesEnum.CompetenceArme,
    [], [specialities.Derviche],
    [CaractNomEnum.Habilete.Code]
  );

  listSkills = createSkill(listSkills,
    getLibArme("dagues / armes de jets"),
    SkillTypesEnum.CompetenceArme,
    [], [specialities.LameOmbre],
    [CaractNomEnum.Habilete.Code]
  );

  listSkills = createSkill(listSkills,
    getLibArme("arcs / arbalètes"),
    SkillTypesEnum.CompetenceArme,
    [], [specialities.Chasseur],
    [CaractNomEnum.Habilete.Code]
  );

  listSkills = createSkill(listSkills,
    getLibArme("sabres"),
    SkillTypesEnum.CompetenceArme,
    [], [specialities.DanseurSabre],
    [CaractNomEnum.Habilete.Code]
  );

  listSkills = createSkill(listSkills,
    getLibArme("ambidextrie"),
    SkillTypesEnum.CompetenceArme,
    [], [specialities.DoubleLame],
    [CaractNomEnum.Force.Code]
  );

  listSkills = createSkill(listSkills,
    getLibArme("épées à une main"),
    SkillTypesEnum.CompetenceArme,
    [], [specialities.Escrimeur],
    [CaractNomEnum.Force.Code]
  );

  listSkills = createSkill(listSkills,
    getLibArme("orbes mystiques"),
    SkillTypesEnum.CompetenceArme,
    [groups.Sorcier], [],
    [CaractNomEnum.Intellect.Code]
  );

  listSkills = createSkill(listSkills,
    getLibArme("sceptres à une main"),
    SkillTypesEnum.CompetenceArme,
    [groups.Invocateur], [],
    [CaractNomEnum.Intellect.Code]
  );

  listSkills = createSkill(listSkills,
    getLibArme("bâtons"),
    SkillTypesEnum.CompetenceArme,
    [groups.Enchanteur], [],
    [CaractNomEnum.Habilete.Code]
  );

  listSkills = createSkill(listSkills,
    getLibArme("mains nues"),
    SkillTypesEnum.CompetenceArme,
    [], [specialities.Chaman],
    [CaractNomEnum.Force.Code]
  );

  listSkills = createSkill(listSkills,
    getLibArme("bâtons"),
    SkillTypesEnum.CompetenceArme,
    [], [specialities.Guerisseur],
    [CaractNomEnum.Habilete.Code]
  );

  listSkills = createSkill(listSkills,
    getLibArme("bâtons"),
    SkillTypesEnum.CompetenceArme,
    [groups.Pretre], [],
    [CaractNomEnum.Habilete.Code]
  );

  listSkills = createSkill(listSkills,
    getLibArme("instruments de musique"),
    SkillTypesEnum.CompetenceArme,
    [groups.Barde], [],
    [CaractNomEnum.Intellect.Code]
  );

  return listSkills;
}

export function getSpeSkills(speCode: string): ArlenorSkill[] {
  const list = getListDefaultSkills().filter(skill => skill.speciality && skill.speciality.code === speCode);
  list.sort((a, b) => {
    let numA = 0;
    if (a.type === SkillTypesEnum.CompetenceArme) numA = 4;
    if (a.type === SkillTypesEnum.CompetenceArmure) numA = 3;
    if (a.type === SkillTypesEnum.ProprieteCanalisation) numA = 2;
    if (a.type === SkillTypesEnum.ProprieteTemps) numA = 1;

    let numB = 0;
    if (b.type === SkillTypesEnum.CompetenceArme) numB = 4;
    if (b.type === SkillTypesEnum.CompetenceArmure) numB = 3;
    if (b.type === SkillTypesEnum.ProprieteCanalisation) numB = 2;
    if (b.type === SkillTypesEnum.ProprieteTemps) numB = 1;

    return numB - numA;
  });
  return list;
}

function getLibArme(lib: string): string {
  return "Bonus d'arme (" + lib + ")";
}

function getLibArmure(lib: string): string {
  return "Port d'armure (" + lib + ")";
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
      newSkill.codeSpeciality = spe.code;
      newSkill.codesCaracts = codesCaracts;
      listSkills.push(newSkill);
    });
  }
  return listSkills;
}

