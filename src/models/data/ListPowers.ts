import { ArlenorPower } from "../ArlenorPower";

export function getListPowers(grpCode = "", speCode = ""): ArlenorPower[] {
  const listPowers:ArlenorPower[] = [];
  const listGrp = grpCode ? listPowers.filter(power => power.group.code === grpCode && !power.speciality) : [];
  const listSpe = speCode ? listPowers.filter(power => power.speciality?.code === speCode) : [];
  const list = listGrp.concat(listSpe);
  list.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return list;
}
