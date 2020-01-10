var ical2json = require('ical2json');
var fs = require('fs');

// Read in ical file
var input = fs.readFileSync('exampleEvents.ics', 'utf8');

// Convert ical to json
var output = ical2json.convert(input);

// Output file to json format
fs.writeFile('calendar.json', JSON.stringify(output), (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err;
})

