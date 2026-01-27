# Google Sheets & Apps Script Setup

To receive the new fields (Tagline, Services, Pricing, Values/Mission) in your Google Sheet, you need to update your Google Apps Script.

## 1. Prepare your Google Sheet
Ensure your sheet has the following headers in the first row (order matters if you use the script below):
1. Timestamp
2. Full Name
3. Business Name
4. Email
5. Phone
6. Specifications
7. Tagline
8. Services & Pricing
9. Values & Mission
10. Referrer
11. Logo File URL

## 2. Update your Apps Script
1. Go to your Google Sheet.
2. Click **Extensions** > **Apps Script**.
3. Replace the existing code with the following:

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1'); // Make sure your sheet name is 'Sheet1'
    var data = JSON.parse(e.postData.contents);

    var logoUrl = "";
    
    // Handle Logo Upload if present
    if (data.logo && data.logoName) {
      // Create a specific folder for uploads if you want, or just root
      // var folder = DriveApp.getFolderById('YOUR_FOLDER_ID'); 
      // For now, saves to root of Drive
      
      var decoded = Utilities.base64Decode(data.logo.split(',')[1]);
      var blob = Utilities.newBlob(decoded, data.logoType, data.logoName);
      var file = DriveApp.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      logoUrl = file.getUrl();
    }

    // Add Row
    sheet.appendRow([
      new Date(),
      data.fullName,
      data.businessName,
      data.email,
      data.phone,
      data.specifications,
      data.tagline,
      data.servicesPricing,
      data.valuesMission,
      data.referrer,
      logoUrl
    ]);

    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": e.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

## 3. Deploy
1. Click **Deploy** > **New deployment**.
2. Select type: **Web app**.
3. Description: `Upgrade with new fields`.
4. Run as: **Me**.
5. Who has access: **Anyone**. (Important!)
6. Click **Deploy**.
7. **Copy the new Web App URL**.

## 4. Update Frontend
If the URL changed (it usually does not if you update the existing deployment correctly, but if you created a *new* one it might), update it in `src/lib/googleSheetAPI.ts`.

*Note: If you choose "Manage deployments" -> "Edit" -> "New version" for the existing deployment, the URL stays the same.*
