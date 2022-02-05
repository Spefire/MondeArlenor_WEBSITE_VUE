import { ArlenorRace, DifficultyEnum } from "../ArlenorRace";

export function getListRaces(): ArlenorRace[] {
  const listRaces: ArlenorRace[] = [];

  // Race des humains
  const humain = new ArlenorRace("Humain", DifficultyEnum.Facile.Code, 45, 20);
  humain.infoAge = "Longévité normale (~100ans)";
  humain.infoAppareance = "Pas d'apparence particulière";
  humain.description = `Les Humains étaient les premiers à vivre sur le monde d'Arlénor.
  Les autres races sont des humains ayant subit des mutations au fil des générations, dû à l'exposition et utilisation quotidienne des cristaux.
  L'Humain aime construire autant que détruire, est aussi savant qu'ignorant...
  Les humains ne sont ni aimés, ni détestés des autres peuples : ils se sont concentrés dans les plaines de Terfil, et vivent principalement dans la cité de Faradel`;
  humain.image = require("./../../assets/images/races/p_humain.png");
  humain.locations = ["L'Empire Faradélien", "Le Régime Jirakanien"];
  listRaces.push(humain);

  // Race des elfes
  const elfe = new ArlenorRace("Elfe", DifficultyEnum.Facile.Code, 25, 80);
  elfe.infoAge = "Longévité normale (~100ans)";
  elfe.infoAppareance = "Humaine, ayant des oreilles pointues et une faible pilosité";
  elfe.description = `Les Elfes sont les premiers humains à avoir muté dans le Monde d'Arlénor.
  Au fur et à mesure des siècles, ils ont vu leurs oreilles pousser, leurs poils disparaître...
  mais aussi leur affiliation aux cristaux s'agrandir, ce qui a fait d'eux une race dite 'supérieure' aux Humains.
  Les Elfes se sont habitués à ce statut, si bien que lorsque d'autres races sont apparues, une foule de discriminations envers ces dernières,
  ont commencé. De plus, leur affinité aux cristaux est devenue au fil des siècles un problème d'addiction...
  Ils sont eux aussi concentrés dans les plaines de Terfil, et vivent dans les hauts quartiers de la cité de Faradel.`;
  elfe.image = require("./../../assets/images/races/p_elfe.png");
  elfe.locations = ["L'Empire Faradélien", "Le Régime Jirakanien"];
  listRaces.push(elfe);

  // Race des nains
  const nain = new ArlenorRace("Nain", DifficultyEnum.Normale.Code, 15, 40);
  nain.infoAge = "Longévité normale (~100ans)";
  nain.infoAppareance = "Humaine, de très petite taille (< 1.5m) et de forte pilosité";
  nain.description = `Les Nains furent les premiers à être discriminés, par leur taille, par leur pilosité abondante...
  Cependant, ils sont aussi craints car les nains peuvent très vite être dangereux. Ils possèdent en eux une force, une soif de sang, et une envie de...
  de manger de la viande crue, fraîchement découpée.
  Les Nains, rejetés et discriminés, se sont alors regroupés dans les hautes montagnes de Kazador.
  La rumeur dit qu'ils y cachent un grand secret...
  Il n'est pas rare de voir des Nains dans la cité de Jirakan, mais le plus souvent, les quelques Nains qui naissent en dehors des montagnes,
  les rejoignent souvent en étant adulte... et rares sont ceux qui souhaitent ensuite les quitter.`;
  nain.image = require("./../../assets/images/races/p_nain.png");
  nain.locations = ["Le Régime Jirakanien", "Les Montagnes de Kazador"];
  listRaces.push(nain);

  // Race des mutants
  const mutant = new ArlenorRace("Mutant", DifficultyEnum.Normale.Code, 20, 90);
  mutant.infoAge = "Faible longévité (~50ans)";
  mutant.infoAppareance = "Humaine, ayant une partie du corps animale";
  mutant.description = `Le peuple des Mutants, lui, n’est pas reconnu officiellement.
  C’est le seul peuple où la mutation physique n’est pas clairement définie :
  une ou plusieurs parties de leur corps sont confondues avec celle d’un animal.
  Les Humains et les Elfes les considèrent comme des bêtes, des sauvages, et la loi même... condamnent leur existence.
  Les Mutants ont peu souvent confiance en eux, et finissent par vivre cachés, seuls, camouflant du mieux qu’ils le peuvent leur partie animale...
  Cependant un groupe de résistants a commencé à se fonder dans les souterrains de la cité de Faradel, ce qui leur redonne espoir.`;
  mutant.image = require("./../../assets/images/races/p_mutant.png");
  mutant.locations = ["L'Empire Faradélien", "Le Régime Jirakanien", "La Forêt d'Imerys"];
  listRaces.push(mutant);

  // Race des pans
  const pan = new ArlenorRace("Pan", DifficultyEnum.Difficile.Code, 1, 100);
  pan.infoAge = "Longue longévité (~200ans)";
  pan.infoAppareance = "Humaine, mais celle d'un enfant de 8-10 ans";
  pan.description = `Les Pans sont des enfants humains choisis et appelés dans la forêt de Miryden par une puissante entité magique nommée Nebulys.
  Contrairement aux autres peuples, ils subissent leur mutation génétique lorsqu'ils entrent dans cette forêt et deviennent des Pans à part entière.
  Par ce processus, Nebulys les a lié à la nuit : le soir leur peau prend la couleur du ciel, plus claire lors de pleines lunes et plus sombre lors de nouvelles lunes.
  Les Pans accordent respect et protection de la faune et de la flore.
  De plus, dans la forêt de Miryden, les Pans sont comme connectés entre eux via Nebulys : résultant une intelligence collective.
  Le fait de s'éloigner de la forêt, sans oublier la nature craintive et technophobe des Pans, les déconnecterait et rendrait certains vulnérables, déprimés, voire fous.`;
  pan.image = require("./../../assets/images/races/p_pan.png");
  pan.locations = ["Inconnue"];
  listRaces.push(pan);

  // Race des arléniens
  const arlenien = new ArlenorRace("Arlénien", DifficultyEnum.Difficile.Code, 3, 60);
  arlenien.infoAge = "Lognue longévité (~200ans)";
  arlenien.infoAppareance = "Humaine, de taille variable (1.7m - 2.2m), ayant des tatouages";
  arlenien.description = `Les Arléniens sont un autre peuple caché dans le Monde d'Arlénor.
  Ce sont des humains qui ont été choisis à une époque lointaine, par l'entité Nebulys.
  Mais contrairement aux Pans, les Arléniens peuvent se reproduire car ils grandissent.
  De ce fait, le peuple s'auto-suffit, et Nébulys n'en transforme plus.
  De leur côté, ils sont liés au Soleil : on dit que lors d'une éclipse solaire, leur utilisation de la magie en devient décuplée.
  Les Arléniens sont généralement grands et tatoués : ils n'arrivent pas à utiliser les cristaux dans leur état solide...
  Ils ont alors un rituel, sur une semaine au minimum, qui transforme un cristal en encre puis en tatouage.
  Et de leur côté, les Arléniens n'ont pas de liens mentaux entre eux, mais un lien direct avec Nebulys :
  ils ressentent le besoin et le devoir de rester dans la forêt pour protéger leur créateur.`;
  arlenien.image = require("./../../assets/images/races/p_arlenien.png");
  arlenien.locations = ["Inconnue"];
  listRaces.push(arlenien);

  // Race des célestiens
  const celestien = new ArlenorRace("Célestien", DifficultyEnum.Impossible.Code, 1, 10);
  celestien.description = "";
  celestien.image = require("./../../assets/images/races/p_celestien.png");
  celestien.locations = ["L'Empire Faradélien", "Le Régime Jirakanien"];
  listRaces.push(celestien);

  return listRaces;
}
