import { ArlenorMagic } from "../ArlenorMagic";

export function getListMagics(): ArlenorMagic[] {
  const arlenorMagics: ArlenorMagic[]= [];

  const magic01 = new ArlenorMagic(
    "Les cristaux énergétiques",
    `Les rares cristaux qui libèrent de l’énergie vitale en petite quantité, au lieu d’en nécessiter.
    Ils sont souvent utilisés à des fins technologiques, et peuvent parfois se recharger.`,
  );
  magic01.image =  require("./../../assets/images/magic/crystal.png");
  arlenorMagics.push(magic01);

  const magic02 = new ArlenorMagic(
    "Les cristaux instantanés",
    `Comme les cristaux énergétiques, ils n’ont pas besoin d’énergie vitale pour activer leur pouvoir.
    Seulement, leur nombre d’utilisations est limitée, souvent à une.`,
  );
  magic02.image =  require("./../../assets/images/magic/crystal.png");
  arlenorMagics.push(magic02);

  const magic03 = new ArlenorMagic(
    "Les cristaux évolutifs",
    `Ces cristaux donnent au porteur des pouvoirs qui évoluent au fur et à mesure du temps et de l’expérience,
    en fonction de la personnalité du porteur.
    Particularité : les tatouages évolutifs des Arléniens qui grandissent avec eux.`,
  );
  magic03.image =  require("./../../assets/images/magic/crystal.png");
  magic03.image01 =  require("./../../assets/images/magic/crystal_data01.png");
  magic03.image02 =  require("./../../assets/images/magic/crystal_data02.png");
  magic03.image03 =  require("./../../assets/images/magic/crystal_data03.png");
  arlenorMagics.push(magic03);

  const magic04 = new ArlenorMagic(
    "Les objets, armes et parchemins magiques",
    "Ils sont enchantés par des utilisateurs de cristaux. Certains enchantements sont limités dans le temps ou dans leur utilisation.",
  );
  magic04.image =  require("./../../assets/images/magic/crystal.png");
  arlenorMagics.push(magic04);

  const magic05 = new ArlenorMagic(
    "Les capacités magiques innées",
    "Non liées aux cristaux, ces capacités sont majoritairement présentes chez les créatures, et non sur les peuples.",
  );
  magic05.image =  require("./../../assets/images/magic/crystal.png");
  arlenorMagics.push(magic05);

  return arlenorMagics;
}
