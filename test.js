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
    // teks += '+'
    return teks
}

//  console.log(equal(8))

function table(arr, max){
    let teks = ''
    for(let i = 0; i < max; i++){
        teks += equal(max)
    }
    console.log(teks += '+')
    let arr1 = tambahBintang(arr, max).slice(0, max)
    let arr2 = tambahBintang(arr, max).slice(max)

        console.log('|'+arr1.join('|').toString()+'|')
        console.log(teks)
      
        console.log('|'+arr2.join('|').toString()+'|')
    let teks2 = ''
    for(let i = 0; i < arr2.length; i++){
        teks2 += equal(max)
    }
    console.log(teks2+'+')
}
// table([345,5234,5,2342,2345,12232,1080,4234,3434,34,0,4,4,9090,999,4,334], 9)

function table2(arr, max){
    let teks = ''
    for(let i = 0; i < max; i++){
        teks += equal(max)
    }
    console.log(teks += '+')
    // let all = []
    // for(let i = 0; i < arr.length / max; i++){
    //     all.push(tambahBintang(arr, max).splice(i, max))
    // }
    // console.log(all)
    // console.log(arr.length)
    let arr1 = tambahBintang(arr, max).slice(0, max)
    let arr2 = tambahBintang(arr, max).slice(max)

        console.log('|'+arr1.join('|').toString()+'|')
        console.log(teks)
      
        console.log('|'+arr2.join('|').toString()+'|')
    let teks2 = ''
    for(let i = 0; i < max; i++){
        teks2 += equal(max)
    }
    console.log(teks2+'+')
}

table2([345,5234,5,2342,2345,1222,1080,4234,3434,34,0,4,4,9090], 4)
console.log(Array.isArray(tambahBintang([98,34,4,34,34, 7])))
