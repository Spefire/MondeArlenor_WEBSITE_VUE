import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import jsPDF from "jspdf";

const downloadPDF = async(character: ArlenorCharacter): Promise<void> => {
  const doc = new jsPDF("p", "px", "a4");
  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();

  const background = await require("../assets/files/Fiche_PersoVide.jpeg");
  doc.addImage(background, "JPEG", 0, 0, width, height);
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

  doc.save("Arlenor_" + character.name + ".pdf");
};

export default {
  downloadPDF: downloadPDF,
};