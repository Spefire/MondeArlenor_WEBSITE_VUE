import { ArlenorZone } from "../ArlenorZone";
import { ArlenorSectors } from "./ListSectors";

export function getListZones(): ArlenorZone[] {
  const arlenorZones: ArlenorZone[]= [];
  const sectors = new ArlenorSectors();
  
  /////////////////////////////////////////////////////////////////////////////////////////
  // PlainesTerfil
  /////////////////////////////////////////////////////////////////////////////////////////

  const faradel = new ArlenorZone(
    "La Cité de Faradel",
    40.8, 69.85,
    sectors.PlainesTerfil,
    `&emsp;
    Située dans la zone paisible des Plaines de Terfil, Faradel fait partie des trois plus grandes cités du Monde d'Arlénor.
    Les elfes et les humains la considèrent comme la capitale du Monde d'Arlénor, fortement développée militairement et technologiquement.
    <br/><br/>&emsp;
    Sa construction se base sur le principe suivant :
    <br/>- Le souterain : Faradel possède un souterain difficile d'accès, habité par les habitants les plus pauvres, les clandestins, les mutants...
    toutes les personnes ne voulant pas être retrouvées ou tuées. Un marché noir y est aussi très développé, et aucune milice n'ose s'y interposer.
    <br/>- La partie basse : Faisant trois quarts de la surface de Faradel, elle contient la majorité des habitations et des temples d'Arlénor.
    Comme c'est un vrai labyrinthe de constructions, de bâtiments, de petits magasins, il est très facile de s'y perdre.
    <br/>- La partie haute : La bourgeoisie, les 7 nobles familles de Faradel et les marchands les plus riches y vivent.
    <br/><br/>&emsp;
    Il y a des grands jardins, ainsi qu'une place des fêtes.
    De plus, une section de la partie haute est réservée à l'aspect militaire de Faradel et on y retrouve la Tour du Savoir en son centre.`,
    "Dans notre monde, il y a ceux qui savent utiliser la magie, et ceux qui ne peuvent pas. Il y a les êtres civilisés, et il y a les bêtes...",
    "Humain faradélien, mettant son habit de garde"
  );
  faradel.image =  require("./../../assets/images/world/faradel.jpg");
  arlenorZones.push(faradel);

  const tourSavoir = new ArlenorZone(
    "La Tour du Savoir",
    42.8, 71.85,
    sectors.PlainesTerfil,
    `&emsp;
    La Tour du Savoir est l'emblème de l'Empire Faradélien.
    Situé en son centre, c'est aussi le centre des opérations économiques et politiques ainsi que le centre de recherche des meilleurs mages et artisans du monde.
    <br/><br/>&emsp;
    La Tour du Savoir est découpée en plusieurs étages et sous-sols.
    Les sous-sols comportent principalement les laboratoires, les premiers étages comportent les salles d'opérations avec quelques appartements,
    et les derniers étages contiennent la plus grande Bibliothèque de mon d'Arlénor !
    <br/><br/>&emsp;
    Au sommet de la Tour, il y a le cristal surnommé l'Eclat inifini : son nom est dû à la quantité d'énergie inépuisable qu'il fournit.
    Ce fut Xendel Eresles qui apporta ce cristal étrange et unique, dans la cité de Faradel.
    Grâce à cette source d'énergie illimitée, les Faradeliens ont pu développer leur ville et leur technologie très rapidement :
    ce qui transforma complétement leur quotidien...
    Xendel Eresles est alors vu depuis, comme l'Esprit Veilleur de Faradel.`,
    "Oui, l'Eclat infini a transformé notre cité et c'est fabuleux !... Comment fonctionne-t-il ? Euh... A coup de ta gueule c'est magique.",
    "Elfe faradélien, interrogé près de la Tour du Savoir"
  );
  tourSavoir.image =  require("./../../assets/images/world/tour-savoir.jpg");
  arlenorZones.push(tourSavoir);
  
  /////////////////////////////////////////////////////////////////////////////////////////
  // DesertSanderten
  /////////////////////////////////////////////////////////////////////////////////////////

  const jirakan = new ArlenorZone(
    "Le Commerce de Jirakan",
    59.5, 73.6,
    sectors.DesertSanderten,
    `&emsp;
    Jirakan est la principale ville marchande du Monde d'Arlénor.
    On y trouve en majorité des cristaux de tout genre, d'autres ressources minières,
    mais aussi de la location de main d'oeuvre voire même de la vente d'esclaves.
    <br/><br/>&emsp;
    Ici les mutants et les nains sont tolérés, mais en tant qu'êtres dits 'inférieurs',
    ils servent d'esclaves aux maitres elfes / humains du monde entier...
    <br/><br/>&emsp;
    Située dans la partie sud de Jirakan, la Minitation est gérée d'une organisation milimétrée :
    ce n'est pas une mine, mais la résidence de tous les esclaves, creusée dans la ville...
    La Minitation est découpée en plusieurs niveaux représentant le rang social des esclaves :
    les familles 'aisées' sont plus proches de la surface que les moins 'aisées'.
    Les familles d'esclaves ont alors un maitre, appelé aussi Superviseur, qui va gérer leur temps de travail et influencer sur leur rang social.
    La vie d'un Jirakanien esclave n'est alors pas facile, et se concentre autour de la Minitation et des mines aux alentours de Jirakan.`,
    "Ici c'est la règle des trois M qui domine : Miner, Miner et Miner. Il n'existe rien d'autre. On n'existe pas.",
    "Adolescent mutant partant aux mines"
  );
  jirakan.image =  require("./../../assets/images/world/jirakan.jpg");
  arlenorZones.push(jirakan);

  const desertSanderten = new ArlenorZone(
    "Le Désert aux Ruines",
    73, 66,
    sectors.DesertSanderten,
    `&emsp;
    Aucune description disponible pour l'instant.`,
    "", ""
  );
  desertSanderten.image =  require("./../../assets/images/world/desert-sanderten.jpg");
  arlenorZones.push(desertSanderten);

  const minesJirakan = new ArlenorZone(
    "Les Mines de Jirakan",
    68, 81,
    sectors.DesertSanderten,
    `&emsp;
    Aucune description disponible pour l'instant.`,
    "", ""
  );
  minesJirakan.image =  require("./../../assets/images/world/mines-jirakan.jpg");
  arlenorZones.push(minesJirakan);

  const grandeRevolte = new ArlenorZone(
    "La Grande Révolte",
    72.5, 75,
    sectors.DesertSanderten,
    `&emsp;
    En l'An 666 du calendrier arlénien, un groupe d'esclaves et de partisans pour leur libération, ont monté une révolte contre les Superviseurs.
    Et, une nuit, ils sont passés à l'action en exterminant la majorité de leurs maitres.
    <br/><br/>&emsp;
    Cependant, l'armée de Faradel est arrivée le lendemain pour soutenir les Superviseurs et les marchands de Jirakan...
    Pour contrer à cela, les esclaves se sont alors réfugiés dans les mines du Sud, près des montagnes de Kazador :
    les connaissant comme leur poche, ils en tiraient donc un grand avantage.
    <br/><br/>&emsp;
    Au bout de quelques jours de batailles dans les mines, certains ont commencé à avoir des hallucinations,
    entendre des grognements et sentir de légères secousses...
    La folie a alors atteint les deux camps et beaucoup ont fuit le combat dans les mines.
    Puis le jour fatal arriva. Un dernier grondement, audible par tous, a déclenché l'effrondrement de la mine alors qu'une bataille y faisait rage.
    Les peu de personnes ayant survécu, ont perdu toute magie et disaient qu'une entité les avait touchés.
    <br/><br/>&emsp;
    Aujourd'hui, ces mines sont inaccessibles et définies comme étant maudites...`,
    "C'était terrifiant. Le genre de moment où il n'y avait plus de camps : juste des personnes essayant de survivre... Quand nos cristaux n'ont plus fonctionné, on a su alors ce qu'était l'Impuissance.",
    "Survivant de la Grande Révolte"
  );
  grandeRevolte.image =  require("./../../assets/images/world/grande-revolte.jpg");
  arlenorZones.push(grandeRevolte);

  /////////////////////////////////////////////////////////////////////////////////////////
  // ForetMiryden
  /////////////////////////////////////////////////////////////////////////////////////////

  const arlenienMiryden = new ArlenorZone(
    "Le Territoire des Arléniens",
    34, 54,
    sectors.ForetMiryden,
    `&emsp;
    Aucune description disponible pour l'instant.`,
    "", ""
  );
  arlenienMiryden.image =  require("./../../assets/images/world/arlenien-miryden.jpg");
  arlenorZones.push(arlenienMiryden);

  const panMiryden = new ArlenorZone(
    "Le Territoire des Pans",
    30, 81,
    sectors.ForetMiryden,
    `&emsp;
    Aucune description disponible pour l'instant.`,
    "", ""
  );
  panMiryden.image =  require("./../../assets/images/world/pan-miryden.jpg");
  arlenorZones.push(panMiryden);

  const lacUtica = new ArlenorZone(
    "Le Lac Utica",
    20, 57.5,
    sectors.ForetMiryden,
    `&emsp;
    Aucune description disponible pour l'instant.`,
    "", ""
  );
  lacUtica.image =  require("./../../assets/images/world/lac-utica.jpg");
  arlenorZones.push(lacUtica);

  /////////////////////////////////////////////////////////////////////////////////////////
  // MerShivazen
  /////////////////////////////////////////////////////////////////////////////////////////

  const merShivazen = new ArlenorZone(
    "La Mer Monstrueuse",
    58, 46,
    sectors.MerShivazen,
    `&emsp;
    Aucune description disponible pour l'instant.`,
    "", ""
  );
  merShivazen.image =  require("./../../assets/images/world/mer-shivazen.jpg");
  arlenorZones.push(merShivazen);

  const lumeck = new ArlenorZone(
    "L'Ile de Lumeck",
    27, 20,
    sectors.MerShivazen,
    `&emsp;
    L'Ile de Lumeck est considérée comme une zone maudite :
    les marins qui s'aventurent dans la mer de Shivazen sont rares à survivre...
    Et ceux qui arrivent à mettre un pied à terre sur cette île, n'en sont pas ressortis vivants par la suite..
    <br/><br/>&emsp;
    La faune et ainsi que la flore y sont des dangers permanents.
    De plus, que ce soit les voies aériennes ou maritimes, la météo et les récifs empêchent toute procédure d'atterrissage ou d'amarrage impossible.
    Certains disent que l'île est vivante, avalant tout âme pour se nourrir...
    Des cartographes ont quand même pu délimiter cette zone au bout de quelques années et aujourd'hui,
    seuls les fous continuent d'essayer de percer le mystère de l'île.`,
    "Douloureux... Affreux... Puant... Effrayant... La mort la plus belle ne se trouve pas en ces lieux.",
    "Cartographe, poète dans l'âme"
  );
  lumeck.image =  require("./../../assets/images/world/ile-lumeck.jpg");
  arlenorZones.push(lumeck);

  const mondeInonde = new ArlenorZone(
    "Le Monde Inondé",
    23, 35,
    sectors.MerShivazen,
    `&emsp;
    Aucune description disponible pour l'instant.`,
    "", ""
  );
  mondeInonde.image =  require("./../../assets/images/world/monde-inonde.jpg");
  arlenorZones.push(mondeInonde);

  return arlenorZones;
}
