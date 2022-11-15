const chalk = require ('chalk');

var fs = require('fs');

fs.readFile('FluClinics.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
console.log(chalk.bgGreen("Locations to get Flu Vaccine:"));