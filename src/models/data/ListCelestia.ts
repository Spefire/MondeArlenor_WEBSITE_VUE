import { ArlenorCelestia } from "../ArlenorCelestia";

export function getListCelestias(): ArlenorCelestia[] {
  const arlenorCelestias: ArlenorCelestia[]= [];

  const celestia01 = new ArlenorCelestia("Elisa", "Felnéris", 24);
  celestia01.astro = "Cancer";
  celestia01.mbti = "INFJ";
  celestia01.orientation = "Hétérosexuelle";
  celestia01.situation = "En couple discret avec Romain";
  celestia01.relations = `
  <br/>- Jérémy est comme un frère pour elle
  <br/>- Delphyn est sa meilleure amie
  <br/>- Sinon elle reste plutôt seule`;
  celestia01.emotion = "Désespoir";
  celestia01.grade = "Mage de Lumière";
  celestia01.animal = "Papillon (???)";
  celestia01.image = require("./../../assets/images/celestia/perso01.jpg");
  celestia01.qualities = ["Sensible", "Timide", "Réservée", "Prudente", "Rêveuse"];
  celestia01.defaults = ["Anxieuse", "Lunatique", "Complexée", "Distraite"];
  celestia01.comment = "Rien n'arrive par hasard, il doit y avoir une raison.";
  arlenorCelestias.push(celestia01);

  const celestia02 = new ArlenorCelestia("Jérémy", "Lecuyer", 22);
  celestia02.astro = "Lion";
  celestia02.mbti = "INFJ";
  celestia02.orientation = "Homosexuel";
  celestia02.situation = "En couple ouvert avec Zachary";
  celestia02.relations = `
  <br/>- Elisa est comme une soeur pour lui
  <br/>- Romain lui fait à la fois peur, et l'attire
  <br/>- Sinon il est ami avec Delphyn et Diana, mais il a du mal avec Alice`;
  celestia02.emotion = "Peur";
  celestia02.grade = "Mage de Feu";
  celestia02.animal = "Renard (Lucy)";
  celestia02.image = require("./../../assets/images/celestia/perso02.jpg");
  celestia02.qualities = ["Amical", "Empathique", "Loyal", "Coopératif", "Protecteur"];
  celestia02.defaults = ["Anxieux", "Crédule", "Influençable", "Peureux"];
  celestia02.comment = "Je ne veux pas que ça recommence. Cette fois je saurais les protéger.";
  arlenorCelestias.push(celestia02);

  const celestia03 = new ArlenorCelestia("Romain", "Divernn", 23);
  celestia03.astro = "Sagittaire";
  celestia03.mbti = "ISFJ";
  celestia03.orientation = "Bisexuel";
  celestia03.situation = "En couple discret avec Elisa";
  celestia03.relations = `
  <br/>- Il ne fréquente personne d'autre qu'Elisa
  <br/>- Il apprécie Alice et ne la supporte pas en même temps`;
  celestia03.emotion = "Colère";
  celestia03.grade = "Mage de Glace";
  celestia03.animal = "Loup (???)";
  celestia03.image = require("./../../assets/images/celestia/perso03.jpg");
  celestia03.qualities = ["Audacieux", "Déterminé", "Protecteur", "Indépendant"];
  celestia03.defaults = ["Aigri", "Colérique", "Froid", "Impulsif", "Bagarreur"];
  celestia03.comment = "Certaines vies sont précieuses et doivent d'être vengées.";
  arlenorCelestias.push(celestia03);

  const celestia04 = new ArlenorCelestia("Alice", "Pierce", 24);
  celestia04.astro = "Scorpion";
  celestia04.mbti = "ESTJ";
  celestia04.orientation = "Homosexuelle";
  celestia04.situation = "Célibataire";
  celestia04.relations = `
  <br/>- Elle méprise Jérémy et toute personne qui veut l'approcher
  <br/>- Elle a un ptit faible pour Sheila, même si elle ne veut pas se l'avouer`;
  celestia04.emotion = "Dégoût";
  celestia04.grade = "Elite de Magma";
  celestia04.animal = "Serpent fer de lance (???)";
  celestia04.image = require("./../../assets/images/celestia/perso04.jpg");
  celestia04.qualities = ["Ambitieuse", "Rusée", "Sûre d'elle", "Franche"];
  celestia04.defaults = ["Arrogante", "Hautaine", "Individualiste", "Envieuse"];
  celestia04.comment = "Soit t’as le niveau, soit t’es une merde. Snif snif... ça pue ici.";
  arlenorCelestias.push(celestia04);

  const celestia05 = new ArlenorCelestia("Delphyn", "", 22);
  celestia05.astro = "Gémeaux";
  celestia05.mbti = "INFP";
  celestia05.orientation = "Bisexuelle";
  celestia05.situation = "Célibataire";
  celestia05.relations = `
  <br/>- Diana est sa soeur jumelle
  <br/>- Elisa est sa meilleure amie
  <br/>- Elle apprécie tout le monde, y compris Alice et Romain qui lui font un peu peur`;
  celestia05.emotion = "Tristesse";
  celestia05.grade = "Mage de Vie";
  celestia05.animal = "Chat blanc (???)";
  celestia05.image = require("./../../assets/images/celestia/perso05.jpg");
  celestia05.qualities = ["Affectueuse", "Attentionnée", "Brillante", "Timide"];
  celestia05.defaults = ["Étourdie", "Naïve", "Maladroite"];
  celestia05.comment = "Quelqu’un a besoin d’aide ?";
  arlenorCelestias.push(celestia05);

  const celestia06 = new ArlenorCelestia("Diana", "", 22);
  celestia06.astro = "Gémeaux";
  celestia06.mbti = "ISTP";
  celestia06.orientation = "Asexuelle";
  celestia06.situation = "Célibataire";
  celestia06.relations = `
  <br/>- Delphyn est sa soeur jumelle
  <br/>- Elle évite tout contact avec des personnes autres que sa soeur`;
  celestia06.emotion = "Tristesse";
  celestia06.grade = "Mage de Vie";
  celestia06.animal = "Chat noir (???)";
  celestia06.image = require("./../../assets/images/celestia/perso06.jpg");
  celestia06.qualities = ["Juste", "Mature", "Patiente", "Réfléchie"];
  celestia06.defaults = ["Asociale", "Silencieuse", "Paresseuse"];
  celestia06.comment = "Passé, Présent, Futur... Tu ne devais pas exister.";
  arlenorCelestias.push(celestia06);

  return arlenorCelestias;
}
