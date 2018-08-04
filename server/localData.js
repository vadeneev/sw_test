const path = require('path');
const PUBLIC_PATH_CATS = path.resolve(__dirname, '../cats');

let lastItem = 0;
let data = []; //{id:'', href:''}

let cashedJSON = '';

const fs = require('fs');

fs.readdir(PUBLIC_PATH_CATS, (err, files) => {
  files.forEach((file, index) => {
    if (file.indexOf('svg') !== -1) { return; }
    data.push({id: index, href: `/cats/${file}`});
  });
})

const getRandomData = (count) => {    
    if (!cashedJSON) {
        cashedJSON = getNewData();
    }
    return cashedJSON;
}

const getNewData = () => {
    let resultArr = [];    

    for(let i = 0; i < 10; i++) {        
        resultArr.push(data[lastItem]);
        lastItem++;
        if(lastItem >= data.length) {
            lastItem = 0;
        }
    }
    setTimeout(() => {
        const date = new Date(Date.now());
        console.log('cash flushed' + date.toLocaleString());
        cashedJSON = '';
    }, 500);
    const date = new Date(Date.now());        

    console.log('Get new data' + date.toLocaleString());

    return JSON.stringify({
        'values': resultArr
    });
}

module.exports = {getRandomData};