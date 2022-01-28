import { CaractEnum } from "../ArlenorCharacter";
import { ArlenorClass } from "../ArlenorClass";
import { ArlenorEnum } from "../ArlenorEnum";
import { ArlenorGroup } from "../ArlenorGroup";
import { ArlenorSkill, SkillsEnum } from "../ArlenorSkill";
import { ArlenorClasses } from "./ListClasses";
import { ArlenorGroups } from "./ListGroups";

export function getListSkills(): ArlenorSkill[] {
  let listSkills: ArlenorSkill[] = [];
  const groups = new ArlenorGroups();
  const classes = new ArlenorClasses();

  // Temps de rechargement
  listSkills = createSkill(listSkills,
    "Pas de temps de rechargement",
    SkillsEnum.TempsRechargement,
    [], [classes.DanseurMartial]
  );
  listSkills = createSkill(listSkills,
    "Temps de rechargement rapide",
    SkillsEnum.TempsRechargement,
    [], [classes.Derviche, classes.Elementaliste]
  );
  listSkills = createSkill(listSkills,
    "Temps de rechargement normal",
    SkillsEnum.TempsRechargement,
    [groups.Gardien, groups.Bretteur, groups.Enchanteur, groups.Druide], [classes.Createur],
  );
  listSkills = createSkill(listSkills,
    "Temps de rechargement long",
    SkillsEnum.TempsRechargement,
    [groups.Assassin, groups.Invocateur, groups.Pretre, groups.Barde], [],
  );

  // Temps d'incantation
  listSkills = createSkill(listSkills,
    "Pas de temps d'incantation",
    SkillsEnum.TempsIncantation,
    [groups.Gardien, groups.Moine, groups.Assassin, groups.Bretteur, groups.Sorcier], [classes.Chaman],
  );
  listSkills = createSkill(listSkills,
    "Temps d'incantation rapide",
    SkillsEnum.TempsIncantation,
    [], [classes.Dompteur, classes.Guerisseur, classes.ClercArmure, classes.PretreArlenor],
  );
  listSkills = createSkill(listSkills,
    "Temps d'incantation normal",
    SkillsEnum.TempsIncantation,
    [groups.Enchanteur], [classes.Exorciste],
  );
  listSkills = createSkill(listSkills,
    "Temps d'incantation long",
    SkillsEnum.TempsIncantation,
    [groups.Barde], [classes.Pelerin],
  );

  // Armures
  listSkills = createSkill(listSkills,
    getLibArmure("légères / très mobiles"),
    SkillsEnum.CompetenceArmure,
    [groups.Assassin, groups.Sorcier, groups.Enchanteur],
    [classes.Derviche, classes.Escrimeur, classes.Pelerin, classes.Guerisseur, classes.PretreArlenor, classes.Exorciste],
  );
  
  listSkills = createSkill(listSkills,
    getLibArmure("normales / mobiles"),
    SkillsEnum.CompetenceArmure,
    [groups.Barde],
    [classes.DanseurMartial, classes.DoubleLame, classes.Dompteur, classes.Chaman, classes.ClercArmure],
  );
  
  listSkills = createSkill(listSkills,
    getLibArmure("lourdes / peu mobiles"),
    SkillsEnum.CompetenceArmure,
    [groups.Gardien], [],
  );

  // Armes
  const arme01 = new ArlenorSkill(getLibArme("à une main, avec bouclier"), SkillsEnum.CompetenceArme, null, [classes.Paladin]);
  arme01.caracts = [CaractEnum.Vigueur];
  listSkills.push(arme01);
  
  const arme02 = new ArlenorSkill(getLibArme("épées à deux mains"), SkillsEnum.CompetenceArme, null, [classes.Chevalier]);
  arme02.caracts = [CaractEnum.Vigueur];
  listSkills.push(arme02);

  const arme03 = new ArlenorSkill(getLibArme("mains nues"), SkillsEnum.CompetenceArme, null, [classes.DanseurMartial]);
  arme03.caracts = [CaractEnum.Vigueur];
  listSkills.push(arme03);

  const arme04 = new ArlenorSkill(getLibArme("d'hast"), SkillsEnum.CompetenceArme, null, [classes.Derviche]);
  arme04.caracts = [CaractEnum.Habilete];
  listSkills.push(arme04);

  const arme05 = new ArlenorSkill(getLibArme("dagues / armes de jets"), SkillsEnum.CompetenceArme, null, [classes.LameOmbre]);
  arme05.caracts = [CaractEnum.Habilete];
  listSkills.push(arme05);

  const arme06 = new ArlenorSkill(getLibArme("arcs / arbalètes"), SkillsEnum.CompetenceArme, null, [classes.Chasseur]);
  arme06.caracts = [CaractEnum.Habilete];
  listSkills.push(arme06);

  const arme07 = new ArlenorSkill(getLibArme("sabres"), SkillsEnum.CompetenceArme, null, [classes.DanseurSabre]);
  arme07.caracts = [CaractEnum.Habilete];
  listSkills.push(arme07);

  const arme08 = new ArlenorSkill(getLibArme("ambidextrie"), SkillsEnum.CompetenceArme, null, [classes.DoubleLame]);
  arme08.caracts = [CaractEnum.Vigueur];
  listSkills.push(arme08);

  const arme09 = new ArlenorSkill(getLibArme("épées à une main"), SkillsEnum.CompetenceArme, null, [classes.Escrimeur]);
  arme09.caracts = [CaractEnum.Vigueur];
  listSkills.push(arme09);

  const arme10 = new ArlenorSkill(getLibArme("orbes mystiques"), SkillsEnum.CompetenceArme, groups.Sorcier, []);
  arme10.caracts = [CaractEnum.Intellect];
  listSkills.push(arme10);

  const arme11 = new ArlenorSkill(getLibArme("sceptres à une main"), SkillsEnum.CompetenceArme, groups.Invocateur, []);
  arme11.caracts = [CaractEnum.Intellect];
  listSkills.push(arme11);

  const arme12 = new ArlenorSkill(getLibArme("bâtons"), SkillsEnum.CompetenceArme, groups.Enchanteur, []);
  arme12.caracts = [CaractEnum.Habilete];
  listSkills.push(arme12);

  const arme13 = new ArlenorSkill(getLibArme("mains nues"), SkillsEnum.CompetenceArme, null, [classes.Chaman]);
  arme13.caracts = [CaractEnum.Vigueur];
  listSkills.push(arme13);

  const arme14 = new ArlenorSkill(getLibArme("bâtons"), SkillsEnum.CompetenceArme, null, [classes.Guerisseur]);
  arme14.caracts = [CaractEnum.Habilete];
  listSkills.push(arme14);

  const arme15 = new ArlenorSkill(getLibArme("bâtons"), SkillsEnum.CompetenceArme, groups.Pretre, []);
  arme15.caracts = [CaractEnum.Habilete];
  listSkills.push(arme15);

  const arme16 = new ArlenorSkill(getLibArme("instruments de musique"), SkillsEnum.CompetenceArme, groups.Barde, []);
  arme16.caracts = [CaractEnum.Intellect];
  listSkills.push(arme16);

  return listSkills;
}

function getLibArme(lib: string): string {
  return "Armes (" + lib + ")";
}

function getLibArmure(lib: string): string {
  return "Armure (" + lib + ")";
}

function createSkill(listSkills: ArlenorSkill[], name: string, typeSkill: ArlenorEnum, groups: ArlenorGroup[], classes: ArlenorClass[]): ArlenorSkill[] {
  if (groups.length > 0) {
    groups.forEach(grp => {
      listSkills.push(new ArlenorSkill(name, typeSkill, grp, []));
    });
  }
  if (classes.length > 0) {
    const listGroupsCreated: string[] = [];
    classes.forEach(cls => {
      if (!listGroupsCreated.includes(cls.group.code)) {
        const listClassesToCreate = classes.filter(clsToCreate => clsToCreate.group.code === cls.group.code);
        listSkills.push(new ArlenorSkill(name, typeSkill, cls.group, listClassesToCreate));
        listGroupsCreated.push(cls.group.code);
      }
    });
  }
  return listSkills;
}
