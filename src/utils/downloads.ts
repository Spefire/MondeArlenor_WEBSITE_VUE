import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { ArlenorPower, PowerRanksEnum } from "@/models/ArlenorPower";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { ArlenorSpecialities } from "@/models/data/ListSpecialities";
import jsPDF from "jspdf";

const downloadPDF = async(isColored: boolean, character: ArlenorCharacter, allSkills: ArlenorSkill[], allPowers: ArlenorPower[]): Promise<void> => {
  const doc = new jsPDF("p", "px", "a4");
  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();
  let lineH = 10.55;

  const backgroundRecto = (isColored) ?
    await require("../assets/files/FichePerso_Recto_Colo.jpeg")
    : await require("../assets/files/FichePerso_Recto.jpeg");
  doc.addImage(backgroundRecto, "JPEG", 0, 0, width, height);
  doc.setFontSize(10);
  if (isColored) doc.setTextColor(255, 255, 255);

  // --- AVATAR ET IDENTITE
  if (character.avatar) doc.addImage(character.avatar, "JPEG", 9.5, 10.5, 97.1, 93.8);
  doc.text("" + character.name, 224, 60);
  if (character.age) doc.text("" + character.age, 236, 102, { align: "center" });
  doc.text("" + character.gender, 326, 102, { align: "center" });

  // --- CARACTERISTIQUES ET VALEURS DERIVES
  let x = 123;
  let y = 155;
  doc.text("" + character.caractFor, x, y, { align: "center" });
  y += lineH  *2;
  doc.text("" + character.caractHab, x, y, { align: "center" });
  y += lineH * 2;
  doc.text("" + character.caractInt, x, y, { align: "center" });
  y += lineH * 2;
  doc.text("" + character.caractTen, x, y, { align: "center" });
  y += lineH * 2;
  doc.text("" + character.caractCha, x, y, { align: "center" });
  y += lineH * 2;
  doc.text("" + character.caractMag, x, y, { align: "center" });

  y += 64;
  doc.text("" + character.healthMax, x, y, { align: "center" });
  y += lineH * 2;
  doc.text("" + character.initiative, x, y, { align: "center" });
  y += lineH * 2;
  doc.text("" + character.numLevel, x, y, { align: "center" });

  // --- RACE
  x = 326;
  y = 155 + lineH * 8;
  doc.text("" + character.race?.name, x, y, { align: "center" });

  // --- COMPETENCES RACIALES
  const x_txt_scale = 38;
  const y_txt_scale = 12.5;

  x = 243.4;
  y += 19;
  const raceSkills = allSkills.filter(skill => skill.race && skill.race.code === character.codeRace);
  raceSkills.forEach(raceSkill => {
    if (raceSkill.image) doc.addImage(raceSkill.image, "JPEG", x, y, 20, 20);
    doc.text(raceSkill.name, x + x_txt_scale, y + y_txt_scale);
    y += lineH * 3;
  });

  // --- PROFIL
  x = 28;
  y = 515.5;
  doc.setFontSize(8);
  doc.text("" + character.description, x, y);
  y += lineH * 3;
  doc.text("" + character.traits, x, y);
  y += lineH * 3;
  doc.text("" + character.belives, x, y);
  y += lineH * 3;
  doc.text("" + character.importances, x, y);

  x = 236;
  y = 515.5;
  doc.text("" + checkText(character.story), x, y, {
    align: "justify",
    maxWidth: 180,
  });

  doc.addPage();
  const backgroundVerso = (isColored) ?
    await require("../assets/files/FichePerso_Verso_Colo.jpeg")
    : await require("../assets/files/FichePerso_Verso.jpeg");
  doc.addImage(backgroundVerso, "JPEG", 0, 0, width, height);
  doc.setFontSize(10);
  lineH = 10.65;

  // --- COMPETENCES
  const skills = allSkills.filter(skill => character.idsSkills.includes(skill.id));

  x = 34.6;
  y = 35.9;
  for(let i = 0; i < 4; i++) {
    if (skills.length > i) {
      const skill = skills[i];
      if (skill.image) doc.addImage(skill.image, "JPEG", x, y, 20, 20);
      doc.text(skill.name, x + x_txt_scale - 1, y + y_txt_scale);
    }
    y += lineH * 3;
  }

  x = 243.6;
  y = 35.9;
  for(let i = 0; i < 4; i++) {
    if (skills.length > (i+4)) {
      const skill = skills[i+4];
      if (skill.image) doc.addImage(skill.image, "JPEG", x, y, 20, 20);
      doc.text(skill.name, x + x_txt_scale, y + y_txt_scale);
    }
    y += lineH * 3;
  }

  // --- POUVOIRS
  //let powersS: ArlenorPower[] = [];
  let powersA: ArlenorPower[] = []; 
  let powersB: ArlenorPower[] = []; 
  let powersC: ArlenorPower[] = []; 

  x = 425;
  y = 182;
  const specialities = ArlenorSpecialities.getListSpecialities();
  if (character.codeSpeciality01) {
    const spe = specialities.find(spe => spe.code === character.codeSpeciality01);
    if (spe) doc.text("Classe principale : " + spe.name, x, y, { align: "right" });
    const powers01 = allPowers.filter(power => character.idsPowers01.includes(power.id));
    //powersS = powersS.concat(powers01.filter(power => power.codeRank === PowerRanksEnum.Unique.Code));
    powersA = powersA.concat(powers01.filter(power => power.codeRank === PowerRanksEnum.TresRare.Code));
    powersB = powersB.concat(powers01.filter(power => power.codeRank === PowerRanksEnum.Rare.Code));
    powersC = powersC.concat(powers01.filter(power => power.codeRank === PowerRanksEnum.Commun.Code));
  }
  if (character.codeSpeciality02) {
    const spe = specialities.find(spe => spe.code === character.codeSpeciality02);
    if (spe) doc.text("Classe secondaire : " + spe.name, x, y+lineH, { align: "right" });
    const powers02 = allPowers.filter(power => character.idsPowers02.includes(power.id));
    //powersS = powersS.concat(powers02.filter(power => power.codeRank === PowerRanksEnum.Unique.Code));
    powersA = powersA.concat(powers02.filter(power => power.codeRank === PowerRanksEnum.TresRare.Code));
    powersB = powersB.concat(powers02.filter(power => power.codeRank === PowerRanksEnum.Rare.Code));
    powersC = powersC.concat(powers02.filter(power => power.codeRank === PowerRanksEnum.Commun.Code));
  }

  x = 34.6;
  y = 195;
  for(let i = 0; i < 13; i++) {
    let power = null;
    if (0 <= i && i <= 5 && (i+1) <= powersC.length) power = powersC[i];
    if (6 <= i && i <= 9 && (i+1-6) <= powersB.length) power = powersB[i-6];
    if (10 <= i && i <= 12 && (i+1-10) <= powersA.length) power = powersA[i-10];
    //if (i === 13 && (i+1-13) <= powersS.length) power = powersS[i-13];

    if (power) {
      if (power.image) doc.addImage(power.image, "JPEG", x, y+4.5, 20, 20);

      const title = checkLibelle(power.name + " (" + power.type.Libelle + ")", 40);
      const subtitle = checkLibelle(power.range.Libelle, 6, true)
        + " - " + checkLibelle(power.duration.Libelle, 6, true)
        + " - " + (power.chaneling ? "Avec" : "Sans") + " canalisation";
      const description = checkLibelle(power.description, 185);

      doc.text(title, x + x_txt_scale - 1, y + y_txt_scale);
      doc.setFontSize(8);
      doc.text(subtitle, x + x_txt_scale - 1, y + y_txt_scale + 10);
      doc.text(checkText(description), x + 202, y + y_txt_scale - 2, {
        align: "justify",
        maxWidth: 180,
      });
      doc.setFontSize(10);
    }
    y += lineH * 3;
  }

  doc.save("Arlenor_" + character.name + ".pdf");
};

const checkLibelle = (value: string, max: number, onlyPoint = false) => {
  if (value.length <= (max - (onlyPoint ? 1 : 3))) return value;
  else return value.slice(0, max - (onlyPoint ? 1 : 3)) + (onlyPoint ? "." : "...");
};

const checkText = (value: string) => {
  return value.replace("\n", " ");
};

export default {
  downloadPDF: downloadPDF,
};