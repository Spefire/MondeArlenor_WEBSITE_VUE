const QUIZZ_INTENSITY = 3;

export class CelestiaResult {
  public libelle: string;
  public axe: string;
  public symboles: string;
  public description: string;
  public image: string;

  get code(): string {
    let code = this.libelle;
    code = code.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    code = code.replace(/\s/g, "");
    return code.toUpperCase();
  }

  constructor(libelle: string, axe: string, symboles: string, description: string) {
    this.libelle = libelle;
    this.axe = axe;
    this.symboles = symboles;
    this.description = description;
    this.image = "";
  }
}

export class CelestiaResults {
  public Lumiere: CelestiaResult;
  public Feu: CelestiaResult;
  public Air: CelestiaResult;
  public Eau: CelestiaResult;
  public Terre: CelestiaResult;
  public Foudre: CelestiaResult;
  public Glace: CelestiaResult;
  public Lave: CelestiaResult;
  public Vie: CelestiaResult;

  constructor() {
    this.Lumiere = new CelestiaResult("Mage de Lumière",
      "Equilibre", "Stabilité, Protection, Clarté",
      `Les Lumières sont l'élite des mages : ils ont une capacité de protection et de désintégration hors norme.
      Cependant ils restent maîtres d'eux et guident les autres mages vers une bataille réussie.`);
    this.Lumiere.image = require("./../assets/images/symboles/s_lumiere.png");
    this.Feu = new CelestiaResult("Mage de Feu",
      "Action", "Courage, Dynamisme, Dépassement de soi",
      `Les Feus sont au front, disséminés un peu partout pour relâcher leur pouvoir sans brûler leurs partenaires.
      Armés d'un artefact, ils fusionnent avec leur familier animal pour tenter d'abattre le Wendigo.`);
    this.Feu.image = require("./../assets/images/symboles/s_feu.png");
    this.Air = new CelestiaResult("Mage de l'Air",
      "Emotion", "Sensibilité, Rêverie, Progrès",
      `Les Airs sont principalement en retrait, analysant chaque point faible avant d'agir : un coup pour un mort.
       Leur arme de prédilection est l'arc, mais cela n'empêche pas certains de danser avec des lames.`);
    this.Air.image = require("./../assets/images/symboles/s_air.png");
    this.Eau = new CelestiaResult("Mage de l'Eau",
      "Communication", "Coopération, Goût du jeu, Altruisme",
      `Les Eaux sont principalement des mages de soutien en arrière file. La plupart préparent des potions en avance :
      soit offensives pour modifier l'Eau qu'ils contrôlent, soit défensives pour aller les alliés et effectuer des soins.`);
    this.Eau.image = require("./../assets/images/symboles/s_eau.png");
    this.Terre = new CelestiaResult("Mage de Terre",
      "Raison", "Confiance, Vertu, Sens du devoir",
      `Les Terres sont des soldats ordonnés utilisant leur environnement pour le tourner à leur avantage.
      Tactiques et synchro quand ils sont en groupe, les Terres sont de redoutables combattants pour les sbires du Wendigo.`);
    this.Terre.image = require("./../assets/images/symboles/s_terre.png");
    this.Foudre = new CelestiaResult("Mage de la Foudre",
      "Action-Emotion", "Dynamisme, Dépassement de soi, Progrès",
      `Les Foudres sont des assassins principalement : ils utilisent aussi de la technomagie
      (mélange de technologie et de magie) pour amplifier leurs pouvoirs ou se servir de gadgets.`);
    this.Foudre.image = require("./../assets/images/symboles/s_foudre.png");
    this.Glace = new CelestiaResult("Mage de la Glace",
      "Communication-Emotion", "Coopération, Altruisme, Sensibilité",
      `Les Glaces sont des stratèges protecteurs. Ils créent leur propre environnement favorable au combat
      et n'hésitent pas à créer aussi leurs propres armes. Leur seule limite : l'imagination.`);
    this.Glace.image = require("./../assets/images/symboles/s_glace.png");
    this.Lave = new CelestiaResult("Mage de Lave",
      "Action-Raison", "Courage, Dépassement de soi, Sens du devoir",
      `Les Laves cherchent à atteindre le maximum de leur capacités pour être des personnes sur qui compter ensuite.
      Au combat, ils ont une polyvalence entre le travail d'équipe et le travail solo, du moment que la gloire leur revient !.`);
    this.Lave.image = require("./../assets/images/symboles/s_lave.png");
    this.Vie = new CelestiaResult("Mage de Vie",
      "Communication-Raison", "Coopération, Altruisme, Confiance",
      `Les Vies jouent avec l'énergie qui circule dans les corps. Ils renforcent principalement leurs alliés à distance,
      mais les plus forts vont sur le terrain au corps à corps. Ils sont de nature généreux et fiables.`);
    this.Vie.image = require("./../assets/images/symboles/s_vie.png");
  }
}

