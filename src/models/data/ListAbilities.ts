import { AbilitiesEnum, ArlenorAbility } from "../ArlenorAbility";
import { CaractNomEnum } from "../ArlenorCharacter";
import { ArlenorEnum } from "../ArlenorEnum";
import { ArlenorGroup } from "../ArlenorGroup";
import { ArlenorSpeciality } from "../ArlenorSpeciality";
import { ArlenorGroups } from "./ListGroups";
import { ArlenorSpecialities } from "./ListSpecialities";

export function getListAbilities(): ArlenorAbility[] {
  let listAbilities: ArlenorAbility[] = [];
  const groups = new ArlenorGroups();
  const specialities = new ArlenorSpecialities();

  // Temps de rechargement
  listAbilities = createAbility(listAbilities,
    "Pas de temps de rechargement",
    AbilitiesEnum.TempsRechargement,
    [], [specialities.DanseurMartial]
  );
  listAbilities = createAbility(listAbilities,
    "Temps de rechargement rapide",
    AbilitiesEnum.TempsRechargement,
    [], [specialities.Derviche, specialities.Elementaliste]
  );
  listAbilities = createAbility(listAbilities,
    "Temps de rechargement normal",
    AbilitiesEnum.TempsRechargement,
    [groups.Gardien, groups.Bretteur, groups.Enchanteur, groups.Druide], [specialities.Createur],
  );
  listAbilities = createAbility(listAbilities,
    "Temps de rechargement long",
    AbilitiesEnum.TempsRechargement,
    [groups.Assassin, groups.Invocateur, groups.Pretre, groups.Barde], [],
  );

  // Temps d'incantation
  listAbilities = createAbility(listAbilities,
    "Pas de temps d'incantation",
    AbilitiesEnum.TempsIncantation,
    [groups.Gardien, groups.Moine, groups.Assassin, groups.Bretteur, groups.Sorcier], [specialities.Chaman],
  );
  listAbilities = createAbility(listAbilities,
    "Temps d'incantation rapide",
    AbilitiesEnum.TempsIncantation,
    [], [specialities.Dompteur, specialities.Guerisseur, specialities.PretreArlenor],
  );
  listAbilities = createAbility(listAbilities,
    "Temps d'incantation normal",
    AbilitiesEnum.TempsIncantation,
    [groups.Enchanteur], [specialities.Exorciste],
  );
  listAbilities = createAbility(listAbilities,
    "Temps d'incantation long",
    AbilitiesEnum.TempsIncantation,
    [groups.Barde], [specialities.Pelerin],
  );

  // Armures
  listAbilities = createAbility(listAbilities,
    getLibArmure("légères / très mobiles"),
    AbilitiesEnum.CompetenceArmure,
    [groups.Assassin, groups.Sorcier, groups.Enchanteur],
    [specialities.Derviche, specialities.Escrimeur, specialities.Pelerin, specialities.Guerisseur, specialities.PretreArlenor, specialities.Exorciste],
  );
  
  listAbilities = createAbility(listAbilities,
    getLibArmure("normales / mobiles"),
    AbilitiesEnum.CompetenceArmure,
    [groups.Barde],
    [specialities.DanseurMartial, specialities.DoubleLame, specialities.Dompteur, specialities.Chaman],
  );
  
  listAbilities = createAbility(listAbilities,
    getLibArmure("lourdes / peu mobiles"),
    AbilitiesEnum.CompetenceArmure,
    [groups.Gardien], [],
  );

  // Armes
  const arme01 = new ArlenorAbility(getLibArme("à une main, avec bouclier"), AbilitiesEnum.CompetenceArme, null, [specialities.Paladin]);
  arme01.caracts = [CaractNomEnum.Vigueur];
  listAbilities.push(arme01);
  
  const arme02 = new ArlenorAbility(getLibArme("épées à deux mains"), AbilitiesEnum.CompetenceArme, null, [specialities.Chevalier]);
  arme02.caracts = [CaractNomEnum.Vigueur];
  listAbilities.push(arme02);

  const arme03 = new ArlenorAbility(getLibArme("mains nues"), AbilitiesEnum.CompetenceArme, null, [specialities.DanseurMartial]);
  arme03.caracts = [CaractNomEnum.Vigueur];
  listAbilities.push(arme03);

  const arme04 = new ArlenorAbility(getLibArme("d'hast"), AbilitiesEnum.CompetenceArme, null, [specialities.Derviche]);
  arme04.caracts = [CaractNomEnum.Habilete];
  listAbilities.push(arme04);

  const arme05 = new ArlenorAbility(getLibArme("dagues / armes de jets"), AbilitiesEnum.CompetenceArme, null, [specialities.LameOmbre]);
  arme05.caracts = [CaractNomEnum.Habilete];
  listAbilities.push(arme05);

  const arme06 = new ArlenorAbility(getLibArme("arcs / arbalètes"), AbilitiesEnum.CompetenceArme, null, [specialities.Chasseur]);
  arme06.caracts = [CaractNomEnum.Habilete];
  listAbilities.push(arme06);

  const arme07 = new ArlenorAbility(getLibArme("sabres"), AbilitiesEnum.CompetenceArme, null, [specialities.DanseurSabre]);
  arme07.caracts = [CaractNomEnum.Habilete];
  listAbilities.push(arme07);

  const arme08 = new ArlenorAbility(getLibArme("ambidextrie"), AbilitiesEnum.CompetenceArme, null, [specialities.DoubleLame]);
  arme08.caracts = [CaractNomEnum.Vigueur];
  listAbilities.push(arme08);

  const arme09 = new ArlenorAbility(getLibArme("épées à une main"), AbilitiesEnum.CompetenceArme, null, [specialities.Escrimeur]);
  arme09.caracts = [CaractNomEnum.Vigueur];
  listAbilities.push(arme09);

  const arme10 = new ArlenorAbility(getLibArme("orbes mystiques"), AbilitiesEnum.CompetenceArme, groups.Sorcier, []);
  arme10.caracts = [CaractNomEnum.Intellect];
  listAbilities.push(arme10);

  const arme11 = new ArlenorAbility(getLibArme("sceptres à une main"), AbilitiesEnum.CompetenceArme, groups.Invocateur, []);
  arme11.caracts = [CaractNomEnum.Intellect];
  listAbilities.push(arme11);

  const arme12 = new ArlenorAbility(getLibArme("bâtons"), AbilitiesEnum.CompetenceArme, groups.Enchanteur, []);
  arme12.caracts = [CaractNomEnum.Habilete];
  listAbilities.push(arme12);

  const arme13 = new ArlenorAbility(getLibArme("mains nues"), AbilitiesEnum.CompetenceArme, null, [specialities.Chaman]);
  arme13.caracts = [CaractNomEnum.Vigueur];
  listAbilities.push(arme13);

  const arme14 = new ArlenorAbility(getLibArme("bâtons"), AbilitiesEnum.CompetenceArme, null, [specialities.Guerisseur]);
  arme14.caracts = [CaractNomEnum.Habilete];
  listAbilities.push(arme14);

  const arme15 = new ArlenorAbility(getLibArme("bâtons"), AbilitiesEnum.CompetenceArme, groups.Pretre, []);
  arme15.caracts = [CaractNomEnum.Habilete];
  listAbilities.push(arme15);

  const arme16 = new ArlenorAbility(getLibArme("instruments de musique"), AbilitiesEnum.CompetenceArme, groups.Barde, []);
  arme16.caracts = [CaractNomEnum.Intellect];
  listAbilities.push(arme16);

  return listAbilities;
}

