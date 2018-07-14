let lastItem = 0;

let cashedJSON = '';

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

let data = [
    { "id": "4iv", "href": "http://24.media.tumblr.com/tumblr_lnmnd3diW61qm17cvo1_400.gif" },
    { "id": "58n", "href": "http://24.media.tumblr.com/tumblr_kop8qvSEco1qzv5pwo1_400.jpg" },
    { "id": "MTU1Nzc3MQ", "href": "http://25.media.tumblr.com/tumblr_m6emebBWXk1qzex9io1_1280.jpg" },
    { "id": "b8", "href": "http://24.media.tumblr.com/ZabOTt2mpdpa57w1QCTgRcPS_400.png" },
    { "id": "cpq", "href": "http://24.media.tumblr.com/tumblr_m15ryczsyC1qczjbio1_1280.png" },
    { "id": "aok", "href": "http://24.media.tumblr.com/tumblr_m0at3yD12v1qzrjrto1_1280.gif" },
    { "id": "8v", "href": "http://24.media.tumblr.com/tumblr_lla6x7rRjR1qjmniro1_400.gif" },
    { "id": "da2", "href": "http://25.media.tumblr.com/tumblr_m4oda4Sjje1qdlh1io1_400.gif" },    
    { "id": "5rb", "href": "http://24.media.tumblr.com/tumblr_ln63rbUFXd1qbt33io1_1280.jpg" }, 
    { "id": "ar9", "href": "http://25.media.tumblr.com/tumblr_m1qyuuOTRo1qc4q9io1_500.jpg" }, 
    { "id": "k7", "href": "http://24.media.tumblr.com/tumblr_llidn4XQHJ1qjpedeo1_1280.jpg" }, { "id": "1av", "href": "http://24.media.tumblr.com/tumblr_lnqvvkO4IV1qe5kp6o1_400.gif" }, { "id": "b24", "href": "http://24.media.tumblr.com/tumblr_m172crywfe1qz5dg8o1_500.jpg" }, { "id": "avf", "href": "http://25.media.tumblr.com/tumblr_lwvst17r8K1qg00v6o1_1280.jpg" }, { "id": "dbn", "href": "http://25.media.tumblr.com/tumblr_m4f85huQLT1qdlh1io1_400.gif" }, { "id": "8u", "href": "http://24.media.tumblr.com/tumblr_ll8ow3FsZp1qaxtl5o1_500.gif" }, { "id": "5kt", "href": "http://24.media.tumblr.com/tumblr_lnghqkZn8Z1qlsr5ko1_400.gif" },
    { "id": "8mm", "href": "http://25.media.tumblr.com/tumblr_m1icv0taWx1qenqklo1_1280.jpg" }, { "id": "at7", "href": "http://25.media.tumblr.com/tumblr_m2fbwxgT4P1qzljvuo1_1280.jpg" }, { "id": "59g", "href": "http://24.media.tumblr.com/qgIb8tERiqzbuqlvSdQ9xS52o1_500.jpg" }, { "id": "ei7", "href": "http://24.media.tumblr.com/tumblr_m4ghpd6VJi1qewacoo1_500.jpg" }, { "id": "18c", "href": "http://24.media.tumblr.com/tumblr_m3ai5hrrOp1rtbmh0o1_400.gif" }, { "id": "7fr", "href": "http://24.media.tumblr.com/tumblr_lnzxfmPWZx1qdvbl3o1_1280.jpg" }, { "id": "d5b", "href": "http://24.media.tumblr.com/tumblr_ln477egSge1qgts2ro1_1280.jpg" }, { "id": "514", "href": "http://25.media.tumblr.com/tumblr_lt4erqPZU61qzu0hbo1_1280.png" }, { "id": "53j", "href": "http://25.media.tumblr.com/tumblr_lpetx6Bl2q1qmvo0go1_500.jpg" }, { "id": "73d", "href": "http://25.media.tumblr.com/Jjkybd3nScvuclrpjIpekbXa_500.jpg" },
    { "id": "7f7", "href": "http://24.media.tumblr.com/tumblr_lotd7mfEka1qdvbl3o1_1280.jpg" }, { "id": "e1a", "href": "http://25.media.tumblr.com/tumblr_m2knt03AOX1qd477zo1_500.jpg" }, { "id": "4dr", "href": "http://24.media.tumblr.com/tumblr_lj8x2xZDJw1qzr2kio1_500.gif" }, { "id": "6q2", "href": "http://25.media.tumblr.com/tumblr_lwem4d8GSR1qzv52ko1_1280.jpg" }, { "id": "2uf", "href": "http://25.media.tumblr.com/tumblr_m2uyk01XLV1qhwmnpo1_1280.jpg" }, { "id": "777", "href": "http://25.media.tumblr.com/Jjkybd3nS9i7c8afn0yd3ePX_500.jpg" }, { "id": "2ao", "href": "http://24.media.tumblr.com/Jjkybd3nSn753vxeM3SgwSBPo1_500.jpg" }, { "id": "82n", "href": "http://24.media.tumblr.com/MCvqyKj3hqovhu5atqKPjx7Go1_250.gif" }, { "id": "41f", "href": "http://25.media.tumblr.com/tumblr_m3xno8oOiy1rtbmh0o1_500.gif" }, { "id": "c8f", "href": "http://24.media.tumblr.com/tumblr_lzvw78rvG91qgjltdo1_1280.jpg" },
    { "id": "cjk", "href": "http://25.media.tumblr.com/tumblr_lomg091JGC1qz84weo1_500.jpg" }, { "id": "2f2", "href": "http://29.media.tumblr.com/PlN8I7d5Ady8cfn3XwyVUGi3o1_500.jpg" }, { "id": "9kp", "href": "http://25.media.tumblr.com/tumblr_loew2ahX8f1qh66wqo1_400.jpg" }, { "id": "4pa", "href": "http://25.media.tumblr.com/tumblr_m2esexCP3c1qd477zo1_1280.jpg" }, { "id": "22h", "href": "http://25.media.tumblr.com/tumblr_lzfsv2aODp1qec8ido1_500.jpg" }, { "id": "MTg5OTUwMw", "href": "http://25.media.tumblr.com/tumblr_m80z78o6hd1qze0hyo1_500.jpg" }, { "id": "7eo", "href": "http://25.media.tumblr.com/tumblr_lpqz2o5OIr1qdvbl3o1_1280.jpg" }, { "id": "13k", "href": "http://24.media.tumblr.com/tumblr_lognpmebcE1qjmniro1_400.gif" }, { "id": "8vp", "href": "http://25.media.tumblr.com/tumblr_lzd8tsvJLS1qfvuj8o1_1280.jpg" }, { "id": "5eb", "href": "http://24.media.tumblr.com/tumblr_ltnrtxthxq1r4xjo2o1_500.gif" },
    { "id": "5jo", "href": "http://25.media.tumblr.com/tumblr_lparluSFjh1qij6yko1_500.jpg" }, { "id": "3fh", "href": "http://25.media.tumblr.com/tumblr_lx6p8o02qx1qd4q01o1_500.jpg" }, { "id": "MTY2MTU0OQ", "href": "http://24.media.tumblr.com/tumblr_mc8o2tvGUL1rexgvto1_500.gif" }, { "id": "8b2", "href": "http://24.media.tumblr.com/gbPxtaI5qooji1khEdVQ34Zno1_400.jpg" }, { "id": "48t", "href": "http://25.media.tumblr.com/tumblr_m1btkhgFy71rqp2pno1_400.gif" }, { "id": "b6n", "href": "http://25.media.tumblr.com/tumblr_luvlm96cyi1qgnva2o1_500.jpg" }, { "id": "7bc", "href": "http://25.media.tumblr.com/tumblr_lyzlckGgtq1r6b7kmo1_500.jpg" }, { "id": "MTUwMjYzMg", "href": "http://24.media.tumblr.com/tumblr_m5jg83HltJ1r189uao1_1280.jpg" }, { "id": "2pp", "href": "http://25.media.tumblr.com/tumblr_kstpz9IxDK1qzefipo1_250.gif" },
    { "id": "cls", "href": "http://25.media.tumblr.com/tumblr_ln7zpppKLG1qdzm19o1_1280.jpg" }, { "id": "63", "href": "http://24.media.tumblr.com/tumblr_ltqmkyFCf01r4xjo2o1_500.gif" }, { "id": "5ks", "href": "http://24.media.tumblr.com/tumblr_lofqjhOAwV1qij6yko1_400.jpg" }, { "id": "a9p", "href": "http://25.media.tumblr.com/tumblr_m1zlwe7tae1qze0hyo1_1280.jpg" }, { "id": "b57", "href": "http://25.media.tumblr.com/tumblr_ltdqe7UarB1qds2rfo1_1280.jpg" }, { "id": "7qr", "href": "http://25.media.tumblr.com/tumblr_m2tfylDnIU1r73wdao1_500.jpg" }, { "id": "p6", "href": "http://29.media.tumblr.com/tumblr_m31qqerX7p1qzex9io1_1280.jpg" }, { "id": "b2s", "href": "http://25.media.tumblr.com/tumblr_lzewl96Fkd1qz56v2o1_1280.jpg" }, { "id": "96c", "href": "http://24.media.tumblr.com/tumblr_lqf5fkNxwf1qahhxwo1_500.jpg" }, { "id": "7uf", "href": "http://25.media.tumblr.com/tumblr_lhb6wxUXBX1qcn249o1_400.gif" },
    { "id": "db1", "href": "http://25.media.tumblr.com/tumblr_m4jcbe81H31qmgxdto1_1280.jpg" }, { "id": "3in", "href": "http://24.media.tumblr.com/tumblr_m35x76sxJ61rqzg94o1_500.jpg" }, { "id": "1gn", "href": "http://26.media.tumblr.com/tumblr_lyizf3bGAh1qzhl7yo1_1280.jpg" }, { "id": "MjAwOTU5OQ", "href": "http://25.media.tumblr.com/tumblr_m5qodbnVZB1qak7ymo1_1280.jpg" }, { "id": "5td", "href": "http://25.media.tumblr.com/tumblr_ltsphdITe71qehxqmo1_400.gif" }, { "id": "anu", "href": "http://25.media.tumblr.com/tumblr_m3o8zgdZTz1qj35ofo1_250.gif" }, { "id": "814", "href": "http://24.media.tumblr.com/tumblr_ldao02IvKk1qcn249o1_400.gif" }, { "id": "b0n", "href": "http://25.media.tumblr.com/tumblr_m16pdjKgdA1qddbvio1_400.jpg" }, { "id": "3fj", "href": "http://25.media.tumblr.com/tumblr_m01a6nNrF11qhwlspo1_1280.jpg" }, { "id": "436", "href": "http://25.media.tumblr.com/tumblr_m396l8jYG21r7769mo1_500.png" },
];

module.exports = {getRandomData};