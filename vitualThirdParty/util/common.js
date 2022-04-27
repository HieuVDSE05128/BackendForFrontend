const fs = require('fs')
const MOCK_PATH = '../mockdata/';;
const saveMockData = (fileName) => {
    fs.readFile(MOCK_PATH + fileName + 'MockData.json', (err, data) => {
        if (err) throw err;
        let student = JSON.parse(data);
        console.log(student);
    });
}

module.exports = {
    saveMockData
}