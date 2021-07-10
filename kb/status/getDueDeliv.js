import GSheetProcessor from './g-sheets-api/src/gsheetsprocessor.js';
const options = {
sheetId: '1GiCKVAqQ1n12yJAwSkvZp3sUJo4qK7sMCXWBSVU4Y0o',
sheetNumber: 1574311268,
returnAllResults: false,
}
function addOpt (opt, name) {
  if (opt != "") {
    var x = document.createElement("OPTION");
    x.setAttribute("value", name);
    var t = document.createTextNode(opt);
    x.appendChild(t);
    document.getElementById("deliv-opts").appendChild(x);
    return 1
  }
  else {
    return 0
  }
}
function doneOpts(optcount) {
  if (optcount === 0) {
    document.getElementById("deliv-none").style.display = "inline";
  }
  else {
    document.getElementById("deliv-opts").style.display = "inline";
  }
  document.getElementById("deliv-loading").style.display = "none";
}
var gsheet = GSheetProcessor(
  options,
  results => {
    // do something with the results here
    console.log(results)
    var optcount = 0
    results.forEach((result) => {
      // document.getElementById("app").innerHTML += `<p>${result["output"]}</p>`
      var success = addOpt(result["output"],result["bookingid"])
      optcount += success
    });
    doneOpts(optcount)
  },
  error => {
    // OPTIONAL: handle errors here
    console.log(error)
    document.getElementById("deliv-loading").innerHTML = "❌ Deliveries couldn't be retreived; if you need to deliver a keyboard reload the page, or scan the QR code then enter the booking ID"
  });
