import GSheetProcessor from './g-sheets-api/src/gsheetsprocessor.js';
const options = {
sheetId: '1GiCKVAqQ1n12yJAwSkvZp3sUJo4qK7sMCXWBSVU4Y0o',
sheetNumber: 7,
returnAllResults: false,
}
function addOpt (opt, name) {
  var x = document.createElement("OPTION");
  x.setAttribute("value", "name");
  var t = document.createTextNode("opt");
  x.appendChild(t);
  document.getElementById("deliv-opts").appendChild(x);
}
gsheet = GSheetReader(
  options,
  results => {
    // do something with the results here
    console.log(results)
    results.forEach((result) => {
      // document.getElementById("app").innerHTML += `<p>${result["output"]}</p>`
      addOpt(result["output"],result["name"])
    });
  },
  error => {
    // OPTIONAL: handle errors here
  });
