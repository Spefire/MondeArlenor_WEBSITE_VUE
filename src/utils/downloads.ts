import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import jsPDF from "jspdf";

const downloadPDF = async(character: ArlenorCharacter): Promise<void> => {
  const doc = new jsPDF("p", "px", "a4");
  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();

  const background = await require("../assets/files/Fiche_PersoVide.jpeg");
  console.warn("dataUrl", background);
  doc.addImage(background, "JPEG", 0, 0, width, height);
  doc.setFontSize(10);

  // --- AVATAR ET DESCRIPTION
  if (character.avatar) doc.addImage(character.avatar, "JPEG", 9.5, 10.5, 95.5, 82.25);
  doc.setFontSize(8);
  doc.text("" + character.description, 176, 54, {
    align: "justify",
    maxWidth: 190,
  });
  doc.setFontSize(10);

  // --- IDENTITE
  doc.text("" + character.name, 112, 132.9);

  doc.save("Arlenor_" + character.name + ".pdf");
};

export default {
  downloadPDF: downloadPDF,
};