<script>

window.addEventListener("load", functionInit, true, true); 

function functionInit() {  
   // console.log("starting functionInit");
   preventFormSubmit();
}    
  
// Prevent forms from submitting
function preventFormSubmit() {
  var forms = document.querySelectorAll("form");
  for (var i = 0; i < forms.length; i++) { 
    forms[i].addEventListener("submit", function(event) {event.preventDefault();} );
  }
}

function handleGoButton() { 

    console.log ("handleGoButton");
  // get all data from the FromRealm sheet and pass it to start1
  google.script.run
      .withSuccessHandler(start1)
      .getAllDataFromSheet_gs( gsheetUid_FromRealm );
}


function start1( dataFromRealm ) {
  console.log ("inside start1");
  if (dataFromRealm) {

    document.getElementById("message").innerHTML = "Rows found in Realm sheet: " + dataFromRealm.length;

    doMain ( dataFromRealm ); //*****************/

  } else {
      document.getElementById("message").innerHTML = "No data found (or 'FromRealm' spreadsheet not found)";
  }
}


function getAllDataFromSheet_js ( sheetUid ) {

  //sheetUid = gsheetUid_Indivs;

  console.log ("getAllDataFromSheet_js: " + sheetUid);

  debugger;

  //google.script.run
      //  .withSuccessHandler(doNothingS)
       // .
        
        //var x =  getAllDataFromSheet_gs( sheetUid );  


       fileSSid =  "1p5BZGzP9Prz3NZiEY0cqP3c1UfgZ2iqMsV_YYAGoUGs";
       range = "Individuals!A:X";

       var result = SpreadsheetApp.Sheets.Spreadsheets.Values.get( fileSSId, range );

  debugger;

  return x;
}


function replaceSheet_js ( sheetUid, dataBlock ) {
  google.script.run
    .withSuccessHandler(doNothingS)
    .withFailureHandler(doNothingF)
    .replaceSheet_gs ( sheetUid, dataBlock );
}


function doNothingS(abc) {
  console.log ("Inside doNothingS: abc: " + abc);
}

function doNothingF(abc) {
  console.log ("Inside doNothingF: abc: " + abc);
}


function createFile_js( fileUid, content) {

  google.script.run.withFailureHandler(doNothingF).createFile_gs( fileUid, content );

}

</script>
