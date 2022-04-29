export class ArlenorDivinity {
  public num: number;
  public name: string;
  public title: string;
  public symbols: string;
  public isInversed: boolean;
  public image: string;
  public imageSelected: string;
  public comment: string;
  public commentName: string;
  public power: string;
  public powerName: string;

  public get libNum():string {
    return "" + convertToRoman(this.num+1); 
  }

  constructor(name: string, title: string, symbols: string,
    comment: string, commentName: string, powerName: string, power: string) {
    this.num = 0;
    this.name = name;
    this.title = title;
    this.symbols = symbols;
    this.image = "";
    this.imageSelected = "";
    this.isInversed = false;
    this.comment = comment;
    this.commentName = commentName;
    this.power = power;
    this.powerName = powerName;
  }
}

function convertToRoman(num: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const roman: any = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let str = "";
  for (const i of Object.keys(roman)) {
    const q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    str += i.repeat(q);
  }

  return str;
}