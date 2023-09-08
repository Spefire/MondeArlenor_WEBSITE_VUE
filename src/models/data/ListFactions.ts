import { ArlenorFaction } from "../ArlenorFaction";

export function getListFactions(): ArlenorFaction[] {
  const factions: ArlenorFaction[]= [];

  factions.push(new ArlenorFaction(
    true,
    "Guilde de la Vaillance",
    "La Guilde de la Vaillance est réputée pour son courage inébranlable sur le champ de bataille. Ses membres sont des héros intrépides, prêts à défendre l'honneur et la justice à tout prix. Ils épaulent l’armée faradélienne et interviennent en soutien dans la sécurité des villages.",
    ["Courage", "Honneur", "Détermination"],
    "Faradel, Quartier des armées"
  ));
  factions.push(new ArlenorFaction(
    true,
    "L’Alliance Arcanique",
    "L’Alliance Arcanique rassemble les mages les plus puissants et les plus érudits. Ses membres sont des chercheurs de la connaissance magique, utilisant leurs pouvoirs pour comprendre les secrets du monde, le protéger contre les éléments déchaînés, et proposer des lois sur la magie.",
    ["Sagesse", "Connaissance", "Puissance"],
    "Faradel, Tour du Savoir"
  ));
  factions.push(new ArlenorFaction(
    true,
    "Le Cercle Floral du Sud",
    "Le Cercle Floral du Sud est étroitement lié à la nature et à l'équilibre écologique. Ses membres sont des gardiens de la flore, utilisant la magie naturelle pour protéger le monde. L'un de leur rêve est de repeindre le désert de Jirakan par de la verdure.",
    ["Harmonie", "Respect de la Nature", "Equilibre"],
    "Plaines de Terfil, au Sud"
  ));
  factions.push(new ArlenorFaction(
    false,
    "Le Syndicat des Ombres",
    "Le Syndicat des Ombres est une guilde secrète composée d’assassins, de voleurs et d'espions. Ses membres opèrent dans l'ombre, accomplissant des contrats, des missions clandestines pour maintenir l'équilibre des pouvoirs, ou le renverser.",
    ["Discrétion", "Adaptabilité", "Subtilité"],
    "Inconnue"
  ));
  factions.push(new ArlenorFaction(
    true,
    "La Chorale Céleste",
    "La Chorale Céleste est une guilde de mages dévoués aux divinités et à l'inspiration divine. Ses membres utilisent la musique et la spiritualité pour apporter l'espoir et la guérison à la population, ou soutenir d’autres aventuriers dans leurs quêtes.",
    ["Foi", "Harmonie", "Inspiration"],
    "Faradel, Cathédrale d’Arlénor"
  ));
  factions.push(new ArlenorFaction(
    true,
    "La Guilde Mécanique",
    "La Guilde Mécanique est composée d'ingénieurs et d'inventeurs talentueux. Ses membres maîtrisent la technologie et la magie mécanique pour créer des machines puissantes, des armes avancées ou des aides au quotidien.",
    ["Innovation", "Précision", "Progression"],
    "Faradel, Quartier populaire"
  ));
  factions.push(new ArlenorFaction(
    false,
    "Le Consortium des Marchands",
    "Le Consortium des Marchands est une guilde de négociants et de marchands prospères. Ses membres contrôlent les routes commerciales, gèrent parfois le transfert d’esclaves et utilisent leur influence économique pour façonner le monde.",
    ["Commerce", "Richesse", "Opportunité"],
    "Jirakan, Haut-quartiers"
  ));
  factions.push(new ArlenorFaction(
    false,
    "L’Ordre Mystique",
    "L’Ordre Mystique est une guilde de mystiques et d'érudits des arts occultes. Ses membres cherchent la vérité et le pouvoir dans les mystères de la magie et de l'au-delà, utilisant leurs connaissances pour explorer l'inconnu et l’interdit.",
    ["Sagesse", "Exploration", "Mystère"],
    "Inconnue"
  ));
  factions.push(new ArlenorFaction(
    true,
    "La Guilde des Dompteurs de Bêtes",
    "La Guilde des Dompteurs de Bêtes est spécialisée dans le dressage et le contrôle des créatures sauvages. Ses membres sont des dompteurs et des chasseurs exceptionnels, utilisant des animaux pour diverses tâches. Leur mission est aussi de comptabiliser les différentes créatures du monde.",
    ["Harmonie", "Domination", "Liberté"],
    "Plaines de Terfil, à l’Est"
  ));
  factions.push(new ArlenorFaction(
    false,
    "L'Insurrection Egalitaire",
    "L'Insurrection Egalitaire est un groupe composée de Mutants principalement. Il ne s'agit pas d'une guilde officielle, mais ses partisants ont pour mission de se rebeller contre la domination des elfes et des humains, cherchant à rétablir un équilibre entre les peuples.",
    ["Liberté", "Colère", "Solidarité"],
    "Faradel, Sous-sols de la ville"
  ));

  return factions;
}
