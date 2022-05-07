import { ArlenorMagic } from "../ArlenorMagic";

export function getListMagics(): ArlenorMagic[] {
  const arlenorMagics: ArlenorMagic[]= [];

  const magic01 = new ArlenorMagic(
    "Les cristaux énergétiques",
    `Les rares cristaux qui libèrent de l’énergie vitale en petite quantité, au lieu d’en nécessiter.
    Ils sont souvent utilisés à des fins technologiques, et peuvent parfois se recharger.`,
  );
  magic01.image = require("./../../assets/icons/crystals/cristal_01.png");
  arlenorMagics.push(magic01);

  const magic02 = new ArlenorMagic(
    "Les cristaux instantanés",
    `Comme les cristaux énergétiques, ce ne sont pas des cristaux qui nécessessitent de l'énergie vitale.
    Les activer déclenchent alors leur pouvoir, mais leur nombre d’utilisations est limitée, souvent à une.`,
  );
  magic02.image = require("./../../assets/icons/crystals/cristal_02.png");
  arlenorMagics.push(magic02);

  const magic03 = new ArlenorMagic(
    "Les cristaux évolutifs",
    `Ces cristaux donnent au porteur des pouvoirs qui évoluent au fur et à mesure du temps et de l’expérience,
    en fonction de la personnalité du porteur.
    Particularité pour les arléniens  : leurs tatouages grandissent en même temps que leur évolution.`,
  );
  magic03.image = require("./../../assets/icons/crystals/cristal_03.png");
  arlenorMagics.push(magic03);

  const magic04 = new ArlenorMagic(
    "Les capacités magiques innées",
    "Non liées aux cristaux, ces capacités sont majoritairement présentes chez les créatures, et non sur les peuples.",
  );
  magic04.image = require("./../../assets/icons/crystals/cristal_04.png");
  arlenorMagics.push(magic04);

  const magic05 = new ArlenorMagic(
    "Les objets, armes et parchemins magiques",
    `Ils sont enchantés par des porteurs de cristaux.
    Certains enchantements sont limités dans le temps ou dans leur utilisation.
    De tels objets sont rares et précieux !`,
  );
  magic05.image = require("./../../assets/icons/crystals/cristal_05.png");
  arlenorMagics.push(magic05);

  const magic06 = new ArlenorMagic(
    "Les coeurs de cristal",
    `Sur Célestia, des mages pratiquent la magie sans cristal.
    C'est dû à leur coeur si particulier qui génère de la magie.
    Cependant leur magie est seulement élémentaire !`,
  );
  magic06.image = require("./../../assets/icons/crystals/cristal_06.png");
  arlenorMagics.push(magic06);

  return arlenorMagics;
}
