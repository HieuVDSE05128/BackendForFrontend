const fs = require('fs')
const saveAssestMockData = (asset) => {
    let rawdata = fs.readFileSync(__dirname + '/../mockdata/assMockData.json');
    let assets = JSON.parse(rawdata);
    assets.push(asset)
    fs.writeFileSync(__dirname + '/../mockdata/assMockData.json', JSON.stringify(assets));
}

module.exports = {
    saveAssestMockData,
}