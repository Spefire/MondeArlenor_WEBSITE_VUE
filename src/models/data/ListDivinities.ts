import { ArlenorDivinity } from "../ArlenorDivinity";

export function getListDivinites(): ArlenorDivinity[] {
  let arlenorDivinities: ArlenorDivinity[]= [];

  // Sainte Cabale
  const arlenorAngels: ArlenorDivinity[]= [];
  arlenorAngels.push(new ArlenorDivinity(
    "Métatron",
    "Ange de l'Unité",
    "Symbole du Soleil et de la Lumière",
    "Chez les good guys d'Arlénor, c'est un peu lui le patron. FAUT PAS le chercher !... Mais il est sympa quand même.",
    "Lulu, Némésis de l'Humanité",
    "Voyage temporel",
    "Permet de voir le passé et les avenirs possibles, mais seulement se déplacer dans le passé sans limite"
  ));
  arlenorAngels.push(new ArlenorDivinity(
    "Ratziel",
    "Ange de la Sagesse",
    "Symbole de l'Âme et de la Prudence",
    "Chercher la pomme tombée, tu ne dois pas. Trouver le pommier, il faut.",
    "Renerald, Ancien fermier de Faradel",
    "Télépathie des âmes",
    "Permet de trouver n’importe quelle âme dans le monde et de communiquer avec elle"
  ));
  arlenorAngels.push(new ArlenorDivinity(
    "Zafkiel",
    "Ange de la Connaissance",
    "Symbole du Savoir et de l'Enseignement",
    "Pokoi diton aboir soaf de con nessence ? Sa n'ydratationne poa sa ",
    "Nain random à la sortie d'un ba",
    "Omniscience",
    "Permet de tout savoir sur une personne et de s’approprier son savoir"
  ));
  arlenorAngels.push(new ArlenorDivinity(
    "Tzadokiel",
    "Ange de la Pitié",
    "Symbole de la Santé et du Voyage",
    "Tsadokiel disait 'Aide ton prochain avec volonté', alors... VIENS M'AIDER A FAIRE LA VAISSELLE, BERNARD !!!",
    "Humaine songeant à divorcer",
    "Restauration corporelle",
    "Permet de réinitialiser un corps à son meilleur état pour que l'âme la réintègre"
  ));
  arlenorAngels.push(new ArlenorDivinity(
    "Samaël",
    "Ange de la Justice",
    "Symbole de la Loi et des Choix",
    "Samael disait que l'on pouvait lire l'âme des gens dans leurs yeux. Beaucoup de criminels se sont alors rendu aveugles avant un procès.",
    "Quistis, Avocate de Faradel",
    "Possession corporelle",
    "Permet de posséder n’importe quel corps sans aucune résistance"
  ));
  arlenorAngels.push(new ArlenorDivinity(
    "Michaël",
    "Ange de la Beauté",
    "Symbole des Eaux et des Océans",
    "La nature a voulu créer les humains, puis des êtres plus évolués, les elfes, à travers les cristaux. Les autres mutations ne sont que des erreurs, dû au fait qu'ils voulaient nous ressembler...",
    "Xendel Eresles, lors de l'inauguration de l'Eclat infini",
    "Jouvence",
    "Permet de ne pas mourir de vieillesse et de faire rajeunir"
  ));
  arlenorAngels.push(new ArlenorDivinity(
    "Haniel",
    "Ange de la Passion",
    "Symbole de la Musique et des Arts",
    "Réveilles mon âme, allumes ma flamme, et fais moi rêver s'il te plait...",
    "Humaine priant dans son lit à côté de sa nouvelle femme",
    "Apprentissage des cristaux",
    "Permet d’influer sur la capacité magique d’un individu"
  ));
  arlenorAngels.push(new ArlenorDivinity(
    "Raphaël",
    "Ange du Partage",
    "Symbole de la Fertilité et de la Famille",
    "Comme dirait l'ange Raphael, un parfait échange est un échange riche et égalitaire... Cela vous fera donc 50 crédits la nuit.",
    "Bob, Tavernier de Kiranof",
    "Alchimie atomique",
    "Permet de transformer n’importe quelle chose, ou personne, via l’équivalence"
  ));
  arlenorAngels.push(new ArlenorDivinity(
    "Gabriel",
    "Ange de la Protection",
    "Symbole de l'Abondance et de la Sécurité",
    "Accorde-moi Gabriel, une main ferme et un regard vigilant. Abrite durant mon voyage, Ô bel Ange, ceux qui m'accompagnent des maux du feu et de toutes les calamités. Protège-moi et conduis-moi en toute sécurité à ma destination.",
    "Commerçant partant traverser le désert de Sanderten",
    "Changement d’échelle",
    "Permet d’influer sur la taille d’un individu sans limite d’échelle, avec modification des caractéristiques"
  ));
  arlenorAngels.push(new ArlenorDivinity(
    "Sandalfone",
    "Ange du Matérialisme",
    "Symbole des Terres et des Montagnes",
    "Ce que vous avez à retenir de ce cours, c'est que l'imagination n'a pas de limite hormis celles que vous vous fixez.",
    "L'un des meilleurs professeurs de Célestia",
    "Création matérielle",
    "Permet de créer n’importe quoi non-vivant à partir de rien"
  ));

  arlenorAngels.forEach((angel, index) => {
    const num = (index+1);
    const numImage = (num < 10 ? "0" + num : "" + num);
    angel.num = index;
    angel.image = require("./../../assets/images/religion/angel_" + numImage + ".png");
    angel.imageSelected = require("./../../assets/images/religion/angel_" + numImage + "_selected.png");
  });

  // Cabale Inversée
  const arlenorDemons: ArlenorDivinity[]= [];
  arlenorDemons.push(new ArlenorDivinity(
    "Satan",
    "Démon du Néant",
    "Symbole du Feu et des Pertes",
    "Au début, il n'y avait rien. Enfin... le rien n'existe pas. Au début, il y avait la déesse Arlénor...",
    "Ancien prêtre reconverti en conteur pour enfants",
    "Annihilation",
    "Permet d’absorber toute énergie ou élément pour l’envoyer dans le Néant"
  ));
  arlenorDemons.push(new ArlenorDivinity(
    "Belzébuth",
    "Démon de la Vengeance",
    "Symbole de la Guerre et de la Stratégie",
    "La vengeance est un plat qui se mange froid... ça tombe bien, j'en suis au dessert.",
    "Romain, s'étant transformé en loup",
    "Ordre absolu",
    "Permet de donner un ordre à un individu qui sera exécuté"
  ));
  arlenorDemons.push(new ArlenorDivinity(
    "Lucifugus",
    "Démon de la Stupidité",
    "Symbole de l'Ivresse et des Fêtes",
    "Je te jure, les licornes ça existe maman ! Quand elles sautent en faisant PROUT, il y a un arc-en-ciel !",
    "L'innocence d'un enfant de 8 ans",
    "Mémoire et liens",
    "Permet de modifier les souvenirs et les liens entre individus"
  ));
  arlenorDemons.push(new ArlenorDivinity(
    "Astaroth",
    "Démon de l'Indifférence",
    "Symbole des Serments et des Pactes",
    "Par mes cartes, montre moi ton passé, ton présent et ton futur... Et maintenant... Subis le châtiment de ta vie insipide !",
    "Diana, dans un état second",
    "Jugement de l'âme",
    "Permet de juger une âme défunte pour l’envoyer dans le Néant ou non"
  ));
  arlenorDemons.push(new ArlenorDivinity(
    "Asmodée",
    "Démon de la Cruauté",
    "Symbole des Remords et des Regrets",
    "C’est la première fois que je suis attirée par une femme, et il fallait que je tombe sur une cinglée qui trimballe un contrat, une cravache et des tas d'objets coupants...",
    "Jeune femme perturbée par une prêtresse",
    "Dopage sensoriel",
    "Permet de manipuler les sens, jusqu’à les augmenter ou les effacer"
  ));
  arlenorDemons.push(new ArlenorDivinity(
    "Belphégor",
    "Démon de la Laideur",
    "Symbole de la Faune et de la Flore",
    "Miroir miroir, mon beau miroir, dis moi qui est le plus beau... -CRACK (bruit d'un miroir qui se brise)-",
    "Personne atteinte de narcissisme",
    "Altération génétique",
    "Permet de créer de nouvelles espèces vivantes"
  ));
  arlenorDemons.push(new ArlenorDivinity(
    "Ba'al",
    "Démon de la Luxure",
    "Symbole de l'Amour et du Sexe",
    "Le bâton et les pierres peuvent me briser les os, mais les chaines et les fouets, eux, m'excitent.",
    "Chanteuse célebre dans les bars faradéliens",
    "Extase de l'âme",
    "Permet de piéger l’âme d’une personne en l’envoyant dans son 7ème ciel"
  ));
  arlenorDemons.push(new ArlenorDivinity(
    "Adramalec",
    "Démon de l'Avarice",
    "Symbole de la Ruse et des Richesses",
    "Excusez moi madame. Je crois que vous avez fait une erreur sur l'un de vos produits... C'est 'chocolatine' et non 'pain au chocolat'... Vous me le faites gratis du coup ?",
    "Client de la boulangerie Obonpin",
    "Voeu illusoire",
    "Permet d’accorder un vœu qui se réalisera seulement pendant une journée"
  ));
  arlenorDemons.push(new ArlenorDivinity(
    "Lilith",
    "Démon de l'Instabilité",
    "Symbole de l'Air et de la Météo",
    "Moi ? Je suis folle ? Haha. Attendez de voir ma soeur !",
    "Personnage venant d'un autre monde",
    "Voyage dimensionnel",
    "Permet de se déplacer dans des réalités alternatives"
  ));
  arlenorDemons.push(new ArlenorDivinity(
    "Nahémar",
    "Démon de la Rêverie",
    "Symbole de la Lune et de l'Obscurité",
    "Comment déterminer ce qui est réel, et ce qui ne l'est pas ?... C'est simple. Fais toi tuer, et si tu meurs c'est que cela n'était pas un rêve.",
    "Philosophe du temps moderne",
    "Monde de l’imaginaire",
    "Permet de créer un espace avec ses propres règles"
  ));

  arlenorDemons.forEach((demon, index) => {
    const num = (index+1);
    const numImage = (num < 10 ? "0" + num : "" + num);
    demon.num = index;
    demon.image = require("./../../assets/images/religion/demon_" + numImage + ".png");
    demon.imageSelected = require("./../../assets/images/religion/demon_" + numImage + "_selected.png");
    demon.isInversed = true;
  });

  arlenorDivinities = arlenorAngels.concat(arlenorDemons);

  return arlenorDivinities;
}

export function getListAngels(): ArlenorDivinity[] {
  const arlenorDivinities = getListDivinites();
  return arlenorDivinities.filter(div => !div.isInversed);
}

export function getListDemons(): ArlenorDivinity[] {
  const arlenorDivinities = getListDivinites();
  return arlenorDivinities.filter(div => div.isInversed);
}

