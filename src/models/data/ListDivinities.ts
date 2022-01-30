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
    "Lulu, Némésis de l'Humanité"
  ));
  arlenorAngels.push(new ArlenorDivinity(
    "Ratziel",
    "Ange de la Sagesse",
    "Symbole de l'Âme et de la Prudence",
    "Chercher la pomme tombée, tu ne dois pas. Trouver le pommier, il faut.",
    "Renerald, Ancien fermier de Faradel"
  ));
  arlenorAngels.push(new ArlenorDivinity(
    "Zafkiel",
    "Ange de la Connaissance",
    "Symbole du Savoir et de l'Enseignement",
    "Pokoi diton aboir soaf de con nessence ? Sa n'ydratationne poa sa ",
    "Nain random à la sortie d'un ba"
  ));
  arlenorAngels.push(new ArlenorDivinity(
    "Tzadokiel",
    "Ange de la Pitié",
    "Symbole de la Santé et du Voyage",
    "Tsadokiel disait 'Aide ton prochain avec volonté', alors... VIENS M'AIDER A FAIRE LA VAISSELLE, BERNARD !!!",
    "Humaine songeant à divorcer"
  ));
  arlenorAngels.push(new ArlenorDivinity(
    "Samaël",
    "Ange de la Justice",
    "Symbole de la Loi et des Choix",
    "Samael disait que l'on pouvait lire l'âme des gens dans leurs yeux. Beaucoup de criminels se sont alors rendu aveugles avant un procès.",
    "Quistis, Avocate de Faradel"
  ));
  arlenorAngels.push(new ArlenorDivinity(
    "Michaël",
    "Ange de la Beauté",
    "Symbole des Eaux et des Océans",
    "La nature a voulu créer les humains, puis des êtres plus évolués, les elfes, à travers les cristaux. Les autres mutations ne sont que des erreurs, dû au fait qu'ils voulaient nous ressembler...",
    "Xendel Eresles, lors de l'inauguration de l'Eclat infini"
  ));
  arlenorAngels.push(new ArlenorDivinity(
    "Haniel",
    "Ange de la Passion",
    "Symbole de la Musique et des Arts",
    "Réveilles mon âme, allumes ma flamme, et fais moi rêver s'il te plait...",
    "Humaine priant dans son lit à côté de sa nouvelle femme"
  ));
  arlenorAngels.push(new ArlenorDivinity(
    "Raphaël",
    "Ange du Partage",
    "Symbole de la Fertilité et de la Famille",
    "Comme dirait l'ange Raphael, un parfait échange est un échange riche et égalitaire... Cela vous fera donc 50 crédits la nuit.",
    "Bob, Tavernier de Kiranof"
  ));
  arlenorAngels.push(new ArlenorDivinity(
    "Gabriel",
    "Ange de la Protection",
    "Symbole de l'Abondance et de la Sécurité",
    "Accorde-moi Gabriel, une main ferme et un regard vigilant. Abrite durant mon voyage, Ô bel Ange, ceux qui m'accompagnent des maux du feu et de toutes les calamités. Protège-moi et conduis-moi en toute sécurité à ma destination.",
    "Commerçant partant traverser le désert de Sanderten"
  ));
  arlenorAngels.push(new ArlenorDivinity(
    "Sandalfone",
    "Ange du Matérialisme",
    "Symbole des Terres et des Montagnes",
    "Ce que vous avez à retenir de ce cours, c'est que l'imagination n'a pas de limite hormis celles que vous vous fixez.",
    "L'un des meilleurs professeurs de Célestia"
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
    "Ancien prêtre reconverti en conteur pour enfants"
  ));
  arlenorDemons.push(new ArlenorDivinity(
    "Belzébuth",
    "Démon de la Vengeance",
    "Symbole de la Guerre et de la Stratégie",
    "La vengeance est un plat qui se mange froid... ça tombe bien, j'en suis au dessert.",
    "Romain, s'étant transformé en loup"
  ));
  arlenorDemons.push(new ArlenorDivinity(
    "Lucifugus",
    "Démon de la Stupidité",
    "Symbole de l'Ivresse et des Fêtes",
    "Je te jure, les licornes ça existe maman ! Quand elles sautent en faisant PROUT, il y a un arc-en-ciel !",
    "L'innocence d'un enfant de 8 ans"
  ));
  arlenorDemons.push(new ArlenorDivinity(
    "Astaroth",
    "Démon de l'Indifférence",
    "Symbole des Serments et des Pactes",
    "Par mes cartes, montre moi ton passé, ton présent et ton futur... Et maintenant... Subis le châtiment de ta vie insipide !",
    "Diana, dans un état second"
  ));
  arlenorDemons.push(new ArlenorDivinity(
    "Asmodée",
    "Démon de la Cruauté",
    "Symbole des Remords et des Regrets",
    "C’est la première fois que je suis attirée par une femme, et il fallait que je tombe sur une cinglée qui trimballe un contrat, une cravache et des tas d'objets coupants...",
    "Jeune femme perturbée par une prêtresse"
  ));
  arlenorDemons.push(new ArlenorDivinity(
    "Belphégor",
    "Démon de la Laideur",
    "Symbole de la Faune et de la Flore",
    "Miroir miroir, mon beau miroir, dis moi qui est le plus beau... -CRACK (bruit d'un miroir qui se brise)-",
    "Personne atteinte de narcissisme"
  ));
  arlenorDemons.push(new ArlenorDivinity(
    "Ba'al",
    "Démon de la Luxure",
    "Symbole de l'Amour et du Sexe",
    "Le bâton et les pierres peuvent me briser les os, mais les chaines et les fouets, eux, m'excitent.",
    "Chanteuse célebre dans les bars faradéliens"
  ));
  arlenorDemons.push(new ArlenorDivinity(
    "Adramalec",
    "Démon de l'Avarice",
    "Symbole de la Ruse et des Richesses",
    "Excusez moi madame. Je crois que vous avez fait une erreur sur l'un de vos produits... C'est 'chocolatine' et non 'pain au chocolat'... Vous me le faites gratis du coup ?",
    "Client de la boulangerie Obonpin"
  ));
  arlenorDemons.push(new ArlenorDivinity(
    "Lilith",
    "Démon de l'Instabilité",
    "Symbole de l'Air et de la Météo",
    "Moi ? Je suis folle ? Haha. Attendez de voir ma soeur !",
    "Personnage venant d'un autre monde"
  ));
  arlenorDemons.push(new ArlenorDivinity(
    "Nahémar",
    "Démon de la Rêverie",
    "Symbole de la Lune et de l'Obscurité",
    "Comment déterminer ce qui est réel, et ce qui ne l'est pas ?... C'est simple. Fais toi tuer, et si tu meurs c'est que cela n'était pas un rêve.",
    "Philosophe du temps moderne"
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

