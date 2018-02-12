// DEPENDENCIES 
const dotenv = require('dotenv')
dotenv.config({ silent: true }); 

// FILE WRITING UTILITY
const { writeFilePretty } = require('./utils');

// WATSON NLU IMPORT
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

// [STEP 1]
// WATSON NLU CONFIG
// Follow the instructions to add the username and password to instantiate NLU SDK.
const nlu = new NaturalLanguageUnderstandingV1({
  // username: '',
  // password:  '',
  version_date: NaturalLanguageUnderstandingV1.VERSION_DATE_2017_02_27
});

// [STEP 2]
// Follow the instructions and documentation to analyze some text; 
function analyze (text) {
	return;
}

// [STEP 3]
// Define the text variable that you would like to analyze;
const text = ``;

// [STEP 4]
// Uncomment the following line to call the analyze function that we wrote
// analyze(text);

// [STEP 5]
// Lets look at the response and write a function to extract the top 3 entities
function analyzeAndExtractEntities(text) {
	return; 
}

// [STEP 6]
// Uncomment the following line to call the analyzeAndExtract function that we wrote
// analyzeAndExtractEntities(text);