export function getListResults(): CelestiaResult[] {
  const celestiaResults = new CelestiaResults();
  return Object.values(celestiaResults);
}

class CelestiaAnswer {
  public libelle: string;
  public value: string;

  constructor(libelle: string, value: string) {
    this.libelle = libelle;
    this.value = value;
  }
}

class CelestiaQuestion {
  public libelle: string;
  public answers: CelestiaAnswer[];
  public selection: string;

  constructor(libelle: string, answers: CelestiaAnswer[]) {
    this.libelle = libelle;
    this.answers = answers;
    this.selection = "";
  }
}

export class CelestiaQuizz {
  public hour = "00:00";
  public date = "01/01/1990";
  public questions: CelestiaQuestion[];
  public version = "0.2";
  
  public get fire(): number {
    let value = 0;
    this.questions.forEach(question => {
      if (question.selection === "FF") value += 2;
      else if (question.selection.indexOf("F") > -1) value++;
    });
    return value;
  }
  
  public get wind(): number {
    let value = 0;
    this.questions.forEach(question => {
      if (question.selection === "AA") value += 2;
      else if (question.selection.indexOf("A") > -1) value++;
    });
    return value;
  }
  
  public get water(): number {
    let value = 0;
    this.questions.forEach(question => {
      if (question.selection === "EE") value += 2;
      else if (question.selection.indexOf("E") > -1) value++;
    });
    return value;
  }
  
  public get earth(): number {
    let value = 0;
    this.questions.forEach(question => {
      if (question.selection === "TT") value += 2;
      else if (question.selection.indexOf("T") > -1) value++;
    });
    return value;
  }

  public get result(): CelestiaResult {
    const isFire = (this.fire - this.water) > QUIZZ_INTENSITY;
    const isWater = (this.fire - this.water) < -QUIZZ_INTENSITY;
    const isWind = (this.wind - this.earth) > QUIZZ_INTENSITY;
    const isEarth = (this.wind - this.earth) < -QUIZZ_INTENSITY;
    const results = new CelestiaResults();
    if (isFire && isWater && isWind && isEarth) return results.Lumiere;
    if (isFire && isWind) return results.Foudre;
    if (isFire && isEarth) return results.Lave;
    if (isWater && isWind) return results.Glace;
    if (isWater && isEarth) return results.Vie;
    if (isFire) return results.Feu;
    if (isWind) return results.Air;
    if (isWater) return results.Eau;
    if (isEarth) return results.Terre;
    return results.Lumiere;
  }

