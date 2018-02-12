const fs = require('fs'); 

const writeFilePretty = (fileData, fileName) => {
	const fileName = fileName || 'sampleResponse.json' 
	fs.writeFile(fileName, JSON.stringify(fileData, null, 2), (err, response) => {
		if (err) { 
			console.log('ERROR WRITING: ', fileName); 
			console.log(err);
			return; 
		}
		console.log('SUCCESS WRITING: ', fileName); 
	});
}

module.exports = {
	writeFilePretty, 
}