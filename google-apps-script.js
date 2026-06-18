// Google Apps Script — paste this in https://script.google.com
// Sheet columns: Date | Time | Name | Email | Subject | Message

const SHEET_NAME = 'Contacts';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
      || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Date', 'Time', 'Name', 'Email', 'Subject', 'Message']);
    }

    sheet.appendRow([
      data.date,
      data.time,
      data.name,
      data.email,
      data.subject || '(no subject)',
      data.message,
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Required for CORS preflight
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
