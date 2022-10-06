import { ArlenorSkill, SkillTypesEnum } from "../ArlenorSkill";
import { getListRaces } from "./ListRaces";

export function getListRaceSkills(raceCode = ""): ArlenorSkill[] {
  const listSkills = [];
  const races = getListRaces();

  // Humain
  const skill00 = new ArlenorSkill();
  skill00.init("Polyvalence", SkillTypesEnum.CompetenceAutre);
  skill00.description = "Les humains ne possèdent aucune capacité, positive ou négative.";
  skill00.urlImage = "./capacity_00.png";
  skill00.codeRace = races[0].code;
  listSkills.push(skill00);

  // Elfe
  const skill10 = new ArlenorSkill();
  skill10.init("Athlète agile", SkillTypesEnum.CompetenceAutre);
  skill10.description = "Les elfes ont + 1 PV max.";
  skill10.urlImage = "./capacity_10.png";
  skill10.codeRace = races[1].code;
  listSkills.push(skill10);
  
  const skill11 = new ArlenorSkill();
  skill11.init("Monde des rêves", SkillTypesEnum.CompetenceAutre);
  skill11.description = "Les elfes ont la capacité de communiquer entre eux via des rêves lors d'une séance de méditation.";
  skill11.urlImage = "./capacity_11.png";
  skill11.codeRace = races[1].code;
  listSkills.push(skill11);
  
  // Nain
  const skill20 = new ArlenorSkill();
  skill20.init("Viande crue", SkillTypesEnum.CompetenceAutre);
  skill20.description = "Les nains doivent manger de la viande crue à chaque repas. Ils trouvent que le cuit est un véritskille gâchi immangeskille.";
  skill20.urlImage = "./capacity_20.png";
  skill20.codeRace = races[2].code;
  listSkills.push(skill20);
  
  const skill21 = new ArlenorSkill();
  skill21.init("Spécialité secrète de Kazador", SkillTypesEnum.CompetenceAutre);
  skill21.description = "Les nains ont un secret caché dans les montagnes de Kazador. Seul le MJ pourra révéler ce secret à la création de personnage.";
  skill21.urlImage = "./capacity_21.png";
  skill21.codeRace = races[2].code;
  listSkills.push(skill21);

  // Mutant
  const skill30 = new ArlenorSkill();
  skill30.init("Langage animal", SkillTypesEnum.CompetenceAutre);
  skill30.description = "Les mutants peuvent communiquer sans difficulté avec les animaux auxquels leur mutation est affiliée.";
  skill30.urlImage = "./capacity_30.png";
  skill30.codeRace = races[3].code;
  listSkills.push(skill30);
  
  const skill31 = new ArlenorSkill();
  skill31.init("Partie animale", SkillTypesEnum.CompetenceAutre);
  skill31.description = `Les mutants possèdent une partie de leur corps en commun avec celle d'un animal.
  Ils ne peuvent cependant pas hériter de ses propriétés, c'est seulement visuel.`;
  skill31.urlImage = "./capacity_31.png";
  skill31.codeRace = races[3].code;
  listSkills.push(skill31);

  // Pan
  const skill40 = new ArlenorSkill();
  skill40.init("Corps jeune", SkillTypesEnum.CompetenceAutre);
  skill40.description = "Les pans ont + 1 PV max.";
  skill40.urlImage = "./capacity_40.png";
  skill40.codeRace = races[4].code;
  listSkills.push(skill40);
  
  const skill41 = new ArlenorSkill();
  skill41.init("Innocence", SkillTypesEnum.CompetenceAutre);
  skill41.description = "Commetre un meurtre volontairement, torturer, ou avoir des relations sexuelles leur fait perdre la faculté d'être un pan.";
  skill41.urlImage = "./capacity_42.png";
  skill41.codeRace = races[4].code;
  listSkills.push(skill41);

  const skill42 = new ArlenorSkill();
  skill42.init("Végétarien ou Végan", SkillTypesEnum.CompetenceAutre);
  skill42.description = "Les pans ne peut pas infliger des souffrances ou la mort à des animaux, même dans le but de s'en nourrir.";
  skill42.urlImage = "./capacity_43.png";
  skill42.codeRace = races[4].code;
  listSkills.push(skill42);

  const skill43 = new ArlenorSkill();
  skill43.init("Peau nuitée", SkillTypesEnum.CompetenceAutre);
  skill43.description = "Les pans ont, la nuit, une peau qui reflète l'état actuel du ciel.";
  skill43.urlImage = "./capacity_44.png";
  skill43.codeRace = races[4].code;
  listSkills.push(skill43);

  // Arlénien
  const skill50 = new ArlenorSkill();
  skill50.init("Tatouages évolutifs", SkillTypesEnum.CompetenceAutre);
  skill50.description = "Les arléniens ne possèdent pas de cristaux mais des tatouages évolutifs sur leur corps.";
  skill50.urlImage = "./capacity_50.png";
  skill50.codeRace = races[5].code;
  listSkills.push(skill50);
  
  const skill51 = new ArlenorSkill();
  skill51.init("Haine des races", SkillTypesEnum.CompetenceAutre);
  skill51.description = "Les arléniens ne peuvent pas supporter la présence d'autres races que les pans, à leurs côtés.";
  skill51.urlImage = "./capacity_51.png";
  skill51.codeRace = races[5].code;
  listSkills.push(skill51);

  const skill52 = new ArlenorSkill();
  skill52.init("Grandeur", SkillTypesEnum.CompetenceAutre);
  skill52.description = "Les arléniens grandissent le jour de quelques centimètres, le point culminant étant midi.";
  skill52.urlImage = "./capacity_52.png";
  skill52.codeRace = races[5].code;
  listSkills.push(skill52);

  const skill53 = new ArlenorSkill();
  skill53.init("Végétarien ou Végan", SkillTypesEnum.CompetenceAutre);
  skill53.description = "Les arléniens ne peut pas infliger des souffrances ou la mort à des animaux, même dans le but de s'en nourrir.";
  skill53.urlImage = "./capacity_53.png";
  skill53.codeRace = races[5].code;
  listSkills.push(skill53);

  // Célestien
  const skill60 = new ArlenorSkill();
  skill60.init("Coeur de cristal", SkillTypesEnum.CompetenceAutre);
  skill60.description = "Les célestiens possèdent des pouvoirs élémentaires particuliers, donnés par une mutation génétique au coeur.";
  skill60.urlImage = "./capacity_60.png";
  skill60.codeRace = races[6].code;
  listSkills.push(skill60);

  const skill61 = new ArlenorSkill();
  skill61.init("Esprit familier", SkillTypesEnum.CompetenceAutre);
  skill61.description = "Les célestiens peuvent utiliser l'énergie d'un esprit pour amplifier leurs pouvoirs.";
  skill61.urlImage = "./capacity_61.png";
  skill61.codeRace = races[6].code;
  listSkills.push(skill61);

  const list = raceCode ? listSkills.filter(skill => skill.race?.code === raceCode) : listSkills;
  listSkills.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return list;
}
