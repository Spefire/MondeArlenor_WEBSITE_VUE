import { CaractNomEnum } from "../ArlenorCaracts";
import { ArlenorEnum } from "../ArlenorEnum";
import { ArlenorGroup } from "../ArlenorGroup";
import { ArlenorSkill, SkillTypesEnum } from "../ArlenorSkill";
import { ArlenorSpeciality } from "../ArlenorSpeciality";
import { ArlenorGroups } from "./ListGroups";
import { getListRaces } from "./ListRaces";
import { ArlenorSpecialities } from "./ListSpecialities";

export function getListDefaultSkills(): ArlenorSkill[] {
  let listSkills: ArlenorSkill[] = [];
  const groups = new ArlenorGroups();
  const specialities = new ArlenorSpecialities();

  // Durée et rechargement
  listSkills = createSkill(listSkills,
    "Courte durée / rechargement",
    SkillTypesEnum.ProprieteTemps,
    [], [specialities.DanseurMartial, specialities.Derviche, specialities.Elementaliste]
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
    [groups.Enchanteur], [specialities.Exorciste],
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
    [specialities.Derviche, specialities.Escrimeur, specialities.Pelerin, specialities.Guerisseur, specialities.PretreArlenor, specialities.Exorciste],
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
  const arme01 = new ArlenorSkill();
  arme01.init(getLibArme("à une main, avec bouclier"), SkillTypesEnum.CompetenceArme);
  arme01.initGrpSpe(null, [specialities.Paladin]);
  arme01.caracts = [CaractNomEnum.Force];
  listSkills.push(arme01);
  
  const arme02 = new ArlenorSkill();
  arme02.init(getLibArme("épées à deux mains"), SkillTypesEnum.CompetenceArme);
  arme02.initGrpSpe(null, [specialities.Chevalier]);
  arme02.caracts = [CaractNomEnum.Force];
  listSkills.push(arme02);

  const arme03 = new ArlenorSkill();
  arme03.init(getLibArme("mains nues"), SkillTypesEnum.CompetenceArme);
  arme03.initGrpSpe(null, [specialities.DanseurMartial]);
  arme03.caracts = [CaractNomEnum.Force];
  listSkills.push(arme03);

  const arme04 = new ArlenorSkill();
  arme04.init(getLibArme("d'hast"), SkillTypesEnum.CompetenceArme);
  arme04.initGrpSpe(null, [specialities.Derviche]);
  arme04.caracts = [CaractNomEnum.Habilete];
  listSkills.push(arme04);

  const arme05 = new ArlenorSkill();
  arme05.init(getLibArme("dagues / armes de jets"), SkillTypesEnum.CompetenceArme);
  arme05.initGrpSpe(null, [specialities.LameOmbre]);
  arme05.caracts = [CaractNomEnum.Habilete];
  listSkills.push(arme05);

  const arme06 = new ArlenorSkill();
  arme06.init(getLibArme("arcs / arbalètes"), SkillTypesEnum.CompetenceArme);
  arme06.initGrpSpe(null, [specialities.Chasseur]);
  arme06.caracts = [CaractNomEnum.Habilete];
  listSkills.push(arme06);

  const arme07 = new ArlenorSkill();
  arme07.init(getLibArme("sabres"), SkillTypesEnum.CompetenceArme);
  arme07.initGrpSpe(null, [specialities.DanseurSabre]);
  arme07.caracts = [CaractNomEnum.Habilete];
  listSkills.push(arme07);

  const arme08 = new ArlenorSkill();
  arme08.init(getLibArme("ambidextrie"), SkillTypesEnum.CompetenceArme);
  arme08.initGrpSpe(null, [specialities.DoubleLame]);
  arme08.caracts = [CaractNomEnum.Force];
  listSkills.push(arme08);

  const arme09 = new ArlenorSkill();
  arme09.init(getLibArme("épées à une main"), SkillTypesEnum.CompetenceArme);
  arme09.initGrpSpe(null, [specialities.Escrimeur]);
  arme09.caracts = [CaractNomEnum.Force];
  listSkills.push(arme09);

  const arme10 = new ArlenorSkill();
  arme10.init(getLibArme("orbes mystiques"), SkillTypesEnum.CompetenceArme);
  arme10.initGrpSpe(groups.Sorcier, []);
  arme10.caracts = [CaractNomEnum.Intellect];
  listSkills.push(arme10);

  const arme11 = new ArlenorSkill();
  arme11.init(getLibArme("sceptres à une main"), SkillTypesEnum.CompetenceArme);
  arme11.initGrpSpe(groups.Invocateur, []);
  arme11.caracts = [CaractNomEnum.Intellect];
  listSkills.push(arme11);

  const arme12 = new ArlenorSkill();
  arme12.init(getLibArme("bâtons"), SkillTypesEnum.CompetenceArme);
  arme12.initGrpSpe(groups.Enchanteur, []);
  arme12.caracts = [CaractNomEnum.Habilete];
  listSkills.push(arme12);

  const arme13 = new ArlenorSkill();
  arme13.init(getLibArme("mains nues"), SkillTypesEnum.CompetenceArme);
  arme13.initGrpSpe(null, [specialities.Chaman]);
  arme13.caracts = [CaractNomEnum.Force];
  listSkills.push(arme13);

  const arme14 = new ArlenorSkill();
  arme14.init(getLibArme("bâtons"), SkillTypesEnum.CompetenceArme);
  arme14.initGrpSpe(null, [specialities.Guerisseur]);
  arme14.caracts = [CaractNomEnum.Habilete];
  listSkills.push(arme14);

  const arme15 = new ArlenorSkill();
  arme15.init(getLibArme("bâtons"), SkillTypesEnum.CompetenceArme);
  arme15.initGrpSpe(groups.Pretre, []);
  arme15.caracts = [CaractNomEnum.Habilete];
  listSkills.push(arme15);

  const arme16 = new ArlenorSkill();
  arme16.init(getLibArme("instruments de musique"), SkillTypesEnum.CompetenceArme);
  arme16.initGrpSpe(groups.Barde, []);
  arme16.caracts = [CaractNomEnum.Intellect];
  listSkills.push(arme16);

  return listSkills;
}

export function getSpeSkills(grpCode: string, speCode: string): ArlenorSkill[] {
  const listGrp = getListDefaultSkills().filter(skill => skill.group && skill.group.code === grpCode && skill.specialities.length === 0);
  const listSpe = getListDefaultSkills().filter(skill => skill.specialities.find(spe => spe.code === speCode));
  const list = listGrp.concat(listSpe);
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

export function getListRaceSkills(raceCode = ""): ArlenorSkill[] {
  const listSkills = [];
  const races = getListRaces();

  // Humain
  const skill00 = new ArlenorSkill();
  skill00.init("Polyvalence", SkillTypesEnum.CompetenceRace);
  skill00.description = "Les humains ne possèdent aucune capacité, positive ou négative.";
  skill00.image = require("./../../assets/icons/capacities/capacity_00.png");
  skill00.race = races[0];
  listSkills.push(skill00);

  // Elfe
  const skill10 = new ArlenorSkill();
  skill10.init("Athlète agile", SkillTypesEnum.CompetenceRace);
  skill10.description = "Les elfes ont + 1 PV max.";
  skill10.image = require("./../../assets/icons/capacities/capacity_10.png");
  skill10.race = races[1];
  listSkills.push(skill10);
  
  const skill11 = new ArlenorSkill();
  skill11.init("Monde des rêves", SkillTypesEnum.CompetenceRace);
  skill11.description = "Les elfes ont la capacité de communiquer entre eux via des rêves lors d'une séance de méditation.";
  skill11.image = require("./../../assets/icons/capacities/capacity_11.png");
  skill11.race = races[1];
  listSkills.push(skill11);
  
  // Nain
  const skill20 = new ArlenorSkill();
  skill20.init("Viande crue", SkillTypesEnum.CompetenceRace);
  skill20.description = "Les nains doivent manger de la viande crue à chaque repas. Ils trouvent que le cuit est un véritskille gâchi immangeskille.";
  skill20.image = require("./../../assets/icons/capacities/capacity_20.png");
  skill20.race = races[2];
  listSkills.push(skill20);
  
  const skill21 = new ArlenorSkill();
  skill21.init("Spécialité secrète de Kazador", SkillTypesEnum.CompetenceRace);
  skill21.description = "Les nains ont un secret caché dans les montagnes de Kazador. Seul le MJ pourra révéler ce secret à la création de personnage.";
  skill21.image = require("./../../assets/icons/capacities/capacity_21.png");
  skill21.race = races[2];
  listSkills.push(skill21);

  // Mutant
  const skill30 = new ArlenorSkill();
  skill30.init("Langage animal", SkillTypesEnum.CompetenceRace);
  skill30.description = "Les mutants peuvent communiquer sans difficulté avec les animaux auxquels leur mutation est affiliée.";
  skill30.image = require("./../../assets/icons/capacities/capacity_30.png");
  skill30.race = races[3];
  listSkills.push(skill30);
  
  const skill31 = new ArlenorSkill();
  skill31.init("Partie animale", SkillTypesEnum.CompetenceRace);
  skill31.description = `Les mutants possèdent une partie de leur corps en commun avec celle d'un animal.
  Ils ne peuvent cependant pas hériter de ses propriétés, c'est seulement visuel.`;
  skill31.image = require("./../../assets/icons/capacities/capacity_31.png");
  skill31.race = races[3];
  listSkills.push(skill31);

  // Pan
  const skill40 = new ArlenorSkill();
  skill40.init("Corps jeune", SkillTypesEnum.CompetenceRace);
  skill40.description = "Les pans ont + 1 PV max.";
  skill40.image = require("./../../assets/icons/capacities/capacity_40.png");
  skill40.race = races[4];
  listSkills.push(skill40);
  
  const skill41 = new ArlenorSkill();
  skill41.init("Innocence", SkillTypesEnum.CompetenceRace);
  skill41.description = "Commetre un meurtre volontairement, torturer, ou avoir des relations sexuelles leur fait perdre la faculté d'être un pan.";
  skill41.image = require("./../../assets/icons/capacities/capacity_42.png");
  skill41.race = races[4];
  listSkills.push(skill41);

  const skill42 = new ArlenorSkill();
  skill42.init("Végétarien ou Végan", SkillTypesEnum.CompetenceRace);
  skill42.description = "Les pans ne peut pas infliger des souffrances ou la mort à des animaux, même dans le but de s'en nourrir.";
  skill42.image = require("./../../assets/icons/capacities/capacity_43.png");
  skill42.race = races[4];
  listSkills.push(skill42);

  const skill43 = new ArlenorSkill();
  skill43.init("Peau nuitée", SkillTypesEnum.CompetenceRace);
  skill43.description = "Les pans ont, la nuit, une peau qui reflète l'état actuel du ciel.";
  skill43.image = require("./../../assets/icons/capacities/capacity_44.png");
  skill43.race = races[4];
  listSkills.push(skill43);

  // Arlénien
  const skill50 = new ArlenorSkill();
  skill50.init("Tatouages évolutifs", SkillTypesEnum.CompetenceRace);
  skill50.description = "Les arléniens ne possèdent pas de cristaux mais des tatouages évolutifs sur leur corps.";
  skill50.image = require("./../../assets/icons/capacities/capacity_50.png");
  skill50.race = races[5];
  listSkills.push(skill50);
  
  const skill51 = new ArlenorSkill();
  skill51.init("Haine des races", SkillTypesEnum.CompetenceRace);
  skill51.description = "Les arléniens ne peuvent pas supporter la présence d'autres races que les pans, à leurs côtés.";
  skill51.image = require("./../../assets/icons/capacities/capacity_51.png");
  skill51.race = races[5];
  listSkills.push(skill51);

  const skill52 = new ArlenorSkill();
  skill52.init("Grandeur", SkillTypesEnum.CompetenceRace);
  skill52.description = "Les arléniens grandissent le jour de quelques centimètres, le point culminant étant midi.";
  skill52.image = require("./../../assets/icons/capacities/capacity_52.png");
  skill52.race = races[5];
  listSkills.push(skill52);

  const skill53 = new ArlenorSkill();
  skill53.init("Végétarien ou Végan", SkillTypesEnum.CompetenceRace);
  skill53.description = "Les arléniens ne peut pas infliger des souffrances ou la mort à des animaux, même dans le but de s'en nourrir.";
  skill53.image = require("./../../assets/icons/capacities/capacity_53.png");
  skill53.race = races[5];
  listSkills.push(skill53);

  // Célestien
  const skill60 = new ArlenorSkill();
  skill60.init("Coeur de cristal", SkillTypesEnum.CompetenceRace);
  skill60.description = "Les célestiens possèdent des pouvoirs élémmentaires particuliers, donnés par une mutation génétique au coeur.";
  skill60.image = require("./../../assets/icons/capacities/capacity_60.png");
  skill60.race = races[6];
  listSkills.push(skill60);

  const skill61 = new ArlenorSkill();
  skill61.init("Esprit familier", SkillTypesEnum.CompetenceRace);
  skill61.description = "Les célestiens peuvent utiliser l'énergie d'un esprit pour amplifier leurs pouvoirs.";
  skill61.image = require("./../../assets/icons/capacities/capacity_61.png");
  skill61.race = races[6];
  listSkills.push(skill61);

  const list = raceCode ? listSkills.filter(skill => skill.race?.code === raceCode) : listSkills;
  listSkills.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return list;
}

function getLibArme(lib: string): string {
  return "Bonus d'arme (" + lib + ")";
}

function getLibArmure(lib: string): string {
  return "Port d'armure (" + lib + ")";
}

function createSkill(listSkills: ArlenorSkill[], name: string, type: ArlenorEnum, groups: ArlenorGroup[], specialities: ArlenorSpeciality[]): ArlenorSkill[] {
  if (groups.length > 0) {
    groups.forEach(grp => {
      const newSkill= new ArlenorSkill();
      newSkill.init(name, type);
      newSkill.initGrpSpe(grp, []);
      listSkills.push(newSkill);
    });
  }
  if (specialities.length > 0) {
    const listGroupsCreated: string[] = [];
    specialities.forEach(spe => {
      if (!listGroupsCreated.includes(spe.group.code)) {
        const ListSpecialitiesToCreate = specialities.filter(speToCreate => speToCreate.group.code === spe.group.code);
        const newSkill = new ArlenorSkill();
        newSkill.init(name, type);
        newSkill.initGrpSpe(spe.group, ListSpecialitiesToCreate);
        listSkills.push(newSkill);
        listGroupsCreated.push(spe.group.code);
      }
    });
  }
  return listSkills;
}

