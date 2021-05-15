import GSheetProcessor from './g-sheets-api/src/gsheetsprocessor.js';
const options = {
sheetId: '1GiCKVAqQ1n12yJAwSkvZp3sUJo4qK7sMCXWBSVU4Y0o',
sheetNumber: 8,
returnAllResults: false,
}
function addOpt (opt, name) {
  if (opt != "") {
    var x = document.createElement("OPTION");
    x.setAttribute("value", name);
    var t = document.createTextNode(opt);
    x.appendChild(t);
    document.getElementById("deliv-opts").appendChild(x);
  }
}
function doneOpts() {
  document.getElementById("deliv-opts").style.display = "block";
  document.getElementById("deliv-loading").style.display = "none";
}
var gsheet = GSheetProcessor(
  options,
  results => {
    // do something with the results here
    //console.log(results)
    results.forEach((result) => {
      // document.getElementById("app").innerHTML += `<p>${result["output"]}</p>`
      addOpt(result["output"],result["name"])
    });
    doneOpts()
  },
  error => {
    // OPTIONAL: handle errors here
  });