  constructor() {
    this.questions = [
      new CelestiaQuestion(
        "Quel est votre signe astrologique ?",
        [
          new CelestiaAnswer("Bélier, Lion, Sagittaire", "F"),
          new CelestiaAnswer("Taureau, Vierge, Capricorne", "T"),
          new CelestiaAnswer("Gémeaux, Balance, Verseau", "A"),
          new CelestiaAnswer("Cancer, Scorpion, Poisson", "E"),
        ]
      ),
      new CelestiaQuestion(
        "Quel trait de caractère vous correspond le plus ?",
        [
          new CelestiaAnswer("Enthousiaste", "F"),
          new CelestiaAnswer("Réfléchi", "A"),
          new CelestiaAnswer("Altruiste", "E"),
          new CelestiaAnswer("Fiable", "T"),
        ]
      ),
      new CelestiaQuestion(
        "Qu'est-ce qui vous rend le plus fier ?",
        [
          new CelestiaAnswer("Votre capacité à intégrer et comprendre de nouvelles informations", "A"),
          new CelestiaAnswer("Votre capacité à vous faire facilement des amis", "E"),
          new CelestiaAnswer("Votre capacité à faire ce que vous voulez", "F"),
          new CelestiaAnswer("Votre capacité à garder des secrets", "T"),
        ]
      ),
      new CelestiaQuestion(
        "Comment vivez-vous une défaite ?",
        [
          new CelestiaAnswer("Je regrette, mais cela me servira de leçon", "E"),
          new CelestiaAnswer("Aucun souci, je vais vite oublier", "A"),
          new CelestiaAnswer("Je le vis assez mal, il va me falloir du temps", "T"),
          new CelestiaAnswer("Je veux une revanche, je ne peux pas rester dessus", "F"),
        ]
      ),
      new CelestiaQuestion(
        "De quoi détesteriez-vous qu'on vous traite ?",
        [
          new CelestiaAnswer("D'être insipide", "F"),
          new CelestiaAnswer("D'être égoiste", "E"),
          new CelestiaAnswer("D'être bête, idiot", "A"),
          new CelestiaAnswer("D'être hypocrite", "T"),
        ]
      ),
      new CelestiaQuestion(
        "Qu'est-ce que vous avez le plus de mal à supporter ?",
        [
          new CelestiaAnswer("Le mensonge", "T"),
          new CelestiaAnswer("L'envahissement", "A"),
          new CelestiaAnswer("La solitude", "E"),
          new CelestiaAnswer("L'ennui", "F"),
        ]
      ),
      new CelestiaQuestion(
        "Le travail en solo ou en groupe ?",
        [
          new CelestiaAnswer("En solo", "FA"),
          new CelestiaAnswer("En groupe", "ET"),
        ]
      ),
      new CelestiaQuestion(
        "La lune ou les étoiles ?",
        [
          new CelestiaAnswer("La lune", "A"),
          new CelestiaAnswer("Les étoiles", "F"),
        ]
      ),
      new CelestiaQuestion(
        "La forêt ou la rivière ?",
        [
          new CelestiaAnswer("La forêt", "T"),
          new CelestiaAnswer("La rivière", "E"),
        ]
      ),
      new CelestiaQuestion(
        "Quel élément vous attire le plus ?",
        [
          new CelestiaAnswer("Terre", "TT"),
          new CelestiaAnswer("Feu", "FF"),
          new CelestiaAnswer("Eau", "EE"),
          new CelestiaAnswer("Air", "AA"),
          new CelestiaAnswer("Foudre", "FA"),
          new CelestiaAnswer("Vie", "ET"),
          new CelestiaAnswer("Glace", "AE"),
          new CelestiaAnswer("Lave", "FT"),
          new CelestiaAnswer("Lumière", "FEAT"),
        ]
      ),
      new CelestiaQuestion(
        "Sous quel nom préféreriez-vous entrer dans l'histoire ?",
        [
          new CelestiaAnswer("Le ou la Juste", "T"),
          new CelestiaAnswer("Le Doux ou la Douce", "E"),
          new CelestiaAnswer("Le Grand ou la Grande", "A"),
          new CelestiaAnswer("Le Vaillant ou la Vaillante", "F"),
        ]
      ),
      new CelestiaQuestion(
        "Dans quel mode de combat vous sentiriez vous à l'aise ?",
        [
          new CelestiaAnswer("Combat au corps à corps", "FT"),
          new CelestiaAnswer("Combat à distance", "AE"),
        ]
      ),
      new CelestiaQuestion(
        "Quelle serait votre endroit du Cercle des Mages préféré ?",
        [
          new CelestiaAnswer("La bibliothèque", "A"),
          new CelestiaAnswer("Les jardins et les serres", "T"),
          new CelestiaAnswer("La salle tactique et le terrain d’entraînement", "F"),
          new CelestiaAnswer("Les salles communes et le réfectoire", "E"),
        ]
      ),
      new CelestiaQuestion(
        "Dans votre formation de mage, quel cours vous intéresserait en premier ?",
        [
          new CelestiaAnswer("Botanique et étude des terrains", "TT"),
          new CelestiaAnswer("Combat terrestre et rapproché", "FF"),
          new CelestiaAnswer("Soins et potions", "EE"),
          new CelestiaAnswer("Combat aérien et à distance", "AA"),
          new CelestiaAnswer("Technologie et magie", "FA"),
          new CelestiaAnswer("Familiers et métamorphose", "ET"),
          new CelestiaAnswer("Magie constructive", "AE"),
          new CelestiaAnswer("Armes et artefacts", "FT"),
        ]
      ),
      new CelestiaQuestion(
        "Quel cours secondaire voudriez-vous avoir ?",
        [
          new CelestiaAnswer("Botanique et étude des terrains", "TT"),
          new CelestiaAnswer("Combat terrestre et rapproché", "FF"),
          new CelestiaAnswer("Soins et potions", "EE"),
          new CelestiaAnswer("Combat aérien et à distance", "AA"),
          new CelestiaAnswer("Technologie et magie", "FA"),
          new CelestiaAnswer("Familiers et métamorphose", "ET"),
          new CelestiaAnswer("Magie constructive", "AE"),
          new CelestiaAnswer("Armes et artefacts", "FT"),
        ]
      ),
      new CelestiaQuestion(
        "Un Wendigo approche à l'horizon, menaçant la capitale. Vous sonnez l'alerte puis, que faites-vous ?",
        [
          new CelestiaAnswer("Vous cherchez votre équipement pour foncer au combat et l'arrêter au plus vite", "F"),
          new CelestiaAnswer("Vous rejoignez votre équipe pour avoir les consignes de votre capitaine", "T"),
          new CelestiaAnswer("Vous réfléchissez en premier à un moyen d'évacuer la ville en toute urgence", "E"),
          new CelestiaAnswer("Vous prenez le temps d'organiser une stratégie en fonction de sa trajectoire et son temps d'arrivée", "A"),
        ]
      ),
      new CelestiaQuestion(
        "Au combat, quelle serait votre doctrine ?",
        [
          new CelestiaAnswer("Tenter le tout pour le tout", "F"),
          new CelestiaAnswer("Il faut qu'on reste ensemble", "E"),
          new CelestiaAnswer("La survie revient au plus préparé", "A"),
          new CelestiaAnswer("Les actions ont plus d'effet que les mots", "T"),
        ]
      ),
      new CelestiaQuestion(
        "Quel serait votre familier ?",
        [
          new CelestiaAnswer("Un animal ailé", "A"),
          new CelestiaAnswer("Un mammifère terrestre", "F"),
          new CelestiaAnswer("Un animal aquatique", "E"),
          new CelestiaAnswer("Un reptile", "T"),
        ]
      ),
    ];
  }

  public initByJSON(value_quizz: string): void {
    const quizzDB = JSON.parse(value_quizz);
    this.date = quizzDB.date;
    this.hour = quizzDB.hour;
    this.version = quizzDB.version;
    this.questions = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    quizzDB.questions.forEach((questionDB: any) => {
      const answers: CelestiaAnswer[] = [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      questionDB.answers.forEach((answerDB: any) => {
        answers.push(new CelestiaAnswer(answerDB.libelle, answerDB.value));
      });
      const question = new CelestiaQuestion(questionDB.libelle, answers);
      question.selection = questionDB.selection;
      this.questions.push(question);
    });
  }

  public initTime(): void {
    function pad(s: number) { return (s < 10) ? "0" + s : s; }
    const date = new Date();
    const hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
    const minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    this.hour = hours + ":" + minutes;
    this.date = [pad(date.getDate()), pad(date.getMonth()+1), date.getFullYear()].join("/");
  }
}