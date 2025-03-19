import axios from "axios";

const apicoIntegrationId = import.meta.env.VITE_IntegrationID;
const spreadSheetId = import.meta.env.VITE_spredSheetId
const sheetName = import.meta.env.VITE_sheetName // replace with your sheet name
const sheetId = import.meta.env.VITE_sheetId // replace with your sheet/page gid (not sheet name)
// you can look at the URL of your spread sheet in the browser to find the gid


// console.log(
//   apicoIntegrationId,spreadSheetId
// )
const apiBaseUrl = `https://api.apico.dev/v1/${apicoIntegrationId}/${spreadSheetId}`;

/**
 * Function to append data to the spreadsheet
 * @param data string[]
 * @returns
 */
export const appendSpreadsheetData = async (
  data
) => {
  const options = {
    method: "POST",
    url: `${apiBaseUrl}/values/${sheetName}:append`,
    params: {
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      includeValuesInResponse: true,
    },
    data: {
      values: [data],
    },
  };

  const response = await axios(options);
  return response.data;
};

