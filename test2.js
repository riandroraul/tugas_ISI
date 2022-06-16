function tableDynamic(arraySatu, val) {
    const hasilMax = Math.max.apply(null, arraySatu); 
    const panjang = `${hasilMax}`.length
    const panjangArray = arraySatu.length; 
    const akhirTable = Math.floor(panjangArray / val); 
    let a = "+";
    let f = val; 
    for (let i = 0; i < val; i++) {
        for (let s = 0; s < panjang; s++) {
             a += "="; 
        } 
        a += "+";
    }

    a += "\n"
    arraySatu.forEach(function (x, y) {
        a += "|"
        for (let l = 0; l < panjang - `${x}`.length; l++) {
            a += "*";
        }
        a += `${x}`;
        if ((y + 1) % val == 0) {
            a += "|"
            a += "\n";
            for (let i = 0; i < f; i++) {
                a += "+";
                for (let j = 0; j < panjang; j++) {
                    a += "=";
                }
            }
            a += "+";
            a += "\n";
        }
    });
    a += "|"                                                          
    a += "\n"                                                         
    for (let i = 0; i < panjangArray % val; i++) {
        a += "+";
        for (let s = 0; s < panjang; s++) {
            a += "=";
        }
    }
    a += "+";
    return a;
}


console.log(tableDynamic([12, 79996, 7655, 777, 876, 8866, 97, 788
    , 89, 9, 888839, 8882, 88, 234, 234,4,23434,23423,3453234,234234,2342], 8));