import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import { ArlenorPower, PowerRanksEnum } from "@/models/ArlenorPower";
import { ArlenorSkill } from "@/models/ArlenorSkill";
import { ArlenorSpecialities } from "@/models/data/ListSpecialities";
import jsPDF from "jspdf";

const downloadPDF = async(character: ArlenorCharacter, allSkills: ArlenorSkill[], allPowers: ArlenorPower[]): Promise<void> => {
  const doc = new jsPDF("p", "px", "a4");
  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();

  const backgroundRecto = await require("../assets/files/Fiche_PersoVide_Recto.jpeg");
  doc.addImage(backgroundRecto, "JPEG", 0, 0, width, height);
  doc.setFontSize(10);

  // --- AVATAR ET IDENTITE
  if (character.avatar) doc.addImage(character.avatar, "JPEG", 9.5, 10.5, 95.5, 82.25);
  doc.text("" + character.name, 210, 60);
  doc.text("" + character.age, 228, 102, { align: "center" });
  doc.text("" + character.gender, 326, 102, { align: "center" });

  // --- CARACTERISTIQUES ET VALEURS DERIVES
  let x = 123;
  let y = 134;
  doc.text("" + character.caracts.for, x, y, { align: "center" });
  y += 21;
  doc.text("" + character.caracts.hab, x, y, { align: "center" });
  y += 21;
  doc.text("" + character.caracts.int, x, y, { align: "center" });
  y += 21;
  doc.text("" + character.caracts.ten, x, y, { align: "center" });
  y += 21;
  doc.text("" + character.caracts.cha, x, y, { align: "center" });
  y += 21;
  doc.text("" + character.caracts.mag, x, y, { align: "center" });

  y += 64;
  doc.text("" + character.healthMax, x, y, { align: "center" });
  y += 21;
  doc.text("" + character.initiative, x, y, { align: "center" });
  y += 21;
  doc.text("" + character.level.numLevel, x, y, { align: "center" });

  // --- RACE
  x = 326;
  y = 134 + 21 * 4;
  doc.text("" + character.race?.name, x, y, { align: "center" });

  // --- COMPETENCES RACIALES
  const x_txt_scale = 38;
  const y_txt_scale = 12.5;
  const y_line_scale = 31.925;

  x = 243.4;
  y += 19.45;
  const raceSkills = allSkills.filter(skill => skill.race && skill.race.code === character.codeRace);
  raceSkills.forEach(raceSkill => {
    if (raceSkill.image) doc.addImage(raceSkill.image, "JPEG", x, y, 20, 20);
    doc.text(raceSkill.name, x + x_txt_scale, y + y_txt_scale);
    y += y_line_scale;
  });

  // --- PROFIL
  x = 28;
  y = 515.5;
  doc.setFontSize(8);
  doc.text("" + character.description, x, y);
  y += 32;
  doc.text("" + character.traits, x, y);
  y += 32;
  doc.text("" + character.belives, x, y);
  y += 32;
  doc.text("" + character.importances, x, y);

  x = 236;
  y = 515.5;
  doc.text("" + checkText(character.story), x, y, {
    align: "justify",
    maxWidth: 180,
  });

  doc.addPage();
  const backgroundVerso = await require("../assets/files/Fiche_PersoVide_Verso.jpeg");
  doc.addImage(backgroundVerso, "JPEG", 0, 0, width, height);
  doc.setFontSize(10);

  // --- COMPETENCES
  const skills = allSkills.filter(skill => character.idsSkills.includes(skill.id));

  x = 34.6;
  y = 35.8;
  for(let i = 0; i < 5; i++) {
    if (skills.length > i) {
      const skill = skills[i];
      if (skill.image) doc.addImage(skill.image, "JPEG", x, y, 20, 20);
      doc.text(skill.name, x + x_txt_scale - 1, y + y_txt_scale);
    }
    y += y_line_scale;
  }

  x = 243.4;
  y = 35.8;
  for(let i = 0; i < 5; i++) {
    if (skills.length > (i+5)) {
      const skill = skills[i+5];
      if (skill.image) doc.addImage(skill.image, "JPEG", x, y, 20, 20);
      doc.text(skill.name, x + x_txt_scale, y + y_txt_scale);
    }
    y += y_line_scale;
  }

  // --- POUVOIRS
  let powersS: ArlenorPower[] = [];
  let powersA: ArlenorPower[] = []; 
  let powersB: ArlenorPower[] = []; 
  let powersC: ArlenorPower[] = []; 

  x = 425;
  y = 212;
  const specialities = ArlenorSpecialities.getListSpecialities();
  if (character.codeSpeciality01) {
    const spe = specialities.find(spe => spe.code === character.codeSpeciality01);
    if (spe) doc.text("Classe principale : " + spe.name, x, y, { align: "right" });
    const powers01 = allPowers.filter(power => character.idsPowers01.includes(power.id));
    powersS = powersS.concat(powers01.filter(power => power.code === PowerRanksEnum.Unique.Code));
    powersA = powersA.concat(powers01.filter(power => power.code === PowerRanksEnum.TresRare.Code));
    powersB = powersB.concat(powers01.filter(power => power.code === PowerRanksEnum.Rare.Code));
    powersC = powersC.concat(powers01.filter(power => power.code === PowerRanksEnum.Commun.Code));
  }
  if (character.codeSpeciality02) {
    const spe = specialities.find(spe => spe.code === character.codeSpeciality02);
    if (spe) doc.text("Classe secondaire : " + spe.name, x, y+12, { align: "right" });
    const powers02 = allPowers.filter(power => character.idsPowers02.includes(power.id));
    powersS = powersS.concat(powers02.filter(power => power.code === PowerRanksEnum.Unique.Code));
    powersA = powersA.concat(powers02.filter(power => power.code === PowerRanksEnum.TresRare.Code));
    powersB = powersB.concat(powers02.filter(power => power.code === PowerRanksEnum.Rare.Code));
    powersC = powersC.concat(powers02.filter(power => power.code === PowerRanksEnum.Commun.Code));
  }

  x = 34.6;
  y = 227;
  for(let i = 0; i < 12; i++) {
    let power = null;
    if (0 <= i && i <= 4 && (i+1) <= powersC.length) power = powersC[i];
    if (5 <= i && i <= 7 && (i+1-5) <= powersB.length) power = powersB[i-5];
    if (8 <= i && i <= 10 && (i+1-8) <= powersA.length) power = powersA[i-8];
    if (i === 11 && (i+1-11) <= powersS.length) power = powersS[i-11];
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
    y += y_line_scale;
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