function test(value, max){
    return [...value];

}

function star(star){
    // [...star] === 5 ?
    return [...star].length
}

function looping(arr){
    return [...arr].length;
    // return arr.forEach( el => {
        el.length;
        // el.length === 5 ? el += '*' : el.length === 4 ? el += '**' : el.length === 3 ? el += '***' : el.length === 2 ? el += '**' : el.length === 1 ? el += '*' : el;
        // return console.log(el)
    // });
}

function cek(arr){
    max = 0
    let text = '';
    for (let index = 0; index < arr.length; index++) {
       //console.log(arr[index].toString().length)
        if(arr[index].toString().length > max){
            max = arr[index].toString().length
        }
       
    }
    // return text
    return max
}

function star(arr, long){
    let text = []
    let text2 = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i].toString().length < long){
            text.push('*'+arr[i]);
            if(arr[i].toString().length === 3){
                text.push('**'+arr[i]);
            }if(arr[i].toString().length === 2){
                text.push('***'+arr[i]);
            }
        }
    }
    console.log(text)
}


function tambahBintang(num, long){
    for(let j = 0; j < num.length; j++){
        let text = '';
        for(let i = 0; i < long - num[j].toString().length ; i++){
        
            text += '*'
        }
        let arr = []
        arr.push(text + num[j].toString())
        console.log(arr)
        // console.log(text + num[j].toString());
    }
    
}

function cetakBilangan(num){
    for(let i = 1; i <= num; i++){
        console.log(i)
    }
}

function equal (long){
    let text = '';
    for(let i = 0; i < long; i++){
        text += '=';
    }
    return text;
}

function ganjilGenap(num, ganjil){
    for(let i = 1; i <= num; i++){
        if(ganjil == 'ganjil'){
            if(i % 2 == 1)    {
                console.log(i)
            }
        }else if (ganjil == 'genap'){
            if(i % 2 == 0){
                console.log(i)
            }
        }
    }
}

function bintangMenurun(max){
    let teks = '';
    for(let x = 0; x < max; x++){
        teks += '*'
    }
    for(let j = 0; j < max; j++){
        console.log(teks)
        teks = teks.slice(0, -1)
    }
}

// bintangMenurun(4)

function bintangRataKanan(max){
    let teks = '';
    let teks2 = '';
    for(let x = 0; x < max; x++){
        teks += ' '
    }
    for(let j = 0; j < max; j++){
        teks2 += '*';
        // console.log(teks)
        console.log(teks + teks2)
        teks = teks.slice(0, -1)
    }
}

// bintangRataKanan(4)

function fibo(max){
    let teks = ''
    let prev = 1
    let next = 2
    let hasil
    for(let i = 1; i < max; i++){
        if (i == 1){
            teks += i
            console.log(teks)
        }
        teks += i
        console.log(teks)        
    }
}

function fibo2(max){
    let n1 = 1, n2 = 2, next;
    let teks = ''
    for(let i = 1; i < max; i++){
            if(i == 1){
                teks += i
                console.log(teks)
            }
        teks += n1
        console.log(teks)
        next = n1 + n2;
        n1 = n2
        n2 = next
    }
    console.log(n2)
}
fibo2(6)
// fibo2(6)
//console.log(cek([4,3,44444444,55555555,234444444444444, 89897778]))
// console.log(cek([1,12,123,1234,12345,123456,1234567]))
// console.log(star([1,12,123,1234,12345,123456,1234567], 5))
// tambahBintang([1, 12,123], 7)
//console.log(equal(6))

// console.log(star(78887, 6));
// const arr = [3,3,3,3,3]
// console.log(star([3,4,5,6,7]))

// console.log(looping([3,4,5,6,6,23]))

// cetakBilangan(10)

// ganjilGenap(10, 'genap')