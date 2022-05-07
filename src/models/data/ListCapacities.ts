import { ArlenorCapacity } from "../ArlenorCapacity";
import { getListRaces } from "./ListRaces";

export function getListCapacities(raceCode = ""): ArlenorCapacity[] {
  const listCapacity = [];
  const races = getListRaces();

  // Humain
  const cap00 = new ArlenorCapacity();
  cap00.name= "Polyvalence";
  cap00.description = "Les humains ne possèdent aucune capacité, positive ou négative.";
  cap00.image = require("./../../assets/icons/capacities/capacity_00.png");
  cap00.race = races[0];
  listCapacity.push(cap00);

  // Elfe
  const cap10 = new ArlenorCapacity();
  cap10.name= "Athlète agile";
  cap10.description = "Les elfes ont + 1 PV max.";
  cap10.image = require("./../../assets/icons/capacities/capacity_10.png");
  cap10.race = races[1];
  listCapacity.push(cap10);
  
  const cap11 = new ArlenorCapacity();
  cap11.name= "Monde des rêves";
  cap11.description = "Les elfes ont la capacité de communiquer entre eux via des rêves lors d'une séance de méditation.";
  cap11.image = require("./../../assets/icons/capacities/capacity_11.png");
  cap11.race = races[1];
  listCapacity.push(cap11);
  
  // Nain
  const cap20 = new ArlenorCapacity();
  cap20.name= "Viande crue";
  cap20.description = "Les nains doivent manger de la viande crue à chaque repas. Ils trouvent que le cuit est un véritable gâchi immangeable.";
  cap20.image = require("./../../assets/icons/capacities/capacity_20.png");
  cap20.race = races[2];
  listCapacity.push(cap20);
  
  const cap21 = new ArlenorCapacity();
  cap21.name= "Spécialité secrète de Kazador";
  cap21.description = "Les nains ont un secret caché dans les montagnes de Kazador. Seul le MJ pourra révéler ce secret à la création de personnage.";
  cap21.image = require("./../../assets/icons/capacities/capacity_21.png");
  cap21.race = races[2];
  listCapacity.push(cap21);

  // Mutant
  const cap30 = new ArlenorCapacity();
  cap30.name= "Langage animal";
  cap30.description = "Les mutants peuvent communiquer sans difficulté avec les animaux auxquels leur mutation est affiliée.";
  cap30.image = require("./../../assets/icons/capacities/capacity_30.png");
  cap30.race = races[3];
  listCapacity.push(cap30);
  
  const cap31 = new ArlenorCapacity();
  cap31.name= "Partie animale";
  cap31.description = `Les mutants possèdent une partie de leur corps en commun avec celle d'un animal.
  Ils ne peuvent cependant pas hériter de ses propriétés, c'est seulement visuel.`;
  cap31.image = require("./../../assets/icons/capacities/capacity_31.png");
  cap31.race = races[3];
  listCapacity.push(cap31);

  // Pan
  const cap40 = new ArlenorCapacity();
  cap40.name= "Corps jeune";
  cap40.description = "Les pans ont + 1 PV max.";
  cap40.image = require("./../../assets/icons/capacities/capacity_40.png");
  cap40.race = races[4];
  listCapacity.push(cap40);
  
  const cap41 = new ArlenorCapacity();
  cap41.name= "Communication avec la nature";
  cap41.description = "Les pans peut savoir l'état actuel des végétaux dont les météos récentes et les perturbations physiques subies.";
  cap41.image = require("./../../assets/icons/capacities/capacity_41.png");
  cap41.race = races[4];
  listCapacity.push(cap41);

  const cap42 = new ArlenorCapacity();
  cap42.name= "Innocence";
  cap42.description = `Les pans ne doivent pas perdre leur innocence (commetre un meurtre volontairement,
    ou avoir des relations sexuelles) sinon il perd sa faculté d'être un pan.`;
  cap42.image = require("./../../assets/icons/capacities/capacity_42.png");
  cap42.race = races[4];
  listCapacity.push(cap42);

  const cap43 = new ArlenorCapacity();
  cap43.name= "Végétarien ou Végan";
  cap43.description = "Les pans ne peut pas infliger des souffrances ou la mort à des animaux, même dans le but de s'en nourrir.";
  cap43.image = require("./../../assets/icons/capacities/capacity_43.png");
  cap43.race = races[4];
  listCapacity.push(cap43);

  const cap44 = new ArlenorCapacity();
  cap44.name= "Peau nuitée";
  cap44.description = "Les pans ont, la nuit, une peau qui reflète l'état actuel du ciel.";
  cap44.image = require("./../../assets/icons/capacities/capacity_44.png");
  cap44.race = races[4];
  listCapacity.push(cap44);

  // Arlénien
  const cap50 = new ArlenorCapacity();
  cap50.name= "Tatouages évolutifs";
  cap50.description = "Les arléniens ne possèdent pas de cristaux mais des tatouages évolutifs sur leur corps.";
  cap50.image = require("./../../assets/icons/capacities/capacity_50.png");
  cap50.race = races[5];
  listCapacity.push(cap50);
  
  const cap51 = new ArlenorCapacity();
  cap51.name= "Haine des races";
  cap51.description = "Les arléniens ne peuvent pas supporter la présence d'autres races que les pans, à leurs côtés.";
  cap51.image = require("./../../assets/icons/capacities/capacity_51.png");
  cap51.race = races[5];
  listCapacity.push(cap51);

  const cap52 = new ArlenorCapacity();
  cap52.name= "Grandeur";
  cap52.description = "Les arléniens grandissent le jour de quelques centimètres, le point culminant étant midi.";
  cap52.image = require("./../../assets/icons/capacities/capacity_52.png");
  cap52.race = races[5];
  listCapacity.push(cap52);

  const cap53 = new ArlenorCapacity();
  cap53.name= "Végétarien ou Végan";
  cap53.description = "Les arléniens ne peut pas infliger des souffrances ou la mort à des animaux, même dans le but de s'en nourrir.";
  cap53.image = require("./../../assets/icons/capacities/capacity_53.png");
  cap53.race = races[5];
  listCapacity.push(cap53);

  // Célestien
  const cap60 = new ArlenorCapacity();
  cap60.name= "Coeur de cristal";
  cap60.description = "Les célestiens possèdent des pouvoirs élémmentaires particuliers, donnés par une mutation génétique au coeur.";
  cap60.image = require("./../../assets/icons/capacities/capacity_60.png");
  cap60.race = races[6];
  listCapacity.push(cap60);

  const cap61 = new ArlenorCapacity();
  cap61.name= "Esprit familier";
  cap61.description = "Les célestiens peuvent utiliser l'énergie d'un esprit pour amplifier leurs pouvoirs.";
  cap61.image = require("./../../assets/icons/capacities/capacity_61.png");
  cap61.race = races[6];
  listCapacity.push(cap61);

  const list = raceCode ? listCapacity.filter(skill => skill.race?.code === raceCode) : listCapacity;
  listCapacity.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return list;
}