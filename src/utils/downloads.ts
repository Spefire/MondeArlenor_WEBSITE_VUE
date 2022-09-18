import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import jsPDF from "jspdf";

const downloadPDF = async(character: ArlenorCharacter): Promise<void> => {
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
  const iconCapacity = await require("../assets/icons/capacities/capacity_60.png");

  x = 243.4;
  y += 19.45;
  for(let i = 0; i < 4; i++) {
    doc.addImage(iconCapacity, "JPEG", x, y, 20, 20);
    doc.text("Nom de la compétence raciale", x + x_txt_scale, y + y_txt_scale);
    y += y_line_scale;
  }

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
  doc.text("" + character.story, x, y, {
    align: "justify",
    maxWidth: 180,
  });

  doc.addPage();
  const backgroundVerso = await require("../assets/files/Fiche_PersoVide_Verso.jpeg");
  doc.addImage(backgroundVerso, "JPEG", 0, 0, width, height);
  doc.setFontSize(10);

  // --- COMPETENCES
  const iconSkill = await require("../assets/icons/skills/armes.png");

  x = 34.6;
  y = 35.8;
  for(let i = 0; i < 5; i++) {
    doc.addImage(iconSkill, "JPEG", x, y, 20, 20);
    doc.text("Nom de la compétence", x + x_txt_scale - 1, y + y_txt_scale);
    y += y_line_scale;
  }

  x = 243.4;
  y = 35.8;
  for(let i = 0; i < 5; i++) {
    doc.addImage(iconSkill, "JPEG", x, y, 20, 20);
    doc.text("Nom de la compétence", x + x_txt_scale, y + y_txt_scale);
    y += y_line_scale;
  }

  // --- POUVOIRS
  const iconPower = await require("../assets/icons/powers/pouvoir_mental.png");

  x = 34.6;
  y = 227;
  for(let i = 0; i < 12; i++) {
    doc.addImage(iconPower, "JPEG", x, y, 20, 20);
    doc.text("Nom du pouvoir", x + x_txt_scale - 1, y + y_txt_scale);
    doc.setFontSize(8);
    doc.text("Description du pouvoir...description du pouvoir...description du pouvoir...description du pouvoir..."
    +"description du pouvoir...description du pouvoir...description du pouvoir...description du pouvoir...", x + 202, y + y_txt_scale - 2, {
      align: "justify",
      maxWidth: 180,
    });
    doc.setFontSize(10);
    y += y_line_scale;
  }

  doc.save("Arlenor_" + character.name + ".pdf");
};

export default {
  downloadPDF: downloadPDF,
};