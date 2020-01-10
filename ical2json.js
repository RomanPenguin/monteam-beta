var ical2json = require('ical2json');
var fs = require('fs');

function converter(ics_filename) {
    // Read in ical file
    var input = fs.readFileSync(ics_filename, 'utf8');

    // Convert ical to json
    var output = ical2json.convert(input);

    // Output file to json format
    fs.writeFile('calendar.json', JSON.stringify(output), (err) => { 
        
        // In case of a error throw err. 
        if (err) throw err;
    return;
    }) 
}

converter('exampleEvents.ics');




