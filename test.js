function test(...arr){
    return [...arr]
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

tambahBintang([5,523424,5,2342345,22345], 8)