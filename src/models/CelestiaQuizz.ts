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
          new CelestiaAnswer("Énergique", "F"),
          new CelestiaAnswer("Réfléchi", "A"),
          new CelestiaAnswer("Altruiste", "E"),
          new CelestiaAnswer("Fiable", "T"),
        ]
      ),
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
        "Qu'est-ce qui vous rend le plus fier ?",
        [
          new CelestiaAnswer("Votre capacité à intégrer et comprendre de nouvelles informations", "A"),
          new CelestiaAnswer("Votre capacité à vous faire facilement des amis", "E"),
          new CelestiaAnswer("Votre capacité à faire ce que vous voulez", "F"),
          new CelestiaAnswer("Votre capacité à garder des secrets", "T"),
        ]
      ),
    ];
    this.questions = this.questions.concat(this.questions);
    this.questions = this.questions.concat(this.questions);
    this.questions = this.questions.concat(this.questions);
    this.questions = this.questions.slice(0, 18);
  }
}