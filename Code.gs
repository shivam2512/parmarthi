function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('WebAppSecure');
}

function AddRecord(firstname, lastname, address, city, state, zip) {
  var url = 'https://docs.google.com/spreadsheets/d/1yzQOgC7nizw8LCzMNlFuugL9KnsYSZ-5gxhpG5bRs3A/edit#gid=672305364';
  //Paste URL of GOOGLE SHEET
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("Data1");
  webAppSheet.appendRow([firstname, lastname, address, city, state, zip, new Date()]);
  
}

function checkLogin(username, password) {
  var url = 'https://docs.google.com/spreadsheets/d/1yzQOgC7nizw8LCzMNlFuugL9KnsYSZ-5gxhpG5bRs3A/edit#gid=1836510733';
  //Paste URL of GOOGLE SHEET
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("username");
  var getLastRow =  webAppSheet.getLastRow();
  var found_record = '';
  for(var i = 1; i <= getLastRow; i++)
  {
   if(webAppSheet.getRange(i, 1).getValue().toUpperCase() == username.toUpperCase() && 
     webAppSheet.getRange(i, 2).getValue().toUpperCase() == password.toUpperCase())
   {
     found_record = 'TRUE';
   }    
  }
  if(found_record == '')
  {
    found_record = 'FALSE'; 
  }
  
  return found_record;
  
}
