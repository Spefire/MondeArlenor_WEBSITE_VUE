import { AbilitiesEnum, ArlenorAbility } from "../ArlenorAbility";
import { CaractNomEnum } from "../ArlenorCharacter";
import { ArlenorEnum } from "../ArlenorEnum";
import { ArlenorGroup } from "../ArlenorGroup";
import { ArlenorSpeciality } from "../ArlenorSpeciality";
import { ArlenorGroups } from "./ListGroups";
import { getListRaces } from "./ListRaces";
import { ArlenorSpecialities } from "./ListSpecialities";

export function getListGrpSpeAbilities(): ArlenorAbility[] {
  let listAbilities: ArlenorAbility[] = [];
  const groups = new ArlenorGroups();
  const specialities = new ArlenorSpecialities();

  // Limitation d'utilisation
  listAbilities = createAbility(listAbilities,
    "Pas de limitation d'utilisation",
    AbilitiesEnum.NombreUtilisation,
    [], [specialities.DanseurMartial]
  );
  listAbilities = createAbility(listAbilities,
    "Peu de limitation d'utilisation",
    AbilitiesEnum.NombreUtilisation,
    [], [specialities.Derviche, specialities.Elementaliste]
  );
  listAbilities = createAbility(listAbilities,
    "Limitation normale d'utilisation",
    AbilitiesEnum.NombreUtilisation,
    [groups.Gardien, groups.Bretteur, groups.Enchanteur, groups.Druide], [specialities.Createur],
  );
  listAbilities = createAbility(listAbilities,
    "Grande limitation d'utilisation",
    AbilitiesEnum.NombreUtilisation,
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
    AbilitiesEnum.AbiliteArmure,
    [groups.Assassin, groups.Sorcier, groups.Enchanteur],
    [specialities.Derviche, specialities.Escrimeur, specialities.Pelerin, specialities.Guerisseur, specialities.PretreArlenor, specialities.Exorciste],
  );
  
  listAbilities = createAbility(listAbilities,
    getLibArmure("normales / mobiles"),
    AbilitiesEnum.AbiliteArmure,
    [groups.Barde],
    [specialities.DanseurMartial, specialities.DoubleLame, specialities.Dompteur, specialities.Chaman],
  );
  
  listAbilities = createAbility(listAbilities,
    getLibArmure("lourdes / peu mobiles"),
    AbilitiesEnum.AbiliteArmure,
    [groups.Gardien], [],
  );

  // Armes
  const arme01 = new ArlenorAbility(getLibArme("à une main, avec bouclier"), AbilitiesEnum.AbiliteArme);
  arme01.initGrpSpe(null, [specialities.Paladin]);
  arme01.caracts = [CaractNomEnum.Vigueur];
  listAbilities.push(arme01);
  
  const arme02 = new ArlenorAbility(getLibArme("épées à deux mains"), AbilitiesEnum.AbiliteArme);
  arme02.initGrpSpe(null, [specialities.Chevalier]);
  arme02.caracts = [CaractNomEnum.Vigueur];
  listAbilities.push(arme02);

  const arme03 = new ArlenorAbility(getLibArme("mains nues"), AbilitiesEnum.AbiliteArme);
  arme03.initGrpSpe(null, [specialities.DanseurMartial]);
  arme03.caracts = [CaractNomEnum.Vigueur];
  listAbilities.push(arme03);

  const arme04 = new ArlenorAbility(getLibArme("d'hast"), AbilitiesEnum.AbiliteArme);
  arme04.initGrpSpe(null, [specialities.Derviche]);
  arme04.caracts = [CaractNomEnum.Habilete];
  listAbilities.push(arme04);

  const arme05 = new ArlenorAbility(getLibArme("dagues / armes de jets"), AbilitiesEnum.AbiliteArme);
  arme05.initGrpSpe(null, [specialities.LameOmbre]);
  arme05.caracts = [CaractNomEnum.Habilete];
  listAbilities.push(arme05);

  const arme06 = new ArlenorAbility(getLibArme("arcs / arbalètes"), AbilitiesEnum.AbiliteArme);
  arme06.initGrpSpe(null, [specialities.Chasseur]);
  arme06.caracts = [CaractNomEnum.Habilete];
  listAbilities.push(arme06);

  const arme07 = new ArlenorAbility(getLibArme("sabres"), AbilitiesEnum.AbiliteArme);
  arme07.initGrpSpe(null, [specialities.DanseurSabre]);
  arme07.caracts = [CaractNomEnum.Habilete];
  listAbilities.push(arme07);

  const arme08 = new ArlenorAbility(getLibArme("ambidextrie"), AbilitiesEnum.AbiliteArme);
  arme08.initGrpSpe(null, [specialities.DoubleLame]);
  arme08.caracts = [CaractNomEnum.Vigueur];
  listAbilities.push(arme08);

  const arme09 = new ArlenorAbility(getLibArme("épées à une main"), AbilitiesEnum.AbiliteArme);
  arme09.initGrpSpe(null, [specialities.Escrimeur]);
  arme09.caracts = [CaractNomEnum.Vigueur];
  listAbilities.push(arme09);

  const arme10 = new ArlenorAbility(getLibArme("orbes mystiques"), AbilitiesEnum.AbiliteArme);
  arme10.initGrpSpe(groups.Sorcier, []);
  arme10.caracts = [CaractNomEnum.Intellect];
  listAbilities.push(arme10);

  const arme11 = new ArlenorAbility(getLibArme("sceptres à une main"), AbilitiesEnum.AbiliteArme);
  arme11.initGrpSpe(groups.Invocateur, []);
  arme11.caracts = [CaractNomEnum.Intellect];
  listAbilities.push(arme11);

  const arme12 = new ArlenorAbility(getLibArme("bâtons"), AbilitiesEnum.AbiliteArme);
  arme12.initGrpSpe(groups.Enchanteur, []);
  arme12.caracts = [CaractNomEnum.Habilete];
  listAbilities.push(arme12);

  const arme13 = new ArlenorAbility(getLibArme("mains nues"), AbilitiesEnum.AbiliteArme);
  arme13.initGrpSpe(null, [specialities.Chaman]);
  arme13.caracts = [CaractNomEnum.Vigueur];
  listAbilities.push(arme13);

  const arme14 = new ArlenorAbility(getLibArme("bâtons"), AbilitiesEnum.AbiliteArme);
  arme14.initGrpSpe(null, [specialities.Guerisseur]);
  arme14.caracts = [CaractNomEnum.Habilete];
  listAbilities.push(arme14);

  const arme15 = new ArlenorAbility(getLibArme("bâtons"), AbilitiesEnum.AbiliteArme);
  arme15.initGrpSpe(groups.Pretre, []);
  arme15.caracts = [CaractNomEnum.Habilete];
  listAbilities.push(arme15);

  const arme16 = new ArlenorAbility(getLibArme("instruments de musique"), AbilitiesEnum.AbiliteArme);
  arme16.initGrpSpe(groups.Barde, []);
  arme16.caracts = [CaractNomEnum.Intellect];
  listAbilities.push(arme16);

  return listAbilities;
}

