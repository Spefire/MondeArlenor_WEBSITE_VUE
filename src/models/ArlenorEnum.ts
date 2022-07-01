export interface ArlenorEnum {
    Code: string;
    Libelle: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export function getEnumByCode(code: string, typeEnum: any): ArlenorEnum {
  const listEnums: ArlenorEnum[] = Object.values(typeEnum);
  const result = listEnums.find(enumObj => enumObj.Code === code);
  if (!result) console.error("ERROR getEnumByCode : ", code);
  return result || listEnums[0];
}