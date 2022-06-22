function tambahBintang(num, max){
  let arr = []
  for(let j = 0; j < num.length; j++){
      let text = '';
      for(let i = 0; i < max - num[j].toString().length ; i++){
          text += '*'
      }
    arr.push(text + num[j])
  }
  return arr;
}

// function siap(arr, max){
//   return tambahBintang(arr, max)
// }

// console.log(siap([12, 79996, 7655, 777, 876, 8866, 97, 788, 89, 9, 888839, 8882, 88, 234, 234,4,23434,23423,3453234,234234,2342], 8))

function equal(lengthEl, max){
  let teks = '+'
  for(let i = 0; i < max; i++){
    for(let j = 0; j < lengthEl; j++){
      teks += '='
    }
    teks += '+' 
  }
  return teks
}


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
  return nilaiMax // number
}

// +=====+=====+=====+=====+=====+=====+=====+
// |**343|*9898|****8|**343|*9898|****8|*8998|
// +=====+=====+=====+=====+=====+=====+=====+

function table(arr, max){
  let teks = ''
  let lengthMax = longElement(arr).toString().length
  let array = tambahBintang(arr, lengthMax)
  
  teks += equal(lengthMax, max);
  teks+= '\n|'
  
  for(let i = 0; i < array.length; i++){
    teks += array[i] + '|'
    if((i + 1) % max == 0){
      teks += '\n'
      teks += equal(lengthMax, max);
      teks += '\n|'
    }
  }
  let sisa = arr.length % max
  sisa > 0 ? teks += '\n' + equal(lengthMax, sisa) : teks = teks.slice(0, -2)
  console.log(teks)
}



table([12, 79996, 7655, 777, 989, 876, 8866, 97, 788, 89, 9, 888839, 8882, 88, 234, 234,4,23434,23423, 3458932348787,345893234878734, 987984547897987997989, 234234,2342] ,7)

// console.log(tambahBintang([23,232,322332332,2323222343,3434,3434,343,4334,3434,3434,343],5))

//  console.log(equal(9))



// table([345,5234,5,2342,2345,3451278798723342,1080,4234,3434,34,0], 5)
// function table2(arr, max){
//   let array = ''
//   for(let i = 0; i < max; i++){
//       teks += equal(max)
//   }
//   console.log
//   let arr1 = tambahBintang(arr, max).slice(0, max)
//   let arr2 = tambahBintang(arr, max).slice(max)

//       console.log('|'+arr1.join('|').toString()+'|')
//       console.log(teks)
    
//       console.log('|'+arr2.join('|').toString()+'|')
//   let teks2 = ''
//   for(let i = 0; i < arr2.length; i++){
//       teks2 += equal(max)
//   }
//   // console.log(teks2+'+')
//   console.log(teks)
// }

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