export function getSpeAbilities(grpCode: string, speCode: string): ArlenorAbility[] {
  const listGrp = getListAbilities().filter(ability => ability.group.code === grpCode && ability.specialities.length === 0);
  const listSpe = getListAbilities().filter(ability => ability.specialities.find(spe => spe.code === speCode));
  const list = listGrp.concat(listSpe);
  list.sort((a, b) => {
    let numA = 0;
    if (a.typeSkill === AbilitiesEnum.CompetenceArme) numA = 4;
    if (a.typeSkill === AbilitiesEnum.CompetenceArmure) numA = 3;
    if (a.typeSkill === AbilitiesEnum.TempsIncantation) numA = 2;
    if (a.typeSkill === AbilitiesEnum.TempsRechargement) numA = 1;

    let numB = 0;
    if (b.typeSkill === AbilitiesEnum.CompetenceArme) numB = 4;
    if (b.typeSkill === AbilitiesEnum.CompetenceArmure) numB = 3;
    if (b.typeSkill === AbilitiesEnum.TempsIncantation) numB = 2;
    if (b.typeSkill === AbilitiesEnum.TempsRechargement) numB = 1;

    return numB - numA;
  });
  return list;
}

function getLibArme(lib: string): string {
  return "Armes (" + lib + ")";
}

function getLibArmure(lib: string): string {
  return "Armure (" + lib + ")";
}

function createAbility(listAbilities: ArlenorAbility[], name: string, typeAbility: ArlenorEnum, groups: ArlenorGroup[], specialities: ArlenorSpeciality[]): ArlenorAbility[] {
  if (groups.length > 0) {
    groups.forEach(grp => {
      listAbilities.push(new ArlenorAbility(name, typeAbility, grp, []));
    });
  }
  if (specialities.length > 0) {
    const listGroupsCreated: string[] = [];
    specialities.forEach(cls => {
      if (!listGroupsCreated.includes(cls.group.code)) {
        const ListSpecialitiesToCreate = specialities.filter(clsToCreate => clsToCreate.group.code === cls.group.code);
        listAbilities.push(new ArlenorAbility(name, typeAbility, cls.group, ListSpecialitiesToCreate));
        listGroupsCreated.push(cls.group.code);
      }
    });
  }
  return listAbilities;
}
