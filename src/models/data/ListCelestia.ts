import { ArlenorCelestia } from "../ArlenorCelestia";

export function getListCelestias(): ArlenorCelestia[] {
  const arlenorCelestias: ArlenorCelestia[]= [];

  const celestia01 = new ArlenorCelestia("Jérémy", "Lecuyer", 22);
  celestia01.astro = "Lion";
  celestia01.mbti = "INFJ";
  celestia01.orientation = "Homosexuel";
  celestia01.situation = "En couple ouvert avec Zachary";
  celestia01.emotion = "Peur";
  celestia01.grade = "Mage de Feu";
  celestia01.animal = "Renard (Lucy)";
  celestia01.image = require("./../../assets/images/celestia/perso01.jpg");
  celestia01.qualities = ["Amical", "Empathique", "Loyal", "Coopératif", "Protecteur"];
  celestia01.defaults = ["Anxieux", "Crédule", "Influençable", "Peureux"];
  arlenorCelestias.push(celestia01);

  const celestia02 = new ArlenorCelestia("Elisa", "Felnéris", 24);
  celestia02.astro = "Cancer";
  celestia02.mbti = "INFJ";
  celestia02.orientation = "Hétérosexuelle";
  celestia02.situation = "En couple discret avec Romain";
  celestia02.emotion = "Désespoir";
  celestia02.grade = "Mage de Lumière";
  celestia02.animal = "Papillon (???)";
  celestia02.image = require("./../../assets/images/celestia/perso02.jpg");
  celestia02.qualities = ["Sensible", "Timide", "Réservée", "Prudente", "Rêveuse"];
  celestia02.defaults = ["Anxieuse", "Lunatique", "Complexée", "Distraite"];
  arlenorCelestias.push(celestia02);

  const celestia03 = new ArlenorCelestia("Romain", "Divernn", 23);
  celestia03.astro = "Sagittaire";
  celestia03.mbti = "ISFJ";
  celestia03.orientation = "Bisexuel";
  celestia03.situation = "En couple discret avec Elisa";
  celestia03.emotion = "Colère";
  celestia03.grade = "Mage de Glace";
  celestia03.animal = "Loup (???)";
  celestia03.image = require("./../../assets/images/celestia/perso03.jpg");
  celestia03.qualities = ["Audacieux", "Déterminé", "Protecteur", "Indépendant"];
  celestia03.defaults = ["Aigri", "Colérique", "Froid", "Impulsif", "Bagarreur"];
  arlenorCelestias.push(celestia03);

  const celestia04 = new ArlenorCelestia("Alice", "Pierce", 24);
  celestia04.astro = "Scorpion";
  celestia04.mbti = "ESTJ";
  celestia04.orientation = "Homosexuelle";
  celestia04.situation = "Célibataire";
  celestia04.emotion = "Dégoût";
  celestia04.grade = "Elite de Magma";
  celestia04.animal = "Serpent fer de lance (???)";
  celestia04.image = require("./../../assets/images/celestia/perso04.jpg");
  celestia04.qualities = ["Ambitieuse", "Rusée", "Sûre d'elle", "Franche"];
  celestia04.defaults = ["Arrogante", "Hautaine", "Individualiste", "Envieuse"];
  arlenorCelestias.push(celestia04);

  const celestia05 = new ArlenorCelestia("Delphyn", "", 22);
  celestia05.astro = "Gémeaux";
  celestia05.mbti = "INFP";
  celestia05.orientation = "Bisexuelle";
  celestia05.situation = "Célibataire";
  celestia05.emotion = "Tristesse";
  celestia05.grade = "Mage de Vie";
  celestia05.animal = "Chat blanc (???)";
  celestia05.image = require("./../../assets/images/celestia/perso05.jpg");
  celestia05.qualities = ["Affectueuse", "Attentionnée", "Brillante", "Timide"];
  celestia05.defaults = ["Étourdie", "Naïve", "Maladroite"];
  arlenorCelestias.push(celestia05);

  const celestia06 = new ArlenorCelestia("Diana", "", 23);
  celestia06.astro = "Gémeaux";
  celestia06.mbti = "ISTP";
  celestia06.orientation = "Asexuelle";
  celestia06.situation = "Célibataire";
  celestia06.emotion = "Tristesse";
  celestia06.grade = "Mage de Vie";
  celestia06.animal = "Chat noir (???)";
  celestia06.image = require("./../../assets/images/celestia/perso06.jpg");
  celestia06.qualities = ["Juste", "Mature", "Patiente", "Réfléchie"];
  celestia06.defaults = ["Asociale", "Silencieuse", "Paresseuse"];
  arlenorCelestias.push(celestia06);

  return arlenorCelestias;
}
