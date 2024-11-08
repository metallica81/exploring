const fs = require('fs');
const base_shat = require('./data_base.json');

const man = {name: "alex", age: 22, car: "vaz"};

const data = {
    "name": "Шационок Павел Васильевич",
    "tg_id": 8199284,
    "schedule": {
        "monday": [
            8,
            {
                "num_les": 2,
                "classroom": 3215
            },
            {
                "num_les": 3,
                "classroom": 3412
            }
        ]
    }
};

const combinedData = { man, data };

fs.writeFile('data_base.json', JSON.stringify(combinedData, null, 2), (err) => {
    if (err) {
        console.log('Error writing file:', err);
    } else {
        console.log('File successfully written');
    }
});

// console.log(JSON.stringify(data, null, 2));

//console.log((data.schedule.monday[3] == null));