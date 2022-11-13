var fs = require('fs');

fs.readFile('FluClinics.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('Locations to get Flu Vaccine:');