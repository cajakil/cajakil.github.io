import GSheetProcessor from 'g-sheets-api/src/gsheetsprocessor.js';
const options = {
sheetId: '1GiCKVAqQ1n12yJAwSkvZp3sUJo4qK7sMCXWBSVU4Y0o',
sheetNumber: 7,
returnAllResults: false,
}
gsheet = GSheetReader(
  options,
  results => {
    // do something with the results here
    alert(results)
  },
  error => {
    // OPTIONAL: handle errors here
  });
