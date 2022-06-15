function tambahBintang(num, long){
    let arr = []
    for(let j = 0; j < num.length; j++){
        let text = '';
        for(let i = 0; i < long - num[j].toString().length ; i++){
            text += '*'
        }
        arr.push(text + num[j].toString())
    }
    return arr;
}

// console.log(tambahBintang([345,523424,5,2342345,22345], 10))

function equal(max){
    let teks = ''
    teks += '+'
    for(let i = 0; i < max; i++){
        teks += '='
    }
    teks += '+'
    return teks
}

//  console.log(equal(8))

function table(arr, max){
    for(let i = 0; i < max - arr.length; i++){
        console.log(equal(max))
    }
    console.log(tambahBintang(arr, max))
}

table([345,523424,5,2342345,22345], 8)