export function getSpeAbilities(grpCode: string, speCode: string): ArlenorAbility[] {
  const listGrp = getListGrpSpeAbilities().filter(ability => ability.group && ability.group.code === grpCode && ability.specialities.length === 0);
  const listSpe = getListGrpSpeAbilities().filter(ability => ability.specialities.find(spe => spe.code === speCode));
  const list = listGrp.concat(listSpe);
  list.sort((a, b) => {
    let numA = 0;
    if (a.typeSkill === AbilitiesEnum.AbiliteArme) numA = 4;
    if (a.typeSkill === AbilitiesEnum.AbiliteArmure) numA = 3;
    if (a.typeSkill === AbilitiesEnum.TempsIncantation) numA = 2;
    if (a.typeSkill === AbilitiesEnum.NombreUtilisation) numA = 1;

    let numB = 0;
    if (b.typeSkill === AbilitiesEnum.AbiliteArme) numB = 4;
    if (b.typeSkill === AbilitiesEnum.AbiliteArmure) numB = 3;
    if (b.typeSkill === AbilitiesEnum.TempsIncantation) numB = 2;
    if (b.typeSkill === AbilitiesEnum.NombreUtilisation) numB = 1;

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

function createAbility(listAbilities: ArlenorAbility[], name: string, typeAbility: ArlenorEnum, groups: ArlenorGroup[], specialities: ArlenorSpeciality[]): ArlenorAbility[] {
  if (groups.length > 0) {
    groups.forEach(grp => {
      const newAb = new ArlenorAbility(name, typeAbility);
      newAb.initGrpSpe(grp, []);
      listAbilities.push(newAb);
    });
  }
  if (specialities.length > 0) {
    const listGroupsCreated: string[] = [];
    specialities.forEach(cls => {
      if (!listGroupsCreated.includes(cls.group.code)) {
        const ListSpecialitiesToCreate = specialities.filter(clsToCreate => clsToCreate.group.code === cls.group.code);
        const newAb = new ArlenorAbility(name, typeAbility);
        newAb.initGrpSpe(cls.group, ListSpecialitiesToCreate);
        listAbilities.push(newAb);
        listGroupsCreated.push(cls.group.code);
      }
    });
  }
  return listAbilities;
}

export function getListRaceAbilities(raceCode = ""): ArlenorAbility[] {
  const listAbilities = [];
  const races = getListRaces();

  // Humain
  const abl00 = new ArlenorAbility("Polyvalence", AbilitiesEnum.AbiliteRace);
  abl00.description = "Les humains ne possèdent aucune capacité, positive ou négative.";
  abl00.image = require("./../../assets/icons/capacities/capacity_00.png");
  abl00.race = races[0];
  listAbilities.push(abl00);

  // Elfe
  const abl10 = new ArlenorAbility("Athlète agile", AbilitiesEnum.AbiliteRace);
  abl10.description = "Les elfes ont + 1 PV max.";
  abl10.image = require("./../../assets/icons/capacities/capacity_10.png");
  abl10.race = races[1];
  listAbilities.push(abl10);
  
  const abl11 = new ArlenorAbility("Monde des rêves", AbilitiesEnum.AbiliteRace);
  abl11.description = "Les elfes ont la capacité de communiquer entre eux via des rêves lors d'une séance de méditation.";
  abl11.image = require("./../../assets/icons/capacities/capacity_11.png");
  abl11.race = races[1];
  listAbilities.push(abl11);
  
  // Nain
  const abl20 = new ArlenorAbility("Viande crue", AbilitiesEnum.AbiliteRace);
  abl20.description = "Les nains doivent manger de la viande crue à chaque repas. Ils trouvent que le cuit est un véritable gâchi immangeable.";
  abl20.image = require("./../../assets/icons/capacities/capacity_20.png");
  abl20.race = races[2];
  listAbilities.push(abl20);
  
  const abl21 = new ArlenorAbility("Spécialité secrète de Kazador", AbilitiesEnum.AbiliteRace);
  abl21.description = "Les nains ont un secret caché dans les montagnes de Kazador. Seul le MJ pourra révéler ce secret à la création de personnage.";
  abl21.image = require("./../../assets/icons/capacities/capacity_21.png");
  abl21.race = races[2];
  listAbilities.push(abl21);

  // Mutant
  const abl30 = new ArlenorAbility("Langage animal", AbilitiesEnum.AbiliteRace);
  abl30.description = "Les mutants peuvent communiquer sans difficulté avec les animaux auxquels leur mutation est affiliée.";
  abl30.image = require("./../../assets/icons/capacities/capacity_30.png");
  abl30.race = races[3];
  listAbilities.push(abl30);
  
  const abl31 = new ArlenorAbility("Partie animale", AbilitiesEnum.AbiliteRace);
  abl31.description = `Les mutants possèdent une partie de leur corps en commun avec celle d'un animal.
  Ils ne peuvent cependant pas hériter de ses propriétés, c'est seulement visuel.`;
  abl31.image = require("./../../assets/icons/capacities/capacity_31.png");
  abl31.race = races[3];
  listAbilities.push(abl31);

  // Pan
  const abl40 = new ArlenorAbility("Corps jeune", AbilitiesEnum.AbiliteRace);
  abl40.description = "Les pans ont + 1 PV max.";
  abl40.image = require("./../../assets/icons/capacities/capacity_40.png");
  abl40.race = races[4];
  listAbilities.push(abl40);
  
  const abl42 = new ArlenorAbility("Innocence", AbilitiesEnum.AbiliteRace);
  abl42.description = "Commetre un meurtre volontairement, torturer, ou avoir des relations sexuelles leur fait perdre la faculté d'être un pan.";
  abl42.image = require("./../../assets/icons/capacities/capacity_42.png");
  abl42.race = races[4];
  listAbilities.push(abl42);

  const abl43 = new ArlenorAbility("Végétarien ou Végan", AbilitiesEnum.AbiliteRace);
  abl43.description = "Les pans ne peut pas infliger des souffrances ou la mort à des animaux, même dans le but de s'en nourrir.";
  abl43.image = require("./../../assets/icons/capacities/capacity_43.png");
  abl43.race = races[4];
  listAbilities.push(abl43);

  const abl44 = new ArlenorAbility("Peau nuitée", AbilitiesEnum.AbiliteRace);
  abl44.description = "Les pans ont, la nuit, une peau qui reflète l'état actuel du ciel.";
  abl44.image = require("./../../assets/icons/capacities/capacity_44.png");
  abl44.race = races[4];
  listAbilities.push(abl44);

  // Arlénien
  const abl50 = new ArlenorAbility("Tatouages évolutifs", AbilitiesEnum.AbiliteRace);
  abl50.description = "Les arléniens ne possèdent pas de cristaux mais des tatouages évolutifs sur leur corps.";
  abl50.image = require("./../../assets/icons/capacities/capacity_50.png");
  abl50.race = races[5];
  listAbilities.push(abl50);
  
  const abl51 = new ArlenorAbility("Haine des races", AbilitiesEnum.AbiliteRace);
  abl51.description = "Les arléniens ne peuvent pas supporter la présence d'autres races que les pans, à leurs côtés.";
  abl51.image = require("./../../assets/icons/capacities/capacity_51.png");
  abl51.race = races[5];
  listAbilities.push(abl51);

  const abl52 = new ArlenorAbility("Grandeur", AbilitiesEnum.AbiliteRace);
  abl52.description = "Les arléniens grandissent le jour de quelques centimètres, le point culminant étant midi.";
  abl52.image = require("./../../assets/icons/capacities/capacity_52.png");
  abl52.race = races[5];
  listAbilities.push(abl52);

  const abl53 = new ArlenorAbility("Végétarien ou Végan", AbilitiesEnum.AbiliteRace);
  abl53.description = "Les arléniens ne peut pas infliger des souffrances ou la mort à des animaux, même dans le but de s'en nourrir.";
  abl53.image = require("./../../assets/icons/capacities/capacity_53.png");
  abl53.race = races[5];
  listAbilities.push(abl53);

  // Célestien
  const abl60 = new ArlenorAbility("Coeur de cristal", AbilitiesEnum.AbiliteRace);
  abl60.description = "Les célestiens possèdent des pouvoirs élémmentaires particuliers, donnés par une mutation génétique au coeur.";
  abl60.image = require("./../../assets/icons/capacities/capacity_60.png");
  abl60.race = races[6];
  listAbilities.push(abl60);

  const abl61 = new ArlenorAbility("Esprit familier", AbilitiesEnum.AbiliteRace);
  abl61.description = "Les célestiens peuvent utiliser l'énergie d'un esprit pour amplifier leurs pouvoirs.";
  abl61.image = require("./../../assets/icons/capacities/capacity_61.png");
  abl61.race = races[6];
  listAbilities.push(abl61);

  const list = raceCode ? listAbilities.filter(skill => skill.race?.code === raceCode) : listAbilities;
  listAbilities.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return list;
}

export function getListOtherAbilities(): ArlenorAbility[] {
  const listAbilities: ArlenorAbility[] = getListGrpSpeAbilities()
    .filter(abl => abl.typeSkill.Code === AbilitiesEnum.AbiliteArme.Code || abl.typeSkill.Code === AbilitiesEnum.AbiliteArmure.Code);

  const abl00 = new ArlenorAbility("Autre abilité 00", AbilitiesEnum.AbiliteAutre);
  listAbilities.push(abl00);

  return listAbilities;
}