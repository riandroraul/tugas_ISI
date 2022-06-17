function tambahBintang(num, long){
    let arr = []
    for(let j = 0; j < num.length; j++){
        let text = '';
        for(let i = 0; i < long - num[j].toString().length ; i++){
            text += '*'
        }
        arr.push(text + num[j])
    }
    return arr;
}

// console.log(tambahBintang([345,523424,5,2342345,22345], 10))
// Math.max.apply(undefined, arr); // nilai max dari tiap2 elemen arr (number)
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

function longElement(arr){
    
    let nilaiMax
    for(let i = 0; i < arr.length; i++){
        if(i == 0){
            nilaiMax = arr[i]
        }else{
            if(arr[i] > nilaiMax){
                nilaiMax = arr[i]
            }
        }
    }
    return nilaiMax

}


// console.log(longEl([123,123,123,232332321,23233232,23232,232323,2323]))
function table(arr, max){
    let teks = ''
    let longEl = longElement(arr).toString().length
    let lengthArray = arr.length
    for(let i = 0; i < max; i++){
        teks += equal(longEl)
    }
    teks += '+'
    teks += '\n'
    teks += '|'
    for(let i = 0; i < max; i++){
        teks += equal(longEl)
    }
    for(let i = 0; i < lengthArray; i++){
    teks += tambahBintang(arr, longEl).join('|')
        if(lengthArray % max == 0){
            teks += '\n'
        }
    }
    console.log(teks)
}
table([345,5234,5,2342,2345,3451223342,1080,4234,3434,34,0,4,4,9090,999,4,334], 8)

function table2(arr, max){
    let teks = ''
    for(let i = 0; i < max; i++){
        teks += equal(max)
    }
    console.log
    let arr1 = tambahBintang(arr, max).slice(0, max)
    let arr2 = tambahBintang(arr, max).slice(max)

        console.log('|'+arr1.join('|').toString()+'|')
        console.log(teks)
      
        console.log('|'+arr2.join('|').toString()+'|')
    let teks2 = ''
    for(let i = 0; i < arr2.length; i++){
        teks2 += equal(max)
    }
    // console.log(teks2+'+')
    console.log(teks)
}

// table2([345,5234,5,2342,2345,1222,1080,4234,3434,34,0,4,4,9090], 4)

// function table(arr, max){
//     let teks = ''
//     let longEl = longElement(arr).toString().length
//     let lengthArray = arr.length
//     for(let i = 0; i < max; i++){
//         // for(let j = 0; j < longEl; j++){
//             teks += equal(longEl)
//         // }
//     }
//     // console.log(teks += '+')
//     // let arr1 = tambahBintang(arr, max).slice(0, max)
//     // let arr2 = tambahBintang(arr, max).slice(max)

//     //     console.log('|'+arr1.join('|').toString()+'|')
//     //     console.log(teks)
      
//     //     console.log('|'+arr2.join('|').toString()+'|')
//     let teks2 = ''
//     // for(let i = 0; i < arr2.length; i++){
//     //     teks2 += equal(max)
//     // }
//     // console.log(teks2+'+')
//     console.log(teks)
// }