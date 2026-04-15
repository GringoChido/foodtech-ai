/**
 * Google Apps Script — FoodTech AI Waitlist Webhook
 *
 * SETUP:
 * 1. Create a new Google Sheet with these headers in row 1:
 *    Timestamp | Name | Email | Company | Locations
 *
 * 2. Open Extensions > Apps Script
 *
 * 3. Replace the default code with this entire file
 *
 * 4. Click Deploy > New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *
 * 5. Copy the deployed URL and set it as WAITLIST_WEBHOOK_URL
 *    in your Netlify environment variables.
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date().toISOString(),
    data.name,
    data.email,
    data.company,
    data.locations,
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ status: "ok" })
  ).setMimeType(ContentService.MimeType.JSON);
}
