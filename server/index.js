const express = require("express");

const { memberName, memberStatus } = require('./memberData')

const { google } = require("googleapis");

const app = express();

app.get("/", async (req, res) => {

  const auth = new google.auth.GoogleAuth({
    keyFile: './server/key.json',
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1S1do_Tvljm-j-Han1P5jN7KjKc1SSYf2Bohhh86dO2E";

  // Get metadata about spreadsheet
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  // Write row(s) to spreadsheet
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1!A:B",
    valueInputOption: "RAW",
    resource: {
      values: [[memberName, memberStatus]],
    },
  });

  res.send("Status został zaktualizowany!");

});

app.listen(4040, (req, res) => console.log("running on 4040"));