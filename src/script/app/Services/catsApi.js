import * as constants from '../Constants/constants.js';

export  class CatsApi {
    static fetchData() {
        return fetch(constants.API_URL)
            .then(data => data.json())
            .then(data => CatsApi.handleJSONresponse(data))
            //.then(data => data.text())            
            //.then(data => CatsApi.handleXMLresponse(data))
            .catch(error => {
                 console.log('error with fetch'); 
                 return Promise.reject();
                })
    }

    static handleJSONresponse(data) {        
        let imagesArr = [];

        for (const item of data.values ) {
            imagesArr.push({
                id: item.id,
                url: item.href,
            });
        }        
        return imagesArr;
    }

    static handleXMLresponse(data) {        
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data,"text/xml");
        const collection = xmlDoc.getElementsByTagName(constants.XML_SEARCH);
        let imagesArr = [];

        for (const item of collection ) {
            imagesArr.push({
                id: item.children[1].innerHTML,
                url: item.children[0].innerHTML,
            });
        }        
        return imagesArr;
    }
}
