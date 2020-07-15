export function dataByBureau(bureauData, bureauName, field) {
  for (let i = 0; i < bureauData.creditData.length; i++) {
    if (bureauData.creditData[i].name === bureauName)
      return bureauData.creditData[i][field].toString();
  }
  return null;
}

export const allFields = creditDataModel => {
  return Object.keys(creditDataModel);
};
