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
  public questions: CelestiaQuestion[];

  constructor() {
    this.questions = [
      new CelestiaQuestion(
        "Quel trait de caractère vous correspond le plus ?",
        [
          new CelestiaAnswer("Énergique (?)", "X"),
          new CelestiaAnswer("Réfléchi", "X"),
          new CelestiaAnswer("Altruiste", "X"),
          new CelestiaAnswer("Fiable", "X"),
        ]
      ),
      new CelestiaQuestion(
        "Quel est votre signe astrologique ?",
        [
          new CelestiaAnswer("Bélier, Lion, Sagittaire", "X"),
          new CelestiaAnswer("Taureau, Vierge, Capricorne", "X"),
          new CelestiaAnswer("Gémeaux, Balance, Verseau", "X"),
          new CelestiaAnswer("Cancer, Scorpion, Poisson", "X"),
        ]
      ),
      new CelestiaQuestion(
        "Qu'est-ce qui vous rend le plus fier ?",
        [
          new CelestiaAnswer("Votre capacité à intégrer et comprendre de nouvelles informations", "X"),
          new CelestiaAnswer("Votre capacité à vous faire facilement des amis", "X"),
          new CelestiaAnswer("Votre capacité à faire ce que vous voulez", "X"),
          new CelestiaAnswer("Votre capacité à garder des secrets", "X"),
        ]
      ),
    ];
    this.questions = this.questions.concat(this.questions);
    this.questions = this.questions.concat(this.questions);
    this.questions = this.questions.concat(this.questions);
    this.questions = this.questions.slice(0, 18);
  }
}