<script>

// Sheet Data

let gsheetUid_FromRealm   = 10; // These must also be defined same in a Data_Sheets.gs
let gsheetUid_Indivs      = 20;
let gsheetUid_Families    = 30;
let gsheetUid_ForLeaders  = 40;
let gsheetUid_ForFriends  = 50;
let gsheetUid_Exceptions  = 99;

// globals for the data for each sheet

let gdataFromRealm  = new Array();
let gdataIndivs     = new Array();  // one row per Individual
let gdataFamilies   = new Array();  // one row per Family
//let gdataForLeaders = new Array();
//let gdataForFriends = new Array();
let gdataExceptions  = new Array();  

// Output files

let gFileUid_VERIFICATION    = 101;
let gFileUid_LEADERS_TABLE   = 121;
let gFileUid_COMMUNITY_TABLE = 131;
let gFileUid_COMMUNITY_PDF   = 141;

let gtimeNow = ""; 


function doMain( dataFromRealm ) { 

	// Work with individuals and combine them into families ;

  gtimeNow = getTimeNow(); // used to timestamp sheets

 
  //createFile_js( gFileUid_LEADERS_TABLE, gtimeNow ); // test

  gdataFromRealm = dataFromRealm;
  console.log ("Main: gdataFromRealm: " + gdataFromRealm.length );

  debugger;
    console.log ("Main: gdataExceptions: sheetUid: " +  gsheetUid_Exceptions );
  gdataExceptions = getAllDataFromSheet_js( gsheetUid_Exceptions );
  console.log ("Main: gdataExceptions: " +  gdataExceptions.length );

  // Use FromRealm to build Individuals 

	gdataIndivs = buildIndividualsList( dataFromRealm );
  console.log ("Main: gdataIndivs: " + gdataIndivs.length );

  replaceSheet_js ( gsheetUid_Indivs, gdataIndivs);

  // Use Individuals  to build Families 

  gdataFamilies = buildFamiliesList( gdataIndivs, gdataExceptions );
  console.log ("Main: gdataFamilies: " + gdataFamilies.length );

  replaceSheet_js (gsheetUid_Families, gdataFamilies );

  // Use Families  to write LeadersTable

	var leadersTable = makeLeadersTable( gdataFamilies ); 
  createFile_js ( gFileUid_LEADERS_TABLE, leadersTable );

  console.log (">>>> Done <<<<"); 
}

/*
	
	// Step 3 - Write the files ;
	writeFileForVerification();  // need to do this before we remove some info ;

	
	// Clear out some fields depending on the Directory Exceptions ;
  consolidateExceptionsPart();
	excludeAdultsWithNoSeparateEntry(); 
	clearExcludedChildNames(); 
	clearExcludedAddresses(); 
	clearExcludedEmails(); 
	clearExcludedPhones(); 
	rebuildFamilyNames(false, "FamilyNamePlain"); // Do this again - Might need to exclude some adults now ;
	rebuildFamilyNames(true, "FamilyNameBold"); 
	setIsIncluded(); 
	
	// Write the table for the Community Directory  (table and PDF) ;
	writeFileForCommunityTable (); 
	writeFileForCommunityPDF(); 
  */
	
 

</script>
