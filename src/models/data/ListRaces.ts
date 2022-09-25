import { ArlenorRace, DifficultyEnum } from "../ArlenorRace";

export function getListRaces(): ArlenorRace[] {
  const listRaces: ArlenorRace[] = [];

  // Race des humains
  const humain = new ArlenorRace("Humain", DifficultyEnum.Facile.Code, 45, 20);
  humain.infoAge = "Longévité normale (~100ans)";
  humain.infoAppareance = "Pas d'apparence particulière";
  humain.description = `
  &emsp;
  Les <b>Humains</b> étaient les premiers à vivre sur le monde d'Arlénor,
  les autres races étant des <b>Humains</b> ayant subit des mutations.
  Ils aiment autant construire que détruire, ils sont aussi savants qu'ignorants... ils sont polyvalents.
  Situés principalement à Faradel et aux alentours, les <b>Humains</b> servent souvent la garnison faradélienne.`;
  humain.image = require("./../../assets/images/races/p_humain.jpg");
  humain.locations = ["L'Empire Faradélien", "Le Régime Jirakanien"];
  listRaces.push(humain);

  // Race des elfes
  const elfe = new ArlenorRace("Elfe", DifficultyEnum.Facile.Code, 25, 80);
  elfe.infoAge = "Longévité normale (~100ans)";
  elfe.infoAppareance = "Humaine, ayant des oreilles pointues et une faible pilosité";
  elfe.description = `
  &emsp;
  Les <b>Elfes</b> sont les premiers humains à avoir muté dans le Monde d'Arlénor.
  Au fur et à mesure des siècles, ils ont vu leurs oreilles pousser, leurs poils disparaître...
  mais aussi leur affiliation aux cristaux s'agrandir : ce qui a fait d'eux une race dite 'supérieure' aux Humains.
  Les <b>Elfes</b> se sont habitués à ce statut, si bien que lorsque d'autres races sont apparues,
  une foule de discriminations envers ces dernières, ont commencé.
  <br/>&emsp;
  En dehors de ça, les <b>Elfes</b> ont obtenu la capacité de communier entre eux dans leurs rêves.
  Ils occupent ainsi des places importantes en politique, ou dans les domaines scientifiques.`;
  elfe.image = require("./../../assets/images/races/p_elfe.jpg");
  elfe.locations = ["L'Empire Faradélien", "Le Régime Jirakanien"];
  listRaces.push(elfe);

  // Race des nains
  const nain = new ArlenorRace("Nain", DifficultyEnum.Normale.Code, 10, 40);
  nain.infoAge = "Longévité normale (~100ans)";
  nain.infoAppareance = "Humaine, de très petite taille (< 1.5m) et de forte pilosité";
  nain.description = `
  &emsp;
  Les <b>Nains</b> furent les premiers à être discriminés, par leur taille, par leur pilosité abondante...
  Cependant, ils sont aussi craints car les <b>Nains</b> peuvent très vite être dangereux.
  Ils possèdent en eux une force, une soif de sang, et une envie de...
  de manger de la viande crue, fraîchement découpée.
  <br/>&emsp;
  Les <b>Nains</b>, rejetés et discriminés, se sont alors regroupés dans les hautes montagnes de Kazador pour y fonder un royaume.
  La rumeur dit qu'ils y cachent un grand secret...
  Il n'est pas rare de voir des <b>Nains</b> à Jirakan, mais le plus souvent, ils ne sont pas libres et servent d'esclaves avec les Mutants.`;
  nain.image = require("./../../assets/images/races/p_nain.jpg");
  nain.locations = ["Le Régime Jirakanien", "Les Montagnes de Kazador"];
  listRaces.push(nain);

  // Race des mutants
  const mutant = new ArlenorRace("Mutant", DifficultyEnum.Normale.Code, 15, 90);
  mutant.infoAge = "Faible longévité (~50ans)";
  mutant.infoAppareance = "Humaine, ayant une partie du corps animale";
  mutant.description = `
  &emsp;
  Le peuple des <b>Mutants</b>, lui, n’est pas reconnu officiellement.
  C’est le seul peuple où la mutation physique n’est pas clairement définie :
  une ou plusieurs parties de leur corps sont confondues avec celle d’un animal.
  <br/>&emsp;
  Les Humains et les Elfes les considèrent comme des bêtes, des sauvages, et une loi faradélienne, même, condamnent leur existence...
  Les <b>Mutants</b> ont peu souvent confiance en eux, et finissent par vivre cachés : seuls, en camouflant du mieux qu’ils le peuvent leur partie animale.
  Cependant un groupe de résistants a commencé à se fonder dans les souterrains de Faradel, ce qui leur redonne espoir.`;
  mutant.image = require("./../../assets/images/races/p_mutant.jpg");
  mutant.locations = ["L'Empire Faradélien", "Le Régime Jirakanien", "La Forêt d'Imerys"];
  listRaces.push(mutant);

  // Race des pans
  const pan = new ArlenorRace("Pan", DifficultyEnum.Difficile.Code, 1, 100);
  pan.infoAge = "Longue longévité (~200ans)";
  pan.infoAppareance = "Humaine, mais celle d'un enfant de 8-10 ans";
  pan.description = `
  &emsp;
  Les <b>Pans</b> sont des enfants humains choisis et appelés dans la forêt de Miryden par une puissante entité nommée Nébulys.
  Contrairement aux autres peuples, ils subissent leur mutation génétique lorsqu'ils entrent dans cette forêt et deviennent des <b>Pans</b> à part entière.
  Par ce processus, pour ne pas dire pacte, Nébulys les a lié à la Lune : le soir leur peau prend la couleur du ciel, plus claire lors de pleines lunes et plus sombre lors de nouvelles lunes.
  <br/>&emsp;
  Les <b>Pans</b> accordent respect et protection de la faune et de la flore.
  De plus, s'ils perdent leur innocence (violence gratuite, sexe, etc), leur pacte avec Nébulys est rompu : ils redeviennent alors de simples enfants humains.
  <br/>&emsp;
  Dans la forêt de Miryden, les <b>Pans</b> vivent cachés et sont connectés entre eux via Nébulys (telle une intelligence collective).
  Et le fait de s'éloigner de la forêt, les déconnecterait et rendrait certains vulnérables, déprimés, voire fous.`;
  pan.image = require("./../../assets/images/races/p_pan.jpg");
  pan.locations = ["Inconnue"];
  listRaces.push(pan);

  // Race des arléniens
  const arlenien = new ArlenorRace("Arlénien", DifficultyEnum.Difficile.Code, 3, 60);
  arlenien.infoAge = "Longue longévité (~200ans)";
  arlenien.infoAppareance = "Humaine, de taille variable (1.7m - 2.2m), ayant des tatouages";
  arlenien.description = 
  `&emsp;
  Les <b>Arléniens</b> sont un autre peuple caché dans la forêt de Miryden.
  Ce sont des humains qui ont été choisis à une époque lointaine, par l'entité Nébulys en tant que gardiens de la forêt :
  les <b>Arléniens</b> exterminent toute race étrangère à celle-ci.
  <br/>&emsp;
  Contrairement aux Pans, eux deviennent adultes et peuvent se reproduire.
  De ce fait, le peuple des <b>Arléniens</b> s'auto-suffit, et Nébulys n'en transforme plus.
  De plus, de leur côté, les <b>Arléniens</b> sont liés au Soleil : ils sont déjà de nature grands mais peuvent grandir de 30 à 50cm en plein jour.
  <br/>&emsp;
  Les <b>Arléniens</b> sont tatoués : ils n'arrivent pas à utiliser les cristaux dans leur état solide...
  Ils ont alors un rituel qui transforme le cristal en encre puis en tatouage.`;
  arlenien.image = require("./../../assets/images/races/p_arlenien.jpg");
  arlenien.locations = ["Inconnue"];
  listRaces.push(arlenien);

  // Race des célestiens
  const celestien = new ArlenorRace("Célestien", DifficultyEnum.Impossible.Code, 1, 10);
  celestien.infoAge = "Longévité normale (~100ans)";
  celestien.infoAppareance = "Pas d'apparence particulière";
  celestien.description = `
  &emsp;
  Les <b>Célestiens</b> vivent sur l'île céleste du Monde d'Arlénor,
  un endroit coupé de tout et dont les autres peuples ignorent même son existance.
  <br/>&emsp;
  Ces humains n'ont jamais connu la magie, ni la guerre, jusqu'à l'arrivée des Wendigos sur leur île.
  Mais depuis cet évènement, certains se sont vu dotés de pouvoirs et formèrent le Cercle des Mages Evanell afin de les contrer.
  <br/>&emsp;
  Ces <b>Célestiens</b>, nommés mages, possèdent en eux un coeur de cristal qui leur procure des pouvoirs élémentaires.
  Et peuvent communier avec des familiers afin d'améliorer leurs capacités magiques.`;
  celestien.image = require("./../../assets/images/races/p_celestien.jpg");
  celestien.locations = ["L'Île Célestia"];
  listRaces.push(celestien);

  return listRaces;
}
